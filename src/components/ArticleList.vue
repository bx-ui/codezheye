<template>
  <div style="margin-top: 80px">
      <p class="font-cc font-weight text-center">文章列表</p>
      <div style="padding: 0px 300px" class="row">
        <div
        v-for="(item, index) in columnList" :key="index"
        class="span-6 border border-light-secondary py-3 px-2 d-flex flex-column a-center position-relative mr-4 mb-3"
        style="height: 240px"
        @click="jumpItem(item._id)">
          <img :src="item.avatar.url" alt="" class="rounded-circle" style="width: 60px; height: 60px">
          <p class="font">{{ item.title }}</p>
          <div class="font-sm three-hidden">
            {{ item.description }}
          </div>
          <el-button size="small" type="primary" class="position-absolute" style="bottom: 5px">进入专栏</el-button>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  props: {
    columnList: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const router = useRouter()
    const jumpItem = (id: string | number) => {
      router.push({
        path: '/showwrite',
        query: { id }
      })
    }
    return {
      jumpItem
    }
  }
})
</script>

<style scoped>

</style>
