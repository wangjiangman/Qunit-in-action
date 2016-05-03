// throws( block [, expected ] [, message ] )
/**
 * [ block ] Function to execute
 * [ expected ] Error Object (instance), 
 *              Error Function (constructor), 
 *              a RegExp that matches (or partially matches) the String representation, 
 *              or a callback Function that must return true to pass the assertion check.
 * [ message ] A short description of the assertion
 */

QUnit.test("throws", function(assert) {

    function CustomError(message) {
        this.message = message;
    }

    CustomError.prototype.toString = function() {
        return this.message;
    };

    /**
     * It is likely that,
     * try {
            throw "error"
        } catch (err) {
            alert(err == "error");  // true
        }
     */
    assert.throws(
        function() {
            throw "error"
        },
        "throws with just a message, not using the 'expected' argument"
    );

    /**
     * It is likely that,
     * try {
            throw new CustomError("some error description");
        } catch (err) {
            alert(err.toString().match(/description/)[0] === "description");  // true
        }
     */
    assert.throws(
        function() {
            throw new CustomError("some error description");
        },
        /description/,
        "raised error message contains 'description'"
    );

    /**
     * It is likely that,
     * try {
            throw new CustomError();
        } catch (err) {
            alert(err instanceof CustomError);  // true
        }
     */
    assert.throws(
        function() {
            throw new CustomError();
        },
        CustomError,
        "raised error is an instance of CustomError"
    );

    /**
     * It is likely that,
     * try {
            throw new CustomError("some error description");
        } catch (err) {
            var newObj = new CustomError("some error description");
            alert(err.toString() === newObj.toString());  // true
        }
     */
    assert.throws(
        function() {
            throw new CustomError("some error description");
        },
        new CustomError("some error description"),
        "raised error instance matches the CustomError instance"
    );

    /**
     * It is likely that,
     * try {
            throw new CustomError("some error description");
        } catch (err) {
            var newObj = new CustomError("some error description");
            alert(err.toString() === "some error description");  // true
        }
     */
    assert.throws(
        function() {
            throw new CustomError("some error description");
        },
        function(err) {
            return err.toString() === "some error description";
        },
        "raised error instance satisfies the callback function"
    );
});
