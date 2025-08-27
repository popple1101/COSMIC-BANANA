import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import StartMenu from '../features/StartMenu/StartMenu';
import GameRoot from './GameRoot';
// 각 스테이지는 IStage 구현체를 export 한다는 가정
import Stage01 from '../features/stage-01';
import Stage02 from '../features/stage-02';
import Stage03 from '../features/stage-03';
import Stage04 from '../features/stage-04';
import Stage05 from '../features/stage-05';
import Stage06 from '../features/stage-06';

function StageRoute({ stage, next }: { stage: any; next: string }) {
  const nav = useNavigate();
  return <GameRoot stage={stage} onClear={() => nav(next)} />;
}

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<StartMenu />} />
      <Route path="/stage/1" element={<StageRoute stage={Stage01} next="/stage/2" />} />
      <Route path="/stage/2" element={<StageRoute stage={Stage02} next="/stage/3" />} />
      <Route path="/stage/3" element={<StageRoute stage={Stage03} next="/stage/4" />} />
      <Route path="/stage/4" element={<StageRoute stage={Stage04} next="/stage/5" />} />
      <Route path="/stage/5" element={<StageRoute stage={Stage05} next="/stage/6" />} />
      <Route path="/stage/6" element={<StageRoute stage={Stage06} next="/ending" />} />
      <Route path="/ending" element={<div style={{padding:24, textAlign:'center'}}>엔딩 🎉</div>} />
      <Route path="*" element={<StartMenu />} />
    </Routes>
  );
}
