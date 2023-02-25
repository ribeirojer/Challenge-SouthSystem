<template>
  <section class="bg-[#F3F4F6] min-h-screen body-font text-gray-600">
    <form
      @submit.prevent="handleSearch"
      class="flex justify-center pt-16 gap-4"
    >
      <input
        v-model="searchQuery"
        @input="hideResults"
        class="form-control w-full md:w-1/3 lg:w-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type="search"
        placeholder="Buscar livro"
      />
      <Button :text="'Buscar'"></Button>
    </form>
    <div v-if="showResults">
      <Results :searchQuery="searchQuery" />
    </div>
    <div v-else>
      <p class="text-center mt-12">
        Digite um termo de busca para encontrar livros.
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Button from "../components/Button.vue";
import Results from "../components/Results.vue";

export default {
  name: "Home",
  components: {
    Button,
    Results,
  },
  data() {
    return {
      searchQuery: "",
      showResults: false,
    };
  },
  methods: {
    handleSearch() {
      this.showResults = true;
    },
    hideResults() {
      this.showResults = false;
    },
  },
};
</script>
