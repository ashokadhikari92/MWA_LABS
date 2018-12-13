import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserModule } from "./user/user.module";
import { RootComponent } from "./root/root.component";
import { ErrorComponent } from "./error/error.component";
import { NotFoundComponent } from "./error/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    ErrorComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, UserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
