import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = " http://localhost:3000/comics"
  constructor(private http: HttpClient) { }

  public comicInfo = {
    title:"",
    author: "",
    company: "",
    cover: "",
    aboutme: "",
    id: "",
  }
  getComics = () => {
    return this.http.get(this.baseUrl)
  }
  getComic = (id:number) => {
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  deleteComic = (id:number) => {
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  postComic = (comic: any) => {
    return this.http.post(this.baseUrl, comic)
  }
  editItem = (comic: any) => {
    this.comicInfo = comic;
  }
  cleanComic = () => {
    this.comicInfo = {
    title:"",
    author: "",
    company: "",
    cover: "",
    aboutme: "",
    id: "",
    }
  }
  putComic = (comicId: any, editedComic: any ) => {
    return this.http.put(`${this.baseUrl}/${comicId}`, editedComic)
  }
}


