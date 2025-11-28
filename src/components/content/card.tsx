import LinkComponent from "../common/link-component";
import Description from "../common/description";
import { CardType } from "@/domain/components/card-type";
import { Card } from "flowbite-react";
import styles from "../style/image.module.css";

interface CardParams {
  readonly data: CardType;
  readonly classes?: string;
}

export default function CardComponent({ data, classes = "" }: CardParams) {
  const image = data.image ? `${data.image.url}?h=200&w=200` : "/no-image.jpg";
  const imageAlt = data.image?.title || "No image available";
  return (
    <Card
      className={styles.cardImage}
      imgSrc={image}
      imgAlt={imageAlt}
      horizontal
    >
      {data.title && (
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data.title}
        </h5>
      )}
      {data.description && (
        <Description
          data={data.description}
          classes="font-normal text-gray-700 dark:text-gray-400"
        />
      )}
      {data.link && <LinkComponent data={data.link} />}
    </Card>
  );
}
