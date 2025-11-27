import { Carousel } from "flowbite-react";
import ImageComponent from "../common/image-component";
import { CarouselType } from "@/domain/components/carousel-type";
import { ResizeParams } from "@/domain/misc/resize-params";
import styles from "./../style/image.module.css";

interface CarouselParams {
  readonly data: CarouselType;
}

export default function CarouselComponent({ data }: CarouselParams) {
  return (
    <div className="h-56 sm:h-[500px]">
      {data.title && <h2>{data.title}</h2>}
      <Carousel pauseOnHover slideInterval={5000}>
        {data.carouselItems.map((image, i) => {
          const resize: ResizeParams = { h: 500, w: 1600, fit: "thumb" };
          return (
            <div key={"carousel-image-" + i} className={styles.wrapper}>
              <ImageComponent
                data={image}
                resize={resize}
                classes={styles.image}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
