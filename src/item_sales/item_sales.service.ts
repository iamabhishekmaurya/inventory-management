import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleRequest } from 'src/common/dto/request/sale.request';
import { ItemSales } from 'src/common/entity/itemSales.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemSalesService {
    constructor(
        @InjectRepository(ItemSales)
        private readonly itemSalesRepo: Repository<ItemSales>
    ) { }

    createSale(saleRequest: SaleRequest) {
        let sale = new ItemSales();
        sale.itemQuantityId = saleRequest.itemQuantityId;
        sale.inventoryId = saleRequest.inventoryId;
        sale.status = saleRequest.status;
        sale.salePrice = saleRequest.salePrice;
        sale.createdAt = new Date();
        sale.updatedAt = new Date();
        return this.itemSalesRepo.save(sale);
    }

    getAllSales() {
        return this.itemSalesRepo.find();
    }

    getAllSalesByQuantityId(quantityId: number) {
        return this.itemSalesRepo.find({ where: { itemQuantityId: quantityId } });
    }

    getAllActiveSales() {
        return this.itemSalesRepo.find({ where: { status: true } });
    }

    getAllActiveSalesByQuantityId(quantityId: number) {
        return this.itemSalesRepo.find({ where: { itemQuantityId: quantityId, status: true } });
    }

    updateSale(saleRequest: SaleRequest) {
        return this.itemSalesRepo.update(saleRequest.id, { inventoryId: saleRequest.inventoryId, salePrice: saleRequest.salePrice, status: saleRequest.status, updatedAt: new Date() });
    }
}
