import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { QuantityRequest } from 'src/common/dto/request/ItemQuantity.request';
import { ItemQuantityService } from './item_quantity.service';

@Controller('quantity')
export class ItemQuantityController {
    constructor(private readonly itemQuantityService: ItemQuantityService) { }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createItemQuantity(@Body() itemQuantityRequest: QuantityRequest) {
        return this.itemQuantityService.createItemQuantity(itemQuantityRequest);
    }

    @Get()
    getAllItemQuantity() {
        return this.itemQuantityService.getAllItemQuantity();
    }

    @Get(':itemId')
    getAllItemQuantityItemId(@Param('itemId') itemId: number) {
        return this.itemQuantityService.getAllItemQuantityItemId(itemId);
    }

    @Get('active')
    getAllActiveItemQuantity() {
        return this.itemQuantityService.getAllActiveItemQuantity();
    }

    @Get('active/:itemId')
    getAllActiveItemQuantityByItemId(@Param('itemId') itemId: number) {
        return this.itemQuantityService.getAllActiveItemQuantityByItemId(itemId);
    }

    @Put()
    updateItemQuantity(@Body() itemQuantityRequest: QuantityRequest) {
        this.itemQuantityService.updateItemQuantity(itemQuantityRequest);
    }
}
