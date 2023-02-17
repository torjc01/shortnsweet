import { Injectable, Param, Res } from '@nestjs/common';

@Injectable()
export class AppService {

  getHello(): string {
    return "<h1>Welcome to Short'n'Sweet.</h1> <br> Você pode gerar o seu short URL se você tem um convite...";
  }

  getUrlRedirect(@Param('id') id: string, @Res() response){
    let short = 'http://www.'+  id + '.com'; 
    console.log(short); 
    response.redirect(short);

    //console.log("Você está no lugar certo");
    //response.redirect("http://google.com");
  } 
  
}
