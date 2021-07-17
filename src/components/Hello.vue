<template>
  <div class="wrap">
    <div class="greet">Hello, {{ name }}!</div>
  </div>
</template>

<style>
</style>

<script setup>
import { defineProps, reactive } from "vue";
defineProps({
  name: {
    type: String,
    default: 'User'
  }
})
</script>