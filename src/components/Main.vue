<template>
  <el-container>
    <el-header v-if="props.header">header</el-header>
    <el-container>
      <el-aside v-if="props.aside">aside</el-aside>
      <el-container>
        <el-main>
          <slot></slot>
        </el-main>
        <el-footer v-if="props.footer">footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
</style>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
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