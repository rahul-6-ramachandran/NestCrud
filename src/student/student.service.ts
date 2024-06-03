import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Interface } from 'readline';
import { CreateStudentDto } from 'src/dto/create-studebnt.dts';
import { UpdateStudentDto } from 'src/dto/update-student-dto';
import { IStudent } from 'src/interface/student.interface';

@Injectable()
export class StudentService {
    constructor(@InjectModel('Student') private studentModel:Model<IStudent>){

    }

    // Creating new student
    async createStudent(createStudentDto : CreateStudentDto):Promise<IStudent>{
        const newStudent = await new this.studentModel(createStudentDto)
        return newStudent.save()
    }
    
    // get all students
    async getAllStudent():Promise<IStudent[]>{
        const studentData = await this.studentModel.find()
        if(!studentData || studentData.length == 0){
            throw new NotFoundException("There are no students")
        }
        return studentData
    }

    // get a specific student
    async getSpecificStudent(std_id: string):Promise<IStudent>{
        const existingStudent = await this.studentModel.findById(std_id)
        if(!existingStudent){
            throw new NotFoundException(`Student #${std_id} not found`)
        }
        return existingStudent
    }

    // delete a student by id

    async deleteStudent(std_id:string):Promise<IStudent>{
       const deletedStudent = await this.studentModel.findByIdAndDelete(std_id)
       if(!deletedStudent){
        throw new NotFoundException("Student not found")
       }
       return deletedStudent
    }

    // Updating student using id

    async updateStudent(std_id : string, updateStudentDto:UpdateStudentDto) : Promise<IStudent>{
        const updatedStudent = await this.studentModel.findByIdAndUpdate(std_id,updateStudentDto,{new:true})
        if(!updatedStudent){
            throw new NotFoundException('Student Not Found')
        }
        return updatedStudent
    }
}
