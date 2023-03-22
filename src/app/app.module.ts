import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SideHeadingComponent } from './side-heading/side-heading.component';
import { HeaderComponent } from './header/header.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './Service/api.interceptor';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CustomPreloadingStrategy } from './custom-preloading-strategy';
import { IndexDBService } from './Utills/index-db.service';
@NgModule({
  declarations: [
    AppComponent,
    SideHeadingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,RouterModule
  ],
  providers: [
    IndexDBService,
    CustomPreloadingStrategy,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:ApiInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
