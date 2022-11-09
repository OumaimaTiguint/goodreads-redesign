import  Links from "./models/links";

export const links: Links[] = [
    {
        name: "Home",
        route: "/",
        icon: "home"
    },
    {
        name: "My books",
        route: "/my-books",
        icon: "library_books"
    },
    {
        name: "Browse",
        icon: "explore",
        children: [
            {
                name: "Recommendations",
                route: "/"
            },
            {
                name: "Choice Awards",
                route: "/"
            },
            {
                name: "Giveaways",
                route: "/"
            },
            {
                name: "New Releases",
                route: "/"
            },
            {
                name: "Lists",
                route: "/"
            },
            {
                name: "Explore",
                route: "/"
            },
            {
                name: "News and Interviews",
                route: "/"
            }
        ]
    },
    {
        name: "Community",
        icon: "people",
        children: [
            {
                name: "Groups",
                route: "/"
            },
            {
                name: "Discussions",
                route: "/"
            },
            {
                name: "Quotes",
                route: "/"
            },
            {
                name: "Ask the auhor",
                route: "/"
            },
            {
                name: "People",
                route: "/"
            }
        ]
    }
]