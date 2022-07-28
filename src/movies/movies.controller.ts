import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dot';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  // moives.service.ts 파일과 연결해주는 코드

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  // 아마 ':' 이게 뒤에 id에 각 변수가 들어갈것을 암시하네
  getOne(@Param('id') movieId: number): Movie {
    // NestJS에서 무언가 필요할 경우 무조건 요청을 해야한다.
    // @Param은 요청하는 데코레이터이다.
    // 즉 여기서는 url에 있는 parameter 'id'를 get하기 위해 요청을 한 것이다.
    // 함수명(@Param(get하고싶은 prameter) 받을변수명: 데이터타입)
    console.log(typeof movieId);
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.remove(movieId);
  }

  @Patch(':id')
  // Put()은 movie파일 전부를 업데이트 할 때
  // Patch()는 movie파일 일부를 업데이트 할 때
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
