<template>
  <div>
    <div class="container mx-auto px-5 py-10">
      <div class="-m-4 flex flex-wrap">
        <Card v-for="item in searchResult.items" :key="item.id" :data="item"></Card>
      </div>
    </div>
    <Pagination :pages="pages" :setCurrentPage="setCurrentPage"></Pagination>
  </div>
</template>

<script lang="ts">
import { reactive, computed, onMounted } from "vue";
import { ISearch } from "../interfaces/ISearch";
import { paginate } from "../utils/paginate";
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
  setup(props) {
    const state = reactive({
      currentPage: 0,
      itemsPerPage: 10,
      url: "https://www.googleapis.com/books/v1/volumes",
    });

    const fetch = computed(() => {
      return `${state.url}?q=${props.searchQuery}&startIndex=${
        state.currentPage * state.itemsPerPage
      }`;
    });

    const a: any = {};
    const { data, isLoading, error } = a;

    const items = computed(() => {
      return data?.items || [];
    });

    const totalItems = computed(() => {
      return data?.totalItems || 0;
    });

    const totalPages = computed(() => {
      return Math.ceil(totalItems.value / state.itemsPerPage);
    });

    const pages = computed(() => {
      return paginate(state.currentPage, totalPages.value);
    });

    function setCurrentPage(page: number) {
      state.currentPage = page;
    }

    return {
      isLoading,
      error,
      items,
      pages,
      setCurrentPage,
    };
  },
};
</script>
