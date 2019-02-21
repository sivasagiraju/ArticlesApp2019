import { ArticlesComponent } from "./components/articles/articles.component";
import { HomeComponent } from './home/home.component'
import { Routes } from "@angular/router";

export const appRoutes:Routes = [
    {path:"", component:HomeComponent},
    {path:"Articles", component:ArticlesComponent }
];