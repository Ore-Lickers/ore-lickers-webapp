import { Carousel } from "flowbite-react";
import ImageComponent from "../common/image-component";
import { CarouselType } from "@/domain/components/carousel-type";
import { ResizeParams } from "@/domain/misc/resize-params";

interface CarouselParams {
  readonly data: CarouselType;
}

export default function CarouselComponent({ data }: CarouselParams) {
  return (
    <div>
      {data.title && <h2>{data.title}</h2>}
      <Carousel pauseOnHover slideInterval={5000}>
        {data.carouselItems.map((image, i) => {
          const resize: ResizeParams = { h: 500, w: 1600, fit: "thumb" };
          return (
            <ImageComponent
              key={"carousel-image-" + i}
              data={image}
              resize={resize}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
