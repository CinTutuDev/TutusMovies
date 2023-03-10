import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';
const URL = environment.imgPath;
/* const URL = `https://image.tmdb.org/t/p/`; */
@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(img: string, size: string = 'w500'): unknown {
    if (!img) {
      return './assets\no-image-banner.jpg';
    }
    const imgURL = `${URL}/${size}${img}`;
    /* console.log('URL imagen', imgURL); */
    return imgURL;
  }
}
