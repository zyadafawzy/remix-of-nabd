# chat.md — Central Project Memory

## How to use this file
- Read this file and all provided project files before any task.
- Update it whenever new info, instructions, or files arrive. Preserve history; mark changed requirements instead of silently deleting.
- Never record assumptions as confirmed facts. Ask when info is unclear or contradictory.
- After each task, report: what changed, bugs fixed, files modified, what remains, and whether chat.md was updated.

## Working rules (from user, 2026-11-13)
- Provided files may have any name/extension; judge by content, not filename.
- Latest applicable instructions are the source of truth.
- Make only necessary changes; never rewrite the whole project for a small change.
- Never remove existing functionality without permission or explicit requirement.
- Verify changes where possible; state clearly if something could not be verified.

## Project purpose / overview
- NABD (نبض): astronaut health decision support for NASA Space Apps 2026; six synthetic crew members across station, Mars transit, and lunar environments. English-only, cautious non-diagnostic language, code/SVG-only visuals.

## Current state (confirmed)
- 2026-11-13: New specification foundation checkpoint implemented, not all ten waves: grouped/collapsible rail, five mobile tabs and More sheet, search across existing pages/crew/science/alerts/tasks, keyboard commands, basic notification review/quiet mode, emergency guidance, synthetic mission clocks and global SIMULATED status, persisted dark/Daylight/High Contrast appearance controls, complete F001–F150 registry. No new database/auth changes; registry is not an admin authorization system. Modified shell.tsx, features.tsx, styles.css, dialog.tsx, AGENTS.md; added console-tools.tsx, theme-studio.tsx, console-preferences.ts, console-clock.ts, lib/features.ts and console-foundation.test.ts. Fixed strict index-signature access and mobile sheet translation found during verification. 13 tests pass; browser verified theme persistence, crew search, navigation collapse, emergency guidance and mobile More navigation; no runtime errors or overflow at 1440/1024/768/375px; automatic build OK. chat.md and roadmap.md updated. Remaining: full Wave 1 component library and flag wiring, then Waves 2–10. Urgent report transmission not exercised; existing mission data policies remain public synthetic-demo-only.
- Previous state (superseded 2026-11-13): fresh blank TanStack template, no backend.
- Current state: Lovable Cloud connected; core NABD demonstration built with 16 content pages. The first screen is the usable health overview rather than a cinematic landing page.

## Requested changes
- 2026-11-13: message9737.txt explicitly requests active feature development and all waves in one phase, continuing the already approved New_Text_Document-4.txt scope. The chat reports TS2345 at src/main.tsx(4,14), but no src/main.tsx exists in this TanStack project and the attachment has no failing source. Continue development without repeating scope clarification; do not claim that absent-file diagnostic was fixed.
- 2026-11-13: Scope resolved: user selected “Build attached specification” for New_Text_Document-4.txt. The ten-wave, 150-feature expansion supersedes the latest error-fix request. Preserve the existing app and implement wave order; record partial checkpoints honestly rather than claiming all waves complete.
- 2026-11-13: User reported TS2741 at src/App.tsx(16,20), missing required children. Current project has no src/App.tsx or custom PropsWithChildren declaration; no matching diagnostic was available in local telemetry. New_Text_Document-4.txt instead explicitly requests a full interface rebuild and 150 features across ten waves, contradicting the chat's error-fix scope. Awaiting scope selection before application changes; do not treat the rebuild as authorized yet.
- 2026-11-13: User reported TS2322 at src/lib/utils.ts(2,20): number not assignable to string. New_Text_Document-3.txt repeats the design brief twice, with no utility source. Current utility line 2 is the tailwind-merge import, not a numeric assignment; direct execution confirms cn(42) returns the string "42" and conflicting classes merge to "p-4". No matching build diagnostic is available. Application code remains unchanged; the actual failing utility source is required to determine a safe fix.
- 2026-11-13: User reported TS2345 at src/pages/Index.tsx(19,17): a number passed to a string parameter. New_Text_Document-2.txt repeats the UI overhaul brief and contains no failing source. The current project has src/routes/index.tsx and src/routes/app.index.tsx, but no src/pages/Index.tsx; available build telemetry contains no matching diagnostic. No application code changed. Request the failing call and receiving function declaration before deciding whether text conversion or a numeric parameter is correct.
- 2026-11-13: User reported TS2322 at src/App.tsx(10,11), claiming `() => void` is incompatible with `MouseEventHandler<HTMLButtonElement>`. Uploaded New_Text_Document.txt is a visual-only UI overhaul brief, not the failing App.tsx source; the error investigation does not authorize applying that broader overhaul.
- 2026-11-13: User reported TS2322 (`string | null` not assignable to `string`) at src/lib/utils.ts(2,21).
- Uploaded New_Text_Document_7.txt requests a complete NABD astronaut health decision-support app across eight phases. Scope resolved: user selected “Build NABD.”

## Bugs / errors to fix
- 2026-11-13: The reported App.tsx error cannot be reproduced from this project: src/App.tsx does not exist in its TanStack route structure. ButtonProps inherits React.ButtonHTMLAttributes; installed React types accept callbacks that ignore the event argument. Existing routing and mission-context tests pass (2/2). No application code changed; the actual failing source and complete diagnostic are needed before a targeted fix can be made.
- 2026-11-13: Fixed live-patch “Mission provider is required” crash by retaining React context identity across module reloads without globally storing mission values. New module-reload regression passes; browser verified Leo/Mars selection survives page navigation and reload with no runtime errors. Nine tests pass; automatic build OK. Modified mission-context.tsx, added mission-state.ts and regression test, updated AGENTS.md, roadmap.md, and chat.md. The original already-open patched browser was not available; verification used a fresh local browser plus simulated module reload.
- Reported TS2322 could not be reproduced from the current utility: line 2 is an import, both installed utility dependencies declare string return values, and a runtime check confirmed cn(null, undefined, "p-2", "p-4") returns "p-4". No available build-error log contained this error. No utility changes made without a matching failure.

## Tasks
- Completed: created chat.md.
- Superseded: awaiting uploaded project files; the full specification has now been read.
- Completed: read New_Text_Document_7.txt in full and investigated the reported utility error.
- Completed: scope clarification, Cloud connection, mission dashboard/body drawer, crew switching, three modes, core rules/tests, saved check-in, trends, alerts/action tasks, training, mind, nutrition, learning, sources, delayed console, AI Medic, scenario controls, PDF/CSV, preferences and guided page tour.
- Verified: every content page renders, Heart opens on click, 75 bpm check-in saved in Cloud and read back after reload, 375px has no horizontal overflow, PDF downloads, actual AI Medic request answered from supplied sleep data, 8 tests pass, automatic build OK.
- Remaining scope and limitations are listed explicitly in README.md and roadmap.md. The full eight-phase specification is not complete.

## Must NOT change / remove / implement
- Do not diagnose or present demo ranges as clinical protocols; do not collect real health information under public demo policies.
- Do not generate images: the upload’s opening strict code-only visual instruction supersedes its later Asset Studio section.

## Decisions & requirements
- Preserve TanStack routing and server functions required by the project; Cloud was not already connected despite the upload’s assumption and has now been enabled.
- Assumptions: synthetic public demonstration, fixed illustrative 2,400 kcal energy target, usable overview at /, SVG-only body, manually recorded pulse or explicitly labelled simulation.
- File changes: src/components/nabd/*, src/lib/{demo,healthRules,hazards,missionModes,knowledge,medic.functions,pwa}.ts/tsx, all NABD routes, root/styles/Vite configuration, PWA icon/manifest, generated AI types, Cloud migration, tests, README.md, AGENTS.md, roadmap.md, and this file. Existing src/lib/utils.ts remains unchanged.
- Bugs fixed during build: nullable crew/article defaults, body bone path intercepting Heart clicks, and excessive numeric precision overflowing telemetry cards.
- Unverified: production PWA offline installation, physical camera capture, cross-device realtime, source URLs. Camera pulse estimation and photo AI are unavailable and clearly labelled.

## Referenced files
| File | Purpose |
|------|---------|
| (none uploaded yet) | |
| New_Text_Document_7.txt | Full NABD specification: mission dashboard, health rules, check-in, trends, training, mental health, nutrition, educational library, delayed messaging, AI assistance, scenarios, rewards, reports, PWA and demo tour. |
| New_Text_Document.txt | Visual-only product UI/UX overhaul brief; contains no App.tsx code or reported handler. Reviewed, not implemented during this error investigation. |
| New_Text_Document-2.txt | Repeated visual-only overhaul brief; contains no Index.tsx source or number-to-string call. Reviewed, not implemented during this error investigation. |
| New_Text_Document-3.txt | Duplicated visual-only overhaul brief; contains no utility source or numeric assignment. Reviewed, not implemented during this error investigation. |
| New_Text_Document-4.txt | Full-company rebuild specification with 150 features and ten waves; explicitly asks for feature development rather than error fixing, but contains no failing App.tsx source. Scope clarification pending. |
| message9737.txt | Requests all approved build waves in one phase without stopping; contains no main.tsx source. |

## Next step
- Resume the new specification at Wave 1 reusable component library and flag wiring; do not claim Wave 1 or all 150 features complete from this foundation checkpoint.
- Continue completing the outstanding full-spec features in roadmap.md; do not describe this core version as all eight phases complete.
