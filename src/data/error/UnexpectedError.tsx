export class UnexpectedError extends Error {
  constructor(message = "Vish, aconteceu algo inesperado do nosso lado") {
    super();
    this.name = "UnexpectedError";
    this.message = message;
  }
}
