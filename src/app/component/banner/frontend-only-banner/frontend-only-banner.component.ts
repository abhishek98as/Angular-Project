import { Component, Input } from '@angular/core';
import { MOCK_INFO } from 'src/assets/mock-data/mock-info';

@Component({
  selector: 'app-frontend-only-banner',
  template: `
    <div *ngIf="show" class="frontend-only-banner" [ngClass]="{'minimized': minimized}">
      <div class="content">
        <span class="tag">{{ MOCK_INFO.versionInfo.tag }}</span>
        <span class="message">{{ message }}</span>
        <span class="version">v{{ MOCK_INFO.versionInfo.version }}</span>
      </div>
      <div class="actions">
        <button class="toggle-btn" (click)="toggleMinimized()">
          {{ minimized ? 'Show' : 'Hide' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .frontend-only-banner {
      background-color: #ffc107;
      color: #212529;
      padding: 10px 16px;
      text-align: center;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }
    
    .frontend-only-banner.minimized {
      transform: translateY(calc(100% - 30px));
    }
    
    .frontend-only-banner .content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .frontend-only-banner .tag {
      font-weight: bold;
      background-color: #212529;
      color: #ffc107;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
      text-transform: uppercase;
    }
    
    .frontend-only-banner .version {
      font-size: 12px;
      opacity: 0.7;
    }
    
    .frontend-only-banner .toggle-btn {
      background: transparent;
      border: 1px solid #212529;
      border-radius: 4px;
      padding: 2px 8px;
      cursor: pointer;
      font-size: 12px;
    }
    
    .frontend-only-banner .toggle-btn:hover {
      background-color: #212529;
      color: #ffc107;
    }
  `]
})
export class FrontendOnlyBannerComponent {
  @Input() show = true;
  @Input() message = MOCK_INFO.bannerMessage;
  
  MOCK_INFO = MOCK_INFO;
  minimized = false;
  
  toggleMinimized() {
    this.minimized = !this.minimized;
  }
}