import Route from '@ember/routing/route';

export default class ElementsElementTaskRoute extends Route {
  renderTemplate () {
    this.render()
    return
    this.render("elements/element/task", {
      outlet: 'workspace',
      into: 'elements'
    })
  }
}
