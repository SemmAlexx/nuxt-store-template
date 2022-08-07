<template>
  <div class="sidebar">
    <div class="sidebar__container">
      {{ selectedColor }}
      <ul class="sidebar__nav">
        <li v-for="(item, index) in menu" :key="index">
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
