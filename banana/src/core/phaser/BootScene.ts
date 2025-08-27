import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    // 배경 6장 로드
    for (let i = 1; i <= 6; i++) {
      const key = `stage${String(i).padStart(2, '0')}_bg`;
      this.load.image(key, `/assets/backgrounds/${key}.png`);
    }

    // 바나나 프레임 로드 (각 파일을 개별 텍스처로)
    const bananaFrames = [
      'run_r_00','run_r_01','run_r_02','run_r_03',
      'run_l_00','run_l_01','run_l_02','run_l_03',
      'jump_r','land_r','jump_l','land_l','explode'
    ];
    bananaFrames.forEach(f => {
      this.load.image(`banana_${f}`, `/assets/sprites/banana/${f}.png`);
    });
  }

  create() {
    // ==== 애니메이션 등록 ====
    // 달리기(오른쪽)
    this.anims.create({
      key: 'banana-run-right',
      frames: ['run_r_00','run_r_01','run_r_02','run_r_03'].map(f => ({ key: `banana_${f}` })),
      frameRate: 10,
      repeat: -1
    });

    // 달리기(왼쪽)
    this.anims.create({
      key: 'banana-run-left',
      frames: ['run_l_00','run_l_01','run_l_02','run_l_03'].map(f => ({ key: `banana_${f}` })),
      frameRate: 10,
      repeat: -1
    });

    // 점프/착지(단일 프레임도 애니 키로 만들어두면 다루기 편함)
    this.anims.create({
      key: 'banana-jump-right',
      frames: [{ key: 'banana_jump_r' }],
      frameRate: 1
    });
    this.anims.create({
      key: 'banana-land-right',
      frames: [{ key: 'banana_land_r' }],
      frameRate: 1
    });
    this.anims.create({
      key: 'banana-jump-left',
      frames: [{ key: 'banana_jump_l' }],
      frameRate: 1
    });
    this.anims.create({
      key: 'banana-land-left',
      frames: [{ key: 'banana_land_l' }],
      frameRate: 1
    });

    // 사망(단일 컷 버전)
    this.anims.create({
      key: 'banana-die',
      frames: [{ key: 'banana_explode' }],
      frameRate: 1,
      repeat: 0
    });

    // 사망(단일 컷 버전)
this.anims.create({
  key: 'banana-die',
  frames: [{ key: 'banana_explode' }],
  frameRate: 1,
  repeat: 0
});


    // 다음 씬으로 이동 (게임 씬 이름에 맞게 수정)
    this.scene.start('Game');
  }
}
