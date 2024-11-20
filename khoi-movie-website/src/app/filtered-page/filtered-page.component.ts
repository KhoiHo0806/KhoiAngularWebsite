import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchAndFilterService } from '../service/search-and-filter.service';
import { Movie } from '../model/movie';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-filtered-page',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink],
  templateUrl: './filtered-page.component.html',
  styleUrl: './filtered-page.component.css'
})
export class FilteredPageComponent {
  // fontawesomr icon
  faPlay = faPlay

  constructor(private route: ActivatedRoute, private searchAndFilterService: SearchAndFilterService){}

  filterOption: string = "";
  filterOptionName:any | null = null;
  filteredMovieList:Movie[] | null = null;

  ngOnInit(): void {
    //subcribe to the route param so that the page can react to the changes
    this.route.params.subscribe((param) =>{
      this.filterOption = param['option'];
      this.filterOptionName = param['optionName'];
      this.filteredMovieList = this.searchAndFilterService.filterMovie(this.filterOption, this.filterOptionName);
    })
  }


}
