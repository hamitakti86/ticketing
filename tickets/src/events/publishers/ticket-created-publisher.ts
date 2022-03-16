import { Publisher, Subjects, TicketCreatedEvent } from '@haticketingcore/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
