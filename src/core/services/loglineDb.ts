import { LogEntry } from '@/core/types/LogEntry';
export function saveLog(entry: LogEntry) {
  const key = 'flipapp:logs';
  const existing = localStorage.getItem(key);
  const arr: LogEntry[] = existing ? JSON.parse(existing) : [];
  arr.push(entry);
  localStorage.setItem(key, JSON.stringify(arr));
}
