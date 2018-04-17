import m from 'mithril'

import model from './model'

m.mount(document.documentElement, {
  view: () => [
    m('head',
      m('title', 'Data table'),

      m('link[rel=stylesheet]', {
        href: '//unpkg.com/tachyons@4.9.1/css/tachyons.min.css',
      }),
    ),

    m('body.sans-serif.pa3',
      m('h1', 'A navigable data table UI'),

      m('ul',
        model.slice(0, 10).map(x =>
          m('li', JSON.stringify(x))
        ),
      ),
    )
  ]
})
