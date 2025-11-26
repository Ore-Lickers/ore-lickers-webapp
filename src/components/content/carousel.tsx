import { Carousel } from "flowbite-react";
import ImageComponent from "../common/image-component";
import { CarouselType } from "@/domain/components/carousel-type";

interface CarouselParams {
  readonly data: CarouselType;
}

export default function CarouselComponent({ data }: CarouselParams) {
  return (
    <div>
      {data.title && <h2>{data.title}</h2>}
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {data.carouselItems.map((image, i) => {
            return <ImageComponent key={"carousel-image-" + i} data={image} />;
          })}
        </Carousel>
      </div>
    </div>
  );
}
