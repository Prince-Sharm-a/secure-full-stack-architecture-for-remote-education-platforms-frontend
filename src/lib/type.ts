export type ParamsType = {
    params : {
        slug : string
    }
}

export type SearchParamsType = {
    searchParams : {
        q?: string
        course_id?:number
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

export interface MenuItem {
  label: string;
  path?: string;
  href?: string;
  roles: string[];
}

export interface MenuGroup {
  category: string;
  items: MenuItem[];
}
