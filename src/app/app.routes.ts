import { Route } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {WordFormComponent} from "./word-form/word-form.component";

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'word-form',
        component: WordFormComponent
    }
];
