import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'https://localhost:44313/api/';
  constructor(private http: HttpClient) { }
  login(loginRequest) {
    return this.http.post(this.baseUrl + 'auth/login', loginRequest);
  }
  register(registerRequest) {
    return this.http.post(this.baseUrl + 'auth/register', registerRequest);
  }

  getByID(id) {
    return this.http.get(this.baseUrl + 'auth/' + id);
  }
  getAll() {
    return this.http.get(this.baseUrl + 'auth');
  }
}
