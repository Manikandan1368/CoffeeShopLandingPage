import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReverseSpotComponent } from './components/reverse-spot/reverse-spot.component';
import { ExploreComponent } from './components/explore/explore.component';
import { AboutComponent } from './components/about/about.component';
import { VisitUsComponent } from './components/visit-us/visit-us.component';
import { StoryComponent } from './components/story/story.component';
import { OrderComponent } from './components/order/order.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    { path: 'reserve', component: ReverseSpotComponent },
    { path: 'explore', component: ExploreComponent },
    { path: 'about', component: AboutComponent },
    { path: 'visit-us', component: VisitUsComponent },
    { path: 'story', component: StoryComponent },
    { path: 'order', component: OrderComponent },

];
