import * as React from "react";
import { ProfileCardViewModel } from "./profileCard.model";
import "./profileCard.style.css";
import { Link } from "react-router-dom";

export class ProfileCard extends React.Component<ProfileCardViewModel, {}> {
    constructor(props: ProfileCardViewModel) {
        super(props)
    }
    componentDidMount() {

    }
    render() {
        const { Avatar, FullName, Title, Company } = this.props.Profile;
        return (
            <div className="profile">
                <div className="avatar">
                    <Link to="/">
                        <img src={Avatar} />
                    </Link>
                </div>
                <div className="info">
                    <div className="fullName">{FullName}</div>
                    <p className="title">{Title} at</p>
                    <p className="company">{Company}</p>
                </div>
            </div>
        );

    }
}