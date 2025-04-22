import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MockDataService } from '../mock-data/mock-data.service';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  constructor(
    private http: HttpClient,
    private mockDataService: MockDataService
  ) {}

  sendContactUsMail(payload: any): Observable<any> {
    // In frontend-only mode, use mock data service
    return this.mockDataService.sendContactForm(payload);
  }
}
