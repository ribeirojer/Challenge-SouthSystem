<template>
  <div class="book-info">
    <h2 class="book-title">
      {{
        searchResult && searchResult.volumeInfo && searchResult.volumeInfo.title
      }}
    </h2>
    <p class="book-author">
      {{
        searchResult &&
        searchResult.volumeInfo &&
        searchResult.volumeInfo.authors?.join(", ")
      }}
    </p>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { IUnique } from "../interfaces/ISearchId";

export default {
  data() {
    return {
      searchResult: null as IUnique | null,
    };
  },
  props: {
    bookId: String,
  },
  created: function () {
    const url = "https://www.googleapis.com/books/v1/volumes/";
    axios.get(url + this.bookId).then((res) => {
      console.log(res);
      this.searchResult = res.data;
    });
  },
};
</script>
<style scoped>
.book-title {
  font-size: 20px;
  margin: 0;
}

.book-author {
  font-size: 16px;
  margin: 0;
  color: gray;
}
</style>
