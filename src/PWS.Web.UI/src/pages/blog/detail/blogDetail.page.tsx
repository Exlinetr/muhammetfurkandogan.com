import * as React from "react";
import "./blogDetail.style.css";
import {CodeViewer} from "../../../components";

export class BlogDetailPage extends React.Component<{}, {}>{

    constructor(props: any) {
        super(props);
    }
    render() {
        const Subject="Desing Patterns";
        const Icerik="";
        return (
            <section className="post-detai">
                <article className="full">
                    <h1>{Subject}</h1>
                </article>
                detay
                <CodeViewer Code="test code sample" />
            </section>
        );
    }
}