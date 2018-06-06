export interface MenuItem {
    Title: string,
    Href: string,
    Icon: string
}

export interface MenuViewModel {
    Items?: Array<MenuItem>
}
