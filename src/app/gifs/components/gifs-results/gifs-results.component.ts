import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs-results',
  templateUrl: 'gifs-results.component.html',
})
export class GifsResultsComponent {
  constructor(private gifsService: GifsService) {}

  get gifs() {
    return this.gifsService.gifs;
  }
}
