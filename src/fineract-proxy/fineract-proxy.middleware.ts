import { Injectable, NestMiddleware } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
export class FineractProxyMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const proxy = createProxyMiddleware({
      target: 'https://143.110.166.125:8443/', // Replace with the actual Apache Fineract URL
      changeOrigin: true,
      pathRewrite: {
        '^/gateway': '/fineract-provider/api/v1/v1/',
      },
      secure: false,
    });

    return proxy(req, res, next);
  }
}
