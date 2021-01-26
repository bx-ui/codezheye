<template>
  <div class="h-100 pt-5 box">
    <div class="d-flex a-center j-center">
      <el-button type="primary" size="small" @click="writeSome">开始写文章</el-button>
    </div>
    <article-list :columnList="columnList" />
    <div class="text-center">
      <el-button size="small" @click="loadMore" :loading="loading" v-if="total > columnList.length">加载更多</el-button>
      <div v-else class="text-light-muted pb-2">没有更多了~~</div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'
import ArticleList from '@/components/ArticleList.vue'
import { loadColumn } from '@/api/article.ts'
import { ref } from 'vue'
export default {
  components: { ArticleList },
  setup () {
    const currentPage = ref(1)
    const pageSize = ref(5)
    const loading = ref(false)
    const columnList = ref([])
    const total = ref(0)
    const router = useRouter()
    const writeSome = () => {
      router.push('/write')
    }
    const getList = () => {
      // 请求专栏数据接口
      return new Promise<void>(resolve => {
        loadColumn({ currentPage: currentPage.value, pageSize: pageSize.value }).then(res => {
          columnList.value = columnList.value.concat(res.data.list)
          total.value = res.data.count
          resolve()
        })
      })
    }
    const loadMore = () => {
      loading.value = true
      currentPage.value++
      setTimeout(() => {
        getList().then(() => {
          loading.value = false
        })
      }, 500)
    }
    getList()

    // const { data } = loadColumn({ currentPage: currentPage.value, pageSize: pageSize.value })
    // columnList.value = data.list
    return {
      writeSome,
      columnList,
      loadMore,
      loading,
      total
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
