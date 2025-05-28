import React from 'react';
const entries = [{type:'venda',desc:'Transação de produto/serviço'},{type:'pesagem',desc:'Registro de peso'},{type:'sinistro',desc:'Incidente/avaria'},{type:'cadastro',desc:'Novo cadastro'}];
export default function DictionaryPanel(){return(<div className='border p-2 mt-4'><h4>Dicionário</h4><ul>{entries.map(e=><li key={e.type}><strong>{e.type}</strong>: {e.desc}</li>)}</ul></div>);
}
