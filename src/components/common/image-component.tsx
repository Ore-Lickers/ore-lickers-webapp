import { ImageComponentType } from "@/domain/cms/common";
import Image from "next/image";

interface CMSImageParams {
  readonly data: ImageComponentType;
  readonly classes?: string;
}

// TODO: build image href
// TODO: Currently in the mapper it is mapping the same image for mobile and desktop. Change this to have separate images for mobile and desktop
export default function ImageComponent({ data, classes = "" }: CMSImageParams) {
  return (
    <Image
      className={" " + classes}
      src={data.desktop.url}
      alt={data.altText}
      height={data.desktop.height}
      width={data.desktop.width}
    />
  );
}
