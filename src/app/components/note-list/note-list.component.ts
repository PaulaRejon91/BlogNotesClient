import { Component, OnInit } from '@angular/core';
import { NoteDto, NoteService } from '../../services/note.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    ]
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
