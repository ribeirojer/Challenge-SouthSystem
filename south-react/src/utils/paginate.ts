export function paginate(currentPage: number, totalPages: number) {
  const maxPagesToShow = 5; // número total de páginas a serem exibidas na paginação
  const pages = []; // array que conterá as páginas a serem exibidas
  let startPage, endPage;

  if (totalPages <= maxPagesToShow) {
    // se o número total de páginas for menor ou igual a maxPagesToShow, mostra todas as páginas
    startPage = 1;
    endPage = totalPages;
  } else {
    // caso contrário, calcula o início e o fim da lista de páginas a serem exibidas
    const maxPagesBeforeCurrentPage = Math.floor(maxPagesToShow / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPagesToShow / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      // se a página atual estiver próxima do início, mostra as primeiras maxPagesToShow páginas
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // se a página atual estiver próxima do fim, mostra as últimas maxPagesToShow páginas
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    } else {
      // caso contrário, mostra maxPagesToShow páginas em torno da página atual
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  // adiciona as páginas ao array
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
}
