import React from 'react';
import { saveLog } from '@/core/services/loglineDb';
import { useNewDraftStore } from '../hooks/useNewDraftStore';
export default function AppleCardsView(){const draft=useNewDraftStore(s=>s.draft);const setField=useNewDraftStore(s=>s.setField);const labels=['who','did','this','when','status'] as const;return(<div className='flex gap-2'>{labels.map(k=><div key={k} className='border p-2'><strong>{k}</strong><input placeholder={k} value={(draft as any)[k]||''} onChange={e=>setField(k,e.target.value)}/></div>)}<button onClick={()=>{saveLog({...draft,valid:true});alert('Salvo!');}}>Salvar</button></div>);
}
