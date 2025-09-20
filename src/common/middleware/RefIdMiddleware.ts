// refid.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RefIdMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void) {
        req.refId = uuidv4();
        next();
    }
}