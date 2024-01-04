import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './common/interceptor/transform/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //全局注册异常过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  //全局注册返回数据格式过滤器
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
