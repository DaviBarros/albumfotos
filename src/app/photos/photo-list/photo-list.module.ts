import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { FilterByDescription } from './photos/filter-by-description.pipe';
import { PhotosComponent } from './photos/photos.component';
import { CardModule } from '../../shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkenOnOverModule } from '../../shared/directives/darken-on-over/darken-on-over.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
        
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule,
        DarkenOnOverModule,
        RouterModule
    ]
})
export class PhotoListModule{

}
