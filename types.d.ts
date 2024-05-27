type MenuItems = MenuItem[]

type MenuItem = {
    title: string,
    to?: string,
    isDropDown: boolean,
    dropdownItems?: MenuItem[]
}

type PageList = PageItem[]

type PageItem = {
    title: string,
    to: string
}