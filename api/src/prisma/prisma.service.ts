import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url:
            process.env.NODE_ENV === 'development'
              ? config.get('DATABASE_URL_DEV')
              : config.get('DATABASE_URL'),
        },
      },
    });
  }
}
