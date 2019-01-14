import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../../models';

/**
 * Generated class for the FilterCompletePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterComplete',
  pure: false
})
export class FilterCompletePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(lists: List[], complete: boolean) {
    return lists.filter(list => list.finish === complete)
  }
}
