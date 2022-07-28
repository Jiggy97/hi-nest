import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // validationPipe에는 다양한 보안 기능들을 지원해줌
      whitelist: true,
      // 데이터의 유효성이 검증되지 않으면, 서버에 해당 데이터가 전송되지 않는다.
      forbidNonWhitelisted: true,
      // 데이터의 유효성이 검증되지 않으면, 서버에 요청 조차 하지 못하게 막는다.
      transform: true,
      // 우리가 서버에 보낸 데이터를 원하는 데이터 타입으로 변경해줌.
    }),
  );
  // NestJS에서 제공하는 유효성 검사 파이프
  await app.listen(3000);
}
bootstrap();
