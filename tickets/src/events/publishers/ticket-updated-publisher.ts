import { Publisher, Subjects, TicketUpdatedEvent } from "@ticketr/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
