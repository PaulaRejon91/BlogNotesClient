import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteCreateComponent } from './NoteCreateComponent';

describe('NoteCreateComponent', () => {
  let component: NoteCreateComponent;
  let fixture: ComponentFixture<NoteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
