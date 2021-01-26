<template>
  <div class="h-100 w-100 d-flex j-center">
    <div class="span-8 h-100 pt-4">
      <div class="d-flex a-center">
        <img :src="currentInfo.avatar.url" alt="" style="width: 150px; height: 150px; border-radius: 50%">
        <div class="ml-4">
          <p class="font-md font-weight line-h0">{{ currentInfo.title }}</p>
          <p class="font-cc line-h-md">{{ currentInfo.description }}</p>
        </div>
      </div>
      <div class="bg-light-secondary w-100 my-4" style="height: 1px"></div>
      <next-list :currentList="currentList"></next-list>
      <div class="pb-2 text-center">
        <el-button size="small" @click="loadMore" v-if="total < currentList.length">加载更多</el-button>
        <div v-else class="text-light-muted pb-2">没有更多了~~</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { columnUserInfo, columnList, ColumnQueryType } from '@/api/article.ts'
import { useRoute } from 'vue-router'
import NextList from '@/components/NextList.vue'
import { ref } from 'vue'
export default {
  components: { NextList },
  setup () {
    const route = useRoute()
    const currentInfo = ref({})
    const currentList = ref([])
    const currentPage = ref(1)
    const pageSize = ref(6)
    const total = ref(0)
    const id = route.query.id
    columnUserInfo({ id }).then(res => {
      console.log(res)
      currentInfo.value = res.data
    })
    const loadList = () => {
      const obj: ColumnQueryType = {
        currentPage: currentPage.value,
        pageSize: pageSize.value
      }
      columnList(obj, id).then(res => {
        currentList.value = currentList.value.concat(res.data.list)
        total.value = res.data.count
      })
    }
    const loadMore = () => {
      currentPage.value++
      loadList()
    }
    loadList()
    return {
      currentInfo,
      currentList,
      loadMore,
      total
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
