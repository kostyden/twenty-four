export class App {
  constructor() {
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = `Twenty-Four`;

    config.map([
      {
        route: [``, `home`],
        name: `home`,
        moduleId: PLATFORM.moduleName(`home`),
        nav: true,
        title: `Home`
      },
      {
        route: [`one`],
        name: `one`,
        moduleId: PLATFORM.moduleName(`one`),
        nav: true,
        title: `One`
      },
      {
        route: [`two`],
        name: `two`,
        moduleId: PLATFORM.moduleName(`two`),
        nav: true,
        title: `Two`
      }
    ]);
  }
}
