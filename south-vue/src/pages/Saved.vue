<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold mb-6">Lista de livros salvos</h1>
    <div class="book-list">
      <div v-if="savedBooks.length > 0">
        <div v-for="(book, id) in savedBooks" :key="id" class="book-item">
          <BookItem :bookId="book"></BookItem>
          <button class="remove-button" @click="removeBook(id)">Remover</button>
        </div>
      </div>
      <div v-else>
        <p class="book-list-empty">Nenhum livro salvo ainda</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BookItem from "../components/BookItem.vue";
export default {
  components: { BookItem },
  data() {
    return {
      savedBooks: [],
    };
  },
  mounted() {
    const list = localStorage.getItem("savedBooks") as string;
    const savedBooks = JSON.parse(list);
    console.log(savedBooks);

    if (savedBooks) {
      this.savedBooks = savedBooks;
    }
  },
  methods: {
    removeBook(index: number) {
      this.savedBooks.splice(index, 1);
      localStorage.setItem("savedBooks", JSON.stringify(this.savedBooks));
    },
  },
};
</script>

<style scoped>
.book-list {
  margin: 20px;
}

.book-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
}

.remove-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}
</style>
