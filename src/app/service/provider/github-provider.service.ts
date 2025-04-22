import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environmentCommon } from '../../../environments/environment-common';
import { Activity } from '../../model/activity/activity.model';
import { MockDataService } from '../mock-data/mock-data.service';
import { UtilService } from '../util/util.service';

@Injectable({
  providedIn: 'root',
})
export class GithubProviderService {

  GITHUB_DATA = {
    stars: $localize`:@@githubCounters.stars:Stars`,
    forks: $localize`:@@githubCounters.forks:Forks`,
    subscribers: $localize`:@@githubCounters.subscribers:Subscribers`,
    releaseVersion: $localize`:@@githubCounters.releaseVersion:Release Version`
  };

  constructor(
    private util: UtilService,
    private mockDataService: MockDataService
  ) {}

  // Convert to Observable for easier integration with Angular
  getGithubStars(productKey: string): Observable<any> {
    return this.mockDataService.getProductInfo(productKey).pipe(
      map(product => ({ productKey, count: product.stars }))
    );
  }

  getGithubCounters(productKey: string): Observable<any[]> {
    return this.mockDataService.getProductInfo(productKey).pipe(
      map(product => {
        return [
          {
            name: this.GITHUB_DATA.releaseVersion,
            value: product.version,
          },
          {
            name: this.GITHUB_DATA.stars,
            value: product.stars.toString(),
          },
          {
            name: this.GITHUB_DATA.forks,
            value: product.forks.toString(),
          },
          {
            name: this.GITHUB_DATA.subscribers,
            value: product.subscribers.toString(),
          }
        ];
      })
    );
  }

  getReleaseVersion(productKey: string): Observable<string> {
    return this.mockDataService.getProductInfo(productKey).pipe(
      map(product => product.version)
    );
  }

  getCommitHistory(productKey: string): Observable<Activity[]> {
    return this.mockDataService.getProductActivity(productKey);
  }
}
