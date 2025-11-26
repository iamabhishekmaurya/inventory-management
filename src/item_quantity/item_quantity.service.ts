import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuantityRequest } from 'src/common/dto/request/ItemQuantity.request';
import { ItemQuantity } from 'src/common/entity/itemQuantity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemQuantityService {
    constructor(
        @InjectRepository(ItemQuantity)
        private readonly itemQuantityRepo: Repository<ItemQuantity>
    ) { }
    createItemQuantity(itemQuantityRequest: QuantityRequest) {
        let itemQuantity = new ItemQuantity();
        itemQuantity.itemId = itemQuantityRequest?.itemId
        itemQuantity.inventoryId = itemQuantityRequest?.inventoryId
        itemQuantity.purchasePrice = itemQuantityRequest?.purchasePrice
        itemQuantity.status = itemQuantityRequest?.status
        itemQuantity.quantity = itemQuantityRequest?.quantity
        itemQuantity.lotNumber = itemQuantityRequest?.lotNumber
        itemQuantity.expiryDate = itemQuantityRequest?.expiryDate ? new Date(itemQuantityRequest.expiryDate) : null
        itemQuantity.createdAt = new Date()
        return this.itemQuantityRepo.save(itemQuantity);

    }
    getAllItemQuantity() {
        return this.itemQuantityRepo.find();
    }
    getAllItemQuantityItemId(itemId: number) {
        return this.itemQuantityRepo.find({ where: { itemId: itemId } });
    }
    getAllActiveItemQuantity() {
        return this.itemQuantityRepo.find({ where: { status: true } });
    }
    getAllActiveItemQuantityByItemId(itemId: number) {
        return this.itemQuantityRepo.find({ where: { status: true, itemId: itemId } });
    }
    updateItemQuantity(itemQuantityRequest: QuantityRequest) {
        return this.itemQuantityRepo.update(itemQuantityRequest.id, {
            purchasePrice: itemQuantityRequest.purchasePrice,
            status: itemQuantityRequest.status,
            quantity: itemQuantityRequest.quantity,
            lotNumber: itemQuantityRequest.lotNumber,
            expiryDate: itemQuantityRequest.expiryDate ? new Date(itemQuantityRequest.expiryDate) : null,
        })
    }
}
