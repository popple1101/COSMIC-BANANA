import React from 'react';
import { useNavigate } from 'react-router-dom';
import RunningBanana from './RunningBanana';
// ✅ 배경 이미지는 src에서 import로 가져오기 (상대경로 X)
import bgImg from '../../assets/backgrounds/stage01_bg.png';

export default function StartMenu() {
  const nav = useNavigate();

  return (
    <div style={wrap}>
      {/* 배경 */}
      <img src={bgImg} alt="main background" style={bg} />

      {/* 상단 타이틀 */}
      <h1 style={title}>COSMIC BANANA</h1>

      {/* 뒤에서 뛰는 바나나 (RunningBanana는 absolute라 wrap 기준으로 배치됨) */}
      <RunningBanana />

      {/* Start 버튼 */}
      <button style={btn} onClick={() => nav('/stage/1')}>
        START GAME
      </button>
    </div>
  );
}

const wrap: React.CSSProperties = {
  position: 'relative',
  width: '100vw',     // ✅ 화면 가로 꽉
  height: '100vh',    // ✅ 화면 세로 꽉
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const bg: React.CSSProperties = {
  position: 'absolute',
  top: 0, left: 0,
  width: '100%', height: '100%',
  objectFit: 'cover',
  zIndex: -2, // 가장 뒤
};

const title: React.CSSProperties = {
  fontFamily: '"Pixelify Sans", sans-serif',
  fontSize: '80px',
  color: 'yellow',
  marginTop: '40px',
  marginBottom: '80px',
  textShadow: '3px 3px 0 #000',
  zIndex: 1,  // ✅ 바나나보다 위
};

const btn: React.CSSProperties = {
  fontFamily: '"Pixelify Sans", sans-serif',
  fontSize: '24px',
  padding: '14px 36px',
  borderRadius: '12px',
  border: 'none',
  cursor: 'pointer',
  background: '#ffd44d',
  color: '#222',
  fontWeight: 700,
  boxShadow: '0 6px 16px rgba(0,0,0,.35)',
  zIndex: 1,
  animation: 'button-bounce 1.2s ease-in-out infinite',  // ✅ 추가
};