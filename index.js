const list =
  React.createElement('div', { class: 'me' },
  React.createElement('h1', {}, 'Liz'),
  React.createElement('p', {}, "Learnin' some cool stuff"),
  React.createElement('ul', { class: 'me_interests' },
  [
    React.createElement('li', {}, 'Hiking'),
    React.createElement('li', {}, 'Yoga and smoothies'),
    React.createElement('li', {}, 'MochiMochiMochi'),
    React.createElement('li', {}, 'Drawing stick figures in awkward situations')
  ]
));

ReactDOM.render(list, document.getElementById('main'));
