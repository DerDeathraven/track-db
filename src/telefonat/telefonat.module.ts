import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'

import {TelefonatController} from './telefonat.controller';
import {TelefonatService} from './telefonat.service';
import {TelfonatSchema} from './telefonat.const'
@Module({
	imports: [MongooseModule.forFeature([{name: 'Telefonat', schema: TelfonatSchema}])],
	controllers: [TelefonatController],
	providers: [TelefonatService],
})

export class TelefonatModule{}