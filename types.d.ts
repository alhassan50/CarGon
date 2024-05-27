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