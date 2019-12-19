import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let serverUrl = 'https://api.ftoss.com/';
let tournamentTypeUrl = "../assets/recepi.json";
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  sportsType(){
    return new Promise((resolve, reject)=>{
      this.http.get(tournamentTypeUrl).subscribe(
        res=>{
          resolve(res);
        },
        error=>{
          reject(error);
        }
      )
    })
  }
}
