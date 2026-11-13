# NABD implementation roadmap
- [ ] Resolve reported src/lib/utils.ts numeric assignment error; blocked on actual failing source because current line 2 is an import and cn(42) returns a string.
- [ ] Resolve reported src/pages/Index.tsx number-to-string error; blocked on the failing call and receiving function declaration because that page is absent from this project.
- [ ] Resolve reported src/App.tsx button typing error; blocked on the actual failing file and full diagnostic because this project has no src/App.tsx.
- [x] Fix and verify mission context identity across live-preview updates; module-reload regression passes and crew/mode survive navigation and reload.
- [x] Core mission shell, dashboard, SVG body drawer, six crew and three mode selections.
- [x] Core pure health rules, boundary tests, and synthetic 30-day records.
- [x] Check-in with Cloud persistence, manual/simulated pulse, local photo preview, reaction test, and offline measurement queue.
- [x] Basic trends, alerts/action tasks, training timer, breathing, nutrition log, learning and sources.
- [x] Delayed messages, public flight-surgeon console and realtime subscriptions.
- [x] AI Medic server function, cautious context-grounded response, fallback guide and read-aloud.
- [x] Five sandbox scenario controls, habit points, PDF/CSV report and guided page tour.
- [x] Basic preferences, guarded offline PWA, 375px check, all routes checked, PDF and AI tested.
- [x] README.md and chat.md updated with honest completion and limitations.

## Full-spec work still outstanding
- Cinematic landing and optional 3D body; current / deliberately opens the usable overview.
- Complete rules/scoring, Mifflin-St Jeor estimate, all context-dependent zone mappings and daily trend semantics.
- Validated rPPG, respiratory estimate, vision analysis, quick check-in, full field validation and reminders.
- Advanced charts: crew overlays, correlations, PNG exports, event annotations and small multiples.
- Persisted acknowledgement/snooze, full badge/streak/level system, nutrition and mind history.
- Streaming chat, structured plan tasks, optional voice navigation; image studio excluded by strict no-images requirement.
- Full automated deterministic demo sequence, onboarding, profile/baseline editor, complete crew and chart-rich PDFs.
- Production PWA installation/offline and cross-device realtime verification require publication/device access.