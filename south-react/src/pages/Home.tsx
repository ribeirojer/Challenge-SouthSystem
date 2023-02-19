import { useState } from "react";
import Header from "../components/Header";
import Results from "../components/Results";

type Props = {};

const Home = (props: Props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowResults(true);
    if (searchQuery.trim() === "") {
      setShowResults(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setShowResults(false);
  };

  return (
    <div>
      <Header />
      <section className="bg-[#F3F4F6] min-h-screen body-font text-gray-600 ">
        <form
          onSubmit={handleSearch}
          className="flex justify-center pt-16 gap-4"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            className="form-control w-full md:w-1/3 lg:w-1/2 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Buscar livro"
          />
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            BUSCAR
          </button>
        </form>
        {showResults && <Results searchQuery={searchQuery} />}
        {!showResults && (
          <p className="text-center mt-12">
            Digite um termo de busca para encontrar livros.
          </p>
        )}
      </section>
    </div>
  );
};

export default Home;
