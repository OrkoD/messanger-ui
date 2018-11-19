import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegrammerChatComponent } from './telegrammer-chat.component';

describe('TelegrammerChatComponent', () => {
  let component: TelegrammerChatComponent;
  let fixture: ComponentFixture<TelegrammerChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelegrammerChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegrammerChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
