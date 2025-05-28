import React, { useState } from 'react';
import QuickView from '../views/quick_view';
import AppleCardsView from '../views/apple_cards_view';
import FormView from '../views/form_view';
import GhostView from '../views/ghost_view';
export default function NewViewSwitcher() {
  const [mode, setMode] = useState<'quick'|'cards'|'form'|'ghost'>('quick');
  return (<div><nav className='flex gap-2 mb-4'>{['quick','cards','form','ghost'].map(m=><button key={m} onClick={()=>setMode(m as any)} className={mode===m?'font-bold':''}>{m}</button>)}</nav>{mode==='quick'?<QuickView/>:mode==='cards'?<AppleCardsView/>:mode==='form'?<FormView/>:<GhostView/>}</div>);
}
