import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseHttpService } from "./base-http.service";

@Injectable({
  providedIn: "root",
})
export class DataService extends BaseHttpService {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  create<T>(resource, url: string, params?: HttpParams) {
    let headers = new HttpHeaders();
    return this.httpPost<T>(url, resource, headers, params);
  }

  update<T>(resource, url: string, params?: HttpParams) {
    let headers = new HttpHeaders();
    return this.httpPatch(url, resource, headers, params);
  }

  delete<T>(url: string, params: HttpParams) {
    let headers = new HttpHeaders();
    return this.httpDelete(url, headers, params);
  }
  get<T>(url: string, params?: HttpParams) {
    let headers = new HttpHeaders();
    return this.httpGet<T>(url, headers, params);
  }

  getFiltered<T>(domain: string, filters: any) {
    const params = this.objectToHttpParams(filters);
    return this.get<any>(`http://localhost:3000/${domain}/getFiltered`, params);
  }

  deleteByParams(domain: string, filters: any) {
    const params = this.objectToHttpParams(filters);
    return this.delete<any>(
      `\`http://localhost:3000/${domain}/getFiltered\``,
      params
    );
  }

  createOnDomain(domain: string, body: any) {
    return this.create<any>(body, `http://localhost:3000/${domain}/insert`);
  }

  private objectToHttpParams(filters: any) {
    let params = new HttpParams();
    for (const property in filters) {
      const val = filters[property];
      if (val != null && val != "") params = params.append(property, val);
    }
    return params;
  }
}
