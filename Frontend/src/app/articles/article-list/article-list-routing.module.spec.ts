import { ArticleListRoutingModule } from './article-list-routing.module';

describe('ArticleListRoutingModule', () => {
  let articleListRoutingModule: ArticleListRoutingModule;

  beforeEach(() => {
    articleListRoutingModule = new ArticleListRoutingModule();
  });

  it('should create an instance', () => {
    expect(articleListRoutingModule).toBeTruthy();
  });
});
