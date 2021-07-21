<template>
  <div class="markdown-body" v-html="html"></div>
</template>

<style lang="scss" scoped>
</style>

<script setup>
import 'github-markdown-css'
import { defineProps, computed } from 'vue'
import marked from '../utils'
import hljs from 'highlight.js'

const props = defineProps({
  mark: String
})
console.log(marked(props.mark));
console.log(hljs.highlightAuto(marked(props.mark)));
const html = computed(() => hljs.highlightAuto(marked(props.mark)).value)

</script>