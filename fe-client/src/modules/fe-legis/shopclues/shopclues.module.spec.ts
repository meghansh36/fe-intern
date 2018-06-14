import { ShopcluesModule } from './shopclues.module';

describe('ShopcluesModule', () => {
  let shopcluesModule: ShopcluesModule;

  beforeEach(() => {
    shopcluesModule = new ShopcluesModule();
  });

  it('should create an instance', () => {
    expect(shopcluesModule).toBeTruthy();
  });
});
