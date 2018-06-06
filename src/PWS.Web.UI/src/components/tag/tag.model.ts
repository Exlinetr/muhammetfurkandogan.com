export interface Tag {
    Id: number,
    Title: string,
    Href: string,
    TotalPostCount: number
}

export interface TagListComponentProps {
    Tags?: Array<Tag>
}

export interface TagItemComponentProps {
    Tag: Tag
}