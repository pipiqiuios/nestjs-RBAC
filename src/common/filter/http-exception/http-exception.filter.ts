import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { ApiException } from './api-exception';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    // 判断apiException是否是在HttpException链上
    if (exception instanceof ApiException) {
      response.status(status).json({
        code: exception.getErrorCode(),
        timestamp: new Date().toISOString(),
        path: request.url,
        describe: exception.getErrorMessage(),
      });
      return;
    }

    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      describe: exception.message,
    });
  }
}
