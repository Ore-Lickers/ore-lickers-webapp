import { ImageType } from "@/domain/components/image-type";
import { ImageResponse } from "@/domain/response/cms/image-response";

export const mapImageResponse = (imageResponse: ImageResponse): ImageType => {
  const { sys } = imageResponse;
  return {
    id: sys.id,
    ...imageResponse,
  };
};
