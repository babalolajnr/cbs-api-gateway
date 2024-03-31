import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { HttpModule } from '@nestjs/axios';
import { GatewayController } from './gateway.controller';
import { FineractProxyMiddleware } from '../fineract-proxy/fineract-proxy.middleware';

@Module({
  providers: [GatewayService],
  imports: [HttpModule],
  controllers: [GatewayController],
})
export class GatewayModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FineractProxyMiddleware).forRoutes(GatewayController);
  }
}
