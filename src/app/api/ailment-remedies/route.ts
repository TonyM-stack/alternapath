
import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth.server";
import {
  createAilmentAdmin,
  createRemedyAdmin,
  linkAilmentRemedyAdmin,} from "@/lib/data";

export async function POST(req: Request) {
  await requireAdmin();
  const body = await req.json();

  const {
    ailmentMode,
    existingAilmentId,
    newAilment,
    remedyMode,
    existingRemedyId,
    newRemedy,
    symptomDescription,
  } = body;

  const cleanSymptomDescription = (symptomDescription ?? "").trim();

  let ailmentId: number;
  let remedyId: number;

  // AILMENT
  if (ailmentMode === "existing") {
    if (!existingAilmentId)
      return NextResponse.json(
        { error: "Select an ailment" },
        { status: 400 }
      );
    ailmentId = existingAilmentId;
  } else {
    const ailment = await createAilmentAdmin({
      title: newAilment.title,
      slug: newAilment.slug,
    });
    ailmentId = ailment.ailment_id;
  }

  // REMEDY
  if (remedyMode === "existing") {
    if (!existingRemedyId)
      return NextResponse.json(
        { error: "Select a remedy" },
        { status: 400 }
      );
    remedyId = existingRemedyId;
  } else {
    const remedy = await createRemedyAdmin({
      name: newRemedy.name,
      description: newRemedy.description,
    });
    remedyId = remedy.remedy_id;
  }

  // LINK
  const link = await linkAilmentRemedyAdmin({ ailmentId, remedyId, symptomDescription: cleanSymptomDescription,});

  return NextResponse.json({ ok: true, link, ailmentId, remedyId });
}
