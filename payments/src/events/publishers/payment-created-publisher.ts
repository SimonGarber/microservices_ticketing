import { Subjects, Publisher, PaymentCreatedEvent } from "@ticketr/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
