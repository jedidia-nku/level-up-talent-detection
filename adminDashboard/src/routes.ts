import { lazy } from "react";
import { IRoute } from "./interfaces/generalInterface/route/route";
import NewsDetail from "./components/NewsAndGallery/NewsDetail";
import News from "./pages/dashboard/News";
import Gallery from "./pages/dashboard/Gallery";
const Settings = lazy(() => import("./pages/dashboard/Settings"));
const SignIn = lazy(() => import("./pages/authentication/authenticaton/SignIn"));
const NewsandGallery = lazy(() => import("./pages/dashboard/NewsAndGallery"));
const Participants = lazy(() => import("./pages/dashboard/Participants"));


export const appRoutes: IRoute[] = [
    {
        path: "/",
        component: SignIn,
        requiresAuth: false,
    },
    {
        path: "/participants",
        component: Participants,
        requiresAuth: false,
    },
    {
        path: "/newsAndGallery",
        component: NewsandGallery,
        requiresAuth: false,
    },
    {
        path: "/news/:id",
        component: NewsDetail,
        requiresAuth: false,
    },
    { 
    path: "/news",
    component: News,
    requiresAuth: false,
    },
    { 
    path: "/gallery",
    component: Gallery,
    requiresAuth: false,
    },

    {
        path: "/settings",
        component: Settings,
        requiresAuth: false,
    },
]