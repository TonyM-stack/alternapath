--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5 (Postgres.app)
-- Dumped by pg_dump version 17.5 (Postgres.app)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: ailments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.ailments (ailment_id, ailment_slug, ailment_title, link, created_at, updated_at, is_active) FROM stdin;
2	joint-pain	Joint Pain	https://alternapath.com/ailments/joint-pain	2025-10-29 19:17:59.832182	2025-10-29 19:17:59.832182	t
5	homeopathy-for-varicose-veins	Varicose Veins	https://homeosource.org/symptoms/homeopathy-for-varicose-veins/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
6	homeopathy-for-shingles	Shingles	https://homeosource.org/symptoms/homeopathy-for-shingles/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
7	homeopathy-for-poison-ivy-or-oak	Poison Ivy or Oak	https://homeosource.org/symptoms/homeopathy-for-poison-ivy-or-oak/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
8	homeopathy-for-vaccine-reactions	Vaccine Reactions	https://homeosource.org/symptoms/homeopathy-for-vaccine-reactions/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
9	homeopathy-for-hemorrhoids	Hemorrhoids	https://homeosource.org/symptoms/homeopathy-for-hemorrhoids/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
10	homeopathy-for-hoarseness	Hoarseness	https://homeosource.org/symptoms/homeopathy-for-hoarseness/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
11	homeopathy-for-sleep-problems-or-insomnia	Sleep/Insomnia	https://homeosource.org/symptoms/homeopathy-for-sleep-problems-or-insomnia/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
12	homeopathy-for-altitude-sickness	Altitude Sickness	https://homeosource.org/symptoms/homeopathy-for-altitude-sickness/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
13	homeopathy-for-warts	Warts	https://homeosource.org/symptoms/homeopathy-for-warts/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
14	homeopathy-for-body-odor	Body odor	https://homeosource.org/symptoms/homeopathy-for-body-odor/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
15	homeopathy-for-tooth-nerve-pain	Tooth Nerve Pain	https://homeosource.org/symptoms/homeopathy-for-tooth-nerve-pain/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
17	homeopathy-for-fever	Fever	https://homeosource.org/symptoms/homeopathy-for-fever/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
18	homeopathy-for-dentist	Dental Procedures; Before and After	https://homeosource.org/symptoms/homeopathy-for-dentist/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
19	homeopathy-for-fear-of-dentist	Dental Fear	https://homeosource.org/symptoms/homeopathy-for-fear-of-dentist/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
20	homeopathy-for-pain-from-overexertion	Overexertion	https://homeosource.org/symptoms/homeopathy-for-pain-from-overexertion/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
21	homeopathy-for-pink-eye-conjunctivitis	Pink Eye (Conjunctivitis)	https://homeosource.org/symptoms/homeopathy-for-pink-eye-conjunctivitis/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
22	homeopathy-for-styes	Styes	https://homeosource.org/symptoms/homeopathy-for-styes/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
25	homeopathy-for-head-injury-or-concussion	Head Injury or Concussion	https://homeosource.org/symptoms/homeopathy-for-head-injury-or-concussion/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
27	homeopathy-for-scars	Scars	https://homeosource.org/symptoms/homeopathy-for-scars/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
28	injuries	Injuries	https://homeosource.org/symptoms/injuries/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
30	homeopathy-for-surgery-and-post-op	Surgery and Post-op Issues	https://homeosource.org/symptoms/homeopathy-for-surgery-and-post-op/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
31	homeopathy-for-headaches-and-migraine	Headaches	https://homeosource.org/symptoms/homeopathy-for-headaches-and-migraine/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
33	pain	Pain	https://homeosource.org/symptoms/pain/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
34	homeopathy-for-asthmatic-breathing-wheezing	Asthmatic Breathing/Wheezing	https://homeosource.org/symptoms/homeopathy-for-asthmatic-breathing-wheezing/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
35	homeopathy-for-bladder-infection-cystitis	Bladder Infections and Cystitis	https://homeosource.org/symptoms/homeopathy-for-bladder-infection-cystitis/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
36	homeopathy-for-sinus	Sinus Congestion	https://homeosource.org/symptoms/homeopathy-for-sinus/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
38	homeopathy-for-tooth-abscess	Tooth Abscess	https://homeosource.org/symptoms/homeopathy-for-tooth-abscess/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
39	homeopathy-for-sore-throat	Sore Throat	https://homeosource.org/symptoms/homeopathy-for-sore-throat/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
40	homeopathy-for-allergic-reactions	Allergic Reactions	https://homeosource.org/symptoms/homeopathy-for-allergic-reactions/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
41	homeopathy-for-jet-lag	Jet lag	https://homeosource.org/symptoms/homeopathy-for-jet-lag/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
42	homeopathy-for-motion-sickness	Motion Sickness	https://homeosource.org/symptoms/homeopathy-for-motion-sickness/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
43	homeopathy-for-hangover	Hangover	https://homeosource.org/symptoms/homeopathy-for-hangover/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
44	cancer-side-effects	Cancer Treatment Side Effects	https://homeosource.org/symptoms/cancer-side-effects/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
45	homeopathy-for-colds	Colds	https://homeosource.org/symptoms/homeopathy-for-colds/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
46	homeopathy-for-coughs	Coughs	https://homeosource.org/symptoms/homeopathy-for-coughs/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
47	homeopathy-for-flu	Flu	https://homeosource.org/symptoms/homeopathy-for-flu/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
48	homeopathy-for-cold-sores-or-canker-sores-or-fever-blisters	Canker Sores/Fever Blisters	https://homeosource.org/symptoms/homeopathy-for-cold-sores-or-canker-sores-or-fever-blisters/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
49	homeopathy-for-sunburn	Sunburn	https://homeosource.org/symptoms/homeopathy-for-sunburn/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
50	homeopathy-for-burns	Burns	https://homeosource.org/symptoms/homeopathy-for-burns/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
51	homeopathy-for-hay-fever-allergies	Hay Fever	https://homeosource.org/symptoms/homeopathy-for-hay-fever-allergies/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
52	homeopathy-for-acne	Acne	https://homeosource.org/symptoms/homeopathy-for-acne/	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
65	homeopathy-for-anxiety-or-stress-relief	Anxiety/Stress Relief	https://homeosource.org/symptoms/homeopathy-for-anxiety-or-stress-relief/	2025-11-10 15:50:39.197989	2025-11-11 16:12:17.823317	t
105	muscle-pain	Muscle Pain	\N	2025-11-20 15:14:21.972838	2025-11-20 15:14:21.972838	t
106	nausea	Nausea	\N	2025-11-20 15:15:57.986861	2025-11-20 15:15:57.986861	t
107	skin-rash	Skin Rash	\N	2025-11-20 15:17:19.064159	2025-11-20 15:17:19.064159	t
108	migraine	Migraine	\N	2025-11-20 15:20:57.443537	2025-11-20 15:20:57.443537	t
109	digestive-issues	Digestive Issues	\N	2025-11-20 15:23:10.998922	2025-11-20 15:23:10.998922	t
53	homeopathy-for-abscess-boil	Abscess/Boils	https://homeosource.org/symptoms/homeopathy-for-abscess-boil/	2025-11-03 14:14:19.920179	2025-11-20 23:37:25.312054	t
112	back-pain	Back Pain	\N	2025-12-01 10:29:16.137344	2025-12-01 10:29:16.137344	t
113	eczema	Eczema	\N	2025-12-01 20:44:58.697278	2025-12-01 20:44:58.697278	t
114	minor-cuts	Minor Cuts, Scrape, and Skin Irritation	\N	2025-12-01 20:46:44.70501	2025-12-01 20:46:44.70501	t
115	pms	PMS - Premenstrual  Syndrome	\N	2025-12-01 21:39:58.743386	2025-12-01 21:39:58.743386	t
\.


--
-- Data for Name: remedies; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.remedies (remedy_id, remedy_name, description, potency, dosage_instructions, created_at, updated_at, is_active) FROM stdin;
52	Aconitum Napellus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-20 09:10:41.144085	t
221	**The Boiron Company Recommends: Histaminum	Hives	30C	plus Apis Mellifica 30C plus Urtica Urens 6C Take together 4-5 times a day Decrease dosage with improvement	2025-11-03 14:14:19.920179	2025-11-25 12:11:12.488965	t
609	Colocynthis	For sciatica that improves with pressure or bending forward.	\N	\N	2025-12-01 10:34:56.271328	2025-12-01 10:34:56.271328	t
4	Bryonia Alba	Used for joint stiffness and inflammation.	30C	Take 3 pellets twice daily.	2025-10-29 19:17:59.837157	2025-12-01 12:32:12.557297	t
5	Calcarea Fluorica	\N	6X	once/twice daily	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
7	Pulsatilla	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
8	Carbo Vegetabilis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
9	Aesculus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
10	Lycopodium	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
610	Magnesium Phosphoricum	Muscle cramps and spasms, nerve pain, abdominal cramping, tension headaches, spasmodic coughs	\N	\N	2025-12-01 11:39:55.39349	2025-12-01 11:39:55.39349	t
611	Ipecacuanha ( Ipecac )	Nausea with no relief from vomiting, constant salivation, coughs with gagging or retching, bleeding tendencies	\N	\N	2025-12-01 11:56:15.95147	2025-12-01 12:03:27.913996	t
157	Cedron	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
158	Prunus Spinosa	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
612	Colchicum	Intense nausea triggered by food smells, especially cooking odors. Even thinking of food can cause gagging. Often useful for pregnancy-related nausea.	\N	\N	2025-12-01 12:08:43.51008	2025-12-01 12:08:43.51008	t
11	Ferrum Metallicum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
12	Sulphur	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
13	Arnica	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
14	WHP Poison Ivy Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
15	Rhus Toxicodendron	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
16	Croton-Tiglium	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
17	Anacardium	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
18	Graphites	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
19	Clematis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
20	Newton Labs Vaccination Illness Assist Multi-Remedy Combination Follow Label Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
22	Apis Mellifica	\N	30c	as often as every 5 minutes until you are at the hospital	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
25	Silica, Or Apis , Or Thuja, Or Belladonna	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
27	Thuja	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
29	Silica	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
31	Mezereum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
33	Gelsemium	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
195	Blatta Orientalis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
196	Pothos Foetidus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
35	Malandrinum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
36	Be Gone Hemorrhoids Multi-Remedy Formulation Manufactured By Washington Homeopathic Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
37	Avenoc Multi-Remedy Formulation Manufactured By Boiron Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
38	Collinsonia Canadensis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
39	Hamamelis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
40	Lachesis Muta	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
41	Nux Vomica	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
42	Aloe	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
43	Belladonna	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
44	Nitric Acid	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
45	Ratanhia	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
46	Populus Candicans	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
47	Ammonium Causticum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
48	Borax	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
49	Phosphorus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
50	Bach Rescue Remedy Sleep Spray	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
51	Coffea	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
53	Chamomilla	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
54	Cocculus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
55	Ignatia	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
57	Passiflora	\N	1x,	2x, 3x, 4x take before bedtime	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
58	Avena Sativa	\N	6C	take before bedtime if needed: repeat every 30 minutes for two more doses	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
59	Hyoscyamus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
62	Coca Available Outside The US	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
64	Minthostachys Acris Newer Remedy May Be Difficult To Find	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
65	Causticum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
66	Antimonium Crudum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
67	Dulcamara	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
68	Ruta Graveolens	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
69	Calcarea Carbonica	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
70	Mercurius	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
71	Fluoricum Acidum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
72	Hypericum Perforatum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
74	Coffea Cruda	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
76	Plantago Tincture	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
77	Rescue Remedy	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
78	Boiron Stress Calm Combination Remedy Manufactured By Boiron Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
80	Argentum Nitricum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
81	Kali Phosphoricum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
82	Tarentula	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
83	Ferrum Phosphoricum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
85	Mercurious Vivus Or Solubilis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
88	Natrum Muriaticum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
90	Zingiber Officinale	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
91	Ledum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
95	Staphysagria	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
100	Bellis Perennis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
101	Euphrasia	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
102	Hepar Sulphuris Calcareum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
103	Sepia	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
108	Lachesis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
112	Aurum Metallicum Dr. Ramakrishnan Says:	\N	30C	as long as it helps 200C as long as it helps May move higher if no longer helpful Give every 5-30 min in water (stir between doses) until relief obtained If no relief, reassess and change remedies May repeat if it helped earlier	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
113	Cadmium Sulphuratum	\N	12C	30C Dr. Ramakrishnan says: one dose every 30 min day and night	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
197	Cantharis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
111	Antimonium Tartaricum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-24 12:20:12.627317	t
79	Arsenicum Album	Abscess with burning pain that is better with warm applications Chilly Thirsty but drinks only sips	\N	\N	2025-11-03 14:14:19.920179	2025-12-01 12:03:08.152666	t
84	Bryonia ( Byronia Alba )	Dry wheezing Warm Thirsty for large gulps Irritable Wants to be left alone Worse: any movement	\N	\N	2025-11-03 14:14:19.920179	2025-12-01 12:31:52.395385	t
116	Cactus Grandiflora	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
117	Crotalus Horridus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
118	Cuprum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
121	Latrodectus Mactans	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
125	Veratrum Album	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
128	Arnica Montana	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
129	Natrum Sulphuricum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
131	Helleborus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
134	Miranda Castro’S Healing Cream For Scars	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
135	Thiosinaminum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
136	Calcium Fluoride	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
137	Silicea	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
139	Fluoric Acid	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
140	Kali Bromatum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
141	Phytolacca	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
142	Nitric Acidicum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
147	Raphanus Pain:	\N	30C	Every 2 hours for intense pain every 4 hours for mild discomfort Trapped gas: Alternate Opium, Raphanus and Arnica 9 or 12C Every 2 hours	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
149	Pyrogenium	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
150	Symphytum Higher Potencies May Be Needed If Nerve Related Pain	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
152	Sanguinaria	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
154	Agaricus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
155	Chelidonium	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
156	Ranunculus Bulbosus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
159	Spigelia	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
160	Manganum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
161	Actea Spicata	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
162	Glonoinum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
163	Kali Bichromicum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
164	Melilotus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
165	Calcarea Phosphorica	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
166	Cimicifuga	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
167	Lac Defloratum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
168	Lac Caninum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
172	Stomatitis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
173	Aromatase Inhibitors	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
184	Skeletal Issues Back Pain Fractures/Broken Bones Hand Pain Joint Pain (Ankle, Elbow, Foot, Hand, Knee, Wrist) Neck Pain Shoulder Pain Sprains And Strains Tendinitis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
189	Kali Carbonicum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
190	Sambucus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
191	Spongia	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
192	Lobelia	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
194	Amyl Nitrosum	\N	5C	30C	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
119	Digitalis Purpurea	Congestive Heart Failure	\N	\N	2025-11-03 14:14:19.920179	2025-12-01 11:59:01.066126	t
153	Iris Versicolor 	Migraine with visual aura, nausea, and gastric upset. Pain often starts around the temples and may be accompanied by sour stomach or acid reflux.	\N	\N	2025-11-03 14:14:19.920179	2025-12-01 12:34:29.124731	t
133	Calendula Cream	To foster healing with minimal scar	6C	three times/day for 20 days post op and/or Calendula ointment twice daily on incision after dressing removed	2025-11-03 14:14:19.920179	2025-12-01 20:41:16.67813	t
198	Mercurius Corrosivus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
199	Sarsaparilla	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
200	Berberis Vulgaris	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
201	Equisetum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
202	Petroselinum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
203	Terebinthina	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
204	WHP Sinus Congestion Multi-Remedy By Washington Homeopathic Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
205	Sinusalia (New Name Is Sinus Calm) Multi-Remedy By Boiron Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
206	Mercurius Solubilis Or Mercurius Vivus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
207	Hydrastis Canadensis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
208	Kali Iodatum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
209	Myristica	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
211	Gunpowder	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
212	Throat Calm– 12 Yrs And Up Multi-Remedy Medicine Manufactured By Boiron Take As Directed	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
213	Hyland’S Sore Throat Multi-Remedy Medicine Manufactured By Hyland’S Take As Directed	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
215	Mercurius Iodatus Flavus Starts On Right Side Mercurius Solubilis(Vivus) If Unclear Where Pain Started Mercurius Iodatus Ruber Starts On Left Side	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
218	Urtica Urens	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
220	Mercurius Vivus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
222	Motion Sickness Multi-Remedy Medicine By Hylands Follow Package Directions.	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
223	Cocculus Indicus	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
224	Tabacum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
225	Petroleum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
227	Cold Calm – Adult Cold Calm – Children Combination Remedy Manufactured By Boiron Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
228	Kids Colds And Mucus Relief Multi-Remedy Manufactured By Similason Take According To Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
229	Kids Cold And Cough Multi-Remedy Manufactured By Hylands Take According To Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
230	4 Kids Sniffles And Sneezes Multi-Remedy Manufactured By Hylands Take According To Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
231	Allium Cepa	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
232	Arum Triphyllum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
233	Baryta Carbonica	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
235	Kali Muriaticum	\N	6C	Take every 3-4 hours during cold until better	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
236	Kali Sulphuricum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
237	Sticta Pulmonaria	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
238	Colds And Coughs Multi-Remedy Manufactured By Washington Homeopathic Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
239	Chestal– Adult Chestal – Children Multi-Remedy Manufactured By Boiron Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
240	Hyland’S Kids Cold And Cough Multi-Remedy Manufactured By Hyland’S Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
241	B&T Nighttime Cough And Bronchial Syrup – Adult B&T Daytime Cough And Bronchial Syrup – Adult B&T Children Cough And Bronchial Syrup – Children Multi-Remedy Manufactured By Boericke & Tafel Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
242	Hyland’S Bronchial Cough Multi-Remedy Manufactured By Hyland’S Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
243	Capsicum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
244	Coccus Cacti	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
245	Corallium Rubrum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
246	Drosera	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
247	Mephitis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
248	Rumex	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
249	Sambucus Nigra	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
250	Spongia Tosta	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
252	Stannum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
254	Mercurius Solubilis Or Pulsatilla	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
256	Oscillococcinum Manufactured By Boiron Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
257	WHP Flu-Like Symptoms Multi-Remedy Manufactured By Washington Homeopathic Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
258	4 Kids Complete Cold And Flu – 2-12 Years Complete Flu Care – Adults Manufactured By Hylands Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
259	Influenzinum As Directed By Your Provider	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
262	Eupatorium Perfoliatum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
263	Phosphoric Acid	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
264	Mercurius Solubilis	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
265	Baptisia	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
267	Kali Phosphoricum Take As Directed By Your Provider	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
270	Hyland’S Cold Sores & Fever Blisters Multi-Remedy Manufactured By Hyland’S Take As Directed	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
271	4 Kids Canker Sore Soothing Dots Hylands Canker Sore Healing Dots – 6 Yrs And Up Multi-Remedy Manufactured By Hyland’S Take As Directed	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
274	Kali Chloricum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
275	Nitric Acidum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
276	Sempervivum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
277	Sulphuricum Acidicum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
251	Antimonium Arsenicosum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-24 12:19:15.305372	t
266	China Officinalis (Cinchona) 	Weakness after flu After a lot of fluid loss sweat vomiting diarrhea dehydration	\N	\N	2025-11-03 14:14:19.920179	2025-12-01 12:44:21.417153	t
280	Sol	\N	30C	Every 4 hours up to 10 doses	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
286	WHP Hay Fever Multi-Remedy By Washington Homeopathic Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
287	Sabadil Allergy Relief– Adults RhinAllergy – Kids Multi-Remedy Medicine Manufactured By Boiron Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
288	4 Kids Complete Allergy Seasonal Allergy Relief – Adults Multi-Remedy Medicine Manufactured By Hyland’S Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
289	Pascallerg (*See Study Below) Multi-Remedy Product By Pascoe Available In Canada See Package For Directions On Usage	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
290	Allergena Multi-Remedy Formulation Based On Where You Live In The US	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
291	Arsenicum Iodatum	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
292	Arundo	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
293	Galphimia Glauca	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
294	Sabadilla	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
295	Wyethia	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
296	Boiron Acne Relief Multi-Remedy By Boiron Follow Package Directions	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
297	Calcarea Sulphurica	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
299	Calcarea Silicata	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
300	Lachesis Stop This Remedy Immediately On Improvement	\N	\N	\N	2025-11-03 14:14:19.920179	2025-11-10 15:50:39.197989	t
\.


--
-- Data for Name: ailment_remedies; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.ailment_remedies (ailment_remedy_id, ailment_id, remedy_id, symptom_description, sort_order, created_at) FROM stdin;
1171	112	4	For sharp, excruciating pain made worse by any movement.	0	2025-12-01 10:29:16.151882
3	2	4	Eases joint stiffness aggravated by movement.	1	2025-10-29 19:17:59.856403
1186	106	612	Intense nausea triggered by food smells, especially cooking odors. Even thinking of food can cause gagging. Often useful for pregnancy-related nausea.	0	2025-12-01 12:10:22.406534
1201	43	58	Hangover, irritable.	0	2025-12-01 20:33:00.225707
1216	115	69	PMS with tiredness, overwhelm, and slow or heavy energy. May have sugar cravings, bloating, or water retention along with emotional worry.	0	2025-12-01 21:44:48.588402
6	5	5	Cell salt May be taken in addition to the below remedies Strengthens connective tissue and elastic fiber of vein walls	1	2025-11-03 14:14:19.920179
8	5	7	First choice, if pregnant Stinging, pulsating, sore pain Bleeding veins Legs are worse: hanging down with warmth Worse: pregnancy Be sure to rest and raise legs above heart level often	3	2025-11-03 14:14:19.920179
13	5	12	Painful Worse: warmth	8	2025-11-03 14:14:19.920179
1172	112	128	Sore, bruised, tender back pain after strain, overuse, or injury. Pain feels as if beaten or bruised. Patient avoids pressure and touch.	0	2025-12-01 10:30:47.118442
1187	107	12	Red, inflamed, itchy skin rashes that burn and feel worse from heat, bathing, or nighttime. Skin may be dry, flaky, and irritated. Scratching offers brief relief but often worsens symptoms.	0	2025-12-01 12:12:28.472803
1202	12	69	Nausea, anxiety	0	2025-12-01 20:37:35.373156
1217	115	610	PMS cramping relieved by heat or pressure, with spasmodic pains and tenderness.	0	2025-12-01 21:47:33.082659
1173	112	72	Sharp, shooting, or nerve-like pain in the back, radiating down the legs or into the spine. Useful for spinal or nerve irritation, sciatica, and tailbone injuries.	0	2025-12-01 10:31:33.852836
1188	107	15	Red, swollen, blistering rashes that itch intensely and improve with warmth. Often oozing or weeping. Typical for poison ivy–type eruptions or rashes worse in damp weather.	0	2025-12-01 12:13:40.144212
1203	107	133	Helps reduce discomfort from mild rashes or irritated skin. Provides soothing moisture for inflamed areas.	0	2025-12-01 20:43:58.226295
1218	115	55	PMS with mood swings, sighing, emotional tension, or suppressed grief.	0	2025-12-01 21:48:03.872673
1174	112	69	Chronic back pain with weakness and fatigue, worse from exertion or cold. Useful for heavy, tired backs with muscular exhaustion.	0	2025-12-01 10:32:13.872982
1189	107	18	Thick, cracked, rough skin with sticky, honey-like oozing. Excellent for chronic eczema, dermatitis, or rashes in skin folds such as behind ears or in groin areas.	0	2025-12-01 12:14:50.647648
1204	113	133	Applied to calm redness, dryness, and irritation associated with mild eczema flare-ups. Supports moisture and comfort.	0	2025-12-01 20:44:58.715684
1175	112	189	Classic for lower back pain radiating to the hips or buttocks.	0	2025-12-01 10:32:59.71574
1190	107	218	Raised, itchy welts or hives with burning or stinging sensations. Useful for allergic rashes, sunburn reactions, and skin irritation after contact. Often better from rubbing.	0	2025-12-01 12:18:47.173058
1205	49	133	Provides soothing relief to mild sunburned skin, helping reduce redness and promoting comfort while the skin recovers.	0	2025-12-01 20:45:33.728151
227	27	140	Acne scars	9	2025-11-03 14:14:19.920179
1176	112	609	Sciatica with shooting or cramping pain, relieved by pressure or bending forward. Pain may be intense, radiating down the leg.	0	2025-12-01 10:34:56.27999
1191	107	79	Burning, itchy skin rashes that worsen at night, often with restlessness or anxiety. Skin may feel hot or irritated. Useful in allergic or inflammatory skin reactions.	0	2025-12-01 12:24:24.26735
1206	114	133	Used to soothe minor cuts, scrapes, and irritated skin. Helps calm redness and supports the natural healing of superficial skin injuries.	0	2025-12-01 20:46:44.719378
1177	105	128	For muscle soreness, bruising, or strain after exertion or injury. Muscles feel tender, bruised, or overworked, and the person avoids pressure or touch.	0	2025-12-01 11:04:36.371332
1192	108	43	Sudden, throbbing, right-sided migraines with heat, redness, and sensitivity to light or noise. Pain worsens with movement and feels pounding or bursting.	0	2025-12-01 12:26:52.796255
1207	44	41	Used to soothe minor cuts, scrapes, and irritated skin. Helps calm redness and supports the natural healing of superficial skin injuries.	0	2025-12-01 20:48:16.276011
1178	105	15	Muscle pain with stiffness after rest, worse on first movement and better with continued motion or heat. Common after overuse, lifting, or prolonged inactivity.	0	2025-12-01 11:17:22.078665
1193	108	153	Migraine with visual aura, nausea, and gastric upset. Pain often starts around the temples and may be accompanied by sour stomach or acid reflux.	0	2025-12-01 12:33:18.021007
1208	44	79	Supportive remedy for digestive discomfort with burning sensations, nausea, or restlessness. Often chosen when symptoms worsen at night and the person feels anxious or weak.	0	2025-12-01 20:49:36.373153
1179	105	4	Muscle pain that is aggravated by the slightest movement and relieved by complete rest or pressure. Pain may be sharp, stitching, or deep aching.	0	2025-12-01 11:17:55.340997
1194	108	33	Heavy, dull, pressure-like migraines with droopy eyelids and fatigue. Often triggered by anxiety or anticipation, with a band-like sensation around the head.	0	2025-12-01 12:35:07.849276
1209	44	33	Supportive remedy for profound fatigue, heaviness, or weakness. Often used when the person feels drained, shaky, or flu-like after treatment.	0	2025-12-01 20:50:05.026084
364	36	205	Congestion Pain Sinus pressure Headache	2	2025-11-03 14:14:19.920179
1180	105	68	Muscular pain involving tendons or ligaments, with a bruised or aching sensation. Worse from cold, damp weather, or overuse.	0	2025-12-01 11:18:41.734239
1195	109	41	Digestive upset from overeating, alcohol, coffee, or stress. Bloating, cramping, and nausea—often worse in the morning. Sensation of incomplete digestion or incomplete bowel movement.	0	2025-12-01 12:38:04.266798
1210	44	133	Supportive remedy for irritated or inflamed skin or mucous membranes, including mouth sores and radiation-related skin sensitivity. Promotes gentle soothing and comfort	0	2025-12-01 20:50:33.386222
399	40	221	Hives	7	2025-11-03 14:14:19.920179
1181	105	33	Diffuse muscle aching with a heavy, weak feeling. Typical of flu-like states, fatigue, or exhaustion with trembly weakness.	0	2025-12-01 11:24:40.455166
1196	109	8	Severe gas and bloating with distension and relief from burping. Person may feel weak, cold, or craving fresh air. Excellent for sluggish digestion and excessive gas.	0	2025-12-01 12:40:12.358604
1211	44	72	Supportive remedy for nerve discomfort or tingling sensations, especially shooting or burning pains. Often used for peripheral neuropathy-type symptoms.	0	2025-12-01 20:51:09.881147
1182	105	610	Muscle cramps and spasms, nerve pain, abdominal cramping, tension headaches, spasmodic coughs	0	2025-12-01 11:42:00.456624
1197	109	10	Digestive bloating that occurs after small meals, with gas and fullness. Often worse late afternoon. Useful for slow digestion, sugar cravings, and abdominal distension.	0	2025-12-01 12:40:42.692148
1212	115	103	PMS with irritability, fatigue, and a desire for space. Person may feel overwhelmed, emotionally flat, or short-tempered, with pelvic heaviness or dragging sensations.	0	2025-12-01 21:39:58.758807
1183	106	41	Nausea with irritability, worse in the morning and from food smells. Often from overeating, alcohol, coffee, or stress. Frequent urging to vomit without relief.	0	2025-12-01 11:48:03.638575
1198	109	79	Digestive upset with burning stomach pain, nausea, or diarrhea—often from spoiled food. Person may be anxious or restless and feels better from small warm drinks.	0	2025-12-01 12:41:20.277525
1213	115	7	PMS with emotional sensitivity, crying easily, and wanting comfort or reassurance. Symptoms and moods may change quickly, with bloating or breast tenderness.	0	2025-12-01 21:43:09.418337
1184	106	611	Persistent, constant nausea with excessive salivation that is not relieved by vomiting. The person feels weak, pale, and sick throughout.	0	2025-12-01 11:59:42.400082
1199	109	266	Gas and bloating after illness, dehydration, or fluid loss. Abdomen feels distended and sensitive, with relief from pressure. Useful when weakness accompanies digestive issues.	0	2025-12-01 12:45:07.141181
1214	115	108	PMS with strong irritability, anger, or emotional intensity that improves once the period begins. Worse from heat, with breast tenderness or a feeling of congestion.	0	2025-12-01 21:43:52.693573
9	5	8	If Pulsatilla does not help Skin is mottled, blue/purplish Knotted, painful veins	4	2025-11-03 14:14:19.920179
10	5	9	Blood stagnates in veins Distended purplish veins Sticking, hot lightening-like pains May also have hemorrhoids Worse: walking motion standing	5	2025-11-03 14:14:19.920179
11	5	10	Sharp pain One foot warm and the other cold May tend toward gastric issues	6	2025-11-03 14:14:19.920179
12	5	11	Legs look pale but redden easily Swollen veins Walking slowly makes achey, weak feeling subside Worse: pregnancy	7	2025-11-03 14:14:19.920179
14	5	13	Sore, achey, inflamed legs	9	2025-11-03 14:14:19.920179
15	7	14	Itching Redness Blisters Swelling	1	2025-11-03 14:14:19.920179
16	7	15	Fine blisters yellowish fluid crusty Swelling Inflammation Burning Itching Stinging Restlessness Skin sensitive to cold air Better: scalding water	2	2025-11-03 14:14:19.920179
17	7	16	Skin feels hide bound/tense/tight Itching Burning Red Sore if scratched Blisters with pus clusters burst and form more crusts Better: gentle rubbing Worse: night touch bathing scratching	3	2025-11-03 14:14:19.920179
18	7	17	Itchy Large yellowish blisters Irritable Worse: scratching Better: scalding water	4	2025-11-03 14:14:19.920179
19	7	18	Blisters ooze thick, sticky, honey like fluid Moist, crusty blisters Worse: after scratching heat	5	2025-11-03 14:14:19.920179
20	7	19	Burning blisters Severe itching Red Scaly, scabby Blisters corrode ending in small ulcers Worse: washing in cold water face, hands, back of scalp	6	2025-11-03 14:14:19.920179
21	8	20	Vaccine support before and after For vaccine-related symptoms such as: fever inflammation pain fatigue skin discomfort	1	2025-11-03 14:14:19.920179
26	8	25	Pain, swelling, redness over whole arm	6	2025-11-03 14:14:19.920179
30	8	29	Infection at injection site	10	2025-11-03 14:14:19.920179
33	8	31	Itchiness	13	2025-11-03 14:14:19.920179
36	8	22	Redness, heat, swelling at injection site Intolerant of heat	16	2025-11-03 14:14:19.920179
38	8	33	Fatigue Chills up and down the spine Thirstless	18	2025-11-03 14:14:19.920179
41	8	27	Trembling limbs	21	2025-11-03 14:14:19.920179
42	8	35	Dry, scaly, itching skin	22	2025-11-03 14:14:19.920179
43	9	36	Hemorrhoids Reduce Pain Reduce Swelling Reduce Itching	1	2025-11-03 14:14:19.920179
44	9	37	Discomfort Itching Burning	2	2025-11-03 14:14:19.920179
45	9	38	Hemorrhoids/Bulging veins rectal area perineal area Varicose veins Begin during pregnancy Heavy sensation in lower parts May have constipation and diarrhea alternating Sensation of sharp sticks in rectum Itching	3	2025-11-03 14:14:19.920179
46	9	39	Bleeding, pulsating hemorrhoids dark thick blood Rawness of rectum Could also have varicose veins in legs, vulva May have swollen ankles May have backache	4	2025-11-03 14:14:19.920179
47	9	9	Hemorrhoids with low back pain and base of spine Sensation of heaviness, pressure, or lump in rectum May be a sensation of splinters or sticks in rectum Burning in anus with chills up and down back Do not bleed much Worse: pregnancy wiping walking Better: cool bathing	5	2025-11-03 14:14:19.920179
48	9	40	Purple or black hemorrhoids Throbbing Anus may feel tight May be talkative	6	2025-11-03 14:14:19.920179
49	9	8	Large blue bloody hemorrhoids Itchy Burning pain after passing stool Oozes stick discharges Belching after eating Smelly gas and stools	7	2025-11-03 14:14:19.920179
50	9	41	Hemorrhoids with stinging pain constricted sensation tenderness Itching May have a history of chronic constipation May have occurred after excessive eating or drinking	8	2025-11-03 14:14:19.920179
51	9	42	Itching Hemorrhoids like grape clusters May have burning Sense of pulsation in rectum May have issues with stool leaking out Better: cold water/bathing Worse: heat	9	2025-11-03 14:14:19.920179
52	9	43	Acute inflammation Much redness Swelling Great pain and tenderness May have bright red blood	10	2025-11-03 14:14:19.920179
53	9	12	Itching and burning Protrude, ooze or bleed Worse: heat of bed at night standing walking around	11	2025-11-03 14:14:19.920179
54	9	44	Irritable Sensitive to noise, pain, touch and jarring Fissures in rectum Violent cutting pains in rectum after stool Irritable/exhausted after bowel movement	12	2025-11-03 14:14:19.920179
55	9	7	During pregnancy May be weepy Better with consolation	13	2025-11-03 14:14:19.920179
56	9	45	Painful hemorrhoids Straining with very hard, painful stool, and protruding hemorrhoids Followed by burning in anus	14	2025-11-03 14:14:19.920179
57	10	46	Hoarseness with a cold Throat and tonsils burn and feel raw Throat feels dry May have dry cough sits bent forward with cough	1	2025-11-03 14:14:19.920179
58	10	47	Hoarseness with burning, rawness, sore throat Low, weak voice Pain in throat on breathing Worse: cold, damp weather	2	2025-11-03 14:14:19.920179
59	10	48	Sudden onset of hoarseness after exposure to cold May have history of mouth ulcers	3	2025-11-03 14:14:19.920179
60	10	49	Hoarseness with painful larynx Worse: cold air talking evening	4	2025-11-03 14:14:19.920179
61	11	50	Occasional sleeplessness from: stress repetitive thoughts busy mind	1	2025-11-03 14:14:19.920179
63	11	51	Sleeplessness from overactive, racing mind good or bad news after stimulating activities after caffeinated beverages May be less effective for habitual coffee drinkers	3	2025-11-03 14:14:19.920179
64	11	41	Sleeplessness due to: mental strain/over-work can’t turn off brain overindulgence in food, alcohol alcohol withdrawal sleeping pill withdrawal anger Wakes around 3-4am falls asleep about time to get up Irritability during the day	4	2025-11-03 14:14:19.920179
65	11	33	Insomnia from: anxiety anticipation after receiving good news over-studying exhaustion flu, mononucleosis Mentally dull Head feels heavy Weakness Falling asleep after supper in a chair then waking but unable to fall back to sleep	5	2025-11-03 14:14:19.920179
66	11	7	Mild, gentle disposition better with consolation Restless when first falling asleep Recurring thoughts Too hot Thirstless Too hot in bed Worse after rich food	6	2025-11-03 14:14:19.920179
67	11	52	Difficulty sleeping after: shock panic frightening situation Restless May have nightmares May have fear of dying	7	2025-11-03 14:14:19.920179
68	11	53	Wide awake and irritable first part of night Insomnia from pain/discomfort teething colic/bowel complaints Abdominal complaints and flatulence Common in children wants to be carried Overuse of drugs or coffee with: sleepy during the day and sleepless at night Irritable, demanding, hard to please	8	2025-11-03 14:14:19.920179
69	11	13	Sleeplessness due to: bed/pillow feels too hard can’t get comfortable jet lag Restless Can’t get comfortable Feel bruised Nightmares after recent accident/injury	9	2025-11-03 14:14:19.920179
70	11	10	Difficulty sleeping due to: overactive mind at bedtime going over events of the day Much dreaming – may not remember Talks and laughs in sleep Wakes around 4am	10	2025-11-03 14:14:19.920179
71	11	54	Sleeplessness due to: exhaustion after many nights without sleep caregivers who have to get up at night night shift work too tired to sleep moms nursing at night anxiety May be dizzy May be irritable	11	2025-11-03 14:14:19.920179
72	11	55	Sleeplessness after: emotional upset grief humiliation relationship break up Yawns, sighs a lot Dreads not being able to sleep Nightmares	12	2025-11-03 14:14:19.920179
74	11	15	Sleepless from pain Restless Walking about with pain or discomfort Irritable	14	2025-11-03 14:14:19.920179
75	11	57	Sleep problems in infants and aged Insomnia with restlessness	15	2025-11-03 14:14:19.920179
76	11	58	Sleeplessness from: drugs or alcohol chronic debilitating condition	16	2025-11-03 14:14:19.920179
77	11	59	Insomnia from jealousy	17	2025-11-03 14:14:19.920179
80	12	62	Mountain sickness: Palpitations Shortness of breath Dizziness Headache Anxiety Insomnia	1	2025-11-03 14:14:19.920179
82	12	8	Shortness of breath weak chilly desire to be fanned with fresh air blue tinge to ski	3	2025-11-03 14:14:19.920179
83	12	29	Thin, frail people Easily exhausted Chilly	4	2025-11-03 14:14:19.920179
84	12	13	Prevention 30C recommended 3 times/day Early stages Confused Weak Not aware there is something is wrong	5	2025-11-03 14:14:19.920179
85	12	64	Altitude sickness with pressure in the chest Very high altitudes Indigenous people in the high Andes give to visitors Higher altitude than coca	6	2025-11-03 14:14:19.920179
86	13	27	Most common remedy for warts Soft, fleshy, cauliflower-like; or Large warts; or Warts grow on a stalk; or Warts that grow fast Older, cracked, oozing warts Fleshy genital warts For this condition increase dose to 4x/daily May bleed or sting May be dark colored or red Warts that disappeared but came back Location: head, face, lips, nose hands genitals plantar warts (rarely)	1	2025-11-03 14:14:19.920179
87	13	65	Multiple or large warts Fleshy, hard or horny; or Ulcerated or flat warts; or Warts that grow on fleshy stalks May be painful, bleed easily, swell Scars after wart removal Location: finger tips, near finger nails face, eyebrow, eyelids, tip of nose, lips	2	2025-11-03 14:14:19.920179
88	13	44	Wide spread Large, jagged, itchy or moist; or Stalk-like warts; or Cauliflower-like that itch and sting Associated with sores or ulcers Sensitive with splinter-like, sharp pain but may be painless May ooze or bleed easily Location: Face, lips, inside nose Hands, fingers, upper arm Back of neck Genitals, anus	3	2025-11-03 14:14:19.920179
89	13	66	Flat, smooth warts; or Hardened warts like a horn May be associated with a callus Ulceration may arise around the wart Location: Plantar warts (rarely) Eyelids Top of hand or fingers Feet	4	2025-11-03 14:14:19.920179
90	13	67	Hard, smooth, flat; or Fleshy, large; or Warts on stalks Groups of warts Location: Backs of fingers or hands, palms Face	5	2025-11-03 14:14:19.920179
91	13	68	Plantar warts Sore, smooth surface	6	2025-11-03 14:14:19.920179
92	14	69	Sour smelling Especially during exercise, sleep while asleep, may sweat on head May be overweight May feel sluggish and not full of energy May tend toward feeling chilly	1	2025-11-03 14:14:19.920179
93	14	29	Feet may sweat and smell bad Tendency toward being slim Children may be obstinate at times Children may have head sweats Tend to be chilly Very sensitive to cold drafts, especially head	2	2025-11-03 14:14:19.920179
94	14	12	Offensive odor Head hot and sweaty Diarrhea first thing in the morning Tend to be sensitive to the heat Palms and soles may feel hot	3	2025-11-03 14:14:19.920179
95	14	70	Unpleasant smell Sticky sweat Tends to sweat in heat and in cold temps May have profuse amounts of saliva Worse: Heat; and Cold	4	2025-11-03 14:14:19.920179
96	14	10	Unpleasant smell Worse on feet and under arms Right foot may be hot and left cold	5	2025-11-03 14:14:19.920179
97	14	71	Sweating worse on head Profuse sweat Sour smelling Better: cold weather walking	6	2025-11-03 14:14:19.920179
98	15	13	First aid remedy for injured tooth Bruising Soreness – hurts to touch Pain Before and after dental work When braces adjusted Before and after deep cleaning/scaling	1	2025-11-03 14:14:19.920179
99	15	72	Nerve pain Injuries to front tooth Pains are sharp, shooting, tingling, burning Numbness After root canals or surgery around tooth root	2	2025-11-03 14:14:19.920179
100	15	52	Nerve pain after exposure to cold or cold and wind	3	2025-11-03 14:14:19.920179
102	15	74	Sharp/shooting pain along a nerve path Nervous restlessness Excitable Hypersensitive to pain Worse: heat and hot food Better: ice-cold water in mouth	5	2025-11-03 14:14:19.920179
104	15	76	Sensitivity to hot or cold Cavity pain	7	2025-11-03 14:14:19.920179
684	65	77	Gentle stress relief Helps stay cool, calm, collected	1	2025-11-10 15:50:39.197989
685	65	78	Stress Anxiousness Nervousness Irritability	2	2025-11-10 15:50:39.197989
686	65	79	Nervous, anxious, chilly Anxiety about health, disease, death, robbers, finances Anxiety about epidemic Nervous exhaustion Restlessness, can’t relax Sudden weakness Extremely neat/tidy – cleanliness important Obsessively ordered Thirsty for sips Worse: around midnight when alone Better: warmth being busy	3	2025-11-10 15:50:39.197989
687	65	52	Sudden onset – panic often, for no immediate reason hyperventilates Fear, anxiety, restless Fears the future Fear of death and states time of death Fears loss of control Fears public places/crowds Anxiety around the heart region Thirsty May feel hot Worse: narrow places, crowds	4	2025-11-10 15:50:39.197989
688	65	80	Anticipatory anxiety Hurried/Afraid to be late Fearful and nervous Faint, shaking, rapid heart rate Fears public places Mental impulses come out of the blue Desires company and talking Time passes too slowly Diarrhea from nerves, bloating, belching Stuttering Sweet tooth Worse: warmth indoors Better: motion open air company talking	5	2025-11-10 15:50:39.197989
689	65	33	Anticipatory anxiety Paralyzed with fear or anxiety Anxiety from bad news Fears epidemic or contagious disease Fears public places Timid/reserved Weak, trembling with anticipation May be dizzy Test anxiety Stage fright May have diarrhea with anxiety May have lump in throat, difficulty speaking Not very thirsty Worse: company bad news Better: alone	6	2025-11-10 15:50:39.197989
690	65	81	Nervous exhaustion from overwork/stress	7	2025-11-10 15:50:39.197989
691	65	49	Sensitive to thoughts/feelings of others Fear in thunderstorms Nervous/agitated feeling Reassurance helps	8	2025-11-10 15:50:39.197989
692	65	10	Anxiety about a new situation Anxiety when performing in front of audience Fear public places Children always want someone around Children who worry about what others think of them May boast about ability, but scared when time comes Craves sweets Worse: heat stuffy rooms	9	2025-11-10 15:50:39.197989
693	65	55	Overwhelmed with stress, ready to break out in tears Sudden emotional upset Anxiety from bad news Children may show anxiety by trembling Children oversensitive to reprimand	10	2025-11-10 15:50:39.197989
694	65	82	Overly anxious/revved up due to overwork Difficult to relax even in bed	11	2025-11-10 15:50:39.197989
695	65	69	Anxiety from bad news Anxiety about epidemic, contagious disease Fear of losing control, poverty, future Fear something will happen Fear disease Feels as if being watched, criticized Full of worries Anxious others will think he’s going insane Easily gains weight	12	2025-11-10 15:50:39.197989
696	65	29	Shy children who are anxious doing new things fear failure Lack confidence but are bright do things well once they finish them Don’t stand up for themselves Stubborn	13	2025-11-10 15:50:39.197989
118	17	43	Sudden onset of high fever Red, flushed, dry, hot face hands and feet cold Dilated pupils Glassy eyes Irritable or mentally dull, agitated May be confused/hallucinate Better: standing or sitting up	1	2025-11-03 14:14:19.920179
119	17	52	Given at onset of symptoms Sudden onset Fever coming on after being chilled Restless, anxious, frightened fear death is imminent May feel like a cold or flu coming on Startles easily Chills Worse: evening, night	2	2025-11-03 14:14:19.920179
120	17	83	Given in early stage of illness Gradual onset Symptoms vague Slight fever Not as intense or with rapid onset of Belladonna Chilly but may sweat Tired Face may have mild flush Better: cold packs lying down touch	3	2025-11-03 14:14:19.920179
121	17	7	Cries easily and wants to be snuggled craves sympathy and attention Clingy Mood changeable Little thirst Worse: evening until midnight warm rooms eating rich food Better: open air	4	2025-11-03 14:14:19.920179
122	17	84	Slow onset Irritable Does not want to be touched Does not want to move Wants to be left alone Very thirsty gulps drinks Worse: least movement if someone tries to touch them	5	2025-11-03 14:14:19.920179
123	17	53	Fever with teething Irritable Face hot and perspiring Wants something, then throws it away One cheek may be red and the other pale	6	2025-11-03 14:14:19.920179
124	17	79	Worse: Midnight-2am Restless, anxious Tired, weak Chilly Thirsty but only for small sips Face warm, body chilly Better: warmth warm drinks	7	2025-11-03 14:14:19.920179
125	17	33	Chilly chills run up and down back chills starting in hands and feet Feeling as if flu coming on Dull, drowsy, weak during fever Very little thirst during fever	8	2025-11-03 14:14:19.920179
126	17	85	Profuse salivation Sweats profusely Foul smelling breath and perspiration Worse: change of temperatures	9	2025-11-03 14:14:19.920179
127	17	49	Looks well despite fever Apathy Wants sympathy Appetite good Craves cold drinks (may be vomited up) May have chest symptoms	10	2025-11-03 14:14:19.920179
128	17	12	Early morning diarrhea drives out of bed Reddish skin Profuse sweating sweat has offensive smell	11	2025-11-03 14:14:19.920179
129	17	41	Heat and chill alternate Chilly relieved only by hot bathing May have headache, digestive symptoms Irritable Worse: uncovering open air Better: warm drinks external heat	12	2025-11-03 14:14:19.920179
130	17	15	Fever or chills with aching and stiffness better with movement Restless Red, itchy rash during fever or chill Heat on left side, chill on right side	13	2025-11-03 14:14:19.920179
133	17	88	Intermittent fever Severe headache Hands and fingers cold and blue during chill Chills begin in fingers or toes Worse: 10-12am	16	2025-11-03 14:14:19.920179
135	18	13	Pain, swelling, soreness Sore gums after extraction Beating/tingling in gums with toothache Bleeding from trauma to gums After braces are adjusted After deep cleaning/scaling	1	2025-11-03 14:14:19.920179
136	18	68	After braces are adjusted if arnica does not help Pain and swelling after tooth extraction	2	2025-11-03 14:14:19.920179
137	18	90	Nausea and gagging during procedure	3	2025-11-03 14:14:19.920179
138	18	91	Pain and soreness at injection site	4	2025-11-03 14:14:19.920179
142	18	65	Cramping in jaw or unable to hold open long time	8	2025-11-03 14:14:19.920179
143	18	95	Minor cuts in the mouth after procedures from wires of braces	9	2025-11-03 14:14:19.920179
146	18	83	Bleeding persistent	12	2025-11-03 14:14:19.920179
148	19	33	Apprehension Anxiety Possible lethargy Possibly with shaking Possibly with diarrhea	1	2025-11-03 14:14:19.920179
149	19	53	Fear due to sensitivity to pain Child who throws tantrums when going to dentist	2	2025-11-03 14:14:19.920179
150	19	52	Shock Excessively Fearful Nervous Panic Restless	3	2025-11-03 14:14:19.920179
151	19	80	Apprehension Agitation Hyperactivity	4	2025-11-03 14:14:19.920179
152	19	41	Vomiting before dental visit	5	2025-11-03 14:14:19.920179
154	20	15	Pain after injury, over-lifting Stiff after rest, but better with movement Restless – keep moving affected part Worse: morning on waking cold, damp, drafts sitting still Better: continued movement stretching, rubbing, exercise warmth: hot soaks, baths, showers	2	2025-11-03 14:14:19.920179
155	20	68	Very stiff throughout, constant, bruised feeling Restless needs to change positions frequently Extremities feel weak, lame Similar to Rhus tox but warmth/movement don’t help as much Worse: exertion of the affected area	3	2025-11-03 14:14:19.920179
156	20	100	Limbs feel bruised, aching, sore from injury or strain Backache from overlifting and strain/exertion Better: continued motion pressure Worse: left side touch after becoming chilled cold drinks	4	2025-11-03 14:14:19.920179
157	20	79	Burning pains Better: hot, dry applications	5	2025-11-03 14:14:19.920179
158	21	7	Main remedy Thick, yellow-green discharge Eyes may glue shut during sleep Weepiness Irritable Changing moods Thirstless Feels better in open air If due to allergic inflammation: much itching Worse: in children catching a cold heat/warm rooms measles Better: cold applications open air	1	2025-11-03 14:14:19.920179
159	21	80	Eyes red and swollen especially inner corner Copious, thick, pus-like discharge from eyes Splinter-like pain in eyes Worse: heat warm room Better: cold open air	2	2025-11-03 14:14:19.920179
160	21	79	Burning discharge from eyes clear causes redness around eye margins Sensitive to light Swelling around eyes Chilly Anxious Restless Thirsty for sips Worse: after midnight	3	2025-11-03 14:14:19.920179
161	21	43	Sudden onset Pain, redness, throbbing, heat, swelling burn feel very dry Clear discharge Bloodshot eyes Eyes sensitive to light Pupils dilated/eyes look glistening Face flushed Very little discharge	4	2025-11-03 14:14:19.920179
162	21	12	Redness around eyes. lids, rims of eyes Burning pain Yellowish discharge from eyes Eyes stick together during sleep Itching/scaling of eyelids and lashes Sensation of sand under lids Thirsty for cold drinks Worse: heat washing eyes	5	2025-11-03 14:14:19.920179
163	21	101	Conjunctivitis due to allergies Lid margins are sore, red, burning, swollen Little or no discharge; or tears that burn the face; turning into thick, mucusy discharge later Much blinking Much tearing Sand sensation in eyes May also have nasal discharge Better: darkness rubbing	6	2025-11-03 14:14:19.920179
164	21	52	Rapidly develops after exposure to cold or wind Red and painful Feels like foreign body in eye	7	2025-11-03 14:14:19.920179
165	21	22	Stinging/burning Swelling of lid or conjunctiva (inner pink surface) Often times, from allergies Puffiness above or below eye Worse: heat/hot applications Better: cold applications open air	8	2025-11-03 14:14:19.920179
166	21	18	Dryness, cracking, scaling especially inner eye Thick, bland discharge causes eyelids to stick together Pain opening lids causes sneezing Red, irritated lid margins	9	2025-11-03 14:14:19.920179
167	21	102	Yellowing, offensive discharge Splinter-like pains in eyes Hyper-sensitive to light Worse: cold air open air touch Better: warmth	10	2025-11-03 14:14:19.920179
168	21	70	Yellow-green or bloody pus from eyes may irritate the skin Eruptions on lid margins or around eyes Pain and irritation Whole lid is red, swollen Usually after several days of symptoms Worse: night heat getting warm in bed	11	2025-11-03 14:14:19.920179
169	21	29	Swelling, discharge and redness near inner eye Blocked tear ducts in infants Thick yellow pus Tears feel hot	12	2025-11-03 14:14:19.920179
170	22	7	Primary remedy Stye, often on upper eyelid Yellowish discharge Eyelids/lashes stick together Better: cold compress in open air Worse: evening	1	2025-11-03 14:14:19.920179
171	22	95	Hard, recurring styes No pain May arise after nervous exhaustion Firm cyst may remain after infected stage	2	2025-11-03 14:14:19.920179
172	22	22	Stinging and burning Entire lid may be red and swollen Better: cold applications Worse: warm applications	3	2025-11-03 14:14:19.920179
173	22	43	Early stages Red, hot, throbbing pain Sensitive to light and touch Worse: warm applications	4	2025-11-03 14:14:19.920179
174	22	101	Feels like sand in the eye Agglutination Worse: wind sunlight Better: open air	5	2025-11-03 14:14:19.920179
175	22	18	Eyelids dry, may be cracked Painful, but not tender to touch Thick yellow discharge	6	2025-11-03 14:14:19.920179
176	22	103	Eyelids red, itchy Hard stye Agglutination of eyelids Drooping eyelid This person generally likes vigorous exercise	7	2025-11-03 14:14:19.920179
177	22	102	Tender to touch May have a splinter sensation Worse: cold air cold applications	8	2025-11-03 14:14:19.920179
178	22	10	Styes near the corner of the eye Recurring styes Sensitive to light Agglutination at night Worse: 4-8pm	9	2025-11-03 14:14:19.920179
179	22	12	Burning/stinging Red eyelids Yellow or white discharge Eyelashes may fall out near stye Recurrent styes This person tends to be warm blooded Worse: warm applications	10	2025-11-03 14:14:19.920179
180	22	15	Greatly swollen May feel stiff Lower lid Better: warm applications	11	2025-11-03 14:14:19.920179
212	25	13	Coma from head injury Old head injury still causing symptoms Arnica was not given initially This potency is not repeated as often as lower potencies so a professional homeopath should be involved.	2	2025-11-03 14:14:19.920179
213	25	129	Leading remedy for old head injury: inability to think chronic headaches sensitivity to light increased salivation depression may be suicidal sadness on hearing music anxiety irritability decreased mental function ringing in the ears Asthma following head injury	3	2025-11-03 14:14:19.920179
214	25	54	Dizziness after head injury Must lie down May feel nausea trying to get up	4	2025-11-03 14:14:19.920179
216	25	131	Mental dullness after head injury Delayed thinking Delayed speaking Delay in answering questions Seems isolated from the world Have lost ability to find pleasure Memory problems Blank facial expression May have chronic headaches	6	2025-11-03 14:14:19.920179
218	25	59	Change in behavior Muscle spasms hiccoughs repetitive gestures twitches Talkative Excitable Normal inhibitions may disappear example: handling genitals in public inappropriate laughing	8	2025-11-03 14:14:19.920179
219	27	133	To foster healing with minimal scar	1	2025-11-03 14:14:19.920179
220	27	134	Healing of recent or old scars	2	2025-11-03 14:14:19.920179
221	27	135	Scars around joints, ligaments, tendons Deep internal scarring Adhesions painful to stretch Internal scars or adhesions	3	2025-11-03 14:14:19.920179
222	27	136	May be taken concurrently with Thiosinaminum To prevent adhesions after operations Hardened scars Cracked, dry skin	4	2025-11-03 14:14:19.920179
223	27	137	May be taken concurrently with Thiosinaminum Painful scars Old, inflamed scars Keloids Shiny, hard scars Old wounds reopen or become painful Scars after infection Scars after injection/vaccination	5	2025-11-03 14:14:19.920179
225	27	65	Scars from burns or scalds Reopening of wound at previously healed site	7	2025-11-03 14:14:19.920179
226	27	139	Itchy scar Tender Scaley Worse: warmth	8	2025-11-03 14:14:19.920179
228	27	141	Scars/adhesion in breast or glandular tissue	10	2025-11-03 14:14:19.920179
229	27	142	Pains like splinters Irregular shaped scar The person’s urine may smell offensive	11	2025-11-03 14:14:19.920179
230	27	27	Scars at vaccination sites	12	2025-11-03 14:14:19.920179
233	30	13	Drs. Samet, Saine, Torok, and Gilchrest’s surgery protocol: to help with pain	3	2025-11-03 14:14:19.920179
235	30	133	To speed up healing of incision Prevent infection Infected incisions	5	2025-11-03 14:14:19.920179
236	30	33	Pre-op anxiety Trembling with fear Weak	6	2025-11-03 14:14:19.920179
237	30	49	Bad effects of anesthesia disorientation anxiety/fear nausea vomiting Nausea and vomiting after abdominal surgery Vomiting immediately after food/drinks warm in stomach	7	2025-11-03 14:14:19.920179
238	30	41	Post-op nausea, retching, vomiting Feeling hung over after anesthesia Post-op irritability and impatience Chilly Constipated	8	2025-11-03 14:14:19.920179
240	30	79	Violent, continuous vomiting Worse drinking cold water or eating Stomach feel like it is on fire	10	2025-11-03 14:14:19.920179
241	30	65	Bladder full but cannot pass urine after surgery	11	2025-11-03 14:14:19.920179
244	30	100	Pain from surgery to abdomen/soft tissue organs breast, uterus, liver, spleen, etc Post-abdominal laparoscopy	14	2025-11-03 14:14:19.920179
246	30	84	Significant pain after surgery Any tiny movement is excruciating Provokes nausea May have extreme thirst Helpful after appendicitis Follows Arnica in ortho cases	16	2025-11-03 14:14:19.920179
247	30	147	Gastrectomy Post-op constipation with no urging Post operative ileus Painful gas with distention abdomen unable to pass gas	17	2025-11-03 14:14:19.920179
249	30	55	Emotions/grief after: Miscarriage Abortion	19	2025-11-03 14:14:19.920179
250	30	39	Breast removal Lumpectomy Post-op bleeding/oozing	20	2025-11-03 14:14:19.920179
251	30	95	Prostate surgery	21	2025-11-03 14:14:19.920179
253	30	10	Gallbladder surgery	23	2025-11-03 14:14:19.920179
254	30	91	Eye surgery Infected incision Varicose vein surgery	24	2025-11-03 14:14:19.920179
255	30	68	Orthopedic surgery involving: cartilage/periosteum (lining around bone)	25	2025-11-03 14:14:19.920179
257	30	53	Irritability and overly sensitive after surgery Won’t let anyone touch or examine them Not happy with anything or anyone	27	2025-11-03 14:14:19.920179
258	30	149	Post-op infections High fever Body aches	28	2025-11-03 14:14:19.920179
259	30	150	Pain from amputation Cuts to the eye Cuts penetrating to the bone	29	2025-11-03 14:14:19.920179
261	31	43	Right side Sudden onset Very intense throbbing Pressing outward sensation Begins in right at rear of head extends to right forehead or eye Bounding pulse in head and throat sharp pain with each pulse Hands and feet cold during headache Head hot, face red Scalp sensitive Worse: 3PM jarring light/sun stooping menses menopause lying down	1	2025-11-03 14:14:19.920179
262	31	152	Right side Begins in back of head or right shoulder/neck goes to right forehead/eye Nausea and vomiting Veins in temples distended Dizziness May get headaches in consistent pattern Better: sleep after vomiting Worse: prior to menses sun morning	2	2025-11-03 14:14:19.920179
263	31	153	Usually right sided but may alternate sides Classical migraine Begins with visual aura Nausea, vomiting (mostly bile) Blurry vision/blindness during headache Increased saliva Weekly migraines Worse: sweets heat Better: fresh air gentle motion	3	2025-11-03 14:14:19.920179
264	31	154	Sensation of a nail especially over right eye Eyelids twitch	4	2025-11-03 14:14:19.920179
265	31	155	Above right eye may extend to top of head to neck or right shoulder blade may have other right sided pain May crave hot drinks Better: eating	5	2025-11-03 14:14:19.920179
266	31	10	Starts on right side Temples feel as if they are being screwed together This person may be prone to gas or other gastric complaints dizziness Worse: 4-8pm warm rooms concentrating Better: fresh air	6	2025-11-03 14:14:19.920179
267	31	156	Right forehead or above right eye Worse: before a storm alcoholic drinks	7	2025-11-03 14:14:19.920179
268	31	157	Right eye or whole right side/face Pain recurs at exactly the same hour daily every other day weekly periodically	8	2025-11-03 14:14:19.920179
269	31	158	Right forehead may radiate to back of head May feel like “there is a tumor inside”	9	2025-11-03 14:14:19.920179
270	31	84	Pain over left eye (forehead) extends to back of head then whole head may be right sided Pressing sensation in head Thirsty, gulps fluids Wants to lie still, be left alone hurts to move Nausea, constipation Irritable Worse: slightest motion, even moving eyes 9PM cough stooping if constipated before menses Better: pressure lying on painful side cold applications	10	2025-11-03 14:14:19.920179
271	31	159	Left forehead above left eye in left eye Stitching pain or nerve-like pain Pulsating pain with heartbeat Head sensitive to touch Worse: jarring/sudden movement smoke Better: cold applications	11	2025-11-03 14:14:19.920179
272	31	108	Left side or forehead root of nose Bursting sensation Head feels full Head feels hot Worse: on waking in morning tight collars aggravate menopause prior to menses warmth sun Better: when menses begins after eating	12	2025-11-03 14:14:19.920179
273	31	103	Left side Headaches with nausea Extremities cold Worse: menses (before, during) pregnancy menopause warm rooms jarring light Better: vomiting eating vigorous exercise or lying down	13	2025-11-03 14:14:19.920179
274	31	27	Left forehead Feels as if a nail extends backward into brain Worse: after midnight in bed Better: pressure open air warm applications bending head backwards	14	2025-11-03 14:14:19.920179
275	31	160	Post-spinal anesthesia headache Begins shortly after spinal puncture Worse when upright Better lying down – symptoms disappear	15	2025-11-03 14:14:19.920179
276	31	128	First remedy for headache from injury Head feels bruised Occasional sharp pain	16	2025-11-03 14:14:19.920179
277	31	161	Tearing headache Throbbing in brain Pain from top of head to between eyebrows Pain in left forehead as if crushed Better: open air	17	2025-11-03 14:14:19.920179
278	31	88	Throbbing, blinding headache Bursting pain Like a hammer beating the head Vise-like pain May be preceded by numbness/tingling lips, nose, tongue Worse: morning on waking 10AM or 10AM-3PM after grief sun schoolgirls who are serious and tense reading (eye strain) Better: firm pressure	18	2025-11-03 14:14:19.920179
279	31	52	Sudden onset possibly after exposure to cold wind Violent pain Feels like a band around head or bursting pain in forehead like brains being forced out of head Restless, anxious, apprehensive Thirsty Worse: evening/night warm room Better: fresh air	19	2025-11-03 14:14:19.920179
280	31	42	Congestive headache Heavy eyes Headache associated with diarrhea Better: cold applications	20	2025-11-03 14:14:19.920179
281	31	51	Feels like a nail was driven into head Restless Excitable Overly sensitive to noise, touch, odors May have trouble sleeping	21	2025-11-03 14:14:19.920179
282	31	162	Throbbing, pounding pain as if head would burst every heartbeat causes throbbing Pain increases and decreases with sun’s rise and fall Red face Faintness Irritable Worse: sun (over-exposure to sun may bring it on) heat Better: cold applications shade wearing a hat sunset	22	2025-11-03 14:14:19.920179
283	31	163	Sinus headache When nasal/sinus discharge is present, it is: thick, stringy, greenish color Worse: motion stooping/bending warmth Better: fresh air	23	2025-11-03 14:14:19.920179
284	31	164	Red face Bursting pain Nausea Pain better with: nose bleed other loss of blood	24	2025-11-03 14:14:19.920179
285	31	7	Headaches that change symptoms changing locations Sinus headache Weeps easily Worse: heat sun stuffy or warm rooms getting overheated menses rich, fatty foods Better: fresh air firm pressure	25	2025-11-03 14:14:19.920179
286	31	33	Begins back of head or neck extends over head to forehead Dull, drowsy with droopy eyelids Heaviness/fullness in head barely holds head up Mind fog Blurred vision Pupils dilated Cold feet Weak, trembling May come on after: bad news emotional excitement fear Worse: 10am Better: after urination	26	2025-11-03 14:14:19.920179
287	31	165	Headaches in schoolchildren may also get stomaches Headaches from over study	27	2025-11-03 14:14:19.920179
288	31	69	Headache from stress and over worry Worse: cold damp	28	2025-11-03 14:14:19.920179
289	31	166	Pain over back of head, top of head or top of the neck Painfully stiff neck Pain as if the top of head will fly off	29	2025-11-03 14:14:19.920179
290	31	54	Headache from grief/worry over loved one Dizziness or faintness Nausea/vomiting Worse: riding in a car loss of sleep	30	2025-11-03 14:14:19.920179
291	31	167	Headache with severe nausea and vomiting Urinates a lot during headache	31	2025-11-03 14:14:19.920179
292	31	168	Headache alternates sides (similar to Iris v.)	32	2025-11-03 14:14:19.920179
293	31	41	Migraines, tension headaches head feels heavy Irritability Overly sensitive to everything Dizziness Type A personalities Worse: cold alcohol stress overwork anger mental exertion overeating lack of sleep Better: warmth/warm applications evening/in bed	33	2025-11-03 14:14:19.920179
294	31	49	Migraine with burning/pulsing pain Hunger before/during headache Worse: fasting light Better: after sleeping cold air/applications fresh air	34	2025-11-03 14:14:19.920179
295	31	29	Pain starts at back of head, then settles over one eye Headaches may bring on sweaty forehead Headache over both or one eye Worse: cold drafts of air Better: keeping head warmly/tightly covered closing eyes in a quiet, dark room	35	2025-11-03 14:14:19.920179
296	31	95	Headache after argument Feels “like a block of wood” inside head Worse: grief suppressed anger indignation	36	2025-11-03 14:14:19.920179
297	31	12	Headache feels like a band around the head feels constricted or full Head feels hot Nausea Weekend headaches Irritability during headache Worse: winter over heated standing Better: cold applications	37	2025-11-03 14:14:19.920179
298	31	81	Headache after excess mental exertion With weakness in stomach	38	2025-11-03 14:14:19.920179
299	31	55	Headache after grieving Headache after significant emotional event Feels like tight band across forehead or nail being driven out side of head May tend to sigh May also have lump feeling in throat	39	2025-11-03 14:14:19.920179
300	31	22	Stinging or burning or stabbing headache May come on suddenly Head feels full Body/scalp feels bruised/sore Worse: heat	40	2025-11-03 14:14:19.920179
322	34	52	Sudden onset of symptoms after exposure to cold, dry wind Anxious and fearful of dying especially if onset is at night Worse: Symptoms arising after cold air/wind	1	2025-11-03 14:14:19.920179
324	34	79	Tightness in chest Short of breath Rattling in chest Afraid to lay down – fear of suffocation Anxious, restless, agitated, fearful Weakness Thirsty for small sips of water After colds, bronchitis or allergies In the elderly, symptoms arise when walking Pressure about the heart Worse with movement Very chilly Thirsty for small sips of warm drinks Tired and weak If worse after Arsenicum: Ipecachuana should follow or Nux vomica if worse in am Worse: Around midnight Better: Sitting erect Warmth	3	2025-11-03 14:14:19.920179
325	34	129	Asthma during damp weather Holds chest to cough Stitching chest pain Thick ropy yellow-green phlegm Rattling in chest Diarrhea with asthma Sometimes follows a grief More common in children Worse: Wet weather 4-5am Better: Dry, open air	4	2025-11-03 14:14:19.920179
326	34	41	Asthma with upset stomach May feel fullness in stomach Choking Anxiety Humming in ears Hay fever may bring on symptoms Irritable or violent Worse: mornings, 4am after eating when angry dry weather Better: damp weather	5	2025-11-03 14:14:19.920179
327	34	7	Sweet, affectionate, tearful, clingy Highly impressionable children if parents are worried, she will worry Yellow/green phlegm Dizziness, weakness in head Heart palpitations Heat in the chest Breath feels stopped in lower chest Thirstless Worse: Warm, stuffy room Warm weather Eating fatty or rich food Evening/night Better: Open air Cool air Sympathy, consolation, attention	6	2025-11-03 14:14:19.920179
328	34	118	Spasms in lungs and rest of body Sudden onset with nausea Vomiting relieves asthma symptoms Sense of suffocation Blue tinges Worse: night emotions Better: coughing up phlegm	7	2025-11-03 14:14:19.920179
329	34	189	With nausea or headache Sticking pains in chest to back Alternates with diarrhea or dizziness Sweaty, weak Prefers company Sits with face on knees Pale Chilly Worse: 2-4am cold air when worried or anxious Better: sitting up warmth	8	2025-11-03 14:14:19.920179
330	34	190	Symptoms arise during sleep Quick, labored breathing Loud wheezing sense of suffocation Sense of weight on chest Fear of suffocation Heat Trembling Blue extremities Speaks in a whisper Sweats while awake but not when asleep Worse: 3am lying down Better: sitting up	9	2025-11-03 14:14:19.920179
331	34	191	Dry, barking cough or wheezing (like croup) No phlegm Noisy breathing sounds like whistling or sawing more pronounced than for other remedies Hoarse voice Worse: Cold air Warm rooms Tobacco smoke Talking Falling asleep When coming down with a cold Lying down Motion Better: Food/drink (especially warm) Sitting up/leaning forward When leaning head back	10	2025-11-03 14:14:19.920179
332	34	53	Symptoms arise after becoming angry In children, after a tantrum Angry and impatient Frequent inclination to cough without actually coughing Better: Tilting head back to breathe Cold air Drinking cold water	11	2025-11-03 14:14:19.920179
333	34	49	Coughing a lot Phlegm is liquid with minute air bubbles yellowish or brownish Very thirsty Worse: night early morning hours over-exertion previous day exposure previous day	12	2025-11-03 14:14:19.920179
334	34	192	Sense of constriction in chest Wheezing not as raspy as in Spongia With nausea, vomiting Prickling sensation all over precedes asthma Hyperventilation Faintness Sweats Rattling phlegm Fearful Worse: After sleep After being chilled Breathing cold air Better: Warmth Evening	13	2025-11-03 14:14:19.920179
335	34	8	Asthma after spasmodic coughing spell with nausea and vomiting Fighting for air Worse: eating talking evening	14	2025-11-03 14:14:19.920179
336	34	84	Dry wheezing Warm Thirsty for large gulps Irritable Wants to be left alone Worse: any movement	15	2025-11-03 14:14:19.920179
337	34	111	Rattly, mucusy breathing mucus can’t be coughed up Exhaustion Weakness Pale Cold Clammy	16	2025-11-03 14:14:19.920179
338	34	108	Tight, constricted feeling in throat Sits hunched forward Cannot tolerate anything around neck Worse: morning on waking	17	2025-11-03 14:14:19.920179
340	34	55	Attack associated with grief	19	2025-11-03 14:14:19.920179
341	34	194	Asthma with craving for fresh air Great oppression/full sensation in chest Fresh air improves symptoms	20	2025-11-03 14:14:19.920179
342	34	195	Asthma/bronchospasm worse by: wet/rainy weather damp/humid weather dark change of weather An option if Arsenicum has failed to act	21	2025-11-03 14:14:19.920179
343	34	196	Allergic bronchospasm Allergic wheeze Dust aggravates	22	2025-11-03 14:14:19.920179
344	35	197	Intense, constant urge to urinate Severe burning with every drop each drop feels like acid shrieks with pain during urination Pain before, during and after urination Feels would be better if bladder empty Spasm at end of urination May have tingling sensation in genitals Scanty amount when urinating May be blood tinged Lower abdomen may be uncomfortable Better: cold applications	1	2025-11-03 14:14:19.920179
345	35	95	Painful urination after intercourse, rape or catheterization Burning pain after urination Constant desire May feel like a drop of urine is constantly in urethra Constant burning with feeling of pressure May occur after abuse or embarrasment Worse: after intercourse	2	2025-11-03 14:14:19.920179
547	51	286	Seasonal allergies Itchy mouth Watery eyes and nose Loss of smell	1	2025-11-03 14:14:19.920179
346	35	41	Full feeling with constant/frequent urge Only produces small amount unsatisfying result Temporary relief when urinating small amounts Itching/needle-like feeling in urethra when urinating Better: warm applications evening Worse: anger when chilled coffee, alcohol	3	2025-11-03 14:14:19.920179
347	35	198	Constant urging feels like will never get done Urine passes in small amounts (drop by drop) Straining but incomplete emptying Urine hot, scalding Burning or stabbing pain in urethra to bladder May be bloody Increased perspiration Worse at night	4	2025-11-03 14:14:19.920179
348	35	199	Severe pain at end of urination pain with last few drops Much urine produced Burning with constant urging Must stand to urinate. Urine dribbles when sitting.	5	2025-11-03 14:14:19.920179
349	35	200	Cutting/radiating/burning pain from kidney Into pelvis/thighs/bladder Incomplete feeling Cloudy, mucusy or bloody urine Dull ache in kidney area Worse with pressure, motion, jarring Worse: standing slight motion Better: splinting the affected side	6	2025-11-03 14:14:19.920179
350	35	22	Burning/stinging/sharp pain Frequent urging especially before menses Increased urge to urinate but has to strain Urine may be scanty, hot, may be bloody Urinary retention especially newborns Worse: heat Better cold	7	2025-11-03 14:14:19.920179
351	35	7	Pain rises every moment urge is postponed Pain irregular, spasmodic Pain during/after urinating and when lying down Strong urging, difficulty holding urine in Thirstless Bedwetting at night Better in open air	8	2025-11-03 14:14:19.920179
352	35	201	Sharp, burning pain at end or after urination Pressure and full sensation even when empty Urging and fullness not better after urinating Urging increases as volume decreases Burning pain Urine retention after childbirth Nighttime bedwetting	9	2025-11-03 14:14:19.920179
353	35	202	Children often affected Itching/crawling feeling deep in urethra or neck of bladder Sudden urges -jumps with pain Must go immediately or very painful	10	2025-11-03 14:14:19.920179
354	35	52	Urine retention especially after labor or in newborns May come on suddenly after exposure to cold Holds genitals	11	2025-11-03 14:14:19.920179
355	35	43	Urine retention Sudden urges Urging remains after urinating Sensation of something moving in bladder Sudden onset with high fever Worse: coughing moving jarring	12	2025-11-03 14:14:19.920179
356	35	10	Red sand in urine Frequent painful urging, but takes long to pass urine Bearing down sensation in bladder Worse 4-8pm	13	2025-11-03 14:14:19.920179
358	35	65	Unable to urinate if urine stays too long in bladder Difficult urinating after catheterization, childbirth Worse: when chilled after childbirth	15	2025-11-03 14:14:19.920179
359	35	67	Pain and urging worse when chilled Painful retention Worse: cold weather Autumn	16	2025-11-03 14:14:19.920179
360	35	44	Pressure in bladder Stitching pain Urine offensive smelling smells like horse urine	17	2025-11-03 14:14:19.920179
361	35	203	Burning extending to kidneys Urine smokey colored Urine smells like violets Better: walking in open air	18	2025-11-03 14:14:19.920179
362	35	27	Sudden, painful urging Urine comes in a forked stream	19	2025-11-03 14:14:19.920179
363	36	204	Post-nasal drip Sinus headache Inflammation Hawking Mucus	1	2025-11-03 14:14:19.920179
365	36	43	Sudden onset Pulsing pain in sinuses Temperature elevated Face hot and red Worse by least pressure or lying down	3	2025-11-03 14:14:19.920179
366	36	163	Thick, stringy, sticky yellow/green mucus Nose stuffed but difficult to blow out Thick post nasal drip Pain, pressure, fullness, burning Near eyes If discharge stops, may get headache Back of head to forehead Better with warmth	4	2025-11-03 14:14:19.920179
367	36	102	Symptoms may follow a cold Painful facial bones or Pain in forehead, near or between eyes Thick, smelly nasal drainage and sore nose Must blow nose often May hurt to blow nose Nose sensitive as air passes over passages Very chilly – sensitive to drafts/ cold Must stayed bundled up Better with warm applications, worse with cold Irritable	5	2025-11-03 14:14:19.920179
368	36	206	Sneezing Runny, irritating nasal mucus Greenish nasal mucus, smells bad Bad breath Excess salivation (pillow gets wet) Tongue coated yellow Head pain like in a vise Pain in forehead, teeth, cheeks, or ears Thirsty, weak, trembling Changes between chills and sweating Worse at night	6	2025-11-03 14:14:19.920179
369	36	7	Nasal discharge – thick yellow/white Discharge stopped at night, flows in morning Soreness over sinuses/bones in face/cheeks Thirstless, but prefers cold drinks Weepy, better with consolation, sympathy Better in cool air, fresh air Worse in warm, stuffy room	7	2025-11-03 14:14:19.920179
370	36	207	Thick yellow/green, sticky, ropy nasal mucus Drains from back of nose down throat Sore throat Burning pains Tendency to blow nose a lot (mucus burns) Tendency towards constipation	8	2025-11-03 14:14:19.920179
371	36	208	Recurring sinus infections Burning and throbbing pain Pain through face and between eyes Nose sore, raw, hot Burning when breathing through nose Warm blooded May be irritable	9	2025-11-03 14:14:19.920179
372	36	29	Throbbing, tearing pain in facial bones/nose Headache over one eye Itching on tip of nose Sweaty feet Chilly Thirsty Better with warmth	10	2025-11-03 14:14:19.920179
373	36	49	Mucus yellow/greenish, may be blood streaked Nose alternates between stuffed and runny Dull pain in forehead or between eyes into upper eyelids Sore throat/hoarseness Taste and smell loss Thirsty for cold drinks	11	2025-11-03 14:14:19.920179
374	38	43	Early onset Redness, swollen and throbbing Gum boil	1	2025-11-03 14:14:19.920179
375	38	209	Acute onset Swelling from abscess runs down into neck	2	2025-11-03 14:14:19.920179
377	38	29	Tooth abscess or cavities Swollen face or glands Pain worse with hot or cold in mouth Better: warmth to the face	4	2025-11-03 14:14:19.920179
378	38	206	Tooth abscess/cavities Foul breath and foul taste in mouth Throbbing pain Increased salivation Spongy gums Worse at night Better with rubbing	5	2025-11-03 14:14:19.920179
379	38	211	Infection post-extraction Smells bad Painful	6	2025-11-03 14:14:19.920179
380	39	212	Hoarseness Red, dry and sore throat	1	2025-11-03 14:14:19.920179
381	39	213	General sore throat relief	2	2025-11-03 14:14:19.920179
383	39	43	Onset: sudden Dry, painful, burning throat (right side often) Fever with flushed, intensely hot face and cold hands/feet Constant urge to swallow Throat feels constricted/difficult to swallow Swollen glands Thirstless but may crave lemons/lemonade Possible confusion in children with fever Better with warmth, warm applications	4	2025-11-03 14:14:19.920179
384	39	83	Non-intense symptoms Sore throat with mild fever Burning pain on swallowing Hoarseness from overuse of voice Very weak, tired Better with cold applications	5	2025-11-03 14:14:19.920179
385	39	102	Onset: sudden Very chilly Sensation of sharp stick/splinter in throat Throat feels swollen inside Swallowing may cause pain into ears Perspiration Irritable Better with warmth, warm applications to throat	6	2025-11-03 14:14:19.920179
386	39	108	Onset: night or waking up Pain starts on left side, spreads to the right Sensation of lump/swelling in throat Pain worse on swallowing, especially hot drinks Urge to swallow a lot Increased saliva Phlegm accumulates in throat Talkative despite pain Does not tolerate tight clothing around neck Better swallowing cold food and drink	7	2025-11-03 14:14:19.920179
387	39	215	Sore, raw, burning throat, hurts to swallow Pricking pain on swallowing from throat to: ears, glands or lower jaw Fever Thirsty Urge to swallow a lot/increased saliva/drooling Tongue coated yellow Swollen glands Alternates between being hot and cold Perspiration and breath smell bad Metallic taste in mouth Worse at night	8	2025-11-03 14:14:19.920179
388	39	141	Burning, raw throat Throat feels rough, narrow and hot Throat is dark red or bluish in color Sensation of lump in throat Shooting pain into ears when swallowing Pain at back of tongue Constant urge to swallow (even though it hurts) Achey and feverish Swollen glands Cannot swallow hot food or drink	9	2025-11-03 14:14:19.920179
389	39	22	Throat swollen, hurts even when not swallowing Dry with burning, stinging pain Dry mouth, lack of thirst Feels like fishbone stuck in throat Hoarse in mornings Does not want anything around neck Sore throat due to allergy Irritable Worse with warmth, swallowing solids	10	2025-11-03 14:14:19.920179
390	39	10	Right sided often, or starts on right side Sensation of lump in throat Throat feels raw Recurrent sore throat Dry throat Pockets of hard pus in tonsils May be pain into ears Lingering smell of bad breath Better with warmth around neck, warm drinks	11	2025-11-03 14:14:19.920179
393	40	218	Allergy to shellfish/fish Allergy to water (bathing causes rash) Red raised itchy blotches Hives/blotches burn and itch May feel like bugs on skin Better: rubbing Worse: cool bathing	1	2025-11-03 14:14:19.920179
394	40	22	Allergy to bee stings, insect bites Hives with stinging pain Sudden swelling, redness, heat, itching Swollen or bloodshot eyes Better: cold compresses Worse: heat, touch	2	2025-11-03 14:14:19.920179
396	40	220	Pustules or small blisters, moist, smell bad Itchy Spreads from site of initial eruption Slow to heal	4	2025-11-03 14:14:19.920179
397	40	12	Hives, poison ivy, other allergic reactions Redness Burning Swelling Itching – scratching makes it worse Hot to touch Worse: heat warmth of bed	5	2025-11-03 14:14:19.920179
398	40	18	Moist rash oozing a honey-like substance Rash crusts over Skin cracked and dry in places	6	2025-11-03 14:14:19.920179
400	41	54	Nausea and vomiting	1	2025-11-03 14:14:19.920179
401	41	128	Effects of shock to system Cramped in seat for too long	2	2025-11-03 14:14:19.920179
402	41	33	Droopy, dull, drowsy Can’t keep eyes open Limbs feel weak	3	2025-11-03 14:14:19.920179
404	42	222	General motion sickness symptoms	1	2025-11-03 14:14:19.920179
405	42	223	Primary remedy for any motion sickness Worse in open air Better lying on side in warm room	2	2025-11-03 14:14:19.920179
406	42	224	Another primary remedy for any motion sickness Pale, cold, faint, sweaty Very nauseated Sinking feeling in stomach Increased salivation Desire for fresh air	3	2025-11-03 14:14:19.920179
407	42	225	Any motion sickness Dizziness worse when standing or sitting up Empty feeling in stomach Nausea with increased salivation May be worse in open air	4	2025-11-03 14:14:19.920179
408	42	41	Wants to vomit but can’t Better after vomiting	5	2025-11-03 14:14:19.920179
409	42	48	Worse with downward motion	6	2025-11-03 14:14:19.920179
410	42	103	Motion sickness from watching moving objects	7	2025-11-03 14:14:19.920179
411	43	41	Hangover after excess alcohol or drug use Headache Dull, dizzy Irritable Head feels as if beaten	1	2025-11-03 14:14:19.920179
413	43	163	Nausea and vomiting after beer	3	2025-11-03 14:14:19.920179
414	43	53	Headache Grouchy Head feels sore Wants to be left alone	4	2025-11-03 14:14:19.920179
415	43	74	Headache Head overly sensitive Mind racing Worse: tea coffee	5	2025-11-03 14:14:19.920179
416	43	7	Headache Feels weepy Can be caused by alcohol or rich food	6	2025-11-03 14:14:19.920179
417	45	227	General cold symptoms This medicine is a combination of many of the remedies listed in this chart	1	2025-11-03 14:14:19.920179
418	45	228	Cough, mucus and congestion	2	2025-11-03 14:14:19.920179
419	45	229	Daytime and Nighttime cold and cough relief	3	2025-11-03 14:14:19.920179
420	45	230	Runny nose Sore throat Sneezing Cough	4	2025-11-03 14:14:19.920179
421	45	52	Take at the first sign of a cold coming on Sudden onset after exposure to cold/wind. Nose blocked, mucus membranes dry Fever, chill, thirsty for cold drinks Better: open air	5	2025-11-03 14:14:19.920179
422	45	231	Profuse, clear, watery nasal discharge Nasal mucus burns nose and upper lip Eyes may be irritated and teary Headache with runny nose Sneezing Better: fresh air cold room Worse: warmth	6	2025-11-03 14:14:19.920179
423	45	79	Profuse, clear, watery nasal discharge Nasal mucus burns nose and upper lip Nose runs yet feels stuffy Very chilly, needs heat Prefers frequent sips of water Sneezing Restless, anxious Worse: night if chilled Better: warmth	7	2025-11-03 14:14:19.920179
424	45	232	Runny nose irritates skin and throat Alternates with stuffy nose and mouth breathing Urge to bore into nose Nose margins, corners of lips crack	8	2025-11-03 14:14:19.920179
425	45	233	Runny nose with swollen upper lip and nose Glands around ears painful and swollen	9	2025-11-03 14:14:19.920179
426	45	43	Early stage of cold Sudden onset Head may feel hot Runny nose May desire lemons or lemonade	10	2025-11-03 14:14:19.920179
427	45	84	When cold has moved to chest Wants to be left alone, lie still and not move Dry lips, mouth, throat Tremendous thirst – gulps fluid Better: alone coolness open air	11	2025-11-03 14:14:19.920179
429	45	101	Profuse burning tears Eyes burning, irritated, swollen lids Runny nose – non-irritating, with cough Sneezing	13	2025-11-03 14:14:19.920179
430	45	83	Slow onset Early cold without marked symptoms May have mild fever Poor appetite, little thirst Worse: exertion early morning	14	2025-11-03 14:14:19.920179
548	51	287	When symptoms first start	2	2025-11-03 14:14:19.920179
431	45	33	Achey, weak, exhausted, shaky Heavy, droopy eyelids, drowsy Head feels heavy and mind dull Headache starting at nape of neck Chills run up and down back	15	2025-11-03 14:14:19.920179
432	45	102	For later stages of cold Profuse thick, yellow mucus Old cheese smell in nose Very sensitive to cold air, cold food/drinks Wants warm wraps, warm baths Irritable	16	2025-11-03 14:14:19.920179
433	45	207	Thick nasal discharge with burning pain Sinus congestion	17	2025-11-03 14:14:19.920179
434	45	163	Later stages of colds Thick, yellow/green, gluey, stringy mucus Nose crusty Pain and fullness at root of nose (near eyes) Better: warmth open air pressure	18	2025-11-03 14:14:19.920179
435	45	235	For a general decongestant effect May be taken in between doses of main remedy	19	2025-11-03 14:14:19.920179
436	45	236	Thick, grayish or yellowish nasal discharge Chest rattles with breathing or cough Similar to Pulsatilla, but more irritable Better: fresh air	20	2025-11-03 14:14:19.920179
437	45	206	Thick yellow-green discharges Discharges smell bad, bad breath Increased salivation Swollen glands, may be painful Fatigue Chills alternate with feeling hot Tongue thickly coated and may seem enlarged Worse: night	21	2025-11-03 14:14:19.920179
438	45	31	For later stage colds Sinus pain in upper jaw and teeth Better warm compresses Dry cough with retching and vomiting Worse evening and night In morning, coughs up mucus Mucus has salty taste or old tasting Worse: eating night	22	2025-11-03 14:14:19.920179
439	45	88	Nose runs “like a tap” Mucus watery or like egg whites Sneezing, worse in morning Nose alternates being runny or stuffed Shuns sympathy Worse: heat around 10am Better: open air	23	2025-11-03 14:14:19.920179
440	45	41	Daytime – watery runny nose Nighttime – stuffy Nose runs in a warm room, stuffy outside Very chilly, can’t get warm Achey, dull headache Irritable, impatient, easily offended Worse: morning open air overeating coffee alcohol tobacco anger	24	2025-11-03 14:14:19.920179
441	45	49	Recurrent respiratory infections Tendency for colds to quickly go to the chest Lingering, tickley cough Prefers ice cold drinks	25	2025-11-03 14:14:19.920179
442	45	7	Later stage of a cold Thick, stringy, yellow/green mucus, smells bad Mucus hangs out of child’s nose like candlesticks Loose cough in morning, dry at night Gentle, affectionate, craves attention, sympathy Symptoms and mood very changeable Worse: morning Better: open air	26	2025-11-03 14:14:19.920179
443	45	15	Achey, stiff feeling on first movement Better with continued motion, activity Restless. Prefers to move around Chilly Desires warmth and hot drinks	27	2025-11-03 14:14:19.920179
444	45	237	Nasal mucus dries quickly forming crusts/scabs Feeling of fullness at root of nose (near eyes) Constant need to blow nose but no discharge	28	2025-11-03 14:14:19.920179
445	45	190	Colds commonly seen in infants Nose blocked and breathing is obstructed Sweats a lot	29	2025-11-03 14:14:19.920179
446	46	238	Croupy coughs Congestion Increased thirst Loss of smell	1	2025-11-03 14:14:19.920179
447	46	239	Multiple symptoms Dry and productive coughs	2	2025-11-03 14:14:19.920179
448	46	240	Day and Nighttime cold and cough relief Children	3	2025-11-03 14:14:19.920179
449	46	241	Nighttime or Daytime Cough suppressant Nighttime expectorant	4	2025-11-03 14:14:19.920179
450	46	242	Cough and mucus due to common cold Adults	5	2025-11-03 14:14:19.920179
451	46	52	Sudden onset (often after exposure to cold dry air or wind) Constant, dry, raspy, barking cough or dry tickly cough with runny nose Anxious, restless, fearful Thirsty for cold drinks Better: open air	6	2025-11-03 14:14:19.920179
452	46	83	First stage of all inflammatory conditions Slow onset with non-intense symptoms Dry hacking cough Worse: morning after eating cold air	7	2025-11-03 14:14:19.920179
453	46	79	Lungs feel congested, may have darting, burning pain, especially upper right side Dry, wheezing cough, phlegm may be frothy, worse lying down Thirsty but drinks only small sips Chilly, weak, restless, desires company and warmth Worse: after midnight	8	2025-11-03 14:14:19.920179
454	46	43	Early stage, especially after being chilled Tickling, dry short cough worse at night Larynx painful Throbbing headache Fever but extremities cold Restless, thirstless	9	2025-11-03 14:14:19.920179
455	46	84	Dry, hacking cough with tearing/stitching pain, may have to brace chest to cough not much comes up Dry lips, mouth, throat Thirsty – gulps fluids Irritable – wants to be left alone and lie still Headache Better: hard pressure rest – lying still being left alone cool drinks Worse: even the slightest movement breathing deeply sitting upright warm room	10	2025-11-03 14:14:19.920179
456	46	243	Dry, hacking cough Offensive breath from lungs Pain in distant parts when coughing reaches out to hold/touch that part	11	2025-11-03 14:14:19.920179
457	46	244	Dry, spasmodic cough Tickling in throat from thick mucus May have choking with cough ending in vomiting clear, ropy mucus Worse: brushing teeth early am and near midnight warm food and drinks Better: cool air cool drinks	12	2025-11-03 14:14:19.920179
458	46	65	Dry cough – throat dry exhausting little comes up Desire to cough more and more deeply to dislodge thick mucus in chest Too thick to bring up Swallows what does come up Hoarseness/raw throat Cough can cause loss of urine Better: drinks of water to soothe dry throat prefers cold drinks warmth wet weather Worse: bending forward stooping cold air when heated in bed	13	2025-11-03 14:14:19.920179
459	46	245	Violent prolonged coughing attack Machine gun-like cough coughs in rapid succession May end in vomiting of mucus and exhaustion	14	2025-11-03 14:14:19.920179
460	46	246	Dry, painful, spasmodic, prolonged cough can’t catch breath Cough sounds croupy, barking or ringing Whooping cough May have to brace chest to cough due to pain Cough may end in vomiting or nosebleed Tinkling in throat causes cough Hoarseness May follow after having measles Worse: lying down talking, laughing, singing drinking/eating after midnight Better: in open air	15	2025-11-03 14:14:19.920179
461	46	59	Extremely loud cough louder than other coughs Dry, hacking, spasmodic Worse lying down	16	2025-11-03 14:14:19.920179
462	46	163	colds and coughs Dry, metallic, hacking cough Profuse thick, yellow or yellowish-green, gluey, stringy mucus Cough with pain in sternum radiating to back or where airway divides in two going to lungs May have sinus pain near eyes or bridge of nose Better: heat warm drinks	17	2025-11-03 14:14:19.920179
463	46	189	Dry, violent, racking cough wheezing and gagging Mucus coughed up is sticky can fly out of the mouth Stitching pain in chest to the back Cough with swelling of upper eyelids Chilly Worse: 2-5am deep breathing becoming cold Better: sitting up/leaning forward	18	2025-11-03 14:14:19.920179
464	46	160	Dry cough Colds that turn into bronchitis Difficult expectoration of lumps of mucus lumpy yellow mucus Irritation mid-sternum Better: lying down	19	2025-11-03 14:14:19.920179
465	46	247	Violent cough at night Spasmodic like whooping cough Cough with vomiting after eating seen in children usually Better: cold water and weather	20	2025-11-03 14:14:19.920179
549	51	288	Itchy nose throat Watery, itchy eyes Runny nose Sneezing	3	2025-11-03 14:14:19.920179
550	51	289	General hay fever symptoms Sneezing Wheezing Dyspepsia Itching of the skin	4	2025-11-03 14:14:19.920179
466	46	31	For later stage colds Sinus pain in upper jaw and teeth relieved by warm compresses Dry cough with retching and vomiting evening and night In morning, coughs up yellow or egg white mucus with salty taste or old tasting Worse: eating night	21	2025-11-03 14:14:19.920179
467	46	41	Dry cough remaining after other cold symptoms have gone Cough brings on bursting headache and bruised sensation in upper abdomen Hoarseness May be feverish, chilly Irritable and over sensitive	22	2025-11-03 14:14:19.920179
468	46	15	Dry, short, tickling cough, worse in morning May cough up small mucus plugs Hoarseness, scratchy throat Tip of tongue may be red Restless Chilly Worse: after rest first motion Better: continued motion warm drinks warmth	23	2025-11-03 14:14:19.920179
469	46	248	Dry, tickling coughing in fits – prevents sleep Cough triggered by: air passing down windpipe, or pressure on throat Burning, stitching or bruised feeling in chest or below collar bone Large amount of mucus in nose and throat May cover face or neck due to cold air Skin may itch Worse: on waking talking cold air 11PM uncovering Better: covering mouth/neck	24	2025-11-03 14:14:19.920179
470	46	249	Barking cough Similar to Hepar Sulphur cough but much perspiration Anxious Child awakes suddenly, sits up, turns blue sense of suffocation Worse: around midnight	25	2025-11-03 14:14:19.920179
471	46	250	Dry, barking, croupy cough Sound like a hand saw going through wood Hoarse rasping, whistling breathing May wake with sense of suffocation/anxiety Anxious Better: after eating/drinking especially warm things outside, in open air warm drinks Worse: breathing in deeply before midnight cold, dry wind lying with head low midnight talking	26	2025-11-03 14:14:19.920179
472	46	111	Mucus rattles around in chest but little comes up Chest full of mucus too weak to bring mucus up Drowsy, debilitated, covered in cold sweat Pale and chilly Dizziness	27	2025-11-03 14:14:19.920179
473	46	251	Wheezy cough Lots of mucus rattles in lungs Old age	28	2025-11-03 14:14:19.920179
474	46	102	Later stages of cold, cough/croup Loose, rattly, hoarse, croupy, barking cough may have wheezing Coughing leads to choking/suffocation sensation Thick, sticky, yellowish phlegm with cough Raw throat Hoarseness May be wet in morning/dry during day Chilly, irritable Better: wrapped up covering head warm, moist air (like in a shower) Worse: dry, cold air uncovering drafts before midnight	29	2025-11-03 14:14:19.920179
476	46	49	After cold goes to chest Dry, painful, croupy cough from tickling in throat Pneumonia Afraid to cough because it hurts Tight, constricted feeling in chest Whole body trembles with cough Mucus may be blood tinged Hoarseness Thirsty for cold drinks Prefers company, reassurance Worse: cold air talking. laughing eating lying on left side and back evening and upon rising in am Better: sitting up	31	2025-11-03 14:14:19.920179
477	46	7	Loose in the morning, drier in evening Thick, yellow-greenish mucus Sensation of pressure on the chest Coughing may cause urine to leak Craves fresh, open air and better with cold food/drink Cough may follow measles Thirstless Weepy, sympathetic, clingy Better: attention consolation comforting fresh air – especially cold sitting up Worse: morning warm room lying down evening	32	2025-11-03 14:14:19.920179
478	46	252	Day cough – profuse, loose, greenish, sweetish phlegm Evening cough – violent and dry Chest feels hollow and sore, must hold chest to cough Weak Worse: exertion, even from speaking laughing, talking	33	2025-11-03 14:14:19.920179
480	46	254	Cough that involves two coughs in a row	35	2025-11-03 14:14:19.920179
482	47	256	Take early for general flu symptoms	1	2025-11-03 14:14:19.920179
483	47	257	Weakness Fever Achy sensations Vomiting	2	2025-11-03 14:14:19.920179
484	47	258	General flu relief	3	2025-11-03 14:14:19.920179
485	47	259	Flu prevention	4	2025-11-03 14:14:19.920179
488	47	43	Sudden onset – early stage High fever, cold extremities Red, flushed, hot face Throbbing headache Congestion throughout head Thirstless during fever Worse noise, light, jarring, touch Anxious, confused, appears sedated or delirious May desire lemons, lemonade	7	2025-11-03 14:14:19.920179
489	47	33	Slow onset Feeling mentally dull, drowsy, apathetic Physically exhausted, achy, chilly, weak limbs feel heavy/tremble head feels heavy/neck stiff Droopy eyelids – can’t keep open may have double vision Dull headache Thirstless No sweating Chills run up/down back, trembling with chills or Lingering complaints since having the flu Better: after urination (headache open air sweating	8	2025-11-03 14:14:19.920179
491	47	262	Bone pain, aching muscles all over bones feel broken Eyeballs sore Headache – bursting Fever Shivering/chills Chills worse after drinking Chilly but thirsty for cold drinks Worse: least movement	10	2025-11-03 14:14:19.920179
492	47	79	Sudden onset Profuse discharge from eyes/nose Possible GI symptoms May have had high fever Hot face Chilly and weak Thirsty for smalls sips Restless, nervous, irritable Fear this may be a serious disease If there is a headache, it is not better with warmth Better: open air heat/warmth Worse: around midnight or noon cold air, drinks, food	11	2025-11-03 14:14:19.920179
493	47	41	Very chilly, can’t get warm shivering cold Achey Sensitive to noise, light, odors, touch Face warm but must remain covered Headache, raw sore throat Nasal congestion alternates with clear and runny stopped at night If vomiting, feels better after Irritable Worse: uncovering or draft of air shivers worse after drinking Better: warm drinks, food warmth, in general	12	2025-11-03 14:14:19.920179
494	47	263	Flu after a weakened immune system due to: grief exhaustion illness loss of bodily fluids excesses mental shock Collapsed state Apathetic Craves: fruits, juices very cold	13	2025-11-03 14:14:19.920179
495	47	264	Thick yellow/green mucus Smells sick – Perspiration and breath stink Tongue thickly coated and seems enlarged Increased salivation Sore throat Nose swollen, shiny, sore Chilly Thirsty, hungry Restless Sometimes cold, sometimes feverish Worse: night hot or cold extremes Better: rest no extremes of temperature	14	2025-11-03 14:14:19.920179
496	47	84	Slowly progressing Achey – wants to be left alone and not move Everything is worse with least movement Hot Dry mouth and throat Very thirsty – gulps fluids Headache worse light, noise, least movement Painful cough Back pains Irritable because wants to be left alone Better: cool air open air being left alone pressure on sore parts Worse: warm rooms least movement aggravates symptoms	15	2025-11-03 14:14:19.920179
497	47	265	Sudden onset Exhausted, feels drugged High fever Profuse perspiration Body feels bruised, sore, stiff, muscles heavy Breath, sweat, stool smell bad Vomiting and diarrhea Thirsty Falls asleep mid-sentence Face is discolored a dull red	16	2025-11-03 14:14:19.920179
499	47	149	Chills Heart thumps in chest Rapid pulse Fever alternates with low temp Severe pain in back/limbs Feels as if battered and bruised Bursting headache Bed feels too hard No thirst Restless	18	2025-11-03 14:14:19.920179
500	47	266	Weakness after flu After a lot of fluid loss sweat vomiting diarrhea dehydration	19	2025-11-03 14:14:19.920179
501	47	267	Mildly depressed after the flu	20	2025-11-03 14:14:19.920179
504	48	270	Cold sores Cracked lips Fever blisters Due to common cold or exposure	1	2025-11-03 14:14:19.920179
505	48	271	Canker sores Braces irritation Mouth sores Mouth abrasions	2	2025-11-03 14:14:19.920179
506	48	22	As soon as pain and tingling starts	3	2025-11-03 14:14:19.920179
507	48	206	Take at onset of sores Canker sores, herpes Sores on tongue, gums, mouth, back of throat burn May have increased saliva May have foul breath or bad taste in mouth Tongue may be swollen, coated Bleeding gums Children: Take at onset of first occurrence May decrease frequency in future Worse: night	4	2025-11-03 14:14:19.920179
509	48	265	Ulcers in mouth, throat Increased salivation Mouth lining red, swollen Bad breath Might want to swallow liquids only	6	2025-11-03 14:14:19.920179
510	48	48	Canker sore Sensitive sores in mouth/tongue, bleed easily Ulcerations on chin Mouth hot and tender Shooting pains better with cold May be overly sensitive to up or down motion Fear of downward movement May help children with sores inside cheeks	7	2025-11-03 14:14:19.920179
511	48	69	Children: Recurring canker sores Sores with any mild abrasion to area May also sweat on head while sleeping Slow to teethe or walk Adults: Chilly, overweight, tire easily Bleeding gums Sour taste in mouth	8	2025-11-03 14:14:19.920179
512	48	243	Cracked corner of lips, ulcers on lips Red itchy rash on chin Bad breath Tongue greenish at base Arising more often in inactive people	9	2025-11-03 14:14:19.920179
514	48	18	Lips crack at corners of mouth Sores ooze a sticky, honey like discharge Sores crust over May have sour, rotten egg taste in mouth	11	2025-11-03 14:14:19.920179
515	48	102	Sores that become infected May be chilly, overly sensitive Worse: cold and cold drinks	12	2025-11-03 14:14:19.920179
516	48	274	Mouth lining red with gray-based ulcers Refuses to eat	13	2025-11-03 14:14:19.920179
517	48	31	Thick, whitish crusts Yellow oozing under crusts	14	2025-11-03 14:14:19.920179
518	48	88	Sores of mouth, gums, tongue spread slowly tingly, itchy, dry Small, puffy, burning, pearl-like sores Especially gums and tongue Painful to talk Deeps crack in lips Children: Aggravated by acidic foods Mouth dry Worse: from exposure to sun or grief	15	2025-11-03 14:14:19.920179
519	48	275	Sores on mouth, tongue, or back of upper throat Sores bleed easily Splinter-like/stabbing pain Cracks in lips, especially corners Irritable, sensitive to noise, touch, jarring May be anxious, fearful, irritable Worse: cold air or hot weather Better: warmth	16	2025-11-03 14:14:19.920179
520	48	49	Children: Brought on by lip biting, acidic foods. Desires ice cold drinks	17	2025-11-03 14:14:19.920179
521	48	15	Painful cold sore on lip Small fluid-filled blisters (fever blisters) Blisters in/around lips, corners of mouth Burning/stinging and itchy Tip of tongue may be red Better: warm applications	18	2025-11-03 14:14:19.920179
522	48	276	Many ulcers in mouth Gums bleed easily Whole mouth sore Worse: night	19	2025-11-03 14:14:19.920179
523	48	12	Sores with swollen gums, bleeding red, inflamed, burning, itchy Throbbing pain Tongue may be white Person tends to be warm blooded May have a tendency for itching, skin problems Better: cold applications	20	2025-11-03 14:14:19.920179
524	48	277	Painful sores on tongue, inner cheek Spreading ulcers Gums bleed easily May arise on periodical basis Sores during protracted illness Especially in underweight children	21	2025-11-03 14:14:19.920179
527	49	43	Bad sunburn Red, hot, dry skin Blinding headache Wants to be in dark, cool place	3	2025-11-03 14:14:19.920179
528	49	197	General sunburn	4	2025-11-03 14:14:19.920179
529	49	65	Old sunburn not healing well; still burns, feels raw and sore	5	2025-11-03 14:14:19.920179
530	49	162	Skin burning hot Feels cold inside Pulsations in head and body May have congested headache Does not want anything to touch head	6	2025-11-03 14:14:19.920179
531	49	280	Sunburn preventative or after sunburn	7	2025-11-03 14:14:19.920179
532	49	218	Stinging burn Sunburn pain	8	2025-11-03 14:14:19.920179
533	50	128	Shock/terror and initial swelling that comes from being burned	1	2025-11-03 14:14:19.920179
534	50	218	Minor burn Burn pain – Stinging/Itching (as from scalds) Worse: cold water	2	2025-11-03 14:14:19.920179
537	50	22	Minor burn Localized swelling, redness, pain Stinging, burning Chemical burn of eye Worse from heat Better: cold applications	5	2025-11-03 14:14:19.920179
538	50	197	Second or third degree burn Very painful – raw, smarting Prompt use may prevent blisters Chemical burns to eyes, mouth, throat Better: cold applications wants cold on burn constantly	6	2025-11-03 14:14:19.920179
539	50	163	2nd degree (deep) burns that are slow to heal Burns from steam or vapor	7	2025-11-03 14:14:19.920179
540	50	65	2nd-3rd degree burns that do not heal well Painful burn scar Burn slow to heal Worse: dry cold	8	2025-11-03 14:14:19.920179
541	50	79	Severe 3rd degree burns with Significant anxiety/restless Skin burns like on fire Infected blisters with smelly discharge Refuses cold applications Better: warm applications	9	2025-11-03 14:14:19.920179
542	50	102	Infected burns Preventative in people prone to infection	10	2025-11-03 14:14:19.920179
551	51	290	Seasonal allergies	5	2025-11-03 14:14:19.920179
552	51	231	Watery, red eyes Burning, runny nose or stuffy Tickling, sore throat Sneezing Headache Difficulty thinking Worse warm room, spring and August Better in open, cold air	6	2025-11-03 14:14:19.920179
553	51	79	Burning eyes, tears irritate skin Wheezing and tightness in chest Runny nose: thin, burning or is blocked Throat burns Sneezing without relief Tired, restless, and worried Chilly Better with warmth/hot applications	7	2025-11-03 14:14:19.920179
554	51	291	Burning eyes Irritating dry cough Nose is runny or burning, sore nostrils Throat is burning Sneezing for days followed by thick, honey-colored nasal discharge Sinuses drain watery, burning discharge Better in open air	8	2025-11-03 14:14:19.920179
555	51	232	Burning nasal discharge alternates with stuffiness Mouth breathing Urge to bore into nose Nose margins, corners of lips crack and bleed easily Pain at root of nose (between eyes)	9	2025-11-03 14:14:19.920179
556	51	292	Early hay fever symptoms Itchy ears Nose is tickly/itchy Sneezing due to itching in nose Itching on roof of mouth	10	2025-11-03 14:14:19.920179
557	51	67	Swollen and watery eyes Profuse watery discharge from nose Constant sneezing Worse outside, in cold, damp weather, smelling new hay, end of summer/fall Better with warmth and dry weather	11	2025-11-03 14:14:19.920179
558	51	101	Itchy eyes Profuse burning tears and sore eyes Runny nose without irritation Swollen eyelids, much blinking Sensation of sand in eyes Deep inhalation difficult Worse sunlight Better in open air, darkness, drinking coffee	12	2025-11-03 14:14:19.920179
559	51	293	Burning and tearing of eyes Mental dullness Dry mouth Sneezing Fatigue	13	2025-11-03 14:14:19.920179
560	51	33	Eyes are puffy, watery, sore when moving Heavy, droopy eyelids Runny, burning nose Mental dullness, drowsy, dizzy, shaky Throat may be sore Nonstop sneezing Thirstless Worse in humidity, spring Better with warm applications, after urinating	14	2025-11-03 14:14:19.920179
561	51	208	Eyes and nose irritated	15	2025-11-03 14:14:19.920179
562	51	88	Teary eyes Headache in forehead area Runny nose (like egg whites) alternating with dryness Stinging dryness in nasal bones Sneezing in the morning and going outside Worse in open air or cold Worse from sunlight, heat of sun, morning around 10am Averse to strong emotions, consolation, sympathy	16	2025-11-03 14:14:19.920179
563	51	41	Eyes smart and are sensitive to light Itchiness inside ears Nose is stuffy at night, runny during the day Sneezing during the day Nose runs in open air May be grumpy, impatient Chilly Better with warmth and warm applications	17	2025-11-03 14:14:19.920179
564	51	7	Yellowish discharge from eyes Yellowish discharge from nose Thirstless Better with comforting and sympathy Better with cool, open air, cold applications Worse in stuffy rooms	18	2025-11-03 14:14:19.920179
565	51	294	Eyes are red, watery, swollen, teary with sneezing Itching on roof of mouth Headache as if head is shrinking Nose itches and feels dry Throat is sore, better with warm drinks Mind feels dull and slow Long stretches of sneezing Chilly, better with warmth Worse strong odors, smell of flowers	19	2025-11-03 14:14:19.920179
566	51	295	Early hay fever symptoms Itching eyes, ears, and nose Itching deep in nasal passages Dry hacking cough due to tickle in roof of mouth Burning in bronchial tubes Tickling in sinuses behind nose/eyes Itching roof of mouth, urge to rub tongue on it	20	2025-11-03 14:14:19.920179
567	52	296	Pimples, blackheads and blemishes associated with common acne vulgaris Read ingredient list for description of symptoms	1	2025-11-03 14:14:19.920179
568	52	297	Unhealthy skin Acne with pustules/boils Persisting for weeks in one location Oozing and yellowish crusts Slow to heal Location: Face, lower face, corner of mouth, ear lobes	2	2025-11-03 14:14:19.920179
570	52	18	Acne oozes honey-like pus Moist, crusty eruptions	4	2025-11-03 14:14:19.920179
571	52	102	Pimples with white pus, tend to fester Will bring painful boils to a head Painful, sensitive pimples Blackheads Oozing Location: Forehead, lips	5	2025-11-03 14:14:19.920179
572	52	7	Acne at puberty Acne worse with rich, fatty foods, ice cream Prefers open air to closed, warm rooms Affectionate, emotional feels better in general when comforted/with attention	6	2025-11-03 14:14:19.920179
573	52	12	Chronic acne, oily face Acne rosacea in men Itches especially with warmth Skin looks rough, hard Large, superficial pimples Blackheads with pus Warm blooded Location often on the nose Worse: warmth washing before menses eating fatty foods	7	2025-11-03 14:14:19.920179
574	52	29	Skin scars easily Whiteheads, blackheads, abscesses Pimples don’t come to a head Pimples slow to go away – leaves pitting scar Tends to get infections easily Chilly, sweaty hands and feet Better with warmth	8	2025-11-03 14:14:19.920179
575	52	111	Pus filled pimples Leave bluish-red marks Worse from warmth	9	2025-11-03 14:14:19.920179
576	52	27	Acne with greasy skin Pock marks May also have warts Location: forehead and upper lip May feel ashamed of appearance out of proportion for amount of acne	10	2025-11-03 14:14:19.920179
577	52	299	Persistent acne Painful or itching lesions Better: Warm applications Worse: late teens or early 20s	11	2025-11-03 14:14:19.920179
578	53	29	Firm red, cyst-like lumps after a boil has healed; or Deep abscess slow to heal despite draining pus ; or Chronic abscess that does not go away Yellow/green pus Worse with cold drafts, cold drinks Better with warmth	1	2025-11-03 14:14:19.920179
579	53	102	Skin infection, before pus has formed; or After pus is formed if area is tender/painful; or Abscessed gland Sharp, stabbing pain (like a splinter) Boils that are slow to heal even after pus is drained Very sensitive to cold air/applications Irritable Very painful with touch Chilly, better wrapped up	2	2025-11-03 14:14:19.920179
580	53	264	Slowly developing abscess with pus; or After most abscess has gone away but hard places remain Thin, yellow/green pus, burns Painful (not as much as Hepar sulph) Hard and swollen glands Perspiration, breath, pus are foul smelling Increased salivation Worse at night and with warm or cold	3	2025-11-03 14:14:19.920179
581	53	43	Early stage of abscess before much pus has accumulated Sudden onset Red, throbbing, surrounding tissue tender Does not tolerate cold air Worse when touched or jarred Better with warmth	4	2025-11-03 14:14:19.920179
582	53	79	Abscess with burning pain that is better with warm applications Chilly Thirsty but drinks only sips	5	2025-11-03 14:14:19.920179
583	53	300	Abscess and surrounding area are bluish or purple Smaller boils around discolored skin Burning pains, bandage is painful Pus is dark and thin Worse at night	6	2025-11-03 14:14:19.920179
1185	106	49	Persistent, constant nausea with excessive salivation that is not relieved by vomiting. The person feels weak, pale, and sick throughout.	0	2025-12-01 12:06:52.549531
1200	49	42	General Sunburn Pain	0	2025-12-01 20:24:59.323652
1215	115	41	PMS with irritability, cramping, and digestive upset such as bloating or nausea. Often linked to stress, stimulants, or poor sleep, and typically worse in the morning.	0	2025-12-01 21:44:22.848097
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (user_id, username, email, password_hash, first_name, last_name, created_at, updated_at) FROM stdin;
1	tony	tony@example.com	hashedpassword123	Tony	Martin	2025-10-29 19:17:59.763123	2025-10-29 19:17:59.763123
2	sarah	sarah@example.com	hashedpassword123	Sarah	Lee	2025-10-29 19:17:59.763123	2025-10-29 19:17:59.763123
3	tony@tmartinphoto.com	tony@tmartinphoto.com	$2b$12$4bTZNxe2xSeC2lqgs0U.beoEt31w88x97/sW01zVkznSXuYm5nrPe	\N	\N	2025-11-17 10:50:44.303895	2025-11-17 10:50:44.303895
5	tmart1221	tmart1221	$2b$12$1sTVQjuU01OvxxVmObGOQ.5LEXMYsXG76UDNNcFGU19xP2D7TyZ.e	\N	\N	2025-11-17 11:04:08.05755	2025-11-17 11:04:08.05755
8	Test	Test	$2b$12$a3anLDJz5TOgAc.uFGQM/OeOOsjCL/1KLwVOVduUxK.O/fOm/eOoi	\N	\N	2025-11-24 10:13:51.327444	2025-11-24 10:13:51.327444
9	testuser@example.com	testuser@example.com	$2b$12$HX2rz1dDVDJjFoQvw/7mVOzUmiBE9NAZZSqQVUeHH0ofIP2h29ZJm	\N	\N	2025-12-03 12:27:49.581723	2025-12-03 12:27:49.581723
\.


--
-- Data for Name: user_favorites; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.user_favorites (favorite_id, user_id, ailment_id, remedy_id, created_at, note, updated_at) FROM stdin;
8	5	47	\N	2025-11-18 11:44:07.090254	\N	2025-11-18 11:44:07.090254
12	5	\N	231	2025-11-18 14:44:59.761761	\N	2025-11-18 14:44:59.761761
11	5	40	\N	2025-11-18 14:38:26.342763	Great	2025-11-18 14:45:23.160751
\.


--
-- Name: ailment_remedies_ailment_remedy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ailment_remedies_ailment_remedy_id_seq', 1218, true);


--
-- Name: ailments_ailment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ailments_ailment_id_seq', 115, true);


--
-- Name: remedies_remedy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.remedies_remedy_id_seq', 612, true);


--
-- Name: user_favorites_favorite_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.user_favorites_favorite_id_seq', 13, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_user_id_seq', 9, true);


--
-- PostgreSQL database dump complete
--

