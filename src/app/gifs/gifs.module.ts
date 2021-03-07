import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './components/gifs-page/gifs-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GifsResultsComponent } from './components/gifs-results/gifs-results.component';

@NgModule({
  declarations: [GifsPageComponent, SearchBarComponent, GifsResultsComponent],
  imports: [CommonModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
