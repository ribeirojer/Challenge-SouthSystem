import { useParams } from "react-router-dom";
import About from "../components/About";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import { IUnique } from "../interfaces/ISearchId";

type Props = {};

const Book = (props: Props) => {
  const { bookId } = useParams();
  const url = "https://www.googleapis.com/books/v1/volumes/"; //  /s1gVAAAAYAAJ
  const { data, isLoading, error } = useFetch(url + bookId);

  if (error) {
    return <p className="text-center mt-4">Houve um problema...</p>;
  }
  if (isLoading) {
    return <p className="text-center mt-4">carregando...</p>;
  }

  const dados: IUnique = data as any;
  
  return (
    <div>
      <Header></Header>
      <About dados={dados}></About>
    </div>
  );
};

export default Book;
