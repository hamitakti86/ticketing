import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@haticketingcore/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
