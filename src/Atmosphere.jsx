import React from 'react';

export default function Atmosphere(){
 return <div className="catalogue-art" aria-hidden="true"><div className="magic-halo"/>{Array.from({length:9},(_,i)=><span key={i} className="magic-spark" style={{"--i":i}}/>)}<div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="grid-sheet"><div className="sheet-label">A CHANGE FOR THE BETTER <span>01—04</span></div>{Array.from({length:7},(_,i)=><div className="art-row" key={i}><span className="row-number">0{i+1}</span><i/><i/><i className={i%3===0?'active-cell':''}/></div>)}<div className="sheet-status"><span>●</span> Everything in its right place.</div></div><div className="art-chip chip-one"><span>↗</span> A fresh perspective.</div><div className="art-chip chip-two">CHECK. CHANGE. CARRY ON. <span>✓</span></div></div>;
}
