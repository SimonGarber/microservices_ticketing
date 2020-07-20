import { Publisher, Subjects, TicketCreatedEvent } from "@ticketr/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
