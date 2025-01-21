import { CardBlockType } from "@/domain/cms/content";
import Card from "./card";
import { CARD_BLOCK_LAYOUT } from "@/utils/constants/contentful";

interface CardBlockParams {
  readonly data: CardBlockType;
}

export default function CardBlock({ data }: CardBlockParams) {
  const addSpanClass = (i: number): string => {
    if (
      (data.layout === CARD_BLOCK_LAYOUT.ONE_TWO && i === 1) ||
      (data.layout === CARD_BLOCK_LAYOUT.TWO_ONE && i === 0)
    ) {
      return "col-span-2";
    }
    return "";
  };
  const gridCols =
    data.layout === CARD_BLOCK_LAYOUT.ONE_ONE_ONE_ONE
      ? "md:grid-cols-4"
      : "md:grid-cols-3";

  return (
    <div className="mb-5">
      {data.title && <h2>{data.title}</h2>}
      <div className={"grid gap-4 grid-cols-1 " + gridCols}>
        {data.cards.map((card, i) => {
          return (
            <Card key={"card-" + i} data={card} classes={addSpanClass(i)} />
          );
        })}
      </div>
    </div>
  );
}
