import { Subjects, Publisher, OrderCancelledEvent } from "@ticketr/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
