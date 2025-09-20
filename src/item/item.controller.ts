import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ItemRequest } from 'src/common/dto/request/item.request';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
    constructor(private readonly itemService: ItemService) { }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createItem(@Body() itemRequest: ItemRequest) {
        return this.itemService.createItem(itemRequest);
    }

    @Get()
    getAllItem() {
        return this.itemService.getAllItem();
    }

    @Get(':itemBrandId')
    getAllItemItemBrandId(@Param('itemBrandId') itemBrandId: number) {
        return this.itemService.getAllItemItemBrandId(itemBrandId);
    }

    @Get('active')
    getAllActiveItem() {
        return this.itemService.getAllActiveItem();
    }

    @Get('active/:itemBrandId')
    getAllActiveItemByItemBrandId(@Param('itemBrandId') itemBrandId: number) {
        return this.itemService.getAllActiveItemByItemBrandId(itemBrandId);
    }

    @Put()
    updateItem(@Body() itemRequest: ItemRequest) {
        this.itemService.updateItem(itemRequest);
    }
}
