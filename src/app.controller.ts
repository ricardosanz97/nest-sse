import { Controller, MessageEvent, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';

@Controller()
export class AppController {
  /**
   * Emits a message event every second
   * @returns the messag eevent object
   */
  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(map((value) => ({ data: value.toString() })));
  }
}
