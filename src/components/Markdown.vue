<template>
  <div class="markdown-body" v-html="html"></div>
</template>

<style lang="scss" scoped>
.markdown-body {
  width: 100%;
  max-width: 800px;
  margin: 20px auto;
}
</style>

<script setup>
import 'github-markdown-css'
import 'highlight.js/styles/monokai.css'
import { defineProps, computed } from 'vue'
import { markdown } from '../utils'

const props = defineProps({
  mark: {
    type: String,
    default: '',
  }
})

const html = computed(() => markdown(props.mark))
</script>