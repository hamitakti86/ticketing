import { Subjects, Publisher, PaymentCreatedEvent } from '@haticketingcore/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
