import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailerSidenavComponent } from './emailer-sidenav.component';

describe('EmailerSidenavComponent', () => {
  let component: EmailerSidenavComponent;
  let fixture: ComponentFixture<EmailerSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailerSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailerSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
