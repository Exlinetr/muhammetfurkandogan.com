import * as React from "react";
import { PostList, TagList } from "../../../components";
import "./blogList.style.css";

export class BlogListPage extends React.Component<{}, {}>{

    constructor(props: any) {
        super(props);
    }

    render() {
        var posts = [];
        posts.push({
            Id: 1,
            Title: "Desing Patterns",
            Href: "/blog/desing--1",
            Description: "Design patterns represent the best practices used by experienced object-oriented software developers. Design patterns are solutions to general problems that software developers faced during software development. These solutions were obtained by trial and error by numerous software developers over quite a substantial period of time.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 1000
        });

        posts.push({
            Id: 2,
            Title: "yield (C# Reference)",
            Href: "/blog/yield--2",
            Description: "When you use the yield keyword in a statement, you indicate that the method, operator, or get accessor in which it appears is an iterator. Using yield to define an iterator removes the need for an explicit extra class (the class that holds the state for an enumeration, see IEnumerator<T> for an example) when you implement the IEnumerable and IEnumerator pattern for a custom collection type.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 100
        });
        posts.push({
            Id: 1,
            Title: "Desing Patterns",
            Href: "/blog/desing--1",
            Description: "Design patterns represent the best practices used by experienced object-oriented software developers. Design patterns are solutions to general problems that software developers faced during software development. These solutions were obtained by trial and error by numerous software developers over quite a substantial period of time.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 1000
        });

        posts.push({
            Id: 2,
            Title: "yield (C# Reference)",
            Href: "/blog/yield--1",
            Description: "When you use the yield keyword in a statement, you indicate that the method, operator, or get accessor in which it appears is an iterator. Using yield to define an iterator removes the need for an explicit extra class (the class that holds the state for an enumeration, see IEnumerator<T> for an example) when you implement the IEnumerable and IEnumerator pattern for a custom collection type.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 100
        });
        posts.push({
            Id: 1,
            Title: "Desing Patterns",
            Href: "/blog/desing--1",
            Description: "Design patterns represent the best practices used by experienced object-oriented software developers. Design patterns are solutions to general problems that software developers faced during software development. These solutions were obtained by trial and error by numerous software developers over quite a substantial period of time.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 1000
        });

        posts.push({
            Id: 2,
            Title: "yield (C# Reference)",
            Href: "/blog/yield--1",
            Description: "When you use the yield keyword in a statement, you indicate that the method, operator, or get accessor in which it appears is an iterator. Using yield to define an iterator removes the need for an explicit extra class (the class that holds the state for an enumeration, see IEnumerator<T> for an example) when you implement the IEnumerable and IEnumerator pattern for a custom collection type.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 100
        });
        posts.push({
            Id: 1,
            Title: "Desing Patterns",
            Href: "/blog/desing--1",
            Description: "Design patterns represent the best practices used by experienced object-oriented software developers. Design patterns are solutions to general problems that software developers faced during software development. These solutions were obtained by trial and error by numerous software developers over quite a substantial period of time.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 1000
        });

        posts.push({
            Id: 2,
            Title: "yield (C# Reference)",
            Href: "/blog/yield--1",
            Description: "When you use the yield keyword in a statement, you indicate that the method, operator, or get accessor in which it appears is an iterator. Using yield to define an iterator removes the need for an explicit extra class (the class that holds the state for an enumeration, see IEnumerator<T> for an example) when you implement the IEnumerable and IEnumerator pattern for a custom collection type.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 100
        });
        posts.push({
            Id: 1,
            Title: "Desing Patterns",
            Href: "/blog/desing--1",
            Description: "Design patterns represent the best practices used by experienced object-oriented software developers. Design patterns are solutions to general problems that software developers faced during software development. These solutions were obtained by trial and error by numerous software developers over quite a substantial period of time.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 1000
        });

        posts.push({
            Id: 2,
            Title: "yield (C# Reference)",
            Href: "/blog/yield--1",
            Description: "When you use the yield keyword in a statement, you indicate that the method, operator, or get accessor in which it appears is an iterator. Using yield to define an iterator removes the need for an explicit extra class (the class that holds the state for an enumeration, see IEnumerator<T> for an example) when you implement the IEnumerable and IEnumerator pattern for a custom collection type.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 100
        });
        posts.push({
            Id: 1,
            Title: "Desing Patterns",
            Href: "/blog/desing--1",
            Description: "Design patterns represent the best practices used by experienced object-oriented software developers. Design patterns are solutions to general problems that software developers faced during software development. These solutions were obtained by trial and error by numerous software developers over quite a substantial period of time.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 1000
        });

        posts.push({
            Id: 2,
            Title: "yield (C# Reference)",
            Href: "/blog/yield--1",
            Description: "When you use the yield keyword in a statement, you indicate that the method, operator, or get accessor in which it appears is an iterator. Using yield to define an iterator removes the need for an explicit extra class (the class that holds the state for an enumeration, see IEnumerator<T> for an example) when you implement the IEnumerable and IEnumerator pattern for a custom collection type.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 100
        });
        posts.push({
            Id: 1,
            Title: "Desing Patterns",
            Href: "/blog/desing--1",
            Description: "Design patterns represent the best practices used by experienced object-oriented software developers. Design patterns are solutions to general problems that software developers faced during software development. These solutions were obtained by trial and error by numerous software developers over quite a substantial period of time.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 1000
        });

        posts.push({
            Id: 2,
            Title: "yield (C# Reference)",
            Href: "/blog/yield--1",
            Description: "When you use the yield keyword in a statement, you indicate that the method, operator, or get accessor in which it appears is an iterator. Using yield to define an iterator removes the need for an explicit extra class (the class that holds the state for an enumeration, see IEnumerator<T> for an example) when you implement the IEnumerable and IEnumerator pattern for a custom collection type.",
            // DateCreated: Date.now(),
            DateCreatedWellFormated: "01.05.2018",
            TotalReadCount: 100
        });

        const tags=[];
        tags.push({
            Id:1,
            Href:"#tag",
            TotalPostCount:100,
            Title:"Programing"
        });
        
        tags.push({
            Id:2,
            Href:"#tag",
            TotalPostCount:100,
            Title:"Algorithm"
        });
        return (
            <section className="blog">
                <PostList Posts={posts} />
                <TagList Tags={tags} />
            </section>
        );
    }
}