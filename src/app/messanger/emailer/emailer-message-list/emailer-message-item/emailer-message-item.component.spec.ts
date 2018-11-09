import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailerMessageItemComponent } from './emailer-message-item.component';

describe('EmailerMessageItemComponent', () => {
  let component: EmailerMessageItemComponent;
  let fixture: ComponentFixture<EmailerMessageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailerMessageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailerMessageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
