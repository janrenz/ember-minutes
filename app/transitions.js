export default function() {

  var duration = 450;
  var duration_short = 250;
  this.transition(
    this.fromRoute('index'),
    this.toRoute('todo.show'),
    this.use('explode', {
      matchBy: 'data-speaker-id',
      use: ['flyTo', { duration } ]
    }, {
      matchBy: 'nav-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-speaker-id',
      use: ['flyTo', { duration_short } ]
    }, {
      matchBy: 'nav-id',
      use: ['flyTo', { duration_short } ]
    }, {
      use: ['toRight', { duration_short } ]
    })
  );

  this.transition(
    this.childOf('.speaker-icons'),
    this.use('explode', {
      matchBy: 'data-speaker-id',
      use: ['flyTo', { duration, easing: [250, 15] } ]
    })
  );

  this.transition(
    this.inHelper('liquid-if'),
    this.toModel(true),
    this.use('toUp'),
    this.reverse('toDown')
  );
}
