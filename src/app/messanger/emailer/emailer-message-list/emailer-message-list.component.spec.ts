import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailerMessageListComponent } from './emailer-message-list.component';

describe('EmailerMessageListComponent', () => {
  let component: EmailerMessageListComponent;
  let fixture: ComponentFixture<EmailerMessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailerMessageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailerMessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
