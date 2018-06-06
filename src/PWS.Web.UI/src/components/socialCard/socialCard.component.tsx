import * as React from "react";
import { SocialCardViewModel } from "./socialCard.model";
import "./socialCard.style.css";

export class SocialCard extends React.Component<SocialCardViewModel, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        let socialList;
        if (this.props.Socials != undefined) {
            socialList = this.props.Socials.map((item, index) => {
                return (
                    <a className="social" href={item.Href} target="-blank" key={index}>
                        <i className={item.Icon} />
                    </a>);
            })
        }

        return (
            <div className="socials">
                {socialList}
            </div>
        )
    }
}