import { Publisher, Subjects, TicketUpdatedEvent } from '@haticketingcore/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
