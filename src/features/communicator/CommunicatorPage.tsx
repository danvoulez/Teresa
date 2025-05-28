import React, { useEffect, useState } from 'react';
import { socket } from '@/core/services/ws';
import SuggestionCard from './components/SuggestionCard';
import ChatStream from './components/ChatStream';
export default function CommunicatorPage(){const [msg, setMsg]=useState('');const send=()=>{socket.emit('message',msg);setMsg('');};useEffect(()=>{},[]);
 return(<div><ChatStream/><div className='mt-4 flex'><input className='border p-2 flex-1' value={msg} onChange={e=>setMsg(e.target.value)}/><button onClick={send} className='ml-2 bg-blue-600 text-white px-4'>Enviar</button></div><SuggestionCard/></div>);
}
