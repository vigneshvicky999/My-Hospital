import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl ='http://localhost:3000/profile/'
  
  onRegisterSubmitForm(value: Partial<{ prefix: string | null; name: string | null; userName: string | null; dob: string | null; email: string | null; password: string | null; confirmPass: string | null; mobile: string | null; }>) {
    throw new Error('Method not implemented.');
  }
  constructor(private http : HttpClient) { }

  getAll():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  postRegister(inputData:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,inputData);
  }
  getByCode(userName:any):Observable<any>{
    return this.http.get<any>(this.apiUrl +userName);
  }

  login(username: string, password: string) {
    return this.http.get(`${this.apiUrl}?username=${username}&password=${password}`);
  }

  isLoggedIn(){
    return sessionStorage.getItem('userName')!=null
  }
}
