export default function() {

  var duration = 350;

  this.transition(
    this.fromRoute('index'),
    this.toRoute('todo.show'),
    this.use('explode', {
      matchBy: 'data-speaker-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toLeft', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'data-speaker-id',
      use: ['flyTo', { duration } ]
    }, {
      use: ['toRight', { duration } ]
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
