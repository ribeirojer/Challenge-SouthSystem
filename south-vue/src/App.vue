<template>
  <div>
    <Header></Header>
    <section class="bg-[#F3F4F6] min-h-screen body-font text-gray-600">
      <form
        @submit.prevent="handleSearch"
        class="flex justify-center pt-16 gap-4"
      >
        <input
          v-model="searchQuery"
          class="form-control w-full md:w-1/3 lg:w-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          placeholder="Buscar livro"
        />
        <button
          type="submit"
          class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          BUSCAR
        </button>
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
  </div>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import Results from "./components/Results.vue";

export default {
  name: "App",
  components: {
    Header,
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
  },
};
</script>

<style scoped></style>
