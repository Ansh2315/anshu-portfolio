import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScreenResolutionService {

  private readonly key = 'deviceType';

  constructor() {
    this.setDeviceType(); // Run on service creation
    window.addEventListener('resize', this.setDeviceType.bind(this));
  }

  private setDeviceType(): void {
    const width = window.innerWidth;
    let type = 'desktop';

    if (width < 576) {
      type = 'mobile';
    } else if (width >= 576 && width < 992) {
      type = 'tablet';
    } else {
      type = 'laptop';
    }

    localStorage.setItem(this.key, type);
  }

  public getDeviceType(): string | null {
    return localStorage.getItem(this.key);
  }

  public isMobile(): boolean {
    return this.getDeviceType() === 'mobile';
  }

  public isTablet(): boolean {
    return this.getDeviceType() === 'tablet';
  }

  public isLaptop(): boolean {
    return this.getDeviceType() === 'laptop';
  }

  public isDesktop(): boolean {
    return this.getDeviceType() === 'desktop';
  }

  ngOnDestroy(): void {
    // optional: clean up when used in destroyable scopes
    window.removeEventListener('resize', this.setDeviceType.bind(this));
  }
}
