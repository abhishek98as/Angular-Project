import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MockDataService } from '../mock-data/mock-data.service';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  mixpanelEnabled = false;

  constructor(
    private http: HttpClient,
    private mockDataService: MockDataService
  ) {
    // The mixpanel init would normally go here but we're making it frontend-only
    console.log('Analytics service initialized in frontend-only mode');
  }

  logEvent(event: string, attributes: any) {
    // In frontend-only mode, we just log to console
    console.log('Event tracked (frontend-only):', event, attributes);
  }

  getSystemInfo(key: string): Observable<any> {
    // Use mock data service instead of real API call
    return this.mockDataService.getSystemInfo(key);
  }
}
