import { Module } from '@nestjs/common';
import { AppController } from './app.controller'
import {MongooseModule } from '@nestjs/mongoose' 
import { studentSchema } from './schema/studentSchema';
import { AppService } from './app.service';
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://rahul_r:rahul432@cluster0.ghxmxkj.mongodb.net/NestCrud?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'Student',schema:studentSchema}])
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
