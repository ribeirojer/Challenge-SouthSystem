import React, { useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import useFetch from "../hooks/useFetch";
import { ISearch } from "../interfaces/ISearch";

type Props = {};

const Home = (props: Props) => {
  const url = "https://www.googleapis.com/books/v1/volumes"; //  /s1gVAAAAYAAJ
  const { data, isLoading, error } = useFetch(url + "?q=sapiens");

  if (error) {
    return <p>Houve um problema...</p>;
  }
  if (isLoading) {
    return <p>carregando...</p>;
  }

  const { kind, totalItems, items }: ISearch = data as any;
  console.log(data);
  return (
    <div>
      <Header></Header>
      <h1>{kind}</h1>
      <h1>{totalItems}</h1>
      <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {items.map((item) => (
              <Card data={item}></Card>
            ))}
          </div>
        </div>
      </section>
      <Pagination></Pagination>
    </div>
  );
};

export default Home;
