<template>
  <div class="main-wrapper" :style="{
    background: `-webkit-linear-gradient(to right, ${getTheme.bgStyle.from==='#d8d8d9'?'#232526':'#d8d8d9'}, ${getTheme.bgStyle.to==='#ffffff'?'#414345':'#ffffff'})`,
    background: `linear-gradient(to right, ${getTheme.bgStyle.from==='#d8d8d9'?'#232526':'#d8d8d9'}, ${getTheme.bgStyle.to==='#ffffff'?'#414345':'#ffffff'})`,
    color:getTheme.bgStyle.color,
 }">
    <main-header/>
    <div class="container">
      <div class="product-wrapper">
        <div class="capers-div">
          <div class="circle-group">
            <div class="circle"
                 :class="{'showAnimationCircle1':showAnimation}"></div>
            <div class="circle"
                 :style="{
              background: `-webkit-linear-gradient(to right, ${getTheme.bgStyle.from}, ${getTheme.bgStyle.to})`,
              background: `linear-gradient(to right, ${getTheme.bgStyle.from}, ${getTheme.bgStyle.to})`}"
                 :class="{'showAnimationCircle2':showAnimation}"></div>
          </div>
        </div>
        <sidebar/>
        <product :item="getTheme"/>
      </div>
      <h1 :style="{ color:getTheme.bgStyle.color,}">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consectetur consequuntur debitis eaque
        eius eligendi enim expedita iure minima minus molestiae odit, perferendis quibusdam sed sint suscipit, ut
        voluptas. A asperiores consequatur, corporis culpa cum debitis dignissimos dolores doloribus eaque est eum
        expedita harum inventore ipsam iste labore magni minus mollitia natus non nulla numquam odio officia omnis
        pariatur praesentium quas quibusdam quis repellat sed sint soluta suscipit tempore tenetur veritatis voluptas
        voluptatem. Adipisci corporis debitis magni necessitatibus? Eius nesciunt pariatur ut voluptatum. Ad, eos
        error, est exercitationem harum, mollitia nisi odio possimus quam quasi repellendus soluta vel vitae
        voluptates.
      </h1>
      <reviews/>
    </div>
  </div>

</template>

<script>
import mainHeader from '@/components/main-header/index.vue'
import sidebar from '@/components/sidebar/index.vue'
import product from '@/components/product/index.vue'
import reviews from "@/components/reviews/index.vue"
import {mapGetters} from "vuex";


export default {
  components: {
    mainHeader,
    sidebar,
    product,
    reviews
  },
  data() {
    return {
      showAnimation: false,
    }
  },
  watch: {
    'getTheme': function () {
      this.showAnimation = true
      setTimeout(() => {
        this.showAnimation = false
      }, 1000)
    }
  },
  computed: {
    ...mapGetters({
      getTheme: 'main/getStyle',
    })
  },
}
</script>
<style>
h1 {
  position: relative;
  z-index: 1;
  font-size: 20px;
  max-width: 900px;
  font-weight: 400;
  margin: auto;
  margin-top: 50px;

}

.product-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}

.circle-group, .circle-group * {
  width: 250vh;
  height: 250vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
}

.showAnimationCircle1 {
  animation: expandingcircle0 1s ease-in-out;
}

.showAnimationCircle2 {
  animation: expandingcircle1 1s ease-in-out;
}

.circle:nth-child(2) {
  z-index: 100;
  position: fixed;
  left: 50%;
  top: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  margin: auto;
  border-radius: 50%;
  /*opacity: 0;*/
}

@keyframes expandingcircle0 {
  0% {
    opacity: 1;
    margin: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  100% {
    opacity: 1;
    margin: auto;
    width: 10%;
    height: 10%;
    border-radius: 50%;
  }
}

.circle:nth-child(1) {
  z-index: 7;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
  opacity: 0;
}

@keyframes expandingcircle1 {
  0% {
    width: 10%;
    height: 10%;
    opacity: 1;
  }
  100% {
    opacity: 1;
    margin: auto;
    width: 200%;
    height: 200%;
    border-radius: 50%;
  }
}
</style>