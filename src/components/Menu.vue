<script setup>
import { ref } from "vue";
import menuItems from "./menuItems";
import MenuItems from "./MenuItems.vue";
const collapsed = ref(false);
</script>

<template>
  <div :class="['menu', collapsed ? 'collapsed' : 'expanded']">
    <div class="header">
      <button class="menu-button" @click="collapsed = !collapsed">
        <font-awesome-icon icon="bars" size="2x" />
      </button>
    </div>
    <div class="profile">
      <img :src="'./assets/' + menuItems.pr" alt="" />
      <div class="profile-name" v-if="!collapsed">
        <a href="#" @click.prevent="menuItems.profile.onClick">
          {{ menuItems.profile.name }}</a
        >
      </div>
    </div>

    <div class="menu-items">
      <ul>
        <MenuItems
          v-for="menuItem in menuItems.items"
          :key="menuItem.id"
          :item="menuItem"
          :collapsed="collapsed"
        />
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu {
  background-color: #222;
  color: white;
  height: 100vh;
  transition: width 0.3s;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  left: 0;
  top: 0;
}

.header {
  display: flex;
  justify-content: end;
}

.menu-button {
  border: none;
  background-color: transparent;
  color: white;
  padding: 10px;
}

.collapsed {
  width: 80px;
}

.expanded {
  width: 350px;
}

.profile {
  padding: 10px;
  text-align: center;
}

.profile img {
  border-radius: 50%;
  min-width: 50px;
  max-width: 300px;
  width: 100%;
}

.profile-name a {
  padding: 10px 0;
  font-size: 18px;
  text-decoration: none;
  color: antiquewhite;
}

.menu-items ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
