import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ProviderListComponent } from '../../pages/provider-list/provider-list.component';
import { ProviderAddComponent } from '../../pages/provider-add/provider-add.component';
import { ProviderEditComponent } from '../../pages/provider-edit/provider-edit.component';
import { ArticleListComponent } from '../../pages/article-list/article-list.component';
import { ArticleAddComponent } from '../../pages/article-add/article-add.component';
import { ArticleEditComponent } from '../../pages/article-edit/article-edit.component';







export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: "listProvider", component: ProviderListComponent },
    { path: 'providerAdd',      component: ProviderAddComponent },
    { path: 'providerEdit/:id', component: ProviderEditComponent },
    { path: "listArticle", component: ArticleListComponent },
    { path: "articleAdd", component: ArticleAddComponent },
    { path: 'articleEdit/:id', component: ArticleEditComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
