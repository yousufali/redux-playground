import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import reducer from './reducers';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LoginModule } from './components/login/login.module';
import { HomeModule } from './components/home/home.module';
import {routing} from './routes';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './effects';
import {UserActions} from './actions/user-actions';
import {UserResolve} from './resolvers/user-resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    HomeModule,
    routing,
    StoreModule.provideStore(reducer),
        EffectsModule.run(UserEffects)    
  ],
  providers: [UserActions, UserResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
