import { ImageComponentType } from "@/domain/cms/common";
import Image from "next/image";

interface CMSImageParams {
  readonly data: ImageComponentType;
  readonly alt: string;
  readonly classes?: string;
}

// TODO: Currently in the mapper it is mapping the same image for mobile and desktop. Change this to have separate images for mobile and desktop
export default function CMSImage({ data, alt, classes }: CMSImageParams) {
  return (
    <div className={classes}>
      hello
      {/* <Image
        src={data.desktop.url}
        alt={alt}
        width={data.desktop.width}
        height={data.desktop.height}
      /> */}
    </div>
  );
}
