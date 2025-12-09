<template>
  <div class="audio-tracks-container">
    <div class="track" v-for="n in 6" :key="n">
      <div class="audio-clip" :style="getClipStyle()">
        <div class="waveform"></div>
      </div>
      <div class="track-controls">
        <div class="control-knob"></div>
        <div class="control-fader"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Function to randomize clip position and width for a more "realistic" look
const getClipStyle = () => {
  const width = Math.floor(Math.random() * 50) + 20; // width between 20% and 70%
  const start = Math.floor(Math.random() * (70 - width)); // start position
  return {
    left: `${start}%`,
    width: `${width}%`,
  };
};
</script>

<style scoped>
.audio-tracks-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 10;
  pointer-events: none; /* Allows clicks to go through */
  opacity: 0.15;
}

.track {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.audio-clip {
  position: absolute;
  height: 90%;
  background-color: var(--accent-color);
  border-radius: 4px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.waveform {
  width: 100%;
  height: 60%;
  background: linear-gradient(to right, 
    var(--accent-color) 0%, 
    var(--accent-color) 20%, 
    #FFF 20%, #FFF 22%, 
    var(--accent-color) 22%, var(--accent-color) 40%,
    #FFF 40%, #FFF 42%,
    var(--accent-color) 42%, var(--accent-color) 100%
  );
  background-size: 100% 100%;
  opacity: 0.5;
}

/* Simplified track controls for visual flavor */
.track-controls {
  display: none; /* Disabled for now to keep it simple */
}
</style>
