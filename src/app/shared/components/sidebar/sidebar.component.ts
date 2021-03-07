import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  getHistory() {
    return this.gifsService.history;
  }

  search(event: Event, query: string) {
    event.preventDefault();
    this.gifsService.searchGifs(query);
  }
}
