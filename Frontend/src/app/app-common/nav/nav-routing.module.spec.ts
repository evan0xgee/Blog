import { NavRoutingModule } from './nav-routing.module';

describe('NavRoutingModule', () => {
  let navRoutingModule: NavRoutingModule;

  beforeEach(() => {
    navRoutingModule = new NavRoutingModule();
  });

  it('should create an instance', () => {
    expect(navRoutingModule).toBeTruthy();
  });
});
