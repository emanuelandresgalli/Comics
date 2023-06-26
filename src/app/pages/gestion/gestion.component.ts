import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent {
  comicForm!: FormGroup;

constructor(private servicio:ApiService,
 private formBuilder: FormBuilder ) {}

public nuevoComic = this.servicio.comicInfo;
public comicId = this.servicio.comicInfo.id;

ngOnInit() :void{
  this.comicForm = this.formBuilder.group({
    title: [
      this.nuevoComic.title, [Validators.required, Validators.minLength(5)]
    ],
      author: [
        this.nuevoComic.author,[Validators.required, Validators.minLength(5)]
      ],
      company: [
        this.nuevoComic.company,[Validators.required, Validators.minLength(25)]
      ],
      cover: [
        this.nuevoComic.cover,[Validators.required]
      ],
      id: [
        this.nuevoComic.id,[Validators.required, Validators.minLength(2)]
      ],
      aboutme: [
        this.nuevoComic.aboutme,[Validators.required, Validators.minLength(2)]
      ],
  })
  this.comicForm.valueChanges.subscribe((changes) => {
    this.nuevoComic = changes
  })
}
  onSubmit = () => {
      this.servicio.cleanComic();

      if (this.comicId !=="") {
        this.servicio.putComic(this.comicId, this.nuevoComic).subscribe()
      } else {
        this.servicio.postComic(this.nuevoComic).subscribe();
        alert('Heroe Creado');
      }
      //this.router.navigate(['/comic']);
      this.comicForm.reset();
  };
 
}
