import placeholder from "../assets/150.png";
import { IUnique } from "../interfaces/ISearchId";
import { formatData } from "../utils/description";

type Props = {
  dados: IUnique;
};

const About = ({ dados }: Props) => {
  let imagem = dados?.volumeInfo?.imageLinks?.thumbnail;
  if (imagem == "" || imagem == undefined) {
    imagem = placeholder;
  }

  return (
    <section className="bg-[#f3f4f6eb] mx-auto flex flex-wrap justify-evenly overflow-hidden py-12">
      <img src={imagem} className="w-[400px] h-[600px] rounded-xl"></img>
      <div className="mt-10 lg:mt-0 w-full px-4 lg:w-1/2">
        <span className="text-primary mb-2 block text-lg font-semibold">
          {dados.volumeInfo.authors}
        </span>
        <h1 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
          {dados.volumeInfo.title}
        </h1>
        <div
          className="text-body-color mb-8 text-base"
          dangerouslySetInnerHTML={{ __html: dados.volumeInfo.description }}
        ></div>
        <h2 className="mb-8 text-md font-bold">
          {dados.volumeInfo.pageCount} páginas, Editora:{" "}
          {dados.volumeInfo.publisher},{" "}
          {formatData(dados.volumeInfo.publishedDate)}
        </h2>
        <span className="bg-blue-500 rounded-lg py-3 px-7 text-base font-medium text-white hover:bg-opacity-90">
          Salvar
        </span>
      </div>
    </section>
  );
};

export default About;
