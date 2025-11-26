import { ImageType } from "@/domain/cms/components/asset";
import Image from "next/image";

interface ImageParams {
  readonly data: ImageType;
  readonly classes?: string;
}

export default function ImageComponent({ data, classes = "" }: ImageParams) {
  return (
    <div>
      <Image
        className={" " + classes}
        src={data.url}
        alt={data.title}
        height={data.height}
        width={data.width}
      />
    </div>
  );
}
