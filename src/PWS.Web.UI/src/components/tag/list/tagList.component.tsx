import * as React from "react";
import { TagItem } from "../tag";
import { TagListComponentProps } from "../tag.model";
import "./tagList.style.css";


export class TagList extends React.Component<TagListComponentProps, {}>{

    constructor(props: TagListComponentProps) {
        super(props);
    }
    render() {
        let tags;
        if (this.props.Tags != undefined) {
            tags = this.props.Tags.map((tag, index) => {
                return (
                    <li  key={index}>
                        <TagItem Tag={tag} />
                    </li>)
            })
        }
        return (
            <div className="tags">
                <ul>
                    {tags}
                </ul>
            </div>
        )
    }
}