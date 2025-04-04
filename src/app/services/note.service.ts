import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NoteDto {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  private baseUrl = 'https://wa-blognotes-g9ebhxbuccgfgwbu.centralus-01.azurewebsites.net/Note/'

  constructor(private http: HttpClient) { }

  // Get all notes
  getAllNotes(): Observable<NoteDto[]> {
    return this.http.get<NoteDto[]>(this.baseUrl);
  }

  // Get note by id
  getNoteById(id: number): Observable<NoteDto> {
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
  deleteNoteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}`);
  }
}
 

