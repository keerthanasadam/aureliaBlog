export class App {
  constructor() {
    this.message = 'Hello World!';
  }

  configureRouter(config, router) {
    config.title = "Keerthana Blog";
    config.map([
      { route: "", name: "post", moduleId: "./posts/index" }
    ])
  }
}
