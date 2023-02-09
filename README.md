# ![camara32px](https://user-images.githubusercontent.com/71487857/215443811-9da36a51-9562-4cb7-8d69-7dbef48f4aec.png)   Proyecto realizado con ![angular](https://user-images.githubusercontent.com/71487857/212993270-3cf1454e-f0d7-4164-bc01-20d5fe6469cd.png)Angular/![descarga](https://user-images.githubusercontent.com/71487857/212993697-6234ef26-0e4a-40ce-bc8a-a9bfa858a74b.png)Ionic 
![camara150pxblack](https://user-images.githubusercontent.com/71487857/215443464-bbaa4dcc-62ac-4189-a428-0c55a3b197c5.png)

## ✔Comienzo el proyecto con los comandos:

```
   ionic start Tutu-s-movies tabs
   ? Framework: Angular
   ? Starter template: tabs

```
## API TMDB

https://www.themoviedb.org/                                                                                                                                               
1º Para coger la API ir a editar perfil                                 
2º API                                                                                                                                                                    
 3º Solicitar API                                                                                                                                                          
 4º https://www.themoviedb.org/documentation/api/discover                                                                                                                  
 5º La petición entera seria: 
 https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=f76b1a94f37a496866a10143a5baf98e                
6º Realizamos en Postman las pruebas y vemos traducción:
![postman](https://user-images.githubusercontent.com/71487857/215481676-86fcd1b0-92e5-4673-b08a-2b913b31c83b.png)


## 🎱Crear servicio para interactuar con API

```
*Crear servicio sin archivo de prueba
   ionic g s services/movies --skip-tests

*Para hacer la petición creo en app.module el modulo para peticiones
   import { HttpClientModule } from "@angular/common/http";

*En services 'apiNews' hago la importación
   import { HttpClientModule } from '@angular/common/http';
   constructor( private http: HttpClientModule )

```
## 🎓Generar interfaces

```
   Necesito extensión (Paste JSON as Code) ó (https://app.quicktype.io/)
   Crear archivo interfaces  y dentro un index.ts
   En el mismo fichero presionamos Ctrl + Shift + v
   Ponemos nombre + intro
```

## 📸 Para visualizar imagenes

```
1º Creamos carpeta/modulo pipes y creamos un pipe dentro del pipes
ionic g m pipes
ionic g pipe pipes/imagen
2º En pipes.module.ts hago un export:
exports:[
    ImagenPipe
  ]
3º Realizamos la lógica en imagen.pipe.ts
4º Lo import en donde queramos visualizarlo tab1.module.ts:
 import { PipesModule } from "../pipes/pipes.module";
5º OJO ❗❗ para poder visualizarlo en el html:
 <ion-card>
    <ion-img [src]="i. backdrop_path | imagen"></ion-img>
 </ion-card>
 

```

## 🧲 Para coger los endpoints de la API
* URL [EndPoints movies](https://developers.themoviedb.org/3/movies/get-movie-details)
```
 /movie/{movie_id}
 
 Quedando así:
    getDetallePeli(id: number){
    return this.ejecutarQuery<DetallePelis>(`/movie/${id}?a=1`);
  }
```
* URL [EndPoints actores](https://developers.themoviedb.org/3/movies/get-movie-credits)
```
/movie/{movie_id}/credits

 Quedando así:
  En service:
   getDetalleActores(id: number){
    return this.ejecutarQuery<DetallePelis>(`/movie/${id}/credits?a=1`);
  }
  Llamada en ts:
  this.moviesService.getDetalleActores(this.id).subscribe((res) => {
      console.log('ID Actores', res);
    });
```
* URL [EndPoints Buscar Pelis](https://developers.themoviedb.org/3/search/search-movies)

```
/search/movie

  Quedando:
   En service:
   getBuscarPeli(texto: string){
    return this.ejecutarQuery(`/search/movie?query=${texto}`)
  }
  Llamada en ts:
   buscador(event:any){
    console.log(event);
    this.movieService.getBuscarPeli(queryValue).subscribe( result =>{
      console.log(result);
    })
  }
```

##  🖲 Para crear botón de volver a inicio necesito:

```
import { ModalController } from '@ionic/angular';
```
* Inyectarlo en el constructor
``` 
private modalCtrl: ModalController
```
* Y simplemente con esto vuelve a inicio:
```
   inicio(){
    this.modalCtrl.dismiss();
  }
```



