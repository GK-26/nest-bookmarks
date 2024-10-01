import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources: {
                db: {
                    url: "mysql://root:password123@localhost:3307/nest?schema=public"
                }
            }
        })
    }
}
