const gpuData = {
  targetIndex: 0,
  model: './gpu.glb',
  scale: '0.02 0.02 0.02', // ย่อขนาดให้พอดีภาพ
  position: '0 0 0',

  hotspots: [
    {
      pos: '0.02 0.03 0.01',
      title: 'พัดลมระบายความร้อน Dual Fans',
      desc: 'ระบบพัดลมหมุนสวนทาง ช่วยดึงลมเข้าประมวลผลความร้อนได้อย่างมีประสิทธิภาพ'
    },
    {
      pos: '-0.03 0.01 0.01',
      title: 'พอร์ตแสดงผล (Display Output)',
      desc: 'รองรับ HDMI 2.1a และ DisplayPort 2.1 ต่อจอ 4K/8K ได้ลื่นไหล'
    }
  ]
};