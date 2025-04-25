import { lazy } from "react";
import { IRoute } from "./interfaces/generalInterface/route/route";
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
]