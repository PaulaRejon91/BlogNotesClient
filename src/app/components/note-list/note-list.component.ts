import { Component, OnInit } from '@angular/core';
import { NoteDto, NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-list',
  imports: [],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnInit {
  notes: NoteDto[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.getAllNotes().subscribe({
      next: data => this.notes = data,
      error: err => console.error('Error fetching notes', err)
    });
  }
}
