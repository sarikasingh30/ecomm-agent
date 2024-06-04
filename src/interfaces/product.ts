

interface Dimension {
    width:number,
    height: number,
    depth: number
  }
export interface Product {
    id:string,
    title: string,
    description:string ,
    category:string,
    price:number,
    discountPercentage:number,
    rating:number,
    tags:Array<string>,
    brand: string,
    weight:number,
    dimensions: Dimension ,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: boolean,
    images:Array<string>,
    thumbnail: string
  }

export interface ProductState{
    items: Product[],
    selectedProduct?: Product,
    isLoading: boolean;
    isError: boolean;
    
}