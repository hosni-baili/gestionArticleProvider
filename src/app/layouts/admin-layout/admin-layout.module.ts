import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
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



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    ProviderListComponent,
    ProviderAddComponent,
    ProviderEditComponent,
    ArticleListComponent,
    ArticleAddComponent,
    ArticleEditComponent,
    MapsComponent
  ]
})

export class AdminLayoutModule {}
