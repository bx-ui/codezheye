<template>
  <div class="contentAPP">
    <global-head></global-head>
    <div class="appMain">
      <router-view/>
    </div>
    <global-foot></global-foot>
  </div>
</template>

<script>
import GlobalHead from '@/components/global/GlobalHead.vue'
import GlobalFoot from '@/components/global/GlobalFoot.vue'
export default {
  components: { GlobalHead, GlobalFoot },

  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.contentAPP {
  height: 100vh;
  overflow: hidden;
  .appMain {
    height: calc(100% - 195px);
    overflow: auto;
  }
}
</style>
