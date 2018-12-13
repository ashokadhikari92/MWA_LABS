import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { UserComponent } from "./user.component";
import { DataService } from "./services/data.service";
import { UserDetailComponent } from "./detail/detail.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UserComponent, UserDetailComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [{ provide: DataService, useClass: DataService }],
  exports: [UserComponent, UserDetailComponent]
})
export class UserModule {}
