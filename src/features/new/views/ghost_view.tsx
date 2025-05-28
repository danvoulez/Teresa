import React from 'react';
import { saveLog } from '@/core/services/loglineDb';
import { useNewDraftStore } from '../hooks/useNewDraftStore';
export default function GhostView(){const draft=useNewDraftStore(s=>s.draft);return(<div><p>Salvar rascunho</p><button onClick={()=>{saveLog({...draft,valid:false});alert('Rascunho salvo');}}>Salvar</button></div>);
}
