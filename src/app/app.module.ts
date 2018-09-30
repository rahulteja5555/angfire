import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAeH7SFiBN5Qa-41gsiQ2mIJO4BpzdnqLU",
      authDomain: "rahul-auth2-web.firebaseapp.com",
      storageBucket: "rahul-auth2-web.appspot.com",
      projectId: "rahul-auth2-web",
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
