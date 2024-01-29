import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/body/dashboard/dashboard.component';
import { AccountsettingsComponent } from './components/body/accountsettings/accountsettings.component';
import { TypographyComponent } from './components/body/typography/typography.component';
import { IconsComponent } from './components/body/icons/icons.component';
import { CardsComponent } from './components/body/cards/cards.component';
import { TablesComponent } from './components/body/tables/tables.component';
import { FormLayoutComponent } from './components/body/form-layout/form-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/error/error.component';


const routes: Routes = [
  { path: '',component: DashboardComponent },
  { path: 'account',component: AccountsettingsComponent },
  { path: 'typography',component: TypographyComponent },
  { path: 'icons' ,component: IconsComponent},
  { path: 'cards' ,component: CardsComponent},
  { path: 'tables' ,component: TablesComponent},
  { path: 'form-layout' ,component: FormLayoutComponent},
  { path: 'login' ,component: LoginComponent},
  { path: 'register',component: RegisterComponent},
  { path: '**',component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
