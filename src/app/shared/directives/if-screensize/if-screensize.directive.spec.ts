import { Component, TemplateRef, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IfScreensizeDirective } from './if-screensize.directive';

describe('IfScreensizeDirective', () => {
  let component: TestResizeComponent;
  let fixture: ComponentFixture<TestResizeComponent>;
  class MockElementRef {}
  class MockViewContainerRef {
    clear(): any {}
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestResizeComponent],
      providers: [
        { provide: TemplateRef, useClass: MockElementRef },
        { provide: ViewContainerRef, useClass: MockViewContainerRef },
        IfScreensizeDirective,
      ],
    });

    fixture = TestBed.createComponent(TestResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should return '1536' when input is '2xl'", () => {
    const spy = TestBed.inject(IfScreensizeDirective);
    const value = spy.getBreakPointInPixels('2xl');

    expect(value).toBe(1536);
  });
});

@Component({
  template: `<ng-template appIfScreensize>
    <h1>TEST</h1>
  </ng-template>`,
})
class TestResizeComponent {}
