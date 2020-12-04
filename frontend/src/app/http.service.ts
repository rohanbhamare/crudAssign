import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = "http://localhost:3000/users";

  constructor(private httpClient:HttpClient) { }

  getUsersList(){
    return this.httpClient.get(this.baseUrl);
  }

  getUser(id){
    return this.httpClient.get(this.baseUrl+"/"+id);
  }

  addUser(data){
    return this.httpClient.post(this.baseUrl, data)
  }

  updateUser(id,data){
    return this.httpClient.put(this.baseUrl+"/"+id,data);
  }

  deleteUser(id){
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}
