import React from "react";
import { Item } from "../interfaces/ISearch";

type Props = {
  data: Item;
};

const Card = ({ data }: Props) => {
  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="mb-10 overflow-hidden rounded-lg bg-white">
        <img
          src="https://cdn.tailgrids.com/2.0/image/application/images/cards/card-01/image-01.jpg"
          alt="image"
          className="w-full"
        />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href="javascript:void(0)"
              className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {data.id}
            </a>
          </h3>
          <p className="text-body-color mb-7 text-base leading-relaxed">
            Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
            Lorem consectetur adipiscing elit.
          </p>
          <a
            href="javascript:void(0)"
            className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
