<template>
  <div :style="{
    background: `-webkit-linear-gradient(to right, ${getTheme.bgStyle.from}, ${getTheme.bgStyle.to})`,
    background: `linear-gradient(to right, ${getTheme.bgStyle.from}, ${getTheme.bgStyle.to})`,
    color:getTheme.bgStyle.color
    }">
    <main-header/>
    <div class="product-wrapper">
      <sidebar/>
      <product :item="getTheme"/>
    </div>
  </div>

</template>

<script>
import mainHeader from '@/components/main-header/index.vue'
import sidebar from '@/components/sidebar/index.vue'
import product from '@/components/product/index.vue'
import {mapGetters} from "vuex";


export default {
  components: {
    mainHeader,
    sidebar,
    product
  },
  computed: {
    ...mapGetters({
      getTheme: 'main/getStyle'
    })
  },
}
</script>
<style>
.product-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>