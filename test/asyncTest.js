QUnit.module("Async");

QUnit.test("settimeout test", function(assert) {
    assert.expect(1);
    var done = assert.async();
    setTimeout(function() {
        ok(true, "3 seconds passed.");
        done();
    }, 3000);
});

QUnit.test("two async calls", function(assert) {
    assert.expect(2);

    var done1 = assert.async();
    var done2 = assert.async();
    setTimeout(function() {
        assert.ok(true, "test resumed from async operation 1");
        done1();
    }, 1000);
    setTimeout(function() {
        assert.ok(true, "test resumed from async operation 2");
        done2();
    }, 1000);
});

QUnit.test("multiple call done()", function(assert) {
    assert.expect(3);
    var done = assert.async(3);

    setTimeout(function() {
        assert.ok(true, "first call done.");
        done();
    }, 1000);

    setTimeout(function() {
        assert.ok(true, "second call done.");
        done();
    }, 1000);

    setTimeout(function() {
        assert.ok(true, "third call done.");
        done();
    }, 1000);
});

QUnit.test("ajax test", function(assert) {
    /*测试回调的时候，无论是不是异步，我们都不能确定回调会在某些时候被真正调用了。为了应付这种状况，我们可以使用expect(), 定义一个测试中我们期望的判断个数。这样就可以避免本应出现两个判别结果的，结果一个通过后就停止的情况。*/
    assert.expect(1);
    var done = assert.async();
    $.getJSON("./async.json", function(result) {
        deepEqual(result.name, "wangjiangman");
        done();
    });
});
