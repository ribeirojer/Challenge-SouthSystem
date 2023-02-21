export function formatData(data: string) {
  // Cria um objeto Date a partir da string de data recebida
  const dataObj = new Date(data);

  // Formata a data em uma string no formato DD/MM/YYYY
  const dia = dataObj.getDate().toString().padStart(2, "0");
  const mes = (dataObj.getMonth() + 1).toString().padStart(2, "0");
  const ano = dataObj.getFullYear().toString();

  return `${dia}/${mes}/${ano}`;
}
