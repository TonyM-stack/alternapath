-- === USERS ===
INSERT INTO users (username, email, password_hash, first_name, last_name)
VALUES
  ('tony', 'tony@example.com', 'hashedpassword123', 'Tony', 'Martin'),
  ('sarah', 'sarah@example.com', 'hashedpassword123', 'Sarah', 'Lee');

-- === AILMENTS ===
INSERT INTO ailments (ailment_slug, ailment_title, link)
VALUES
  ('headache', 'Headache', 'https://alternapath.com/ailments/headache'),
  ('joint-pain', 'Joint Pain', 'https://alternapath.com/ailments/joint-pain'),
  ('insomnia', 'Insomnia', 'https://alternapath.com/ailments/insomnia');

-- === REMEDIES ===
INSERT INTO remedies (remedy_name, description, potency, dosage_instructions)
VALUES
  ('Arnica montana', 'Used for bruises, soreness, and trauma recovery.', '30C', 'Take 3 pellets every 4 hours as needed.'),
  ('Nux vomica', 'Helps relieve nausea, indigestion, and irritability.', '30C', 'Take 2 pellets before bedtime.'),
  ('Coffea cruda', 'Used to ease sleeplessness from mental overactivity.', '30C', 'Take 3 pellets at night.'),
  ('Bryonia alba', 'Used for joint stiffness and inflammation.', '30C', 'Take 3 pellets twice daily.');

-- === AILMENT_REMEDIES (linking) ===
-- Headache → Coffea cruda, Nux vomica
INSERT INTO ailment_remedies (ailment_id, remedy_id, symptom_description, sort_order)
SELECT a.ailment_id, r.remedy_id, 'Helps relieve tension headaches from stress or overthinking.', 1
FROM ailments a JOIN remedies r ON a.ailment_slug = 'headache' AND r.remedy_name = 'Coffea cruda';

INSERT INTO ailment_remedies (ailment_id, remedy_id, symptom_description, sort_order)
SELECT a.ailment_id, r.remedy_id, 'Used for headaches caused by overeating or hangovers.', 2
FROM ailments a JOIN remedies r ON a.ailment_slug = 'headache' AND r.remedy_name = 'Nux vomica';

-- Joint Pain → Bryonia alba, Arnica montana
INSERT INTO ailment_remedies (ailment_id, remedy_id, symptom_description, sort_order)
SELECT a.ailment_id, r.remedy_id, 'Eases joint stiffness aggravated by movement.', 1
FROM ailments a JOIN remedies r ON a.ailment_slug = 'joint-pain' AND r.remedy_name = 'Bryonia alba';

INSERT INTO ailment_remedies (ailment_id, remedy_id, symptom_description, sort_order)
SELECT a.ailment_id, r.remedy_id, 'Helps bruised or sore muscles and joints.', 2
FROM ailments a JOIN remedies r ON a.ailment_slug = 'joint-pain' AND r.remedy_name = 'Arnica montana';

-- Insomnia → Coffea cruda
INSERT INTO ailment_remedies (ailment_id, remedy_id, symptom_description, sort_order)
SELECT a.ailment_id, r.remedy_id, 'Calms racing thoughts and aids natural sleep.', 1
FROM ailments a JOIN remedies r ON a.ailment_slug = 'insomnia' AND r.remedy_name = 'Coffea cruda';

-- === USER FAVORITES ===
INSERT INTO user_favorites (user_id, remedy_id)
SELECT u.user_id, r.remedy_id
FROM users u JOIN remedies r ON u.username = 'tony' AND r.remedy_name = 'Arnica montana';

INSERT INTO user_favorites (user_id, ailment_id)
SELECT u.user_id, a.ailment_id
FROM users u JOIN ailments a ON u.username = 'sarah' AND a.ailment_slug = 'insomnia';
