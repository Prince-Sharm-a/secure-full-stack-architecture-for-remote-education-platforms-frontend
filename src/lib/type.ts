export type Params = {
    params : {
        slug : string
    }
}

export type SearchParams = {
    searchParams : {
        q?: string
    }
}

export type ChildrenType = { children: React.ReactNode }

export type ProductType ={
    title: string;
    slug: string;
    price: number;
    discount: number;
    rating: number;
    image: string;
}

export type ProdcutBoxPropsType ={
    products: ProductType[]
}