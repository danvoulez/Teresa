import React from 'react';
import { LogEntry } from '@/core/types/LogEntry';
export default function LogCard({ entry }: { entry: LogEntry }){
 return (<div className='border p-2 rounded bg-gray-50'><div><strong>When:</strong> {entry.when}</div><div><strong>Who:</strong> {entry.who}</div><div><strong>Did:</strong> {entry.did}</div><div><strong>This:</strong> {entry.this}</div><div><strong>Status:</strong> {entry.status}</div></div>);
}
