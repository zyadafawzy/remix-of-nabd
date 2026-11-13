export const publicPages = [
  { path: '/product', title: 'Product', description: 'Explore the Nabd Mission Console and its working decision-support tools.' },
  { path: '/science', title: 'Science', description: 'The human-spaceflight evidence and limitations behind Nabd.' },
  { path: '/mission-modes', title: 'Mission modes', description: 'Station, Mars transit and lunar-base environments.' },
  { path: '/earth-impact', title: 'Earth impact', description: 'What spaceflight decision support can teach us about remote care.' },
  { path: '/safety-and-ethics', title: 'Safety & ethics', description: 'Non-diagnostic boundaries, synthetic data and human oversight.' },
  { path: '/docs', title: 'Documentation', description: 'How Nabd works: data, health rules, mission state and reporting.' },
  { path: '/changelog', title: 'Changelog', description: 'Verified delivery checkpoints and the ten-wave roadmap.' },
  { path: '/about', title: 'About', description: 'Nabd: crew health decision support beyond Earth.' },
  { path: '/team', title: 'Team', description: 'The six synthetic crew personas in Horizon Expedition 07.' },
  { path: '/press', title: 'Press kit', description: 'Nabd logo download and a factual product summary.' },
  { path: '/status', title: 'System status', description: 'Clearly labeled demonstration component status, not measured uptime.' },
  { path: '/contact', title: 'Contact', description: 'Export a structured project inquiry without collecting personal information.' },
  { path: '/judges', title: 'Judges guide', description: 'Inspect the working demo, safety boundaries and feature coverage.' },
] as const;
export type PublicPath = typeof publicPages[number]['path'];
export function publicHead(title: string, description: string) {
  return { meta: [{ title: `Nabd · ${title}` }, { name: 'description', content: description },
    { property: 'og:title', content: `Nabd · ${title}` }, { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
export const releases = [
  ['v0.1', 'Foundation', 'In progress: themes, grouped shell, clocks, search, notifications, feature switches and measurement tables.'],
  ['v0.2', 'Public website', 'In progress: product, science, documentation, status, press and judges surfaces.'],
  ['v0.3', 'Dashboard & body', 'Planned: role homes, layout editor and expanded system detail.'],
  ['v0.4', 'Measurement', 'Planned: unified sensing and structured measurement workflows.'],
  ['v0.5', 'Intelligence', 'Planned: forecasts, change points, risk register and model cards.'],
  ['v0.6', 'Mission operations', 'Planned: onboarding, scheduling, EVA planning and mission logistics.'],
  ['v0.7', 'Care', 'Planned: structured consultations, care plans and procedure coaching.'],
  ['v0.8', 'Training & recovery', 'Planned: adaptive workouts, meals, sleep and circadian planning.'],
  ['v0.9', 'Crew & environment', 'Planned: private wellbeing, habitat telemetry and shelter roll-call.'],
  ['v1.0', 'Platform hardening', 'Planned: consent, authenticated administration, imports, accessibility and final quality gates.'],
] as const;