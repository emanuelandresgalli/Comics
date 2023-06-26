import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ComicsComponent } from './pages/comics/comics.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ComicComponent } from './components/comic/comic.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"comics", component: ComicsComponent},
  {path:"gestion", component: GestionComponent},
  {path:"comics/:id", component: ComicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
