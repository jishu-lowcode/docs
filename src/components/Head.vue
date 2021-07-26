<template>
  <div class="head">
    <a href="/">
      <img class="logo" src="/images/logo_s.jpg" />
    </a>
    <el-menu :default-active="nav" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">文档</el-menu-item>
      <el-menu-item index="2">博客</el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.head {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    border-radius: 4px;
  }
}
</style>


<script setup>
import { defineProps, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const { state, commit } = store

defineProps({
  nav: {
    type: String,
    default: '0'
  }
})

const nav = computed(() => store.state.nav)

const handleSelect = (e) => {
  console.log(e)
  commit('changeNav', { nav: e })
  if (e === '1') {
    router.push('/docs')
  }
  if (e === '2') {
    router.push('/blog')
  }
}

</script>