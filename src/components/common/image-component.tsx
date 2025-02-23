import { ImageComponentType } from "@/domain/cms/common";
import Image from "next/image";

interface CMSImageParams {
  readonly data: ImageComponentType;
  readonly classes?: string;
}

// TODO: build image href
export default function ImageComponent({ data, classes = "" }: CMSImageParams) {
  return (
    <div>
      <div className="hidden lg:block">
        <Image
          className={" " + classes}
          src={data.desktop.url}
          alt={data.altText}
          height={data.desktop.height}
          width={data.desktop.width}
        />
      </div>
      <div className="lg:hidden">
        <Image
          className={" " + classes}
          src={data.mobile?.url ?? data.desktop.url}
          alt={data.altText}
          height={data.mobile?.height ?? data.desktop.height}
          width={data.mobile?.width ?? data.desktop.width}
        />
      </div>
    </div>
  );
}
