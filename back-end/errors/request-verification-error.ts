import { CustomError } from "./custom-error";

class RequestVerificationError extends CustomError {
  statusCode = 400;
  constructor(/** an array of objects goes here and contains a message and a field */) {
    super("Invalid request params");
    Object.setPrototypeOf(this, RequestVerificationError.prototype);
  }
  serializeErrors() {
    return [{ message: "Invalid request params" }];
  }
}
