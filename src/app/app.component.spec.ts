import { AnimationDriver } from '@angular/animations/browser';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture;
  let app: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tibia-knowledge'`, () => {
    expect(app.title).toEqual('tibia-knowledge');
  });

  it(`should run ngOnInit'`, () => {
    app.ngOnInit();
    expect(app.primengConfig.ripple).toBeTrue();
  });
});
