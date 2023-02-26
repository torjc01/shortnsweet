import { Injectable, Param, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShortUrl } from './short-url/entities/short-url.entity';
import { ShortUrlService } from './short-url/short-url.service';

@Injectable()
export class AppService {

  constructor(
    //@InjectRepository(ShortUrl)
    private readonly shortService: ShortUrlService,
  ){}

  getHello(): string {
    return "<h1>Welcome to Short'n'Sweet.</h1> <br> Você pode gerar o seu short URL se você tem um convite...";
  }

  async getUrlRedirect(@Param('uniqueId') uniqueId: string, @Res() response){

    try{
      let shortUrl = await this.shortService.findUnique(uniqueId);
      
      if(!shortUrl){
        console.log("Link nao encontrado; redirecionando para pagina de entrada"); 
        response.redirect("http://localhost:3000");
      }

      // Incrementa a quantidade de clicks recebidas pelo link
      shortUrl.numberClicks++; 
      this.shortService.update(shortUrl.id, shortUrl); 

      console.log(`[REDIR]: ${shortUrl.originalUrl}`); 
      response.redirect(shortUrl.originalUrl);
    } catch(error){
      console.log("CATCH: ", error);
    } 
  }
















  async getSomeShitUrlRedirect(@Param('uniqueId') uniqueId: string, @Res() response){

    try {
      let shortUrl = await this.shortService.findUnique(uniqueId);
      console.log(shortUrl);
      if (!shortUrl){
        console.log(`Nao localizado`); 
        response.redirect("http://localhost:3000/")
        return;
      }
    } catch (error) {
      
    }
    
    /*try {
      let shortUrl = await this.shortService.findUnique(uniqueId); 

      if(!shortUrl){
        console.log(`[NF]: a url ${uniqueId} nao foi encontrada`); 
        throw new HttpException(`A url ${uniqueId} nao foi encontrada`, HttpStatus.NOT_FOUND);
      }
      // URL encontrada, redireciona
      console.log("[REDIR]: ", shortUrl.originalUrl); 
      response.redirect(HttpStatus.PERMANENT_REDIRECT, shortUrl.originalUrl);
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    */


    /*
    try {
      let shortUrl = await this.shortService.findUnique(uniqueId);
      console.log("[REDIR]: ", shortUrl.originalUrl); 
      response.redirect(HttpStatus.PERMANENT_REDIRECT, shortUrl.originalUrl);
    } catch (error) {
      console.log(`[NOREDIR]: ${uniqueId} nao localizado`);
      throw new HttpException(`Chave duplicada: ${uniqueId}`, HttpStatus.CONFLICT); 
      //response.redirect(HttpStatus.PERMANENT_REDIRECT, "http://localhost:3000/");
    }*/
  } 
}
