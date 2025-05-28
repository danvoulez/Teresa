import React from 'react';
import { LogEntry } from '@/core/types/LogEntry';
import LogCard from './LogCard';
export default function TimelineList({ logs }: { logs: LogEntry[] }){
 return <div className='space-y-2'>{logs.map((l,i)=><LogCard key={i} entry={l}/>)};</div>;
}
