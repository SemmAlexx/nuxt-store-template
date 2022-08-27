<template>
  <div class="reviews">
    <div class="container">
      <vue-slick-carousel v-bind="mainSlide" class="reviews__slider" ref="reviewSlider">
        <div class="reviews__slider-slide" v-for="(item) in reviews" :style="{
    background: `-webkit-linear-gradient(to right, ${getTheme.bgStyle.from==='#d8d8d9'?'#232526':'#d8d8d9'}, ${getTheme.bgStyle.to==='#ffffff'?'#414345':'#ffffff'})`,
    background: `linear-gradient(to right, ${getTheme.bgStyle.from==='#d8d8d9'?'#232526':'#d8d8d9'}, ${getTheme.bgStyle.to==='#ffffff'?'#414345':'#ffffff'})`,
    color:getTheme.bgStyle.color,
 }">

          <h2 :style="{ color:getTheme.bgStyle.color==='white'?'black':'white'}">{{ item.name }}</h2>
          <vue-slick-carousel v-bind="smallSlide" :asNavFor="$refs.c2" ref="c1">
            <div v-for="(el) in item.images" aria-current="true">
              <img :src="el" :alt="item.name">
            </div>

          </vue-slick-carousel>
          <vue-slick-carousel
              v-bind="littleSliders" class="reviews__slider_little" ref="c2" :asNavFor="$refs.c1">
            <div v-for="(el,index) in item.images" class="reviews__slider_little-slide"
                 aria-current="true">
              <img class="reviews__slider_little-slide-img" :src="el" :alt="item.name">
            </div>
          </vue-slick-carousel>
          <h3 :style="{ color:getTheme.bgStyle.color==='white'?'black':'white'}">{{ item.review }}</h3>
        </div>
      </vue-slick-carousel>
      <div class="reviews__buttons">
        <button @click="showPrev" :style="{
    background: `-webkit-linear-gradient(to right, ${getTheme.bgStyle.from==='#d8d8d9'?'#d8d8d9':'#232526'}, ${getTheme.bgStyle.to==='#ffffff'?'#ffffff':'#414345'})`,
    background: `linear-gradient(to right, ${getTheme.bgStyle.from==='#d8d8d9'?'#d8d8d9':'#232526'}, ${getTheme.bgStyle.to==='#ffffff'?'#ffffff':'#414345'})`
      }">
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-left" role="img"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-angle-left fa-4x">
            <path :fill="getTheme.bgStyle.color"
                  d="M166.5 424.5l-143.1-152c-4.375-4.625-6.562-10.56-6.562-16.5c0-5.938 2.188-11.88 6.562-16.5l143.1-152c9.125-9.625 24.31-10.03 33.93-.9375c9.688 9.125 10.03 24.38 .9375 33.94l-128.4 135.5l128.4 135.5c9.094 9.562 8.75 24.75-.9375 33.94C190.9 434.5 175.7 434.1 166.5 424.5z"
                  class=""></path>
          </svg>
        </button>
        <button @click="showNext"
                :style="{
    background: `-webkit-linear-gradient(to right, ${getTheme.bgStyle.from==='#d8d8d9'?'#d8d8d9':'#232526'}, ${getTheme.bgStyle.to==='#ffffff'?'#ffffff':'#414345'})`,
    background: `linear-gradient(to right, ${getTheme.bgStyle.from==='#d8d8d9'?'#d8d8d9':'#232526'}, ${getTheme.bgStyle.to==='#ffffff'?'#ffffff':'#414345'})`}"
        >
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-right" role="img"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-angle-right fa-4x">
            <path :fill="getTheme.bgStyle.color"
                  d="M89.45 87.5l143.1 152c4.375 4.625 6.562 10.56 6.562 16.5c0 5.937-2.188 11.87-6.562 16.5l-143.1 152C80.33 434.1 65.14 434.5 55.52 425.4c-9.688-9.125-10.03-24.38-.9375-33.94l128.4-135.5l-128.4-135.5C45.49 110.9 45.83 95.75 55.52 86.56C65.14 77.47 80.33 77.87 89.45 87.5z"
                  class=""></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
