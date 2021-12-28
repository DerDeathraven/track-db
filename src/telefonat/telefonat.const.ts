import * as mongoose from 'mongoose'

export const TelfonatSchema = new mongoose.Schema({
	dauerStunden: {type: Number, required: true},
	dauerMinuten: {type: Number, required: true},
	Date:		  {type: String, required: true},
	User:		  {type: String, required: true},
	tel:		  {type: String, required: false}

})

export interface Telefonat {
	dauerStunden: number;
	dauerMinuten: number;
	Date: any;
	User:string;
	tel:string;
	
}

