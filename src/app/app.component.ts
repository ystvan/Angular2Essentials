import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //metadata property
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*
  styles: [`
    h1 {color : #ffffff; }
    `,
    `
    .description {
      font-style: italic;
      color: green;
    }
  `]
  */
})
export class AppComponent {
  onMediaItemDelete(mediaItem){

  }


  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: null,
    isFavorite: false
  }
};
