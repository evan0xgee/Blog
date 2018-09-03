import { ArticlesRoutingModule } from './articles-routing.module';

describe('ArticlesRoutingModule', () => {
  let articlesRoutingModule: ArticlesRoutingModule;

  beforeEach(() => {
    articlesRoutingModule = new ArticlesRoutingModule();
  });

  it('should create an instance', () => {
    expect(articlesRoutingModule).toBeTruthy();
  });
});
