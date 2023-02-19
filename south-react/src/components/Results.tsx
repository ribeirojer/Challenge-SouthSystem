import React from "react";
import useFetch from "../hooks/useFetch";
import { ISearch } from "../interfaces/ISearch";
import Card from "./Card";
import Pagination from "./Pagination";

type Props = {
  searchQuery: string;
};

const Results = ({ searchQuery }: Props) => {
  const url = "https://www.googleapis.com/books/v1/volumes"; //  /s1gVAAAAYAAJ
  const { data, isLoading, error } = useFetch(url + "?q=" + searchQuery);

  if (error) {
    return <p>Houve um problema...</p>;
  }
  if (isLoading) {
    return <p>carregando...</p>;
  }

  const { totalItems, items }: ISearch = data as any;

  return (
    <>
      <div className="container mx-auto px-5 py-10">
        <div className="-m-4 flex flex-wrap">
          {items.map((item) => (
            <Card data={item}></Card>
          ))}
        </div>
      </div>
      <Pagination totalItems={totalItems}></Pagination>
    </>
  );
};

export default Results;
