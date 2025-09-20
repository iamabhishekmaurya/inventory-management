import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ItemBrandService } from './item_brand.service';
import { BrandRequest } from 'src/common/dto/request/itemBrand.request';

@Controller('brand')
export class ItemBrandController {
    constructor(private readonly itemBrandService: ItemBrandService) { }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createBrandType(@Body() brandType: BrandRequest) {
        return this.itemBrandService.createBrandType(brandType);
    }

    @Get()
    getAllBrandType() {
        return this.itemBrandService.getAllBrandType();
    }

    @Get(':itemTypeId')
    getAllBrandTypeItemTypeId(@Param('itemTypeId') itemTypeId: number) {
        return this.itemBrandService.getAllBrandTypeItemTypeId(itemTypeId);
    }

    @Get('active')
    getAllActiveBrandType() {
        return this.itemBrandService.getAllActiveBrandType();
    }

    @Get('active/:itemTypeId')
    getAllActiveBrandTypeByItemTypeId(@Param('itemTypeId') itemTypeId: number) {
        return this.itemBrandService.getAllActiveBrandTypeByItemTypeId(itemTypeId);
    }

    @Put()
    updateBrandType(@Body() brandTypeRequest: BrandRequest) {
        this.itemBrandService.updateBrandType(brandTypeRequest);
    }
}
