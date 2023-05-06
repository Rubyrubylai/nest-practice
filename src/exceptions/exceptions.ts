import { HttpException, HttpStatus } from "@nestjs/common";

class ForbiddenException extends HttpException {
    constructor() {
      super('Forbidden', HttpStatus.FORBIDDEN);
    }
}

export {
    ForbiddenException
}
