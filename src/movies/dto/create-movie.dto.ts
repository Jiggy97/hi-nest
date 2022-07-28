import { IsNumber, IsOptional, IsString } from 'class-validator';
// class-validator는 데이터가 갖는 조건으로서 많은 기능을 지원해준다.
// 유효성을 검사해주기 위해 class 생성
export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
