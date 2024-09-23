import { ResponseData } from './responseHelper'
import BusinessEntity from '../models/businessEntityModel'

export interface BusinessEntityListResponse extends ResponseData{
    data: BusinessEntity [] | null;
} 

export interface BusinessEntityResponse extends ResponseData {
    data: BusinessEntity | null
}

