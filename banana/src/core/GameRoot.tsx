import React, { useEffect } from 'react';

type Props = {
  stage: any;           // 나중에 IStage로 바꿔도 됨
  onClear: () => void;  // 클리어 시 라우터 이동
};

export default function GameRoot({ stage, onClear }: Props) {
  useEffect(() => {
    // TODO: 여기서 Phaser 부팅하고 stage.load/create 호출하기
    // 지금은 더미로 2초 뒤 자동 클리어해서 라우팅 검증
    const t = setTimeout(() => onClear(), 2000);
    return () => clearTimeout(t);
  }, [stage, onClear]);

  return (
    <div style={{height: '100dvh', display:'grid', placeItems:'center', background:'#0b1020', color:'#fff'}}>
      <div style={{opacity:.85, textAlign:'center'}}>
        <div style={{fontSize:18, marginBottom:8}}>Stage 로딩중… (더미)</div>
        <div>2초 후 다음 스테이지로 이동 테스트</div>
      </div>
    </div>
  );
}
