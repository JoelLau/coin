import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appIfScreensize]',
})
export class IfScreensizeDirective implements OnInit, OnDestroy {
  @Input()
  appIfScreensize: string | number = 'md';

  private windowResize$: Observable<Event> = fromEvent(window, 'resize');
  private subscription$ = new Subscription();

  constructor(
    // eslint-disable-next-line no-unused-vars
    private templateRef: TemplateRef<any>,
    // eslint-disable-next-line no-unused-vars
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    const innerWidth = window.innerWidth;
    const breakPointInPixels = this.getBreakPointInPixels(this.appIfScreensize);
    this.toggleContents(innerWidth, breakPointInPixels);

    this.subscription$.add(this.toggleTemplateOnWindowResize());
  }

  toggleTemplateOnWindowResize(): Subscription {
    return this.windowResize$.subscribe((event: Event) => {
      const target = event.target as Window;
      const innerWidth = target.innerWidth;

      const minWidth = this.appIfScreensize;
      const breakpointInPixels = this.getBreakPointInPixels(minWidth);

      this.toggleContents(innerWidth, breakpointInPixels);
    });
  }

  getBreakPointInPixels(breakpoint: string | number): number {
    if (typeof breakpoint === 'number') {
      return breakpoint;
    }

    const breakpointDefinition: BreakPointDefinition | undefined =
      DefaultBreakPoints.find(
        (breakpointItem) => breakpoint === breakpointItem.name
      ) || DefaultBreakPoint;

    return breakpointDefinition.pixels;
  }

  toggleContents(windowInnerWidth: number, inputMinWidth: number): void {
    console.log(
      `inputMinWidth(${inputMinWidth}) >= windowInnerWidth(${windowInnerWidth}): ${
        inputMinWidth >= windowInnerWidth
      }`
    );

    this.viewContainerRef.clear();
    if (inputMinWidth >= windowInnerWidth) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}

export const DefaultBreakPoint: BreakPointDefinition = {
  name: 'md',
  pixels: 768,
};

/**
 * Default tailwind breakpoint sizes.
 * Source: https://tailwindcss.com/docs/breakpoints
 */

export const DefaultBreakPoints: BreakPointDefinition[] = [
  { name: 'sm', pixels: 640 },
  DefaultBreakPoint,
  { name: 'lg', pixels: 1024 },
  { name: 'xl', pixels: 1280 },
  { name: '2xl', pixels: 1536 },
];

export interface BreakPointDefinition {
  name: string;
  pixels: number;
}
