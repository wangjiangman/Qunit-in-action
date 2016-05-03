// A custom assertion
QUnit.assert.mod2 = function( value, expected, message ) {
    var actual = value % 2;
    /**
     * [pushResult: Report the result of a custom assertion] 
     * @param  {[type]} plainObject    [description]
     * version: v2.0.0+
     */
    this.pushResult( {
        result: actual === expected,
        actual: actual,
        expected: expected,
        message: message
    } );
    // this.push(actual === expected,actual, expected,message);
};
 
QUnit.test( "mod2", function(assert) {
    assert.expect( 2 );
 
    assert.mod2( 2, 0, "2 % 2 == 0" );
    assert.mod2( 3, 1, "3 % 2 == 1" );
});