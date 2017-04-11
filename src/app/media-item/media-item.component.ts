import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent { 
  // name = "The Redemption";
  // wasWatched(){
  //   return true;
  //}
  @Input() mediaItem;
  @Output() delete = new EventEmitter();

  onDelete(){
    this.delete.emit(this.mediaItem);
  }
}