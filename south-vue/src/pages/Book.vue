<template>
  <div class="bg-gray-100 min-h-screen flex justify-center items-center">
    <div
      class="bg-white rounded-lg shadow-lg w-70 max-w-900 mx-4 px-4 py-6 flex flex-col gap-6"
    >
      <div class="flex gap-6">
        <div class="rounded-lg shadow-md w-30">
          <img :src="searchResult.volumeInfo.imageLinks.thumbnail" alt="" />
        </div>
        <div class="flex flex-col justify-between flex-grow">
          <div>
            <h2 class="text-2xl mb-1">
              {{ searchResult.volumeInfo.title }}
            </h2>
            <p class="text-lg font-normal mb-0">
              {{ searchResult.volumeInfo.authors[0] }}
            </p>
            <p class="text-base font-normal mt-2">
              {{ searchResult.volumeInfo.publisher }},
              {{ searchResult.volumeInfo.publishedDate.slice(0, 4) }}
            </p>
          </div>
          <div>
            <Button :text="'Salvar'" @click="addBookToLocalStorage"></Button>
          </div>
        </div>
      </div>
      <p
        v-html="searchResult.volumeInfo.description"
        class="text-base leading-7"
      ></p>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../components/Button.vue";
import axios from "axios";
import { IUnique } from "../interfaces/ISearchId";

export default {
  components: {
    Button,
  },

  data() {
    return {
      searchResult: {} as IUnique,
    };
  },
  props: {
    searchQuery: String,
  },
  created: function () {
    const url = "https://www.googleapis.com/books/v1/volumes/";
    axios.get(url + this.$route.params.id).then((res) => {
      console.log(res);
      this.searchResult = res.data;
    });
  },
  methods: {
    addBookToLocalStorage() {
      const bookId = this.searchResult.id;
      const savedBooks = localStorage.getItem("savedBooks");
      let parsedSavedBooks = [];
      if (savedBooks) {
        parsedSavedBooks = JSON.parse(savedBooks);
      }
      if (parsedSavedBooks.indexOf(bookId) === -1) {
        parsedSavedBooks.push(bookId);
        localStorage.setItem("savedBooks", JSON.stringify(parsedSavedBooks));
      }
    },
  },
};
</script>
