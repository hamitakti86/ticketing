import { Subjects, Publisher, OrderCancelledEvent } from '@haticketingcore/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
