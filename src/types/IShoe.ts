export interface IShoe {
  slug: string;
  name: string;
  imageSrc: string;
  price: number;
  salePrice: number | null;
  releaseDate: number;
  numOfColors: number;
}
