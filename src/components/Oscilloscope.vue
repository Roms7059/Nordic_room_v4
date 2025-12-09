<template>
  <canvas ref="canvas" class="oscilloscope"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const canvas = ref<HTMLCanvasElement | null>(null);
let animationFrameId: number;

onMounted(() => {
  const canvasEl = canvas.value;
  if (!canvasEl) return;

  const ctx = canvasEl.getContext('2d');
  if (!ctx) return;

  let time = 0;
  const draw = () => {
    const { width, height } = canvasEl;
    ctx.clearRect(0, 0, width, height);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(255, 140, 0, 0.7)'; // Accent color with some transparency
    ctx.beginPath();

    const centerY = height / 2;
    const amplitude = height / 4;
    
    for (let x = 0; x < width; x++) {
      const angle = (x / width) * Math.PI * 2;
      const y = centerY + Math.sin(angle * 5 + time) * Math.sin(angle * 1 + time) * amplitude;
      ctx.lineTo(x, y);
    }
    
    ctx.stroke();
    time += 0.05;
    animationFrameId = requestAnimationFrame(draw);
  };

  const resizeCanvas = () => {
    canvasEl.width = canvasEl.offsetWidth;
    canvasEl.height = canvasEl.offsetHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  draw();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  window.removeEventListener('resize', () => {});
});
</script>

<style scoped>
.oscilloscope {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  z-index: 10;
  pointer-events: none;
  opacity: 0.3;
}
</style>