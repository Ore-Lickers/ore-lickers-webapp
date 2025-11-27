import { ImageType } from "@/domain/components/image-type";
import { ResizeParams } from "@/domain/misc/resize-params";
import Image from "next/image";

interface ImageParams {
  readonly data: ImageType;
  readonly classes?: string;
  readonly resize?: ResizeParams;
}

export default function ImageComponent({
  data,
  classes = "",
  resize,
}: ImageParams) {
  const urlParams = getUrlParams(resize);
  const url = `${data.url}${urlParams}`;
  return (
    <Image
      className={" " + classes}
      src={url}
      alt={data.title}
      height={resize?.h || data.height}
      width={resize?.w || data.width}
    />
  );
}

function getUrlParams(resize?: ResizeParams) {
  if (!resize) {
    return "";
  }

  const params = Object.keys(resize)
    .filter((key) => (resize as any)[key])
    .map((key) => `${key}=${(resize as any)[key]}`)
    .join("&");

  return "?" + params;
}
