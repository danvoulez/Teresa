import React, { useEffect, useState } from 'react';
import { socket } from '@/core/services/ws';
export default function ChatStream(){const [msgs,setMsgs]=useState<string[]>([]);
 useEffect(()=>{socket.on('message',m=>setMsgs(a=>[...a,m]));},[]);
 return (<div className='space-y-2'>{msgs.map((m,i)=><div key={i} className='border p-2 rounded'>{m}</div>)}</div>);
}
