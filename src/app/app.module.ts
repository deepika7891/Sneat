import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/body/dashboard/dashboard.component';
import { AccountsettingsComponent } from './components/body/accountsettings/accountsettings.component';
import { TypographyComponent } from './components/body/typography/typography.component';
import { IconsComponent } from './components/body/icons/icons.component';
import { CardsComponent } from './components/body/cards/cards.component';
import { TablesComponent } from './components/body/tables/tables.component';
import { FormLayoutComponent } from './components/body/form-layout/form-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './components/home/home.component';

// import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListItem } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './components/body/account/account.component';
import { AcountSecurityComponent } from './components/body/acount-security/acount-security.component';
import { AcountNotificationComponent } from './components/body/acount-notification/acount-notification.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AuthService } from './service/auth/auth.service';
import { AuthGuard } from './auth/authguard.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AccountsettingsComponent,
    TypographyComponent,
    IconsComponent,
    CardsComponent,
    TablesComponent,
    FormLayoutComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    AcountSecurityComponent,
    AcountNotificationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatButtonModule, MatIconModule,
    MatListItem,
    MatGridListModule,
    MatCardModule,
    CanvasJSAngularChartsModule,
    FormsModule,
    MatTableModule,
    MatSelectModule, MatInputModule, MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatMenuModule,
    MatTooltipModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
