CREATE TABLE public.missions (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), name text NOT NULL, mode text NOT NULL DEFAULT 'station', start_date date NOT NULL DEFAULT CURRENT_DATE, current_day integer NOT NULL DEFAULT 30, comm_delay_seconds integer NOT NULL DEFAULT 2, radiation_budget_msv numeric NOT NULL DEFAULT 100);
GRANT SELECT, INSERT, UPDATE ON public.missions TO anon, authenticated; GRANT ALL ON public.missions TO service_role;
ALTER TABLE public.missions ENABLE ROW LEVEL SECURITY; CREATE POLICY demo_missions ON public.missions FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE TABLE public.crew_members (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), mission_id uuid REFERENCES public.missions(id), name text NOT NULL, role text NOT NULL, age integer NOT NULL DEFAULT 36, sex text DEFAULT 'female', baseline_hr numeric DEFAULT 68, baseline_sys numeric DEFAULT 112, baseline_dia numeric DEFAULT 74, baseline_temp numeric DEFAULT 36.6, baseline_glucose numeric DEFAULT 88, baseline_sleep_h numeric DEFAULT 8, baseline_reaction_ms numeric DEFAULT 250, baseline_weight_kg numeric DEFAULT 70, created_at timestamptz DEFAULT now());
GRANT SELECT, INSERT, UPDATE ON public.crew_members TO anon, authenticated; GRANT ALL ON public.crew_members TO service_role;
ALTER TABLE public.crew_members ENABLE ROW LEVEL SECURITY; CREATE POLICY demo_crew ON public.crew_members FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE TABLE public.measurements (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), crew_id uuid REFERENCES public.crew_members(id), date date DEFAULT CURRENT_DATE, mission_day integer NOT NULL DEFAULT 30, hr numeric, hr_confidence numeric, hr_source text DEFAULT 'manual', sys numeric, dia numeric, temp_c numeric, glucose_mgdl numeric, sleep_h numeric, sleep_quality integer, mood integer, stress integer, weight_kg numeric, hydration_cups integer, calories integer, protein_g numeric, exercise_resistive_min integer, exercise_aerobic_min integer, reaction_ms numeric, reaction_lapses integer DEFAULT 0, cognitive_score numeric, radiation_msv_day numeric, co2_ppm numeric, notes text DEFAULT '', created_at timestamptz DEFAULT now());
GRANT SELECT, INSERT, UPDATE ON public.measurements TO anon, authenticated; GRANT ALL ON public.measurements TO service_role;
ALTER TABLE public.measurements ENABLE ROW LEVEL SECURITY; CREATE POLICY demo_measurements ON public.measurements FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE TABLE public.alerts (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), crew_id uuid REFERENCES public.crew_members(id), measurement_id uuid REFERENCES public.measurements(id), level text NOT NULL, organ_zone text NOT NULL, title text NOT NULL, explanation text NOT NULL, hazard_tags text[] DEFAULT '{}', actions jsonb DEFAULT '[]', acknowledged boolean DEFAULT false, escalated boolean DEFAULT false, created_at timestamptz DEFAULT now());
GRANT SELECT, INSERT, UPDATE ON public.alerts TO anon, authenticated; GRANT ALL ON public.alerts TO service_role;
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY; CREATE POLICY demo_alerts ON public.alerts FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE TABLE public.tasks (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), crew_id uuid REFERENCES public.crew_members(id), date date DEFAULT CURRENT_DATE, type text DEFAULT 'daily', title text NOT NULL, points integer DEFAULT 20, done boolean DEFAULT false, due_at timestamptz);
GRANT SELECT, INSERT, UPDATE ON public.tasks TO anon, authenticated; GRANT ALL ON public.tasks TO service_role;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY; CREATE POLICY demo_tasks ON public.tasks FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE TABLE public.messages (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), crew_id uuid REFERENCES public.crew_members(id), direction text DEFAULT 'to_earth', body text NOT NULL, sent_at timestamptz DEFAULT now(), deliver_at timestamptz DEFAULT now(), delivered boolean DEFAULT false, report_json jsonb);
GRANT SELECT, INSERT, UPDATE ON public.messages TO anon, authenticated; GRANT ALL ON public.messages TO service_role;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY; CREATE POLICY demo_messages ON public.messages FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE TABLE public.points_ledger (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), crew_id uuid REFERENCES public.crew_members(id), delta integer NOT NULL, reason text NOT NULL, created_at timestamptz DEFAULT now());
GRANT SELECT, INSERT ON public.points_ledger TO anon, authenticated; GRANT ALL ON public.points_ledger TO service_role;
ALTER TABLE public.points_ledger ENABLE ROW LEVEL SECURITY; CREATE POLICY demo_points ON public.points_ledger FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
CREATE TABLE public.journal_entries (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), crew_id uuid REFERENCES public.crew_members(id), date date DEFAULT CURRENT_DATE, text text NOT NULL, sentiment_score numeric, tags text[] DEFAULT '{}');
GRANT SELECT, INSERT ON public.journal_entries TO anon, authenticated; GRANT ALL ON public.journal_entries TO service_role;
ALTER TABLE public.journal_entries ENABLE ROW LEVEL SECURITY; CREATE POLICY demo_journal ON public.journal_entries FOR ALL TO anon, authenticated USING (true) WITH CHECK (true);
ALTER PUBLICATION supabase_realtime ADD TABLE public.measurements, public.alerts, public.messages, public.tasks;
INSERT INTO public.missions (id,name,start_date) VALUES ('10000000-0000-4000-8000-000000000001','Horizon Expedition 07','2026-10-15');
INSERT INTO public.crew_members (id,mission_id,name,role,baseline_hr,baseline_weight_kg) VALUES
('20000000-0000-4000-8000-000000000001','10000000-0000-4000-8000-000000000001','Amara Okafor','Commander',68,68),
('20000000-0000-4000-8000-000000000002','10000000-0000-4000-8000-000000000001','Leo Martinez','Pilot',65,78),
('20000000-0000-4000-8000-000000000003','10000000-0000-4000-8000-000000000001','Yuki Tanaka','Flight Engineer',64,62),
('20000000-0000-4000-8000-000000000004','10000000-0000-4000-8000-000000000001','Omar Hassan','Mission Specialist',72,80),
('20000000-0000-4000-8000-000000000005','10000000-0000-4000-8000-000000000001','Elena Petrova','Medical Officer',66,65),
('20000000-0000-4000-8000-000000000006','10000000-0000-4000-8000-000000000001','Noah Williams','Scientist',70,75);
INSERT INTO public.measurements (crew_id,date,mission_day,hr,sys,dia,temp_c,glucose_mgdl,sleep_h,mood,stress,weight_kg,hydration_cups,calories,protein_g,exercise_resistive_min,exercise_aerobic_min,reaction_ms,radiation_msv_day,co2_ppm) SELECT id, '2026-10-15'::date+d-1,d,baseline_hr+sin(d)*3,112+sin(d)*3,74,36.6,88,8,mood,2,baseline_weight_kg,8,2400,95,60,60,250+sin(d)*12,0.45,2200 FROM public.crew_members CROSS JOIN generate_series(1,30) d CROSS JOIN (SELECT 4 AS mood) m;
INSERT INTO public.tasks (crew_id,title,points) SELECT id,'Complete daily health check-in',50 FROM public.crew_members;
INSERT INTO public.tasks (crew_id,title,points) SELECT id,'Resistive training · 60 minutes',30 FROM public.crew_members;
INSERT INTO public.tasks (crew_id,title,points) SELECT id,'Hydration · reach 8 cups',20 FROM public.crew_members;
INSERT INTO public.points_ledger (crew_id,delta,reason) SELECT id,740,'Demo healthy-habit history' FROM public.crew_members;