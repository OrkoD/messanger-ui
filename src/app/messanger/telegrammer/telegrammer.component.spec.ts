import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegrammerComponent } from './telegrammer.component';

describe('TelegrammerComponent', () => {
  let component: TelegrammerComponent;
  let fixture: ComponentFixture<TelegrammerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelegrammerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
