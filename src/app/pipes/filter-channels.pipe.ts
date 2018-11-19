import { Pipe, PipeTransform } from '@angular/core';
import { Channel } from '../interfaces/channel';

@Pipe({
  name: 'filterChannels',
  pure: false
})
export class FilterChannelsPipe implements PipeTransform {

  transform(channels: Channel[], filter: string): Channel[] {
    if ( !channels && !filter ) return channels;
    return channels.filter(( channel: Channel ) => channel.participant.fullName.indexOf( filter ) !== -1);
  }

}
