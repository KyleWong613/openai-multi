import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TextComponent } from './pages/text/text.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ChatSelectorComponent } from './pages/chat-selector/chat-selector.component';
import { MatDialogModule } from '@angular/material/dialog'; 

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    SignupComponent,
    HeaderComponent,
    HomeComponent,
    ChatSelectorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent }, // Set HomeComponent as the default homepage
      { path: 'chat', component: TextComponent }, // Chat route
      { path: 'chatselect', component: ChatSelectorComponent }, // Chat route
      { path: 'signup', component: SignupComponent } // Signup route
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
