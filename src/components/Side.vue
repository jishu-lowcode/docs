<template>
  <el-tree :data="data" @node-click="handleClick" />
</template>

<script setup>
import {defineProps, defineEmits} from 'vue'

defineProps({
  data: {
    type: Array,
    default: []
  }
})

const emit = defineEmits(['node-click'])

const handleClick = (e) => {
  const {path} = e
  if (path) {
    emit('node-click', path)
  } else {
    return false
  }
}

</script>