import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function StartMenu() {
  const nav = useNavigate();
  return (
    <div style={wrap}>
      <div style={card}>
        <h1 style={{margin:0,fontSize:36}}>🍌 Banana Escape</h1>
        <p style={{opacity:.8, margin:'8px 0 20px'}}>주방→우주 탈출 병맛 러너</p>
        <button onClick={() => nav('/stage/1')} style={btn}>시작하기</button>
      </div>
    </div>
  );
}

const wrap: React.CSSProperties = {
  minHeight: '100dvh', display: 'grid', placeItems: 'center',
  background: 'radial-gradient(1000px 600px at 70% -10%, #ffe8a6 0%, #1a1a1a 60%)',
  color: '#fff'
};
const card: React.CSSProperties = {
  background: 'rgba(0,0,0,.35)', borderRadius: 16, padding: '32px 28px',
  boxShadow: '0 10px 30px rgba(0,0,0,.35)', textAlign: 'center', width: 360, maxWidth: '90vw'
};
const btn: React.CSSProperties = {
  width: '100%', padding: '12px 16px', borderRadius: 12, border: 'none',
  background: '#ffd44d', color: '#111', fontWeight: 700, cursor: 'pointer',
  boxShadow: '0 6px 16px rgba(0,0,0,.25)'
};
