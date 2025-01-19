import { ImageComponentType, LinkComponentType } from "@/domain/cms/common";
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
        `<p>${next(node.content).replace(/\n/g, "<br/>")}</p>`,
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

export const mapImageComponent = (
  image: any
): ImageComponentType | undefined => {
  return image || undefined;
};

export const mapLinkComponent = (link: any): LinkComponentType | undefined => {
  return link || undefined;
};
