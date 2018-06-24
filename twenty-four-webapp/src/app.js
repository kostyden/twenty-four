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
        moduleId: `home`,
        nav: true,
        title: `Home`
      },
      {
        route: [`one`],
        name: `one`,
        moduleId: `one`,
        nav: true,
        title: `One`
      },
      {
        route: [`two`],
        name: `two`,
        moduleId: `two`,
        nav: true,
        title: `Two`
      }
    ]);
  }
}
