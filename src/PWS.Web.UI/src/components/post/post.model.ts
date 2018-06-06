export interface Post {
    Id: number,
    Title: string,
    Href: string,
    Description: string,
    // DateCreated: Date,
    DateCreatedWellFormated: string,
    TotalReadCount: number
}

export interface PostItemViewModel {
    Post: Post
}

export interface PostListVieWModel {
    Posts?: Array<Post>
}