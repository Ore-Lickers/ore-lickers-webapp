import ImageComponent from "../common/image-component";
import { CarouselType } from "@/domain/components/carousel-type";
import { ResizeParams } from "@/domain/misc/resize-params";
import styles from "./../style/image.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface CarouselParams {
  readonly data: CarouselType;
}

export default function CarouselComponent({ data }: CarouselParams) {
  console.log(data);
  return (
    <div>
      <Carousel showThumbs={false}>
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
