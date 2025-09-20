import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemType } from 'src/common/entity/itemType.entity';
import { TypeRequest } from 'src/common/dto/request/itemType.request';
import { Repository } from 'typeorm';

@Injectable()
export class ItemTypeService {

    constructor(
        @InjectRepository(ItemType)
        private readonly typeRepo: Repository<ItemType>,
    ) { }
    createItemType(itemTypeRequest: TypeRequest) {
        let itemType = new ItemType();
        itemType.type = itemTypeRequest.type;
        itemType.status = itemTypeRequest?.status
        itemType.createdAt = new Date();
        itemType.updatedAt = new Date();
        itemType.createdBy = "System"
        itemType.updatedBy = "System"
        return this.typeRepo.save(itemType);
    }

    getAllItemType() {
        return this.typeRepo.find();
    }
    getAllActiveItemType() {
        return this.typeRepo.find({ where: { status: true } });
    }

    async updateItemType(itemTypeRequest: TypeRequest) {
        return this.typeRepo.update(itemTypeRequest.id, { status: itemTypeRequest.status, type: itemTypeRequest.type, updatedAt: new Date() })
    }
}
