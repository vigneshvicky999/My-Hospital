import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  constructor(private http:HttpClient){ }
  id:any
  fetchData():Observable<any>{
    return this.http.get<any[]>('../../assets/bind/binding.json/')
    .pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error; 
      })
    );
  }

  specialitiesData():Observable<any>{
    return this.http.get<any[]>('../../assets/bind/speciality.json/')
    .pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error; 
      })
    );
  }
  
  seperateSpecialityData():Observable<any>{
    return this.http.get<any[]>('../../assets/bind/seperate-speciality.json/')
    .pipe(
      catchError((error) => {
        console.error('Error fetching data:', error);
        throw error; 
      })
    );
  }
  postData(data:any){
    return this.http.post<any>(' http://localhost:3000/posts/',data);
  
  }
  getData(){
    return this.http.get<any>(' http://localhost:3000/posts/');
  }
  deleteData(id:number){
    return this.http.delete<any>(' http://localhost:3000/posts/'+id);
  
  }
  putData(data:any,id:number){
    return this.http.put<any>(' http://localhost:3000/posts/'+id,data);
  }


  }
  

