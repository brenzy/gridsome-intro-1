<template>
  <button class="wave-button" v-on:click="waves=waves+1">
    {{ label }}
  </button>
</template>

<script>
  export default {
    name: "WaveCounter",
    data: function () {
      return {
        hello: 'Hello',
        waves: 0
      }
    },
    computed: {
      label: function () {
        return `👋 ${this.waves} ${this.waves === 1 ? 'wave' : 'waves'}`;
      }
    }
  }
</script>

<style scoped>
  .wave-button {
    background: rebeccapurple;
    border: none;
    color: white;
    font-size: 1.25rem;
    cursor: pointer;
  }
</style>
