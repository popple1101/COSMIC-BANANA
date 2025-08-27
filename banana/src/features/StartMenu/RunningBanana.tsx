import React, { useEffect, useMemo, useRef, useState } from 'react';

const runRightFrames = [
  "/src/assets/sprites/banana/run_r_00.png",
  "/src/assets/sprites/banana/run_r_01.png",
  "/src/assets/sprites/banana/run_r_02.png",
  "/src/assets/sprites/banana/run_r_03.png",
];
const runLeftFrames = [
  "/src/assets/sprites/banana/run_l_00.png",
  "/src/assets/sprites/banana/run_l_01.png",
  "/src/assets/sprites/banana/run_l_02.png",
  "/src/assets/sprites/banana/run_l_03.png",
];

export default function RunningBanana() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [goingRight, setGoingRight] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  // 프레임 루프
  useEffect(() => {
    const id = setInterval(() => {
      setFrameIndex((p) => (p + 1) % 4);
    }, 150);
    return () => clearInterval(id);
  }, []);

  // CSS 애니 왕복 이벤트로 방향 토글(정확한 타이밍)
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onIter = () => setGoingRight((prev) => !prev);
    el.addEventListener('animationiteration', onIter);
    return () => el.removeEventListener('animationiteration', onIter);
  }, []);

  const src = useMemo(() => (goingRight ? runRightFrames : runLeftFrames)[frameIndex], [goingRight, frameIndex]);

  return (
    <div ref={wrapRef} style={wrap}>
      <img src={src} alt="banana running" style={banana} />
    </div>
  );
}

/* 화면 위쪽, 배경보다 위(zIndex:0) / 타이틀·버튼보다 뒤(zIndex:0, 타이틀/버튼은 1 이상) */
const wrap: React.CSSProperties = {
  position: 'absolute',
  top: '120px',         // ← “위에서” 뛰게
  left: '0px',
  zIndex: 0,
  pointerEvents: 'none',
  animation: 'banana-run 6s linear infinite alternate', // 왕복
};

const banana: React.CSSProperties = {
  width: '50px',
  imageRendering: 'pixelated',
};
