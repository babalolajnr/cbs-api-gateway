import { Injectable, NestMiddleware } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';

@Injectable()
export class FineractProxyMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const proxy = createProxyMiddleware({
      target: 'https://theprimetic.com/', // Replace with the actual Apache Fineract URL
      changeOrigin: true,
      pathRewrite: {
        // '^/fineract': '', // Remove '/fineract' from the path
        '^/gateway': '', // Remove '/fineract' from the path
      },
    });

    return proxy(req, res, next);
  }
}
