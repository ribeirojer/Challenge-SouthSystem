import { Link } from "react-router-dom";
import placeholder from "../assets/150.png";
import { Item } from "../interfaces/ISearch";

type Props = {
  data: Item;
};

const Card = ({ data }: Props) => {
  let imagem = data?.volumeInfo?.imageLinks?.thumbnail;
  if (imagem == "" || imagem == undefined) {
    imagem = placeholder;
  }

  return (
    <div className="w-full p-4 md:w-1/3 lg:w-1/5">
      <Link to={`book/${data.id}`} className="relative block h-48 overflow-hidden rounded">
        <img
          alt="ecommerce"
          className="block h-full w-full object-cover object-center cursor-pointer"
          src={`${imagem}`}
        />
      </Link>
      <div className="mt-4">
        <h2 className="title-font text-lg font-medium text-gray-900">
          {data.volumeInfo.title}
        </h2>
        <p className="mt-1">{data.volumeInfo.authors}</p>
      </div>
    </div>
  );
};

export default Card;
