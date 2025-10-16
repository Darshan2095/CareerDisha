export type MentorSession = {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  duration: number; // minutes
  link: string;
  interest: string; // e.g., Frontend, Backend, Data Science
  description?: string;
  document?: string; // optional document/resource link
};

const STORAGE_KEY = "mentor_sessions_v1";

export function getSessions(): MentorSession[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as any[];
    if (!Array.isArray(parsed)) return [];
    // Backward compatibility: ensure new optional fields exist
    return parsed.map((s) => ({ interest: "", description: "", document: "", ...s })) as MentorSession[];
  } catch {
    return [];
  }
}

export function saveSessions(sessions: MentorSession[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  try {
    window.dispatchEvent(new Event("mentor_sessions_changed"));
  } catch {}
}

export function addSession(session: Omit<MentorSession, "id">): MentorSession {
  const current = getSessions();
  const newSession: MentorSession = { id: crypto.randomUUID(), ...session };
  const next = [...current, newSession];
  saveSessions(next);
  return newSession;
}

export function deleteSession(id: string) {
  const current = getSessions();
  const next = current.filter((s) => s.id !== id);
  saveSessions(next);
}

export function getUpcomingSessions(): MentorSession[] {
  const sessions = getSessions();
  const withDate = sessions.map((s) => ({
    ...s,
    start: new Date(`${s.date}T${s.time}:00`),
  }));
  const now = new Date();
  return withDate
    .filter((s) => s.start >= now)
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .map(({ start, ...rest }) => rest);
}

export function subscribeToSessionChanges(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) callback();
  };
  const onCustom = () => callback();
  window.addEventListener("storage", onStorage);
  window.addEventListener("mentor_sessions_changed", onCustom as EventListener);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("mentor_sessions_changed", onCustom as EventListener);
  };
}

