<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Application architecture
- Keep TanStack file routing and shared mission state in a context provider; this preserves the template's SSR and typed navigation.
- Retain only the mission React context identity across module reloads, never its value globally; live-preview consumers must stay connected to the mounted provider without leaking SSR crew state.
- Keep health evaluation in pure browser-safe functions, separate from presentation and AI; safety explanations remain available offline and testable.
- Cloud tables contain public synthetic demonstration data only; never enter real biometric or confidential data under public demo policies.
- Use TanStack server functions for AI, never new Edge Functions, so credentials stay server-side.
- Register the generated PWA worker through one guarded module only; editor previews must never be controlled by a service worker.
- Console appearance preferences are validated and applied after hydration through one shared browser hook; this avoids SSR state leakage and keeps settings synchronized with the shell.
- Track all specification IDs in the browser-safe feature registry; flags describe availability, not authorization, and must never grant access to private data.
- Only wired feature controls expose demo availability toggles; validate browser overrides against registry IDs and never label unwired features complete.
- Reuse the browser-safe table query and CSV utilities for data tables; protect spreadsheet exports from formula execution and export the visible filtered view.
- Public content uses separate typed leaf routes and a shared editorial shell; preserve the operational console at /app and embed the same dashboard rather than duplicating demo state.
- Public release and status pages distinguish planned work and simulated health from measured production claims; contact downloads remain local until an actual delivery destination is supplied.
- Mission status clocks are explicitly illustrative and advance from a per-mounted-shell start; do not present their synthetic epoch as a real launch date.
- Suit packet generation and capture stay in pure browser-safe functions; unsupported metrics retain explicit provenance so conceptual hardware is never mistaken for a validated device.
- Keep the anatomical viewer entirely SVG with shared system drawers and keyboard controls; the rejected WebGL model and dependencies must not return implicitly.
- AI Medic uses validated structured briefs and a curated evidence-ID allowlist with server-side prompts; generated citations never supply arbitrary URLs and offline guidance remains independent of inference.
- Reuse the shared SVG logo in navigation, downloads and favicon so brand assets cannot diverge.
- Daily science reuses the curated evidence registry with a browser-safe UTC-day rotation; editorial facts must not become generated medical claims.
