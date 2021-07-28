<template>
  <Main>
    docs
  </Main>
</template>

<style lang="scss" scoped>
</style>

<script setup>
import Main from '../components/Main.vue'
import {useStore} from 'vuex'
const { state, commit } = useStore()

if (state.nav !== '1') {
  commit('changeNav', { nav: '1' })
}
</script>