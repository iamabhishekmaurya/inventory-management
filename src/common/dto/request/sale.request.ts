import { IsBoolean, IsDecimal, IsNotEmpty, IsNumber } from "class-validator";

export class SaleRequest {
    @IsNumber()
    id: number
    @IsNotEmpty()
    @IsNumber()
    itemQuantityId: number
    @IsBoolean()
    status: boolean
    @IsNotEmpty()
    @IsNumber()
    inventoryId: number;
    @IsNotEmpty()
    @IsDecimal()
    salePrice: number;
}