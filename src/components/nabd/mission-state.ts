import { createContext, type Context } from 'react';
import type { Crew } from '@/lib/demo';
import type { evaluate, Reading } from '@/lib/healthRules';
import type { MissionMode } from '@/lib/missionModes';

export type Task = { id: string; title: string; points: number; done: boolean; crew_id: string };
export type Message = { id: string; crew_id: string; body: string; direction: string; deliver_at: string };
export type MissionState = {
  person: Crew; setCrew: (id: string) => void;
  mode: MissionMode; setMode: (mode: MissionMode) => void;
  history: Reading[]; reading: Reading; health: ReturnType<typeof evaluate>;
  tasks: Task[]; toggleTask: (id: string) => Promise<void>; addTask: (title: string) => Promise<void>;
  saveReading: (m: Reading) => Promise<void>;
  messages: Message[]; sendMessage: (body: string, direction?: string) => Promise<void>;
  online: boolean; synced: boolean; points: number;
  sound: boolean; setSound: (value: boolean) => void;
  scenario: string | null; setScenario: (value: string | null) => void;
  overlay: Reading | null; setOverlay: (value: Reading | null) => void;
  crewHealth: (person: Crew) => ReturnType<typeof evaluate>;
};

declare global {
  var __nabdMissionContext: Context<MissionState | null> | undefined;
}

// Live preview patches can reload consumers without remounting the root provider.
// Retain the context identity, never a crew value or request-specific state.
export const MissionContext = globalThis.__nabdMissionContext ??= createContext<MissionState | null>(null);