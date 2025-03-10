import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

const routes: Routes = [{ path: '', component: SearchPageComponent }, { path: 'edit/:name', component: EditPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
