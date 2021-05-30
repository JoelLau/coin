import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IfScreensizeDirective } from '@shared/directives/if-screensize/if-screensize.directive';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavComponent, IfScreensizeDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have a child 'nav-desktop' component", () => {
    const debugElement: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-test="nav-desktop"]')
    );

    expect(debugElement.length).toBeGreaterThanOrEqual(1);
  });

  it("should have a child 'nav-mobile' component", () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(9999);
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();

    const debugElement: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-test="nav-mobile"]')
    );

    expect(debugElement.length).toBe(0);
  });

  it("should hide child 'nav-mobile' component", () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(1);
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();

    const debugElement: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-test="nav-mobile"]')
    );

    expect(debugElement.length).toBe(1);
  });
});
