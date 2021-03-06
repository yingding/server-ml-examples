import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule} from '@angular/forms'; // FormsModule is needed for the two binding for the Form in AngularMaterial
// material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
// adding components to this module
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PopupDialogComponent } from './shared/dialog/popup-dialog/popup-dialog.component';
import { PrivateModule } from './private/private.module';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { InputsModule } from './inputs/inputs.module';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    PopupDialogComponent,
    PageNotFoundComponent,
  ],
  imports: [
    ApiModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    InputsModule,
    PrivateModule,
    AppRoutingModule,
    // the subModule with Module routes must be placed above the AppRoutingModule
  ],
  // providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],

  // deprecated Material Dialog need entryComponents, ivy in Angular9 doesn't need entryComponents any more.
  // entryComponents: [PopupDialogComponent],
  /**
   * adding dynamically created components to entryComponents:
   * https://stackoverflow.com/questions/41519481/angular2-material-dialog-has-issues-did-you-add-it-to-ngmodule-entrycomponent
   */
  /* AppComponent provides a router with empty content, is used to switch between welcomeComponent and login component */
  bootstrap: [AppComponent]
})
export class AppModule { }
