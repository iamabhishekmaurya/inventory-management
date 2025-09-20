import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BrandRequest } from 'src/common/dto/request/itemBrand.request';
import { ItemBrand } from 'src/common/entity/itemBrand.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemBrandService {

    constructor(
        @InjectRepository(ItemBrand)
        private readonly itemBrandRepo: Repository<ItemBrand>,
    ) { }

    createBrandType(itemBrandRequest: BrandRequest) {
        let itemBrand = new ItemBrand();
        itemBrand.brandName = itemBrandRequest?.brandName;
        itemBrand.itemTypeId = itemBrandRequest?.itemTypeId;
        itemBrand.status = itemBrandRequest?.status
        itemBrand.createdAt = new Date();
        return this.itemBrandRepo.save(itemBrand);
    }

    getAllBrandType() {
        return this.itemBrandRepo.find();
    }

    getAllBrandTypeItemTypeId(itemTypeId: number) {
        return this.itemBrandRepo.find({ where: { itemTypeId: itemTypeId } });
    }

    getAllActiveBrandType() {
        return this.itemBrandRepo.find({ where: { status: true } });
    }

    getAllActiveBrandTypeByItemTypeId(itemTypeId: number) {
        return this.itemBrandRepo.find({ where: { status: true, itemTypeId: itemTypeId } });
    }

    updateBrandType(brandTypeRequest: BrandRequest) {
        return this.itemBrandRepo.update(brandTypeRequest.id, {
            brandName: brandTypeRequest?.brandName, status: brandTypeRequest?.status
        })
    }
}
