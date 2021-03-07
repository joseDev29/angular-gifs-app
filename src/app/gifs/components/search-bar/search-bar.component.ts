import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: 'search-bar.component.html',
})
export class SearchBarComponent {
  //el signo ! indica que esa variable
  // o atributo nuca tendrá un
  //un valor nulo
  @ViewChild('inputSearch') inputSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search() {
    const value = this.inputSearch.nativeElement.value;

    this.gifsService.searchGifs(value);

    this.inputSearch.nativeElement.value = '';
  }
}
