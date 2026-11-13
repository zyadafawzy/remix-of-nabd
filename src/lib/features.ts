export type FeatureStatus = "existing" | "foundation" | "planned";
export const featureDefinitions = [
  {
    "id": "F001",
    "name": "Mission onboarding wizard (mode, crew size, duration, launch date, crew profiles, habitat template)."
  },
  {
    "id": "F002",
    "name": "Crew profile builder with medical-baseline capture and 7-day calibration progress."
  },
  {
    "id": "F003",
    "name": "\"Baseline Week\" guided calibration with daily coaching and completion certificate."
  },
  {
    "id": "F004",
    "name": "Role-based home screens (astronaut, commander, flight surgeon, mission control)."
  },
  {
    "id": "F005",
    "name": "Multi-mission workspace switcher (create, clone, archive missions)."
  },
  {
    "id": "F006",
    "name": "Mission patch designer (name, colors, symbols \u2192 SVG patch used in reports and avatars)."
  },
  {
    "id": "F007",
    "name": "Crew directory (bios, specialties, emergency contacts, designated medical officer)."
  },
  {
    "id": "F008",
    "name": "Skills and medical-training registry (who is trained in first aid, ultrasound, dental, EVA rescue) with coverage gap alerts."
  },
  {
    "id": "F009",
    "name": "Access-code join flow and guest personas for judges."
  },
  {
    "id": "F010",
    "name": "Interactive role-specific product tour with progress and replay."
  },
  {
    "id": "F011",
    "name": "Unified Measurement Hub (all indicators, quick-add, recent, scheduled)."
  },
  {
    "id": "F012",
    "name": "Camera pulse with HRV estimate and signal-quality score."
  },
  {
    "id": "F013",
    "name": "Camera-based respiratory rate with confidence."
  },
  {
    "id": "F014",
    "name": "SpO2 entry plus Bluetooth pulse-oximeter support."
  },
  {
    "id": "F015",
    "name": "Orthostatic stand test (guided lying\u2192standing HR/BP delta with timer)."
  },
  {
    "id": "F016",
    "name": "Body composition and mass log (mass-measurement device, tape circumferences)."
  },
  {
    "id": "F017",
    "name": "Grip-strength dynamometer log and trend."
  },
  {
    "id": "F018",
    "name": "Balance and steadiness test using phone motion sensors (experimental)."
  },
  {
    "id": "F019",
    "name": "Visual acuity quick test and Amsler-style grid test (non-diagnostic)."
  },
  {
    "id": "F020",
    "name": "Hearing tone screening with headphones (non-diagnostic)."
  },
  {
    "id": "F021",
    "name": "Speech-rate and voice sample capture, on-device only (experimental fatigue indicator)."
  },
  {
    "id": "F022",
    "name": "Interactive pain map (tap body to log location, intensity, type)."
  },
  {
    "id": "F023",
    "name": "Structured symptom log (onset, duration, severity, triggers) linked to protocols."
  },
  {
    "id": "F024",
    "name": "Hydration color-chart log."
  },
  {
    "id": "F025",
    "name": "Space-adaptation motion-sickness scale log with recovery curve."
  },
  {
    "id": "F026",
    "name": "Skin photo timeline with side-by-side compare and annotations."
  },
  {
    "id": "F027",
    "name": "Oral health quick log."
  },
  {
    "id": "F028",
    "name": "Optional private cycle/hormonal health log (private by default, never shared unless consented)."
  },
  {
    "id": "F029",
    "name": "Measurement schedule templates per mission mode (what, how often, who)."
  },
  {
    "id": "F030",
    "name": "Measurement quality scoring with retake suggestions."
  },
  {
    "id": "F031",
    "name": "Personal Baseline Explorer (rolling median/MAD bands per indicator)."
  },
  {
    "id": "F032",
    "name": "Early Warning Index per body system with lead-time estimates."
  },
  {
    "id": "F033",
    "name": "Change-point timeline (CUSUM) with event annotations."
  },
  {
    "id": "F034",
    "name": "Multivariate anomaly explainer (top contributors, arrows, magnitude)."
  },
  {
    "id": "F035",
    "name": "Forecasts with uncertainty bands for every indicator (7/30/90 days)."
  },
  {
    "id": "F036",
    "name": "Living Risk Register (risk, hazard, likelihood, impact, owner, mitigation, status)."
  },
  {
    "id": "F037",
    "name": "Correlation explorer (any two indicators, optional lag, scatter + coefficient with caution notes)."
  },
  {
    "id": "F038",
    "name": "Crew comparison view with anonymization toggle."
  },
  {
    "id": "F039",
    "name": "Daily Briefing generator (rules + AI) with read-aloud."
  },
  {
    "id": "F040",
    "name": "Weekly Health Review auto-narrative with PDF export."
  },
  {
    "id": "F041",
    "name": "\"What changed?\" diff between any two dates."
  },
  {
    "id": "F042",
    "name": "Counterfactual engine (\"if I had trained / slept more\")."
  },
  {
    "id": "F043",
    "name": "Data-quality dashboard (completeness, staleness, sensor confidence)."
  },
  {
    "id": "F044",
    "name": "Confidence labels and data-citation chips on every AI output."
  },
  {
    "id": "F045",
    "name": "Model Card library for every algorithm."
  },
  {
    "id": "F046",
    "name": "System detail pages (cardiovascular, musculoskeletal, neuro-vestibular, vision, immune, GI/metabolic, renal/hydration, skin, behavioral)."
  },
  {
    "id": "F047",
    "name": "Layered anatomy viewer (skeletal, muscular, cardiovascular, nervous) in 2D, with 3D toggle."
  },
  {
    "id": "F048",
    "name": "\"In space vs on Earth\" comparison sliders per organ."
  },
  {
    "id": "F049",
    "name": "Fluid-shift visualizer (cephalad shift over mission days)."
  },
  {
    "id": "F050",
    "name": "Bone-density heat map for hip and spine with 90-day forecast."
  },
  {
    "id": "F051",
    "name": "Muscle-group strength map with per-group index."
  },
  {
    "id": "F052",
    "name": "Vestibular adaptation tracker and re-adaptation plan."
  },
  {
    "id": "F053",
    "name": "Vision-changes tracker (self-reported symptoms + acuity trend, educational context)."
  },
  {
    "id": "F054",
    "name": "Cardio-deconditioning dashboard (orthostatic tolerance trend, return-to-gravity readiness)."
  },
  {
    "id": "F055",
    "name": "Immune-risk window indicator with plain-language explanation."
  },
  {
    "id": "F056",
    "name": "Mission timeline by phase (transit, insertion, surface ops, return) with MET."
  },
  {
    "id": "F057",
    "name": "Drag-and-drop task scheduler with conflict detection."
  },
  {
    "id": "F058",
    "name": "Shift planner and workload balance heat map."
  },
  {
    "id": "F059",
    "name": "EVA planner (duration, suit, dose, buddy, readiness gates)."
  },
  {
    "id": "F060",
    "name": "Landing/return readiness checklist and gravity re-adaptation plan."
  },
  {
    "id": "F061",
    "name": "Contingency scenario library (cabin fire, depressurization, CO2 event, medical evacuation decision) with interactive steps."
  },
  {
    "id": "F062",
    "name": "Decision log (decision, rationale, who, when, outcome)."
  },
  {
    "id": "F063",
    "name": "Shift handover notes with unresolved-issue carryover."
  },
  {
    "id": "F064",
    "name": "Mission clocks widget (MET, UTC, Mars sol, local) with offsets."
  },
  {
    "id": "F065",
    "name": "Communication window planner (relay windows, blackout periods)."
  },
  {
    "id": "F066",
    "name": "Resupply and consumables forecast with stock-out alerts."
  },
  {
    "id": "F067",
    "name": "Roles and responsibilities matrix (RACI)."
  },
  {
    "id": "F068",
    "name": "Mission goals and milestones tracker with progress rings."
  },
  {
    "id": "F069",
    "name": "Daily Playbook PDF export (schedule, health focus, tasks, risks)."
  },
  {
    "id": "F070",
    "name": "Daily downlink package builder (data bundle for Earth with size estimate and priority tiers)."
  },
  {
    "id": "F071",
    "name": "SBAR builder with auto-fill and attachments."
  },
  {
    "id": "F072",
    "name": "Store-and-forward queue with delivery states and retry."
  },
  {
    "id": "F073",
    "name": "Flight Surgeon triage board (sorted by Early Warning Index, kanban by status)."
  },
  {
    "id": "F074",
    "name": "Consult notes with SOAP templates."
  },
  {
    "id": "F075",
    "name": "Care plans with follow-up reminders and outcome tracking."
  },
  {
    "id": "F076",
    "name": "Medical event log (illness and injury incidents, timeline, severity)."
  },
  {
    "id": "F077",
    "name": "Medical kit inventory with expiry and low-stock alerts (no dosing info)."
  },
  {
    "id": "F078",
    "name": "Procedure coach (step-by-step with timers, checklists, common mistakes)."
  },
  {
    "id": "F079",
    "name": "Ultrasound image gallery with annotation tools (educational)."
  },
  {
    "id": "F080",
    "name": "Voice memo to Earth (record, queue, optional on-device transcription)."
  },
  {
    "id": "F081",
    "name": "Image markup tool (arrows, circles, notes) for photos and charts."
  },
  {
    "id": "F082",
    "name": "Escalation ladder visualization (self-care \u2192 medical officer \u2192 surgeon \u2192 emergency) tied to each alert."
  },
  {
    "id": "F083",
    "name": "Exercise prescription engine (adapts to mode, gravity, equipment, bone/muscle index)."
  },
  {
    "id": "F084",
    "name": "Workout player (interval timer, form tips, audio cues, completion logging)."
  },
  {
    "id": "F085",
    "name": "Equipment availability tracker with automatic reroute of workouts on failure."
  },
  {
    "id": "F086",
    "name": "Training-load tracker (acute:chronic ratio) with overtraining flag."
  },
  {
    "id": "F087",
    "name": "Bone-loading score per session."
  },
  {
    "id": "F088",
    "name": "7-day meal planner with variety score and menu-fatigue indicator."
  },
  {
    "id": "F089",
    "name": "Food catalog with macro and micronutrient calculator."
  },
  {
    "id": "F090",
    "name": "Hydration planner with schedule reminders."
  },
  {
    "id": "F091",
    "name": "Supplement adherence checklist (items \"as prescribed by flight surgeon\", no doses)."
  },
  {
    "id": "F092",
    "name": "Sleep log with stage import and sleep-debt tracker."
  },
  {
    "id": "F093",
    "name": "Circadian light planner."
  },
  {
    "id": "F094",
    "name": "Mars-sol shift planner with day-by-day plan."
  },
  {
    "id": "F095",
    "name": "Nap planner and caffeine-timing education (no doses)."
  },
  {
    "id": "F096",
    "name": "Sleep-environment checklist (noise, light, temperature, posture)."
  },
  {
    "id": "F097",
    "name": "Recovery score (readiness-to-train)."
  },
  {
    "id": "F098",
    "name": "Weekly well-being index (non-diagnostic)."
  },
  {
    "id": "F099",
    "name": "Private journal with prompts and local sentiment."
  },
  {
    "id": "F100",
    "name": "Anonymous crew cohesion pulse (crew-level only)."
  },
  {
    "id": "F101",
    "name": "Conflict de-escalation toolkit and guided conversations."
  },
  {
    "id": "F102",
    "name": "Guided breathing and meditation player with visual pacer."
  },
  {
    "id": "F103",
    "name": "Call-home planner aware of comm windows, with message drafting aid."
  },
  {
    "id": "F104",
    "name": "Hobby and creativity log."
  },
  {
    "id": "F105",
    "name": "Greenhouse/plant-care task tracker."
  },
  {
    "id": "F106",
    "name": "Nature and Earth-view media library (generated imagery, sunlight prompts)."
  },
  {
    "id": "F107",
    "name": "Daily buddy check system."
  },
  {
    "id": "F108",
    "name": "Crisis support flow (calm escalation steps, \"tell a crewmate immediately\", contact medical officer)."
  },
  {
    "id": "F109",
    "name": "Monotony detector with novelty suggestions."
  },
  {
    "id": "F110",
    "name": "Team recognition feed."
  },
  {
    "id": "F111",
    "name": "Interactive habitat floor plan with live sensors and crew positions."
  },
  {
    "id": "F112",
    "name": "Telemetry stream with thresholds, alarms and sparklines."
  },
  {
    "id": "F113",
    "name": "Air-quality (CO2, O2, VOC) trends with cognitive-impact overlay."
  },
  {
    "id": "F114",
    "name": "Noise exposure tracker with hearing-protection reminders."
  },
  {
    "id": "F115",
    "name": "Water quality and recycling status panel."
  },
  {
    "id": "F116",
    "name": "Storm Shelter mode with crew accountability roll-call."
  },
  {
    "id": "F117",
    "name": "Personal dose tracker and EVA dose planner."
  },
  {
    "id": "F118",
    "name": "Space-weather feed (simulated) with forecast levels and alerts."
  },
  {
    "id": "F119",
    "name": "Surface cleanliness and microbial log with cleaning schedule."
  },
  {
    "id": "F120",
    "name": "Lighting scene suggestions tied to circadian plan (simulated control)."
  },
  {
    "id": "F121",
    "name": "Quests system (daily, weekly, mission-long)."
  },
  {
    "id": "F122",
    "name": "XP, levels and ranks."
  },
  {
    "id": "F123",
    "name": "30+ badges with rarity and unlock animations."
  },
  {
    "id": "F124",
    "name": "Streaks with streak-freeze tokens."
  },
  {
    "id": "F125",
    "name": "Crew challenges (shared goals, progress bar)."
  },
  {
    "id": "F126",
    "name": "Academy modules with quizzes and explanations."
  },
  {
    "id": "F127",
    "name": "Printable certificates of completion."
  },
  {
    "id": "F128",
    "name": "Emergency drills with timed scoring."
  },
  {
    "id": "F129",
    "name": "Daily \"Did you know\" cards from NASA/CSA source material with links."
  },
  {
    "id": "F130",
    "name": "Milestone celebrations (mission day 30, 100, halfway, etc.)."
  },
  {
    "id": "F131",
    "name": "Notification center with rules, grouping, quiet hours and snooze."
  },
  {
    "id": "F132",
    "name": "Crew chat with channels (general, medical, ops) and delivery delay simulation."
  },
  {
    "id": "F133",
    "name": "Commander announcements board with acknowledgements."
  },
  {
    "id": "F134",
    "name": "Comments and annotations on charts and alerts."
  },
  {
    "id": "F135",
    "name": "Audit log viewer with filters."
  },
  {
    "id": "F136",
    "name": "Consent center per data category and recipient."
  },
  {
    "id": "F137",
    "name": "Data export hub (CSV, JSON, FHIR-style bundle with LOINC codes, PDF)."
  },
  {
    "id": "F138",
    "name": "Import wizard (CSV/JSON/FHIR) with mapping, preview, validation, dedupe."
  },
  {
    "id": "F139",
    "name": "Report builder (choose sections, schedule weekly generation)."
  },
  {
    "id": "F140",
    "name": "Admin console (users, roles, seed control, feature flags F001\u2013F150, system health)."
  },
  {
    "id": "F141",
    "name": "Global search across pages, people, protocols, articles, alerts, and actions."
  },
  {
    "id": "F142",
    "name": "Saved views and fully customizable dashboard widget grid."
  },
  {
    "id": "F143",
    "name": "PWA offline mode with Sync Center (queue, conflicts, retry, last sync)."
  },
  {
    "id": "F144",
    "name": "Command palette and full keyboard shortcut map."
  },
  {
    "id": "F145",
    "name": "Theme studio (accent presets, Daylight, High Contrast, text size, density)."
  },
  {
    "id": "F146",
    "name": "Accessibility mode with spoken dashboard summary and aria-live alert announcements."
  },
  {
    "id": "F147",
    "name": "Voice commands (feature-detected) with visible recognition feedback."
  },
  {
    "id": "F148",
    "name": "Hidden developer panel (feature flags, versions, queue length, logs, performance metrics)."
  },
  {
    "id": "F149",
    "name": "In-app feedback and bug report with screenshot attachment."
  },
  {
    "id": "F150",
    "name": "Public Judges Guide with challenge compliance matrix, architecture diagram, and a guided 2-minute tour."
  }
] as const;
export type FeatureId = typeof featureDefinitions[number]["id"];
export const featureFlags: Record<FeatureId, boolean> = Object.fromEntries(featureDefinitions.map(f => [f.id, true])) as Record<FeatureId, boolean>;
export function isFeatureEnabled(id: FeatureId, overrides: Partial<Record<FeatureId, boolean>> = {}) { return overrides[id] ?? featureFlags[id]; }
export function parseFeatureOverrides(value: unknown): Partial<Record<FeatureId, boolean>> {
  if (!value || typeof value !== 'object') return {};
  const entries = value as Record<string, unknown>;
  const result: Partial<Record<FeatureId, boolean>> = {};
  for (const f of featureDefinitions) if (typeof entries[f.id] === 'boolean') result[f.id] = entries[f.id] as boolean;
  return result;
}
