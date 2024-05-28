type MenuItem = {
    title: string,
    to?: string,
    isDropDown: boolean,
    dropdownItems?: MenuItem[]
}

type MenuItems = MenuItem[]


///////////////////////////////////
type PageItem = {
    title: string,
    to: string
}

type PageList = PageItem[]


////////////////////////////
type SocialItem = {
    src: string,
    to: string,
    alt: string,
}

type SocialItemsList = SocialItem[]


/////////////////////////////
type Value = {
    title: string,
    desc: string,
    image: string
}

type ValueList = Value[]

/////////////////////////////
type Brand = {
    brand: string;
    image: string;
    width: number;
    height: number;
}

type BrandList = Brand[]


/////////////////////////////
type Stat = {
    category: string;
    value: string;
}

type StatList = Stat[]