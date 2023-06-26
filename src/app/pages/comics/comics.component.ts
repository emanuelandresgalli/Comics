import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent {
  listaComics: any[] = [];
  constructor (private comicService: ApiService) {}

  ngOnInit() :void {
    this.comicService.getComics().subscribe((data:any)=>{
      //console.log(data);
      this.listaComics = [...data];
    })
  }

}
