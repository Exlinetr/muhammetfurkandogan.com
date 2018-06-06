import * as React from "react";
import { TagItemComponentProps } from "../tag.model";
import "./tagItem.style.css";

export class TagItem extends React.Component<TagItemComponentProps>{

    render() {

        const { Title, Href, Id, TotalPostCount } = this.props.Tag;

        return (
            <a href={Href}>
                #{Title} ({TotalPostCount})
            </a>
        );
    }
}