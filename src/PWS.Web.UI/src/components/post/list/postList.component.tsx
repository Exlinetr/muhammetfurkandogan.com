import * as React from "react";
import { PostListVieWModel } from "../post.model";
import { PostItem } from "../item";
import "./postList.style.css";

export class PostList extends React.Component<PostListVieWModel, {}>{

    constructor(props: PostListVieWModel) {
        super(props);
    }

    render() {
        let posts;
        if (this.props.Posts != undefined) {
            posts = this.props.Posts.map((post, index) => {
                return <PostItem key={index} Post={post}  />
            });
        }
        return (
            <div className="context">
                {posts}
            </div>
        )
    }
}