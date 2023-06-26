import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent {
  id!: number;
  comic! : any;
  constructor(private servicio: ApiService, private miraMiId: ActivatedRoute, private router: Router) {}
 

  ngOnInit() :void {
    this.miraMiId.paramMap.subscribe((data:any)=>{
      // console.log(data); 
      this.id = data.params.id;
    })
    this.servicio.getComic(this.id).subscribe((data:any)=>{
      this.comic = data;
    })
  }
 deleteComic = ()=> {
  this.servicio.deleteComic(this.id).subscribe((data: any)=>{
     alert("Comic Eliminado")
     this.router.navigate(["/comics"])
 })
}
patchComic = (comic:any) => {
    this.servicio.editItem(comic)
    this.router.navigate(["/gestion"])
    alert("¿Quieres modificar el Personaje?")
}
}
