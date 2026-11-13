# NABD · Crew health beyond Earth

NABD is a synthetic astronaut-health decision-support demonstration inspired by NASA’s five spaceflight hazards. It is not a diagnostic medical device and is not suitable for real medical records or clinical use.

## Implemented core experience
- Mission-control overview with interactive SVG organ zones, personal readings, crew selection, health score, tasks, and dose budget.
- Three mission environments, six synthetic crew members, and 30-day histories.
- Eight-step check-in with local draft, manual pulse, camera preview, labelled simulated pulse, reaction test, local photo preview, Cloud persistence, and offline measurement queue.
- Trends, alerts and action tasks, training timer, breathing practice, local nutrition log, educational library, sources, and settings.
- Public flight-surgeon demonstration view with shared telemetry and delayed messages.
- AI Medic using the Lovable AI Gateway through a server function, with cautious, context-grounded answers and fallback guidance. Optional browser read-aloud.
- Five sandbox scenario controls, guided page tour, PDF and CSV export.
- Guarded generated service worker for published offline use. Editor previews never register the worker.

## Run and test
```sh
bun install
bun run dev
bunx vitest run src/test/healthRules.test.ts src/test/app-routing.test.tsx
```

Stack: TanStack Start, React, TypeScript, Tailwind v4, shadcn/ui, Recharts, Lovable Cloud, Lovable AI Gateway, jsPDF, and vite-plugin-pwa. The template’s TanStack routing and server functions are preserved instead of the upload’s React Router and Edge Function suggestions.

## Safety and limitations
All crew data is synthetic and the Cloud tables intentionally permit public demo access. Never enter confidential, real biometric, or real astronaut data. The flight-surgeon toggle is not an authenticated access role. Illustrative rules are not clinically validated.

The specification is broader than this core version. Not implemented: validated rPPG/respiratory estimation, vision analysis, optional Three.js body, full clinical scoring model, individualized calorie formula, full badges/streak persistence, streaming chat, structured AI plan parsing, voice navigation, background notifications, onboarding tooltips, cinematic landing page, chart PNG/crew comparisons/correlations, crew-summary PDF and all requested PDF charts, or complete profile/baseline editing. Local food logs and reflections are not synced. Alert acknowledgement and snooze are session-local. The tour navigates pages but does not automate the complete scripted scenario/check-in/escalation/PDF sequence.

Offline installation and cross-device realtime still require published-environment verification. AI image generation/Asset Studio is intentionally excluded because the upload explicitly forbids image generation. Camera and photo previews never upload their media.

## Verification
Confirmed: all 16 content pages render, Heart drawer opens, manual check-in saves to Cloud and shows 75 bpm after reload, 375px layout has no horizontal overflow, PDF downloads, and a real AI Medic query returns a cautious answer based on supplied sleep data. Eight targeted tests pass; latest automatic build reports build OK. Source link availability, production offline installation, physical camera, and cross-device realtime have not been independently verified.

## Science
- https://www.nasa.gov/hrp/hazards/
- https://www.nasa.gov/hrp/risks/
- https://www.nasa.gov/hrp/ongoing-hrp-research/
- https://www.asc-csa.gc.ca/eng/news/articles/2026/2026-02-26-monitoring-radiation-astronaut-health.asp
- https://www.asc-csa.gc.ca/eng/iss/science/why-do-we-conduct-science-experiments-in-space.asp
