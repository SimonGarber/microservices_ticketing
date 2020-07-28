import { Publisher, OrderCreatedEvent, Subjects } from "@ticketr/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
