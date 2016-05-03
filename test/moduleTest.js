var Money = function(options) {
    this.amount = options.amount || 0;
    this.template = options.template || "{symbol}{amount}";
    this.symbol = options.symbol || "$";
};
Money.prototype = {
    add: function(toAdd) {
        this.amount += toAdd;
    },
    toString: function() {
        return this.template
            .replace("{symbol}", this.symbol)
            .replace("{amount}", this.amount)
    }
};
Money.euro = function(amount) {
    return new Money({
        amount: amount,
        template: "{amount} {symbol}",
        symbol: "EUR"
    });
};

QUnit.module("Money", {
    beforeEach: function() {
        this.dollar = new Money({
            amount: 15.5
        });
        this.euro = Money.euro(14.5);
    },
    afterEach: function() {
        // 一般无甚作用
    }
});

QUnit.test("add", function() {
    equal(this.dollar.amount, 15.5);
    this.dollar.add(16.1)
    equal(this.dollar.amount, 31.6);
    /*this.euro.add(1.1)
    equal(this.euro.amount, 15.6);*/
});
QUnit.test("toString", function() {
    equal(this.dollar.toString(), "$15.5");
    equal(this.euro.toString(), "14.5 EUR");
});


// nested module
// priority： parent > child
// The beforeEach and afterEach callbacks on a nested module call will stack (LIFO - last in, first out) to the parent hooks.           
QUnit.module("grouped tests argument hooks", function(hooks) {
    hooks.beforeEach(function(assert) {
        assert.ok(true, "beforeEach called");
    });

    hooks.afterEach(function(assert) {
        assert.ok(true, "afterEach called");
    });

    QUnit.test("call hooks", function(assert) {
        assert.expect(2);
    });

    QUnit.module("stacked hooks", function(hooks) {

        // This will run after the parent module's beforeEach hook
        hooks.beforeEach(function(assert) {
            assert.ok(true, "nested beforeEach called");
        });

        // This will run before the parent module's afterEach
        hooks.afterEach(function(assert) {
            assert.ok(true, "nested afterEach called");
        });

        QUnit.test("call hooks", function(assert) {
            assert.expect(4);
        });
    });
});
