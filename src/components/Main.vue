<template>
  <el-container>
    <el-header v-if="header">
      <Head />
    </el-header>
    <el-container>
      <el-aside v-if="aside">
        <Side />
      </el-aside>
      <el-container>
        <el-main>
          <slot></slot>
        </el-main>
        <el-footer v-if="footer">
          <Foot />
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
</style>

<script setup>
import Head from './Head.vue'
import Foot from './Foot.vue'
import Side from './Side.vue'
import { defineProps } from 'vue'

defineProps({
  header: {
    type: Boolean,
    default: true
  },
  footer: {
    type: Boolean,
    default: true
  },
  aside: {
    type: Boolean,
    default: true
  }
})
</script>