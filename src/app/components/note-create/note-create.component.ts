import { Component, OnInit } from '@angular/core';
import { NoteDto, NoteService } from '../../services/note.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  standalone: true,
  styleUrls: ['./note-create.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    ]
})
export class NoteCreateComponent implements OnInit {
  noteForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.noteForm.valid) {
      const noteDto: NoteDto = {
        id: 0,
        title: this.noteForm.value.title,
        content: this.noteForm.value.content,
        createdAt: this.noteForm.value.createdAt
      };

      this.noteService.createNote(noteDto).subscribe({
        next: data => {
          console.log('Note created:', data);
          this.router.navigate(['/note']); 
        },
        error: err => console.error('Error creating note', err)
      });
    }
  }
}
