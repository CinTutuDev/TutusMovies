import { Component, Input, OnInit } from '@angular/core';
import { LIFECYCLE_DID_ENTER } from '@ionic/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() id: any;

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    console.log('ID', this.id);
    this.movieService.getDetallePeli(this.id).subscribe(resp =>{
      console.log(resp);  
    })
  }

}
