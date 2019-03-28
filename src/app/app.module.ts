import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';



@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserDetailComponent,
        UserEditComponent,
        UserCreateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
