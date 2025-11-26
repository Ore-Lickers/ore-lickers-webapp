import { ImageType } from "@/domain/components/image-type";
import { LinkComponentType } from "@/domain/components/link-component-type";
import { Collection } from "@/domain/misc/collection";
import { ImageResponse } from "@/domain/response/cms/image-response";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export const mapRichText = (richText: any): string | undefined => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: ({
        data: {
          target: { sys },
        },
      }: any) => {
        const { block } = richText.links.assets;
        const image = block.find((asset: any) => asset.sys.id === sys.id);
        return `<img src="${image.url}" height="${image.height}" width="${image.width}" alt="${image.title}"/>`;
      },
      [BLOCKS.PARAGRAPH]: (node: any, next: any) =>
        `<p>${next(node.content).replaceAll("\n", "<br/>")}</p>`,
      [BLOCKS.TABLE]: (node: any, next: any) =>
        `<div class="relative flex flex-col overflow-scroll">
          <table>
            ${next(node.content)}
          </table>
        </div>`,
      [BLOCKS.TABLE_HEADER_CELL]: (node: any, next: any) =>
        `<th>${next(node.content)}</th>`,
      [BLOCKS.TABLE_ROW]: (node: any, next: any) =>
        `<tr>${next(node.content)}</tr>`,
      [BLOCKS.TABLE_CELL]: (node: any, next: any) =>
        `<td>${next(node.content)}</td>`,
    },
  };

  return richText?.json
    ? documentToHtmlString(richText.json, options)
    : undefined;
};

export function mapCollection<R, M>(
  collection: Collection<R>,
  func: Function
): M[] {
  const items = collection?.items || [];
  const mappedItems: M[] = [];
  for (const item of items) {
    const mappedItem = func(item);
    mappedItems.push(mappedItem);
  }
  return mappedItems;
}

export const mapImage = (image: ImageResponse): ImageType => {
  const { sys } = image;
  return {
    id: sys.id,
    ...image,
  };
};

export const mapLinkComponent = (link: any): LinkComponentType | undefined => {
  return link || undefined;
};
