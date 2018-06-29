<template>
  <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar color="primary" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Pyrite</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "pyrite"
};
</script>

<style>
body,
html {
  overflow: hidden;
}
</style>
