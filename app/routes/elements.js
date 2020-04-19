import Route from '@ember/routing/route';

export default class ElementsRoute extends Route {
  model () {
    const elements = []
    for (var i = 0; i < 10; ++i) {
      elements.push({
        id: i
      })
    }
    return elements
  }
}
