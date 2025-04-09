import { Component, OnInit } from '@angular/core';
import { NoteDto, NoteService } from '../../services/note.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrl: './note-edit.component.css',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    ]
})

export class NoteEditComponent implements OnInit{
  noteForm!: FormGroup;
  noteId!: number;
  constructor(
    private noteService: NoteService, 
    private router: Router, 
    private formGroup: FormBuilder, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.noteId = +this.route.snapshot.params['id'];
    this.noteForm = this.formGroup.group({
      id: [this.noteId],
      title: ['', Validators.required],
      content: ['', Validators.required], 
      createdAt: [new Date(), Validators.required],
    });

    if(this.noteId) {
      this.noteService.getNoteById(this.noteId).subscribe({
        next: data => {
          this.noteForm.patchValue({
            title: data.title,
            content: data.content,
          });
        },
        error: err => console.error('Error fetching note', err)
      });
    }    
  }
  onSubmit(): void {
    if (this.noteForm.valid) {
      const noteDto: NoteDto = this.noteForm.value;
      this.noteService.updateNote(noteDto).subscribe({
        next: () => {
          console.log('Note updated successfully');
          this.router.navigate(['/note']);
        },
        error: err => console.error('Error updating note', err)
      });
    }
  }
}


