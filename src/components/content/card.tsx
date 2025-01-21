import { CardType } from "@/domain/cms/content";
import { CARD_LAYOUT } from "@/utils/constants/contentful";
import ImageComponent from "../common/image-component";
import LinkComponent from "../common/link-component";
import Description from "../common/description";

interface CardParams {
  readonly data: CardType;
  readonly classes?: string;
}

export default function Card({ data, classes = "" }: CardParams) {
  if (data.layout === CARD_LAYOUT.VERTICAL) {
    return (
      <div
        className={
          "card w-full border rounded-lg shadow bg-gray-800 border-gray-700 " +
          classes
        }
      >
        {data.image && (
          <ImageComponent
            data={data.image}
            classes="object-contain w-full h-48"
          />
        )}
        <div className="p-5">
          {data.title && (
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {data.title}
            </h5>
          )}
          {data.description && <Description data={data.description} />}
          {data.link && <LinkComponent data={data.link} />}
        </div>
      </div>
    );
  }

  return <div className="">{data.title}</div>;
}
