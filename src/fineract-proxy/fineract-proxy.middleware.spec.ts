import { FineractProxyMiddleware } from './fineract-proxy.middleware';

describe('FineractProxyMiddleware', () => {
  it('should be defined', () => {
    expect(new FineractProxyMiddleware()).toBeDefined();
  });
});
