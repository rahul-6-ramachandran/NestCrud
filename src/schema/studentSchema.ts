import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class Student{
    @Prop()
    name: String
    @Prop()
    rollNumber : Number
    @Prop()
    class : Number
    @Prop()
    gender : String
    @Prop()
     mark: Number;
    @Prop()
    std : String
}

export const studentSchema = SchemaFactory.createForClass(Student) 