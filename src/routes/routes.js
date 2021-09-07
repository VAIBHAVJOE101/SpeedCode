import LandingPage from '../Pages/LandingPage';
import Complier from '../Pages/compiler/Complier';
import MainNavbar from '../components/MainNavbar';
import Navbar from '../pageComponents/Navbar/Navbar'
import Codeforces from '../Pages/competitive/Codeforces';
import CodeforcesQuestion from '../Pages/competitive/CodeforcesQuestion';
import CodeChef from '../Pages/competitive/Codechef';
import CodeChefQuestion from '../Pages/competitive/CodechefQuestion';
import Spoj from '../Pages/competitive/Spoj';
import SpojQuestion from '../Pages/competitive/SpojQuestion';
import Gfg from '../Pages/competitive/Gfg';
import GfgQuestion from '../Pages/competitive/GFGQuestion';
import Playlist from '../Pages/vedios/Playlist';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Registration';
import Profile from '../Pages/Profile';
import VedioPlayer from '../Pages/vedios/VedioPlayer';
import Forgot from '../Pages/Auth/Forgot';
import Verify from '../Pages/Auth/Verify';
import ResetPassword from '../Pages/Auth/ResetPassword';
import NewBlog from '../Pages/blogs/NewBlog';
import Blog from '../Pages/blogs/Blogs';
import PlaylistVedios from '../Pages/vedios/PlaylistVedios'
import Home from '../Pages/Home';
import BlogPage from '../Pages/blogs/BlogPage';

const routes = [
    { 
        path: '/home',
        component: [Navbar, Home],
        protected: true
    },
    { 
        path: '/blog/:id',
        component: [Navbar, BlogPage],
        protected: true
    },
    { 
        path: '/blog',
        component: [Navbar, Blog],
        protected: true
    },
    { 
        path: '/newBlog',
        component: [Navbar, NewBlog],
        protected: true
    },
    { 
        path: '/video/:id',
        component: [Navbar, VedioPlayer],
        protected: true
    },
    { 
        path: '/profile',
        component: [Navbar, Profile],
        protected: true
    },
    { 
        path: '/playlist/:id',
        component: [Navbar, PlaylistVedios],
        protected: true
    },
    { 
        path: '/video',
        component: [Navbar, Playlist],
        protected: true
    },
    { 
        path: '/gfg/:id',
        component: [Navbar, GfgQuestion],
        protected: true
    },
    { 
        path: '/gfg',
        component: [Navbar, Gfg],
        protected: true
    },
    { 
        path: '/spoj/:id',
        component: [Navbar, SpojQuestion],
        protected: true
    },
    { 
        path: '/spoj',
        component: [Navbar, Spoj],
        protected: true
    },
    { 
        path: '/codechef/:id',
        component: [Navbar, CodeChefQuestion],
        protected: true
    },
    { 
        path: '/codechef',
        component: [Navbar, CodeChef],
        protected: true
    },
    { 
        path: '/codeforces/:id',
        component: [Navbar, CodeforcesQuestion],
        protected: true
    },
    { 
        path: '/codeforces',
        component: [Navbar, Codeforces],
        protected: true
    },
    { 
        path: '/compiler',
        component: [Complier],
        protected: true
    },
    {
        path: '/reset/:id',
        component: [ResetPassword],
        protected: false
    },
    {
        path: '/forgot',
        component: [Forgot],
        protected: false
    }, {
        path: '/verify/:id',
        component: [Verify],
        protected: false
    },
    {
        path: '/login',
        component: [Login],
        protected: false
    },
    {
        path: '/register',
        component: [Register],
        protected: false
    },
    {
        path: '/',
        component: [MainNavbar, LandingPage],
        protected: false
    },
]


export default routes;