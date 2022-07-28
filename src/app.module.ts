import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';

@Module({
  // 해당 함수를 데코레이터 함수라고한다.
  // NestJS에서 필연적으로 사용하는 함수이고,
  // 해당 함수가 클래스에 함수기능을 추가해 주기 때문이다.
  // 앱과 같은 역할을 하고 기능들을 만들수 있는거같아
  imports: [MoviesModule],
  controllers: [AppController],
  // 컨트롤러는 url을 가져오고 함수를 실행시켜
  // express의 라우터 같은 존재
  providers: [],
})
export class AppModule {}
