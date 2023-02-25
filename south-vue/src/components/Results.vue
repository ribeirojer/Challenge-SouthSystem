<template>
  <div>
    <div class="container mx-auto px-5 py-10">
      <div class="-m-4 flex flex-wrap">
        <Card
          v-for="item in searchResult.items"
          :key="item.id"
          :data="item"
        ></Card>
      </div>
    </div>
    <Pagination :totalItems="searchResult.totalItems"></Pagination>
  </div>
</template>

<script lang="ts">
import { ISearch } from "../interfaces/ISearch";
import Card from "./Card.vue";
import Pagination from "./Pagination.vue";
import axios from "axios";

export default {
  components: {
    Card,
    Pagination,
  },

  data() {
    return {
      searchResult: {} as ISearch,
    };
  },
  props: {
    searchQuery: String,
  },
  created: function () {
    const url = "https://www.googleapis.com/books/v1/volumes/?q=";
    axios.get(url + this.searchQuery).then((res) => {
      console.log(res);
      this.searchResult = res.data;
    });
  },
};
</script>
