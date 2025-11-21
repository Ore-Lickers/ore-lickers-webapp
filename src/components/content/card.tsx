import { CARD_LAYOUT } from "@/utils/constants/contentful";
import ImageComponent from "../common/image-component";
import LinkComponent from "../common/link-component";
import Description from "../common/description";
import { CardType } from "@/domain/cms/components/card";

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
          <ImageComponent data={data.image} classes="rounded-t-lg" />
        )}
        <div className="p-5">
          {data.title && (
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {data.title}
            </h5>
          )}
          {data.description && (
            <Description
              data={data.description}
              classes="mb-3 font-normal text-gray-400"
            />
          )}
          {data.link && <LinkComponent data={data.link} />}
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        "flex flex-col items-center border rounded-lg shadow md:flex-row md:w-full border-gray-700 bg-gray-800 " +
        classes
      }
    >
      {data.image && (
        <ImageComponent
          data={data.image}
          classes="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal">
        {data.title && (
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {data.title}
          </h5>
        )}
        {data.description && (
          <Description
            data={data.description}
            classes="mb-3 font-normal text-gray-400"
          />
        )}
        <div>{data.link && <LinkComponent data={data.link} />}</div>
      </div>
    </div>
  );
}
