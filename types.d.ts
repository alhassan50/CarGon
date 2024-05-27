type MenuItems = MenuItem[]

type MenuItem = {
    title: string,
    to?: string,
    isDropDown: boolean,
    dropdownItems?: MenuItem[]
}