import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomePageComponent} from './pages/home-page/home-page.component'
import {GiphyPageComponent} from './pages/giphy-page/giphy-page.component'

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'giphy', loadChildren: () => import('./pages/giphy-page/giphy.module').then(m => m.GiphyModule) },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
