<template>
    <pre><code class="language-{{ language }}" v-html="formattedCode"></code></pre>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import Prism from 'prismjs';
  

  const props = defineProps({
    code: String,
    language: String,
  });
  
  const formattedCode = ref('');
  
  onMounted(() => {
    highlightCode();
  });
  
  watch(() => props.code, () => {
    highlightCode();
  });
  
  function highlightCode() {
    formattedCode.value = Prism.highlight(props.code, Prism.languages[props.language], props.language);
  }
  </script>
  
  <style scoped>
  pre {
    background: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    overflow-x: auto;
  }
  </style>