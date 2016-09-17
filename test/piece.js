(function(QUnit) {
	
    QUnit.module('BGP.Piece');

    QUnit.test('Piece', function(assert) {
        assert.expect(4);
        var piece = new BGP.Piece();
        assert.ok(piece instanceof BGP.Piece, '`piece` is an instance of BGP.Piece');
        assert.equal(piece.get('name'), 'new piece', 'piece instance is called `new piece`');
        assert.equal(piece.get('color'), 'black', 'piece is a black');
        assert.equal(piece.get('movement'), 1, 'piece can move 1 place');
    });

})(QUnit);