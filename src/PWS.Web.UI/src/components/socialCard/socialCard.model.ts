export interface SocialItem {
    Title: string,
    Href: string,
    Icon: string
}

export interface SocialCardViewModel {
    Socials?: Array<SocialItem>
}