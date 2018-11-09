import { Pipe, PipeTransform } from '@angular/core';
import { Message } from '../interfaces/message';

@Pipe({
  name: 'filterMsg',
  pure: false
})
export class FilterMsgPipe implements PipeTransform {

  transform(messages: Message[], filter: string): any {
    if ( !messages || !filter ) return messages
    if ( filter === 'starred' ) {
      return messages.filter(( msg: Message ) => msg.starred);
    }
    return messages.filter(( msg: Message ) => msg.type === filter);
  }

}
