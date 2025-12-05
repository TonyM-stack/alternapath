"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.default.config({ path: ".env.local" });
var fs_1 = require("fs");
var path_1 = require("path");
var pg_1 = require("pg");
// ---------- helpers ----------
var pool = new pg_1.Pool({ connectionString: process.env.DATABASE_URL,
    host: "127.0.0.1",
    port: 5432,
});
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var c, r;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, pool.connect()];
            case 1:
                c = _a.sent();
                _a.label = 2;
            case 2:
                _a.trys.push([2, , 4, 5]);
                return [4 /*yield*/, c.query("select current_database() as db,\n              current_user as usr,\n              current_setting('port') as port,\n              current_setting('data_directory') as data_dir")];
            case 3:
                r = _a.sent();
                console.log("DB CONNECT:", r.rows[0]);
                return [3 /*break*/, 5];
            case 4:
                c.release();
                return [7 /*endfinally*/];
            case 5: return [2 /*return*/];
        }
    });
}); })();
var file = path_1.default.join(process.cwd(), "data/scraped.ailments.json");
console.log("Loading:", file);
// normalize whitespace & strip trailing “View Remedy”
function clean(s) {
    if (!s)
        return null;
    return s.replace(/\s*View Remedy\s*$/i, "").replace(/\s+/g, " ").trim();
}
// lightweight aliasing for common short names (extend as you see patterns)
var NAME_ALIASES = {
    "carbo veg": "Carbo vegetabilis",
    "ferrum metallicum": "Ferrum metallicum",
    "calcarea fluorica (calc fluor)": "Calcarea fluorica",
};
// crude potency patterns: 6X, 30C, 200C, 1M, LM1, etc.
var POTENCY_RE = /\b(\d+\s?(?:C|X|M)|LM\d+)\b/i;
function normalizeRemedyName(name) {
    var n = name.trim();
    var lowered = n.toLowerCase();
    var aliased = NAME_ALIASES[lowered] || n;
    // Capitalize first letter of each word lightly
    return aliased.replace(/\b([a-z])/g, function (m) { return m.toUpperCase(); });
}
function parseRemedy(raw) {
    var _a;
    var text = clean(raw) || "";
    // try to split out potency + dosage
    var m = text.match(POTENCY_RE);
    if (!m) {
        return { name: normalizeRemedyName(text), potency: null, dosage: null };
    }
    var idx = (_a = m.index) !== null && _a !== void 0 ? _a : text.indexOf(m[0]);
    var name = text.slice(0, idx).trim();
    // drop trailing parenthetical aliases in name: "Calcarea Fluorica (Calc Fluor)"
    name = name.replace(/\s*\([^)]*\)\s*$/, "");
    name = normalizeRemedyName(name);
    var rest = text.slice(idx).trim();
    var _b = rest.split(/\s+/), potencyToken = _b[0], dosageParts = _b.slice(1);
    var potency = potencyToken || null;
    var dosage = dosageParts.join(" ").trim() || null;
    return { name: name, potency: potency, dosage: dosage };
}
// ---------- DB upserts (with small caches to reduce queries) ----------
var IdCache = /** @class */ (function () {
    function IdCache() {
        this.ailmentBySlug = new Map();
        this.remedyByName = new Map();
    }
    IdCache.prototype.getAilmentId = function (client, slug, title, link) {
        return __awaiter(this, void 0, void 0, function () {
            var rows, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.ailmentBySlug.has(slug))
                            return [2 /*return*/, this.ailmentBySlug.get(slug)];
                        return [4 /*yield*/, client.query("INSERT INTO ailments (ailment_slug, ailment_title, link)\n       VALUES ($1,$2,$3)\n       ON CONFLICT (ailment_slug) DO UPDATE\n         SET ailment_title = EXCLUDED.ailment_title,\n             link = COALESCE(EXCLUDED.link, ailments.link)\n       RETURNING ailment_id", [slug, title, link !== null && link !== void 0 ? link : null])];
                    case 1:
                        rows = (_a.sent()).rows;
                        id = rows[0].ailment_id;
                        this.ailmentBySlug.set(slug, id);
                        return [2 /*return*/, id];
                }
            });
        });
    };
    IdCache.prototype.getRemedyId = function (client, name, potency, dosage) {
        return __awaiter(this, void 0, void 0, function () {
            var key, rows, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = name;
                        if (this.remedyByName.has(key))
                            return [2 /*return*/, this.remedyByName.get(key)];
                        return [4 /*yield*/, client.query("INSERT INTO remedies (remedy_name, potency, dosage_instructions)\n       VALUES ($1,$2,$3)\n       ON CONFLICT (remedy_name) DO UPDATE\n         SET potency = COALESCE(EXCLUDED.potency, remedies.potency),\n             dosage_instructions = COALESCE(EXCLUDED.dosage_instructions, remedies.dosage_instructions)\n       RETURNING remedy_id", [name, potency, dosage])];
                    case 1:
                        rows = (_a.sent()).rows;
                        id = rows[0].remedy_id;
                        this.remedyByName.set(key, id);
                        return [2 /*return*/, id];
                }
            });
        });
    };
    return IdCache;
}());
function upsertAilmentRemedy(client, ailmentId, remedyId, symptom, sortOrder) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.query("INSERT INTO ailment_remedies (ailment_id, remedy_id, symptom_description, sort_order)\n     VALUES ($1,$2,$3,$4)\n     ON CONFLICT (ailment_id, remedy_id, symptom_description) DO UPDATE\n       SET sort_order = LEAST(ailment_remedies.sort_order, EXCLUDED.sort_order)", [ailmentId, remedyId, symptom, sortOrder])];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---------- main ----------
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var file, input, client, cache, _i, input_1, a, slug, title, link, ailmentId, order, _a, _b, r, symptom, parsed, name_1, remedyId, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    file = path_1.default.join(process.cwd(), "data/scraped.ailments.json");
                    input = JSON.parse((0, fs_1.readFileSync)(file, "utf8"));
                    return [4 /*yield*/, pool.connect()];
                case 1:
                    client = _c.sent();
                    cache = new IdCache();
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 13, 15, 17]);
                    // For very large datasets, you can chunk transactions to avoid huge locks.
                    return [4 /*yield*/, client.query("BEGIN")];
                case 3:
                    // For very large datasets, you can chunk transactions to avoid huge locks.
                    _c.sent();
                    _i = 0, input_1 = input;
                    _c.label = 4;
                case 4:
                    if (!(_i < input_1.length)) return [3 /*break*/, 11];
                    a = input_1[_i];
                    slug = (a.ailment_slug || "").trim();
                    title = clean(a.ailment_title) || slug || "Untitled Ailment";
                    link = clean(a.link);
                    if (!slug)
                        return [3 /*break*/, 10]; // require a slug for idempotency
                    return [4 /*yield*/, cache.getAilmentId(client, slug, title, link)];
                case 5:
                    ailmentId = _c.sent();
                    order = 1;
                    _a = 0, _b = a.remedies || [];
                    _c.label = 6;
                case 6:
                    if (!(_a < _b.length)) return [3 /*break*/, 10];
                    r = _b[_a];
                    // Skip header row like {symptom:"Symptoms", remedy:"Remedy"}
                    if (/^\s*Symptoms?\s*$/i.test(r.symptom) && /^\s*Remedy\s*$/i.test(r.remedy))
                        return [3 /*break*/, 9];
                    symptom = clean(r.symptom);
                    parsed = parseRemedy(r.remedy || "");
                    name_1 = clean(parsed.name || "");
                    if (!symptom || !name_1)
                        return [3 /*break*/, 9];
                    return [4 /*yield*/, cache.getRemedyId(client, name_1, parsed.potency, parsed.dosage)];
                case 7:
                    remedyId = _c.sent();
                    return [4 /*yield*/, upsertAilmentRemedy(client, ailmentId, remedyId, symptom, order++)];
                case 8:
                    _c.sent();
                    _c.label = 9;
                case 9:
                    _a++;
                    return [3 /*break*/, 6];
                case 10:
                    _i++;
                    return [3 /*break*/, 4];
                case 11: return [4 /*yield*/, client.query("COMMIT")];
                case 12:
                    _c.sent();
                    console.log("✅ Import complete");
                    return [3 /*break*/, 17];
                case 13:
                    err_1 = _c.sent();
                    return [4 /*yield*/, client.query("ROLLBACK")];
                case 14:
                    _c.sent();
                    console.error("❌ Import failed:", err_1);
                    process.exitCode = 1;
                    return [3 /*break*/, 17];
                case 15:
                    client.release();
                    return [4 /*yield*/, pool.end()];
                case 16:
                    _c.sent();
                    return [7 /*endfinally*/];
                case 17: return [2 /*return*/];
            }
        });
    });
}
main();
