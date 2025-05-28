import create from 'zustand';
import { LogEntry } from '@/core/types/LogEntry';
import { saveLog } from '@/core/services/loglineDb';
interface LogStore { logs: LogEntry[]; addLog:(l:LogEntry)=>void; loadLogs:()=>void; }
export const useLogStore=create<LogStore>(set=>({ logs:[], addLog:l=>{ saveLog(l); set(s=>({ logs:[...s.logs,l] })); }, loadLogs:()=>{ const key='flipapp:logs'; const raw=localStorage.getItem(key) || '[]'; set({ logs: JSON.parse(raw) }); } }));
