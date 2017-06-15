import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listing: any, term: any): any {
    // check if search is undifined === void 0
    if (term === undefined) return listing;
    // return updated ninjas array
    return listing.filter(function(d){
      return d.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
