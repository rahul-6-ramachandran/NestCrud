import { IsNotEmpty, IsNumber, IsString, MaxLength, maxLength } from "class-validator";


export class CreateStudentDto{
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name : String

    @IsNumber()
    @IsNotEmpty()
    readonly rollNumber : Number

    @IsNotEmpty()
    @IsNumber()
    readonly class : Number

    @IsNotEmpty()
    @IsString()
    @MaxLength(1)
    readonly std : String

    @IsNotEmpty()
    @IsString()
    readonly gender : String

    @IsNotEmpty()
    @IsNumber()
    readonly mark : Number

}