import { IsBoolean, IsDecimal, IsNotEmpty, IsNumber } from "class-validator";

export class QuantityRequest {
    @IsNumber()
    id: number
    @IsNotEmpty()
    @IsNumber()
    itemId: number
    @IsBoolean()
    status: boolean
    @IsNotEmpty()
    @IsNumber()
    quantity: number;
    @IsNumber()
    quantityRemains: number;
    @IsNotEmpty()
    @IsNumber()
    inventoryId: number;
    @IsNotEmpty()
    @IsDecimal()
    purchasePrice: number;
}