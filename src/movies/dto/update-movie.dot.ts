import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
// 해당 class는 CreateMovieDto를 PartialType방식으로 extends하는데
// 이는 CreateMovieDto class를 따르되 모든 데이터 타입이 필수적이지 않은 class로 기능
