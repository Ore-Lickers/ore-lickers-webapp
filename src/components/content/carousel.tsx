import { Carousel } from "flowbite-react";
import ImageComponent from "../common/image-component";
import { ImageComponentType } from "@/domain/cms/common";

interface CarouselParams {
  readonly data: ImageComponentType[];
}

export default function CarouselComponent({ data }: CarouselParams) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        {data.map((image, i) => {
          return <ImageComponent key={"carousel-image-" + i} data={image} />;
        })}
      </Carousel>
    </div>
  );
}
