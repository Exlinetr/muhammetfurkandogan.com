import * as React from "react";
import { Link } from 'react-router-dom';
import { Post, PostItemViewModel } from "../post.model";
import "./postItem.style.css";

export class PostItem extends React.Component<PostItemViewModel, {}>{
    constructor(props: PostItemViewModel) {
        super(props);
    }

    render() {

        const { Title, Description, Href, DateCreatedWellFormated, TotalReadCount } = this.props.Post;
        const to={
            pathname:Href
        }
        return (
            <Link to={to}>
                <article className="post">
                    <h2 className="title">{Title}</h2>
                    <span className="info">{DateCreatedWellFormated}, {TotalReadCount}</span>
                    <p className="description">{Description}</p>
                </article>
            </Link>
        );
    }
}
