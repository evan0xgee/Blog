import { ArticleDetailModule } from './article-detail.module';

describe('ArticleDetailModule', () => {
  let articleDetailModule: ArticleDetailModule;

  beforeEach(() => {
    articleDetailModule = new ArticleDetailModule();
  });

  it('should create an instance', () => {
    expect(articleDetailModule).toBeTruthy();
  });
});
