import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { NoteCreateComponent } from './components/note-create/note-create.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import { NoteDeleteComponent } from './components/note-delete/note-delete.component';

export const routes: Routes = [
  { path: 'note', component: NoteListComponent },
  { path: 'note/create', component: NoteCreateComponent },
  { path: 'note/edit/:id', component: NoteEditComponent },
  { path: 'note/:id', component: NoteDetailComponent },
  {path: 'note/delete/:id', component: NoteDeleteComponent},
  { path: '', redirectTo: '/note', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
