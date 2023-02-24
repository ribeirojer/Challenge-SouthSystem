<template>
  <div class="w-full p-4 md:w-1/3 lg:w-1/5">
    <a :href="'book/' + id" class="relative block h-48 overflow-hidden rounded">
      <img
        alt="imagem da capa do livro"
        class="block h-full w-full object-cover object-center cursor-pointer"
        :src="thumbnail || '150.png'"
      />
    </a>
    <div class="mt-4">
      <h2 class="title-font text-lg font-medium text-gray-900">{{ title }}</h2>
      <p class="mt-1">{{ authors }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Item } from "../interfaces/ISearch";

export default defineComponent({
  props: {
    data: {
      type: Object as () => Item,
      required: true,
    },
  },
  computed: {
    id() {
      return this.data.id;
    },
    thumbnail() {
      return this.data.volumeInfo.imageLinks?.thumbnail;
    },
    title() {
      return this.data.volumeInfo.title;
    },
    authors() {
      return this.data.volumeInfo.authors?.join(", ");
    },
  },
});
</script>
