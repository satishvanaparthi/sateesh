import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientmoduleComponent } from './httpclientmodule.component';

describe('HttpclientmoduleComponent', () => {
  let component: HttpclientmoduleComponent;
  let fixture: ComponentFixture<HttpclientmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpclientmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclientmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
