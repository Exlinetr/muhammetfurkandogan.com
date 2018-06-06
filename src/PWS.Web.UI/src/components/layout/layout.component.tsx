import * as React from "react";
import "./layout.style.css";
import { ProfileCard } from "../profileCard";
import { SocialCard } from "../socialCard";
import { Menu } from "../menu";


export class Layout extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        const profile = {
            Name: "Furkan",
            Title: "Software Engineer",
            FullName: "Furkan Doğan",
            Company: "Donanım Haber",
            Avatar: "https://avatars0.githubusercontent.com/u/17826420?s=460&v=4"
        };

        const menus=[];
        menus.push({
            Title:"Blog",
            Icon:"",
            Href:"Blog"
        });
        menus.push({
            Title:"About",
            Icon:"",
            Href:"About"
        });
        menus.push({
            Title:"Contact",
            Icon:"",
            Href:"Contact"
        });

        const socials = [];
        socials.push({
            Title: "",
            Href: "https://github.com/furkaandogan",
            Icon: "fab fa-github"
        });
        socials.push({
            Title: "",
            Href: "https://twitter.com/furkndogn",
            Icon: "fab fa-linkedin-in"
        });
        socials.push({
            Title: "",
            Href: "mailto:iletisim@muhammetfurkandogan.com",
            Icon: "fa fa-envelope"
        })
        socials.push({
            Title: "",
            Href: "https://twitter.com/furkndogn",
            Icon: "fab fa-twitter"
        });
        socials.push({
            Title:"",
            Href:"https://www.instagram.com/furkaandogan",
            Icon:"fab fa-instagram"
        })

        const { children } = this.props;
        return (
            <div>
                <header>
                    <ProfileCard Profile={profile} />
                    <SocialCard Socials={socials} />
                </header>
                <main>
                    {/* <Menu Items={menus}/> */}
                    {children}
                </main>
            </div>
        );
    }
}