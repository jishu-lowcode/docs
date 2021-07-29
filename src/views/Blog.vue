<template>
  <Main>
    <template v-slot:default>
      <Markdown :mark="mark" v-if="mark" />
      <div class="blog-home" v-else>blog</div>
    </template>
    <template v-slot:side>
      <Side :data="tree" @node-click="handleClick" />
    </template>
  </Main>
</template>

<style lang="scss" scoped>
</style>

<script setup>
import Main from '../components/Main.vue'
import Side from '../components/Side.vue'
import Markdown from '../components/Markdown.vue'

import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'

const { state, commit } = useStore()

if (state.nav !== '2') {
  commit('changeNav', { nav: '2' })
}

const tree = computed(() => state.md.filter(item => item.label === 'blog')[0].children || [])

const mark = ref('')

const handleClick = path => {
  console.log(path)
  axios({
    url: path
  }).then(res => {
    mark.value = res.data
  })
}

</script>