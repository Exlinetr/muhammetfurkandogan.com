import * as React from "react";
import "./code.style.css";
import { CodeViewerProps } from "./code.model";

export class CodeViewer extends React.Component<CodeViewerProps>{

    constructor(props:CodeViewerProps){
        super(props);
    }

    render(){
        const {Code}=this.props;
        return(
            <code>
                {Code}
            </code>
        );
    }
}