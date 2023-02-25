<template>
  <main>
    <Header></Header>
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import Header from "./components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
