import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { ISearch } from "../interfaces/ISearch";
import { paginate } from "../utils/paginate";
import Card from "./Card";
import Pagination from "./Pagination";

type Props = {
  searchQuery: string;
};

const Results = ({ searchQuery }: Props) => {
  const url = "https://www.googleapis.com/books/v1/volumes"; //  /s1gVAAAAYAAJ
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const fetch = url + "?q=" + searchQuery + "&startIndex=" + (currentPage*itemsPerPage);

  const { data, isLoading, error } = useFetch(fetch);

  if (error) {
    return <p className="text-center mt-4">Houve um problema...</p>;
  }
  if (isLoading) {
    return <p className="text-center mt-4">carregando...</p>;
  }

  const { totalItems, items }: ISearch = data as any;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  console.log(data);

  const pages = paginate(currentPage, totalPages);
  console.log(pages); // [6, 7, 8, 9, 10]

  return (
    <>
      <div className="container mx-auto px-5 py-10">
        <div className="-m-4 flex flex-wrap">
          {items.map((item) => (
            <Card data={item}></Card>
          ))}
        </div>
      </div>
      <Pagination pages={pages} setCurrentPage={setCurrentPage}></Pagination>
    </>
  );
};

export default Results;
