import { Collection } from "@/domain/misc/collection";

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
