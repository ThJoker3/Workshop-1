export class Vehicle {
  #ticketCreatedAt
  #ticketId

  constructor() {
    this.#ticketCreatedAt = null
    this.#ticketId = null
  }

  constructor(ticketCreatedAt) {
    this.#ticketCreatedAt = ticketCreatedAt
    this.#ticketId = null
  }

  getTicket() {
    return this.#ticketCreatedAt
  }

  getTicketId() {
    return this.#ticketId
  }
}
