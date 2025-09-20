import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ItemSalesService } from './item_sales.service';
import { SaleRequest } from 'src/common/dto/request/sale.request';

@Controller('sales')
export class ItemSalesController {
    constructor(private readonly itemSaleService: ItemSalesService) { }
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createSale(@Body() saleRequest: SaleRequest) {
        return this.itemSaleService.createSale(saleRequest);
    }

    @Get()
    getAllSales() {
        return this.itemSaleService.getAllSales();
    }

    @Get(':quantityId')
    getAllSalesByQuantityId(@Param('quantityId') quantityId: number) {
        return this.itemSaleService.getAllSalesByQuantityId(quantityId);
    }

    @Get('active')
    getAllActiveSales() {
        return this.itemSaleService.getAllActiveSales();
    }

    @Get('active/:quantityId')
    getAllActiveSalesByQuantityId(@Param('quantityId') quantityId: number) {
        return this.itemSaleService.getAllActiveSalesByQuantityId(quantityId);
    }

    @Put()
    updateSale(@Body() saleRequest: SaleRequest) {
        this.itemSaleService.updateSale(saleRequest);
    }
}
