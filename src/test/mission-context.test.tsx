import { useContext } from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { defaultCrew, defaultReading, demoHistory } from '@/lib/demo';
import { evaluate } from '@/lib/healthRules';
import type { MissionState } from '@/components/nabd/mission-state';

afterEach(cleanup);

describe('Mission context during live preview updates', () => {
  it('keeps new consumers connected to an already-mounted provider after a module reload', async () => {
    const before = await import('@/components/nabd/mission-state');
    vi.resetModules();
    const after = await import('@/components/nabd/mission-state');
    expect(after.MissionContext).toBe(before.MissionContext);

    const history = demoHistory(defaultCrew);
    const reading = defaultReading(defaultCrew);
    const state: MissionState = {
      person: defaultCrew, mode: 'mars', history, reading,
      health: evaluate(reading, defaultCrew, history, 'mars'),
      tasks: [], messages: [], online: true, synced: true, points: 740,
      sound: false, scenario: null, overlay: null,
      setCrew: vi.fn(), setMode: vi.fn(), setSound: vi.fn(),
      setScenario: vi.fn(), setOverlay: vi.fn(),
      toggleTask: async () => {}, addTask: async () => {},
      saveReading: async () => {}, sendMessage: async () => {},
      crewHealth: person => evaluate(reading, person, history, 'mars'),
    };
    function UpdatedConsumer() {
      const mission = useContext(after.MissionContext);
      if (!mission) throw new Error('Mission provider is required');
      return <p>{mission.person.name} · {mission.mode}</p>;
    }
    render(<before.MissionContext.Provider value={state}><UpdatedConsumer /></before.MissionContext.Provider>);
    expect(screen.getByText('Amara Okafor · mars')).toBeInTheDocument();
  });
});