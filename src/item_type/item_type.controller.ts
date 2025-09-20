import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { TypeRequest } from 'src/common/dto/request/itemType.request';
import { ItemTypeService } from './item_type.service';

@Controller('item-type')
export class ItemTypeController {
    constructor(private readonly itemTypeService: ItemTypeService) { }
    @Post()
    createItemType(@Body() itemType: TypeRequest) {
        return this.itemTypeService.createItemType(itemType);
    }

    @Get()
    getAllItemType() {
        return this.itemTypeService.getAllItemType();
    }

    @Get('active')
    getAllActiveItemType() {
        return this.itemTypeService.getAllActiveItemType();
    }

    @Put()
    updateItemType(@Body() itemTypeRequest: TypeRequest) {
        this.itemTypeService.updateItemType(itemTypeRequest);
    }
}
