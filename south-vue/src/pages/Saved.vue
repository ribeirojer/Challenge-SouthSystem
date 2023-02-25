<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-6">Lista de livros salvos</h1>

    <div class="book-list">
      <div v-if="books.length > 0">
        <div v-for="book in savedBooks" :key="book.id">
          <book-item :book="book"></book-item>
        </div>
      </div>
      <div v-else>
        <p class="book-list-empty">Nenhum livro salvo ainda</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      savedBooks: [] as Array<{ id: string; title: string }>,
    };
  },
  props: {
    books: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    // Recuperar os livros salvos do localStorage
    const savedBooks = JSON.parse(localStorage.getItem("savedBooks") as string);

    if (savedBooks) {
      this.savedBooks = savedBooks;
    }
  },
};
</script>

<style scoped>
.book-list {
  margin: 20px;
}

.book-list-title {
  font-size: 24px;
  margin: 0 0 20px;
}

.book-list-empty {
  font-size: 16px;
  margin: 0;
}
</style>
