import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Header1Component } from "./nav/header1/header1.component";
import { Header2Component } from "./nav/header2/header2.component";
import { Header3Component } from "./nav/header3/header3.component";
import { Footer1Component } from "./nav/footer1/footer1.component";
import { Footer2Component } from "./nav/footer2/footer2.component";
import { Footer3Component } from "./nav/footer3/footer3.component";
import { DashboardBannerComponent } from "./home/dashboard-banner/dashboard-banner.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Header2Component,
    Header3Component,
    Footer1Component,
    Footer2Component,
    Footer3Component,
    DashboardBannerComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
