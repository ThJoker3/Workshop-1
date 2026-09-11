export class Garage {

  #maxCapacity
  #currentCapacity
  #ratePerMinute
  #taxRate
  #ticket

  constructor() {
    this.#ratePerMinute = 10
    this.#maxCapacity = 100
    this.#currentCapacity = 100
    this.#taxRate = 1
  }

  getcurrentCapacity() {
    return this.#currentCapacity
  }

  getRate() {
    return this.#ratePerMinute
  }

  getTax() {
    return this.#taxRate
  }

  checkIn() {
    if (this.#currentCapacity <= 0) {
      throw new Error("Garage is full")
    }
    this.#currentCapacity--
    this.#ticket = {createdAt: new Date(), vehicleType: vehicleType} // create a new ticket object
    return this.#ticket
  }

  checkOut() {
    this.#currentCapacity++

    this.openGate(this.#ticket)
  }

  calculateFee(ticket) {
    const now = new Date()
    const minutes = Math.floor((now - this.#ticket.createdAt) / 60000)
    return minutes * this.#ratePerMinute * this.getTax()
  }

  openGate(ticket) {
    console.log("Gate opened for ticket:", ticket)
  }

}