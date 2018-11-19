import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegrammerSelectChatComponent } from './telegrammer-select-chat.component';

describe('TelegrammerSelectChatComponent', () => {
  let component: TelegrammerSelectChatComponent;
  let fixture: ComponentFixture<TelegrammerSelectChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelegrammerSelectChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegrammerSelectChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
