import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';
import {UserService} from '../../services/user-service';
import {ClientService} from '../../services/client-service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: [UserService,ClientService]
})
export class HomeModule {}