<template>
  <header class="flex px-4 w-full items-center justify-between bg-white">
    <router-link to="/" class="w-60">
      <img
        src="https://southsystem.com.br/wp-content/themes/southsystem/assets/img/logo-southsystem.svg"
        alt="logo"
        class="w-full py-6"
    /></router-link>
    <router-link to="/saved">
      <Button :text="'Salvos'"></Button>
    </router-link>
  </header>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  name: "Header",
  components: {
    Button,
  },
};
</script>
