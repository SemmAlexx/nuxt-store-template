<template>
  <div class="sidebar">
    <div class="sidebar__wrapper">
      <ul class="sidebar__wrapper_nav">
        <li v-for="(item, index) in menu" :key="index" @click="setTheme(item)"
            :style="{background:selectedColor.id===item.id && getTheme.bgStyle.from==='#d8d8d9'?'rgb(117 117 118 / 23%)':null}"
            :class="{'activeTab':selectedColor.id===item.id}">
          <input type="radio" :id="item.id" :value="item" v-model="selectedColor">
          <div class="color" :style="{backgroundColor:item.hash}"></div>
          <label :for="item.id">{{ item.color }}</label>
        </li>
      </ul>

    </div>
  </div>
</template>
<style lang="scss" scoped src="./index.scss"></style>
<script src="./index.js"></script>
