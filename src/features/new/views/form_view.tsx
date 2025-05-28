import React from 'react';
import { saveLog } from '@/core/services/loglineDb';
import { useNewDraftStore } from '../hooks/useNewDraftStore';
export default function FormView(){const setField=useNewDraftStore(s=>s.setField);const draft=useNewDraftStore(s=>s.draft);return(<form onSubmit={e=>{e.preventDefault();saveLog({...draft,valid:true});alert('Form enviado!');}}>{['who','did','this','when','confirmed_by','if_ok','if_doubt','if_not','status'].map(k=><div key={k}><label>{k}</label><input name={k} onChange={e=>setField(k as any,e.target.value)} /></div>)}<button type='submit'>Enviar</button></form>);
}
