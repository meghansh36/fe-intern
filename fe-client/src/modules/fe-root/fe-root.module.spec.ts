import { FeRootModule } from './fe-root.module';

describe('FeRootModule', () => {
  let feRootModule: FeRootModule;

  beforeEach(() => {
    feRootModule = new FeRootModule();
  });

  it('should create an instance', () => {
    expect(feRootModule).toBeTruthy();
  });
});
