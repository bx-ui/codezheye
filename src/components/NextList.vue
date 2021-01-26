<template>
  <div>
    <div class="w-100 border border-light-secondary px-2 mb-3"
    v-for="(item, index) in currentList" :key="index">
      <p class="font-md">{{ item.title }}</p>
      <div style="height: 136px" class="d-flex">
        <img
        :src="item.image.url"
        alt="" style="width: 34%" class="rounded h-100">
        <div class="ml-3 font line-h-md">
          {{ item.excerpt }}
        </div>
      </div>
      <p class="font-sm">2020-08-21 19:20:00</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    currentList: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
