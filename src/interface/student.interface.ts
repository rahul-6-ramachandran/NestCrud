import {Document} from 'mongoose'
export interface IStudent extends Document{
    readonly  name : String
    readonly  class : Number
    readonly rollNumber : Number
    readonly gender : String
    readonly mark: Number;
    readonly std : String
}
