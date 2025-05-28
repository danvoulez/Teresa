export function debounce(fn: Function, ms = 300) { let t: any; return (...args: any[]) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); }; }
