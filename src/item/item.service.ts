import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemRequest } from 'src/common/dto/request/item.request';
import { Item } from 'src/common/entity/item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item)
        private readonly itemRepo: Repository<Item>
    ) { }
    createItem(itemRequest: ItemRequest) {
        let item = new Item();
        item.itemName = itemRequest?.itemName;
        item.itemBrandId = itemRequest?.itemBrandId;
        item.status = itemRequest?.status;
        item.createdAt = new Date();
        return this.itemRepo.save(item);
    }
    getAllItem() {
        return this.itemRepo.find();
    }
    getAllItemItemBrandId(itemBrandId: number) {
        return this.itemRepo.find({ where: { itemBrandId: itemBrandId } })
    }
    getAllActiveItem() {
        return this.itemRepo.find({ where: { status: true } })
    }
    getAllActiveItemByItemBrandId(itemBrandId: number) {
        return this.itemRepo.find({ where: { status: true, itemBrandId: itemBrandId } })
    }
    updateItem(itemRequest: ItemRequest) {
        return this.itemRepo.update(itemRequest.id, { itemName: itemRequest.itemName, status: itemRequest.status })
    }
}
