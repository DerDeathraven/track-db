import {Controller, Get, Post, Body,Param,Delete,Query} from '@nestjs/common';
import {TelefonatService} from './telefonat.service'

@Controller('telefonat')
export class TelefonatController {
	
	constructor(private readonly TeleService: TelefonatService) {
		
	}
@Post()
	insertTel(
	@Body('dauerStunden') dauerS:number,
	@Body('dauerMinuten') dauerM:number,
	@Body('Tel') tel: string,
	@Body('user') user: string,
		){
		
		this.TeleService.NewInsert(dauerS,dauerM,tel,user)
		}
@Get()
	async getAll(){
		const buffer = await this.TeleService.getAll()
		return buffer;
	}




}

