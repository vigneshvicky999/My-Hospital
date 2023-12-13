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
  patientDetailApi:any=` http://localhost:3000/patient-Details/`
  fetchData():Observable<any>{
    return this.http.get<any[]>('../../assets/bind/binding.json/')
  }

  specialitiesData():Observable<any>{
    return this.http.get<any[]>('../../assets/bind/speciality.json/')
  }
  
  seperateSpecialityData():Observable<any>{
    return this.http.get<any[]>('../../assets/bind/seperate-speciality.json/')
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

// patientDetailsApi
postPatientDetails(data:any){
  return this.http.post<any>(this.patientDetailApi,data);

}
getPatientDetails(){
  return this.http.get<any>(this.patientDetailApi);
}
deletePatientDetails(id:number){
  return this.http.delete<any>(this.patientDetailApi+id);

}
editPatientDetails(data:any,id:number){
  return this.http.put<any>(this.patientDetailApi+id,data);
}
  

  }
  

