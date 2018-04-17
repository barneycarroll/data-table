import m from 'mithril'

m.mount(document.documentElement, {
  view: () => [
    m('head',
      m('title', 'Data table'),
    ),

    m('body.sans-serif',
      m('h1', 'A navigable data table UI'),
    )
  ]
})
