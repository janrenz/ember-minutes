export default function() {

  var duration = 350;
  var duration_short = 250;

  this.transition(
    this.fromRoute('index'),
    this.toRoute('todo.show'),
    this.use('explode', {
      matchBy: 'data-speaker-id',
      use: ['webFlyTo', { duration } ]
    }, {
      matchBy: 'nav-id',
      use: ['webFlyTo', { duration } ]
    }, {
      use: ['toDown', { duration } ]
    }),
    this.reverse('explode', {
      matchBy: 'nav-id',
      use: ['webFlyTo', { duration_short } ]
    }, {
      matchBy: 'data-speaker-id',
      use: ['webFlyTo', { duration_short } ]
    }, {
      use: ['toUp', { duration_short } ]
    })
  );

}
