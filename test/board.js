(function(QUnit) {
	
	QUnit.module('BGP.Board');

  QUnit.test('Board', function(assert) {
   	assert.expect(5);
    assert.ok(window.BGP, 'Found window.BGP');
    var BGP = window.BGP;
    var board = new BGP.Board();
    assert.ok(board instanceof BGP.Board, '`board` is an instance of BGP.Board');
    assert.equal(board.get('name'), 'new board', 'board instance is called `new board`');
    assert.equal(board.get('shape'), 'square', 'board is a square');
    assert.equal(board.get('places'), 9, 'board has 9 squares');
  });

})(QUnit);