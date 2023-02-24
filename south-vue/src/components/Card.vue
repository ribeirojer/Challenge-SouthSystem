<template>
  <div class="w-full p-4 md:w-1/3 lg:w-1/5">
    <a
      :href="'book/' + data.id"
      class="relative block h-48 overflow-hidden rounded"
    >
      <img
        alt="ecommerce"
        class="block h-full w-full object-cover object-center cursor-pointer"
        :src="data.volumeInfo.imageLinks.thumbnail"
      />
    </a>
    <div class="mt-4">
      <h2 class="title-font text-lg font-medium text-gray-900">
        {{ data.volumeInfo.title }}
      </h2>
      <p class="mt-1">{{ data?.volumeInfo?.authors?.join(", ") }}</p>
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
});
</script>

<style></style>
