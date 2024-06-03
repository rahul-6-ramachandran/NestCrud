import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { StudentService } from './student.service';
import { get } from 'http';
import { CreateStudentDto } from 'src/dto/create-studebnt.dts';
import { response } from 'express';
import { UpdateStudentDto } from 'src/dto/update-student-dto';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService:StudentService){}
    @Post()
    async createStudent(@Res() response , @Body()CreateStudentDto:CreateStudentDto){
        try{
            const newStudent = await this.studentService.createStudent(CreateStudentDto)
            return response.status(HttpStatus.CREATED).json({
                message: "Student has been successfully created",
                newStudent
            })
        }catch(err){
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode:400,
                message : "Student not created",
                error : 'Bad Request'
            })
        }
    }

    @Get()
    async getStudents(@Res() response ){
        try {
            const getAllStudents = await this.studentService.getAllStudent()
            return response.status(HttpStatus.OK).json({
                message:"All Students Data founbd successfully",
                getAllStudents
            })
        } catch (error) {
            return response.status(error.status).json(error.response)
        }
    }

    @Put('/:id')
    async updateStudent(@Res() response, @Param('id') studentId : string ,@Body() UpdateStudentDto:UpdateStudentDto){
        try {
            const existingStudent = await this.studentService.updateStudent(studentId,UpdateStudentDto)
            return response.status(HttpStatus.OK).json({
                message:"Successfully updated students details",
                existingStudent
            })
        } catch (error) {
            return response.status(error.status).json({message:error.response})
        }
    }

    @Delete('/:id')
    async deleteStudents(@Res() response,@Param('id') studentId : string){
        try {
            const deleteStudents = await this.studentService.deleteStudent(studentId)
            return response.status(HttpStatus.OK).json({
                message:"Successfully deleted the student details",
                deleteStudents
            })
        } catch (error) {
            return response.status(error.status).json(error.response)
        }
    }

    @Get('/:id')
    async getSpecificStudent(@Res() response , @Param('id') studentId : string ){
       try {
        const getStudent = await this.studentService.getSpecificStudent(studentId)
        return response.status(HttpStatus.OK).json({
            message : "Student fetched successfully ",
            getStudent
        })
       } catch (error) {
        return response.status(error.status).json(error.response)
       }
    }
}
