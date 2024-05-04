<template>
  <div>
    <p>欢迎了解 {{ msg }}</p>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const msg = ref('Vue学习')
</script>