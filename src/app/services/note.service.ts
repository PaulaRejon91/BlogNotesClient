import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NoteDto } from '../models/note.dto';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  private baseUrl = 'https://localhost:7196/Note/'

  constructor(private http: HttpClient) { }

  // Get all notes
  getAllNotes(): Observable<NoteDto[]> {
    return this.http.get<NoteDto[]>(this.baseUrl);
  }

  // Get note by id
  getNoteById(id: string): Observable<NoteDto> {
    return this.http.get<NoteDto>(`${this.baseUrl}${id}`);
  }

  // Create note
  createNote(note: NoteDto): Observable<NoteDto> {
    return this.http.post<NoteDto>(this.baseUrl, note);
  }

  // Update note
  updateNote(note: NoteDto): Observable<NoteDto> {
    return this.http.put<NoteDto>(`${this.baseUrl}${note.id}`, note);
  }

  // Delete note
  deleteNoteById(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }
}
