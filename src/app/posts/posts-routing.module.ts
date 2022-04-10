import {RouterModule, Routes} from "@angular/router";
import {PostsComponent} from "./posts.component";
import {PostDetailsComponent} from "./post-details/post-details.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'id',
    component: PostDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostsRoutingModule {

}
