<template>
  <Main :aside="false">
    <Home />
  </Main>
</template>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<script setup>
import Main from '../components/Main.vue'
import Home from '../components/Home.vue'
import { useStore } from "vuex";
const store = useStore()
console.log(store.state.test)
store.commit('changeTest')
console.log(store.state.test)
</script>