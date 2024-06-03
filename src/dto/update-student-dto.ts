import { PartialType } from "@nestjs/mapped-types";
import { CreateStudentDto } from "./create-studebnt.dts";

export class UpdateStudentDto extends PartialType(CreateStudentDto){}