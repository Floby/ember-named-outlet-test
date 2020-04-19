import Route from '@ember/routing/route';

export default class ElementsElementRoute extends Route {
  model (params) {
    return {
      type: 'element',
      id: params.element_id
    }
  }

  renderTemplate () {
    this.render()
    this.render('elements/focus', {
      into: 'elements',
      outlet: 'focus'
    })
    this.render('elements/nav', {
      into: 'elements',
      outlet: 'workspace-nav'
    })
  }

  redirect () {
    this.transitionTo('elements.element.task')
  }
}
