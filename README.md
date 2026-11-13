# NABD · Crew health beyond Earth

NABD is a synthetic astronaut-health decision-support demonstration inspired by NASA’s five spaceflight hazards. It is not a diagnostic medical device and is not suitable for real medical records or clinical use.

## Implemented core experience
- Mission-control overview with a 2D SVG anatomical diagram, Systems/Structure layers, accessible organ/system controls, personal readings, crew selection, health score, tasks and dose budget. The rejected 3D model and its dependencies are removed.
- Three mission environments, six synthetic crew members, and 30-day histories.
- Automatic synthetic suit-packet capture with six concept channels, interactive PCB diagram, review/save, Cloud persistence, and the existing offline measurement queue. This explicitly supersedes the manual-vital check-in wizard.
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

The specification is broader than this core version. Not implemented: actual sensor drivers or physical hardware, validated rPPG/respiratory estimation, vision analysis, full clinical scoring model, individualized calorie formula, full badges/streak persistence, streaming chat, structured AI plan parsing, voice navigation, background notifications, onboarding tooltips, cinematic landing page, chart PNG/crew comparisons/correlations, crew-summary PDF and all requested PDF charts, or complete profile/baseline editing. Local food logs and reflections are not synced. Alert acknowledgement and snooze are session-local. The tour navigates pages but does not automate the complete scripted scenario/check-in/escalation/PDF sequence. All 150 features and all ten waves are not complete.

Offline installation and cross-device realtime still require published-environment verification. AI image generation/Asset Studio is intentionally excluded because the upload explicitly forbids image generation. The current suit workflow does not request camera access or upload media.

## Verification
Latest checkpoint (13 Nov 2026): 19 tests pass; synthetic packet insert returns 201 and 66 bpm reads back through the overview after reload. No manual numeric vital inputs remain in the suit workflow. Verified body rendering at 1280×1800 and 375×812, mouse rotation, Heart system drawer and SVG switch; suit page has no horizontal overflow at 801×407 and 375×812. Browser runtime errors: zero. Automatic build: OK. Previous checkpoints exercised public pages, CSV/PDF downloads and a real AI Medic response. Source link availability, production offline installation, physical device performance and cross-device realtime are unverified. Real hardware collection is not implemented.

## Suit link architecture and provenance
`src/lib/suit-sensors.ts` contains deterministic packet generation and capture, separately tested from the interface. `check-in.tsx` owns a two-second demonstration timer, freezes a snapshot for review and passes it to the existing mission-context save path. Timers stop on unmount. No BLE, serial, device endpoint, physical circuit, or production electrical design is supplied.

| Channel | Concept location | Current data |
| --- | --- | --- |
| ECG | Inner-suit chest pads | Synthetic heart rate; no ECG waveform acquisition |
| TMP | Skin contact | Synthetic temperature; not validated core temperature |
| DOS | Suit dosimeter | Existing illustrative dose rate |
| AIR | Suit air loop | Synthetic CO₂; not a gas-safety instrument |
| IMU | Motion module | Prior demo aerobic minutes; not measured activity |
| SLP | Wearable activity pattern | Prior demo sleep; not validated sleep staging |

Blood pressure, glucose, weight, mood/stress, nutrition and reaction values are retained from the prior synthetic record. Capture adds an explicit provenance note and sets `hr_source=simulated-suit`, `hr_confidence=0`; zero denotes no measurement confidence. The circuit board is an explanatory SVG, not fabrication-ready PCB/CAD. Before real deployment: validated hardware/protocols, calibration, signal quality, electrical and suit safety review, authenticated private storage, consent, and flight-surgeon approval are required.

## Body viewer and brand
The 2D body diagram is code-generated SVG, deliberately schematic rather than clinically accurate. It includes organ contours, skeletal structure and callouts; Systems and Structure layers share the existing medical-system drawer and keyboard controls. No WebGL or 3D dependencies remain. The shared hexagonal pulse logo is available at `/nabd-logo.svg`, used in navigation, the press download, favicon and install manifest. No bitmap or generated imagery is used.

## Device checks still required
Open `/app` to inspect body systems and switch layers. Open `/app/check-in` to inspect signal flow and capture/save a **synthetic** packet; this tests software only, never a physical sensor. Real hardware, published PWA behavior and audio output remain unverified.

## Evidence-grounded AI Medic (13 Nov 2026)
The curated browser-safe evidence registry (`src/lib/evidence.ts`) records each primary source's supported claim and limitations. NASA's HERA wearable evaluations emphasize quality, usability and comfort; CSA Bio-Monitor documents an actual garment/headband/tablet system, not Nabd capabilities. CSA Space Health research provides context for AI-assisted cardiovascular analysis, not diagnostic validation. NASA sleep and behavioral-health evidence supports cautious explanations, not Nabd thresholds.

The unchanged AI model receives that registry, six recent conversation messages and seven synthetic records. Server-side structured output is validated by `medicBriefSchema`; source IDs are filtered through the registry, so no model-supplied URL is displayed. Answers separate observations, safe actions, escalation and uncertainty. Each action can be added to countermeasures. Conversations are validated on restoration, isolated per crew, copied/cleared locally and never automatically persisted to Cloud. Offline guidance remains available when inference fails. This is curated context, not live literature retrieval, diagnostic validation or guaranteed safety enforcement by an AI.

Latest verification: 22 tests pass, automatic build OK, no browser page errors; no canvas renders. Systems/Structure, Heart drawer, device channel selection, a real AI answer recognizing zero measured confidence and retained demo metrics, source expansion, action creation and crew-chat reset were exercised. No horizontal overflow at 1280×1800, 801×407 or 375×812. The reported utils.ts overload is not reproduced: line 2 is an import and `cn(null, undefined, 'p-2', 'p-4')` returns `p-4`; the utility was not changed.

Primary evidence reviewed during this change:
- https://www.asc-csa.gc.ca/eng/sciences/bio-monitor.asp
- https://ntrs.nasa.gov/citations/20190000238
- https://www.asc-csa.gc.ca/eng/sciences/space-flight-improve-monitor-health-earth.asp
- https://humanresearchroadmap.nasa.gov/Risks/risk.aspx?i=100
- https://humanresearchroadmap.nasa.gov/evidence/reports/HRP-ER-BMED-HFBP-20250210.pdf

## Science
- https://www.nasa.gov/hrp/hazards/
- https://www.nasa.gov/hrp/risks/
- https://www.nasa.gov/hrp/ongoing-hrp-research/
- https://www.asc-csa.gc.ca/eng/news/articles/2026/2026-02-26-monitoring-radiation-astronaut-health.asp
- https://www.asc-csa.gc.ca/eng/iss/science/why-do-we-conduct-science-experiments-in-space.asp
