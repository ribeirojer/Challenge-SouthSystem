<template>
  <div class="flex justify-center pb-16">
    <ul class="-mx-[6px] flex items-center">
      <li class="px-[6px]">
        <span
          class="bg-white cursor-pointer hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
          @click="changePage(currentPage - 1)"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
          >&lt;
        </span>
      </li>
      <li v-for="page in totalPages" :key="page" class="px-[6px]">
        <span
          class="bg-white cursor-pointer hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-blue-500"
          @click="changePage(page)"
        >
          {{ page }}
        </span>
      </li>
      <li class="px-[6px]">
        <span
          @click="changePage(currentPage + 1)"
          :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }"
          class="bg-white cursor-pointer hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
        >&rightarrow;
        </span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      currentPage: 1,
      totalPages: 10,
    };
  },
  props: {
    totalItems: Number,
  },
  methods: {
    changePage(page: number) {
      this.currentPage = page;
    },
  },
};
</script>
