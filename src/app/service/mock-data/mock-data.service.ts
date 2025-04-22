import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { Activity } from '../../model/activity/activity.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  
  private mockDataUrl = 'assets/mock-data/mock-data.json';
  
  constructor(private http: HttpClient) { }
  
  // Get mock data from JSON file
  private getMockData(): Observable<any> {
    return this.http.get<any>(this.mockDataUrl).pipe(
      catchError(error => {
        console.error('Error loading mock data:', error);
        return of({
          systemInfo: {
            'npm-downloads': 15000,
            'github-stars': 3000,
            'open-source-ratio': 80
          },
          products: {},
          contact: {
            success: true,
            message: 'Thank you for your message. This is a frontend-only demo.'
          }
        });
      })
    );
  }
  
  // Mock analytics data
  getSystemInfo(key: string): Observable<number> {
    return this.getMockData().pipe(
      map(data => data.systemInfo[key] || 0),
      delay(800)  // Simulate network delay
    );
  }
  
  // Mock product data
  getProductInfo(productKey: string): Observable<any> {
    return this.getMockData().pipe(
      map(data => data.products[productKey] || {
        stars: 100, 
        forks: 40, 
        subscribers: 25, 
        version: 'v1.0.0',
        activity: []
      }),
      delay(800)
    );
  }
  
  // Mock GitHub activity
  getProductActivity(productKey: string): Observable<Activity[]> {
    return this.getMockData().pipe(
      map(data => {
        const productData = data.products[productKey] || { activity: [] };
        
        // If no activity data in mock file, generate some random ones
        if (!productData.activity || productData.activity.length === 0) {
          const activities: Activity[] = [];
          const today = new Date();
          
          // Create 10 mock commits over the past year
          for (let i = 0; i < 10; i++) {
            const daysAgo = Math.floor(Math.random() * 365);
            const date = new Date(today);
            date.setDate(today.getDate() - daysAgo);
            
            activities.push({
              type: 'commit',
              date: date,
              payload: this.generateMockSha()
            });
          }
          
          activities.sort((a, b) => b.date.getTime() - a.date.getTime());
          return activities;
        }
        
        // Convert ISO strings to Date objects
        return productData.activity.map(item => ({
          ...item,
          date: new Date(item.date)
        }));
      }),
      delay(1000)
    );
  }
  
  // Mock contact us form submission - just returns success
  sendContactForm(payload: any): Observable<any> {
    return this.getMockData().pipe(
      map(data => data.contact),
      delay(1500) // Longer delay to simulate form processing
    );
  }
  
  // Helper to generate mock SHA
  private generateMockSha(): string {
    return Array(40).fill(0).map(() => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('');
  }
}