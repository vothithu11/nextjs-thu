export interface ActionItemProps {
    image:string;
    title: string;
    content: string;
}

export interface CustomButtonProps {
    title: string;
    handleClear?: () => void; // Include the handleClear prop
  }

export interface BrandProps{
    image:string;
    title: string;
}
export interface BrandItemsProps{
    title:string;
    index?: number;
    children: {subTitle:string; image: string; content:string}[];
}
export interface MapButtonProps{
    title?: string;
    svg: React.ReactNode;
}
export interface NavItemProps{
    id:number;
    title:string;
    subTitle: {sub:string; url: string;}[];
}
export interface SocialItemProps{
    image:string;
    title: string;
}
export interface BrandListProps{
    id: number;
    title: string;
    children: {subTitle:string; image: string; content:string}[];
    completed?: boolean;
}
export interface SlideBarProps {
    getSearchResults: (results: BrandListProps[]) => void;
  }
