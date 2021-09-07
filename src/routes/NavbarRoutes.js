const NavbarRoutes = [
    {
        type: 'dropdown',
        name: 'Programming',
        content: [
            {
                navtitle: 'GFG',
                navlink: '/GFG',
            },
            {
                navtitle: 'Codeforces',
                navlink: '/codeforces',
            },
            {
                navtitle: 'SPOJ',
                navlink: '/spoj',
            },
            {
                navtitle: 'CodeChef',
                navlink: '/codechef',
            }
        ]
    },
    {
        type: 'direct',
        name: 'Video',
        navlink: '/video'
    },
    {
        type: 'direct',
        name: 'Blogs',
        navlink: '/Blog'
    },
    {
        type: 'direct',
        name: 'Code Editor',
        navlink: '/compiler'
    },
]

export default NavbarRoutes;