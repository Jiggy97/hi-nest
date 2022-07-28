import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getall', () => {
    it('should return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should find a movie', () => {
      service.create({
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.title).toEqual('Test Movie');
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });

  describe('remove', () => {
    it('should delete a movie', () => {
      service.create({
        title: '범죄도시',
        genres: ['액션'],
        year: 2022,
      });
      const beforDelete = service.getAll().length;
      service.remove(1);
      const afterDelete = service.getAll().length;
      expect(afterDelete).toBeLessThan(beforDelete);
    });
    it('should throw 404 error', () => {
      try {
        service.remove(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });

  describe('create', () => {
    it('should be creat a Moive', () => {
      const beforeCreate = service.getAll().length;
      service.create({
        title: '범죄도시',
        genres: ['액션'],
        year: 2022,
      });
      const afterCreate = service.getAll().length;
      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update', () => {
    it('should be update a Moive Element', () => {
      service.create({
        title: '범죄도시',
        genres: ['action'],
        year: 2022,
      });
      service.update(1, {
        title: '범죄도시2',
        genres: ['action', 'comedy'],
      });
      const afterUpdate = service.getOne(1);
      expect(afterUpdate.title).toEqual('범죄도시2');
      expect(afterUpdate.genres).toEqual(['action', 'comedy']);
    });
    it('should throw 404 error', () => {
      try {
        service.update(999, {});
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('Movie with ID 999 not found.');
      }
    });
  });
});
