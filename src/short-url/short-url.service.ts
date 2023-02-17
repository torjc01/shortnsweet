import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShortUrlDto } from './dto/create-short-url.dto';
import { UpdateShortUrlDto } from './dto/update-short-url.dto';
import { ShortUrl } from './entities/short-url.entity';

var crypto = require("crypto");  

@Injectable()
export class ShortUrlService {

  constructor(@InjectRepository(ShortUrl)
    private shortUrlRepository: Repository<ShortUrl>
  ){}

  create(createShortUrlDto: CreateShortUrlDto) {
    createShortUrlDto.uniqueId = this.generateCode();
    return this.shortUrlRepository.save(createShortUrlDto);    //return 'This action adds a new shortUrl';
  }

  findAll() {
    return this.shortUrlRepository.find(); 
    // return `This action returns all shortUrl`;
  }

  findOne(id: number) {
    const shortUrl = this.shortUrlRepository.findOneBy({id}); 
    
    this.generateCode(); 

    if (!shortUrl){
      throw new NotFoundException(`Short-url  ${id} not found.`);
    }
    return  shortUrl;
    return `This action returns a #${id} shortUrl`;
  }

  update(id: number, updateShortUrlDto: UpdateShortUrlDto) {
    return `This action updates a #${id} shortUrl`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortUrl`;
  }

  generateCode(): string{
    var id = crypto.randomBytes(6).toString('base64');
    console.log(id);
    return id;
  }
}
