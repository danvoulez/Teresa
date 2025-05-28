import React, { useEffect, useState } from 'react';
import { askLLM } from '@/core/services/dispatcher';
import { useLogStore } from './hooks/useLogStore';
import TimelineList from './components/TimelineList';
export default function LogLinePage(){const [input,setInput]=useState('');const [chat,setChat]=useState<{q:string,a:string}[]>([]);
 const { addLog, logs, loadLogs }=useLogStore();
 useEffect(()=>{loadLogs();},[]);
 const send=async()=>{const a=await askLLM(input);setChat(c=>[...c,{q:input,a}]);addLog({who:'user',did:'ask',this:input,when:new Date().toISOString(),status:'ok',valid:true});setInput('');};
 return(<div className='space-y-4'><div className='flex'><input className='border p-2 flex-1' value={input} onChange={e=>setInput(e.target.value)}/><button onClick={send} className='ml-2 bg-green-600 text-white px-4'>Perguntar</button></div>{chat.map((c,i)=><div key={i}><strong>Você:</strong> {c.q}<br/><strong>Flip:</strong> {c.a}</div>)}<h3 className='mt-4'>Timeline</h3><TimelineList logs={logs}/></div>);
}
