import { ProjectsRoutingModule } from './projects-routing.module';

describe('ProjectsRoutingModule', () => {
  let projectsRoutingModule: ProjectsRoutingModule;

  beforeEach(() => {
    projectsRoutingModule = new ProjectsRoutingModule();
  });

  it('should create an instance', () => {
    expect(projectsRoutingModule).toBeTruthy();
  });
});
