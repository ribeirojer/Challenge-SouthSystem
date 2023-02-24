<template>
  <header className="flex px-4 w-full items-center justify-between bg-white">
    <a href="/" className="w-60">
      <img
        src="https://southsystem.com.br/wp-content/themes/southsystem/assets/img/logo-southsystem.svg"
        alt="logo"
        className="w-full py-6"
      />
    </a>
    <a href="/">
      <Button :text="'Salvos'"></Button>
    </a>
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
