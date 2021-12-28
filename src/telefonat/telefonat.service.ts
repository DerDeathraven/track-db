import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Telefonat} from './telefonat.const'
import {Model} from 'mongoose'

@Injectable()

export class TelefonatService{
constructor(@InjectModel('Telefonat') private readonly TelefonatModel: Model<Telefonat>){}

	NewInsert(
		dauerS:number,
		dauerM:number,
		tel : string,
		user : string

		){
		
		
			const newCall = new this.TelefonatModel({
				dauerStunden: dauerS,
				dauerMinuten: dauerM,
				Date: new Date(),
				User: user,
				tel: tel

			});
		
		
		newCall.save()

	}
	async getAll(){
		const Telefonate = await this.TelefonatModel.find().exec();
		return Telefonate as Telefonat[];
	}
}
