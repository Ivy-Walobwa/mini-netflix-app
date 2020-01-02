import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {
  private requests: any = {};
  constructor() { }

  // add items to cache
  put(url: string, response: HttpResponse<any>): void {
    this.requests[url] = response;
  }

  // retrieve items from cache
  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }

  // remove single item from cache
  invalidateUrl(url: string): void {
    this.requests[url] = undefined;
  }

  // clear cache
  invalidateCache(): void {
    this.requests = { };
  }
}
