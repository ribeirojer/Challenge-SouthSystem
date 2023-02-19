import placeholder from "../assets/150.png";
import { IUnique } from "../interfaces/ISearchId";

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
        <p className="text-body-color mb-8 text-base">
          <div
            dangerouslySetInnerHTML={{ __html: dados.volumeInfo.description }}
          />
        </p>
        <h2 className="mb-8 text-md font-bold">
          {dados.volumeInfo.pageCount} páginas, Editora:{" "}
          {dados.volumeInfo.publisher}
        </h2>
        <h2 className="mb-8 text-md font-bold">
          Data publicação: {dados.volumeInfo.publishedDate}
        </h2>
        <span>{dados.volumeInfo.averageRating}</span>
      </div>
    </section>
  );
};

export default About;
