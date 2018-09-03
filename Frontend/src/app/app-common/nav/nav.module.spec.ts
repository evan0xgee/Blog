import { NavModule } from './nav.module';

describe('NavModule', () => {
  let navModule: NavModule;

  beforeEach(() => {
    navModule = new NavModule();
  });

  it('should create an instance', () => {
    expect(navModule).toBeTruthy();
  });
});
