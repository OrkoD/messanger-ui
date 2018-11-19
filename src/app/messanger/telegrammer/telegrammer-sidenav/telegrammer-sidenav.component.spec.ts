import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegrammerSidenavComponent } from './telegrammer-sidenav.component';

describe('TelegrammerSidenavComponent', () => {
  let component: TelegrammerSidenavComponent;
  let fixture: ComponentFixture<TelegrammerSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelegrammerSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelegrammerSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
