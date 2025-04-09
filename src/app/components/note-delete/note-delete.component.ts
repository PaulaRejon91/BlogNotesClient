import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { NoteService } from '../../services/note.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-delete',
  templateUrl: './note-delete.component.html',
  styleUrls: ['./note-delete.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    ]
})

export class NoteDeleteComponent implements OnInit {
  noteId!: number;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.noteId = +id; // Convierte el id de string a número
    }
  }
  DeleteNote(): void {
    this.noteService.deleteNoteById(this.noteId).subscribe({
      next: () => {
        console.log('Note deleted successfully');
        this.router.navigate(['/note']); 
      },
      error: err => console.error('Error deleting note', err)
    });
  }     
  Cancel(): void {
    this.router.navigate(['/note']); 
  }
}
