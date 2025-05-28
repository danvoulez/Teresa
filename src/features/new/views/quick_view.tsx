import React from 'react';
import { saveLog } from '@/core/services/loglineDb';
import { useNewDraftStore } from '../hooks/useNewDraftStore';
export default function QuickView(){const draft=useNewDraftStore(s=>s.draft);const setField=useNewDraftStore(s=>s.setField);return(<div><textarea rows={4} cols={50} placeholder='O que aconteceu?' value={draft.this||''} onChange={e=>setField('this',e.target.value)}/><br/><button onClick={()=>{saveLog({...draft,status:'pending',valid:false});alert('Log salvo!');}}>Registrar</button></div>);
}
