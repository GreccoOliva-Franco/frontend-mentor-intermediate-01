export interface Item {
  id: number;
  name: string;
  image: { thumbnail: string; alt: string };
  quantity: number;
  unitPrice: number;
}
