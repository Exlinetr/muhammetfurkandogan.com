import * as React from "react";
import { MenuItem, MenuViewModel } from "./menu.model";
import "./menu.style.css";


export class Menu extends React.Component<MenuViewModel, {}> {

    constructor(props: MenuViewModel) {
        super(props);
    }

    render() {
        let menus;
        if(this.props.Items!=undefined){
            menus=this.props.Items.map((item,index)=>{
                return (
                    <a href={item.Href}  key={index}>
                        {item.Title}
                    </a>
                );
            });
        }
        return (
            <div className="menu">
                {menus}
            </div>
        );
    }
}