<template>
  <div>
    <!--    <Tutorial/>-->
    <main-header/>
    <sidebar/>
  </div>

</template>

<script>
import mainHeader from '@/components/main-header/index.vue'
import sidebar from '@/components/sidebar/index.vue'

export default {
  components: {
    mainHeader,
    sidebar
  }
}
</script>
