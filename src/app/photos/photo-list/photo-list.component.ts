import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { LoadingService } from '../../shared/components/loading/loading.service';


@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent{

  photos: Photo[] = [];
  filter = '';
  
  hasMore = true;
  currentPage = 1;
  userName = '';


  constructor(
    private activadedRoute: ActivatedRoute,
    private photoService: PhotoService//,
    //private loadingService: LoadingService
    ){}

    ngOnInit(): void {  
      //this.loadingService.start();   
      this.activadedRoute.params.subscribe(params => {
        this.userName = params.userName;
        this.photos = this.activadedRoute.snapshot.data['photos'];
      });
    }    

    load(){
      this
      .photoService.listFromUserPagination(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos);
        if (!photos.length){
          this.hasMore = false;
        }
      });
    }

}
