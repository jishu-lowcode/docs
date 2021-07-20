<template>
  <div class="head">
    <img class="logo" src="/images/logo_s.jpg">
    <el-menu :default-active="nav"  mode="horizontal" @select="handleSelect">
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
import {defineProps} from 'vue'

defineProps({
  nav: {
    type: String,
    default: '0'
  }
})

const handleSelect = (e) => {
  console.log(e)
}

</script>