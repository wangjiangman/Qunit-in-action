QUnit.module("getSetDomData", {
    beforeEach: function() {
        var $div,
            $block0,
            $block1,
            $block2;

        $("#qunit-fixture").html('<form id="container"></form>');
        $div = $('<div id="div0"></div><div id="div1"></div><div id="div2"></div>').appendTo('#qunit-fixture #container');

        // for basic test
        $block0 = $('<input type="radio" name="tRadio" value="true"><input type="radio" name="tRadio" value="false"><input type="checkbox" name="tCheckbox"><input type="button" name="tButton"><input type="password" name="tPassword"><input type="text" name="tText"><span id="textboxsMAC" data-bind="tBind"></span>').appendTo("#div0");

        // for two level test
        $block1 = $('<input type="radio" name="div1_tRadio" value="true"><input type="radio" name="div1_tRadio" value="false"><input type="checkbox" name="div1_tCheckbox"><input type="button" name="div1_tButton"><input type="password" name="div1_tPassword"><input type="text" name="div1_tText"><span id="textboxsMAC" data-bind="div1_tBind"></span>').appendTo("#div1");
        $block2 = $('<input type="radio" name="div2_tRadio" value="true"><input type="radio" name="div2_tRadio" value="false"><input type="checkbox" name="div2_tCheckbox"><input type="button" name="div2_tButton"><input type="password" name="div2_tPassword"><input type="text" name="div2_tText"><span data-bind="div2_tBind"></span>').appendTo("#div2");
    }
});

QUnit.test("basicDomData", function() {
    //Set DOM data test
    var inputObj = {
        tRadio: "false",
        tCheckbox: "1",
        tPassword: "12345678",
        tText: "Fiona",
        tBind: "12:12:12:12:12:12"
    };
    $("#div0").inputData(inputObj);
    deepEqual($('input[name="tRadio"]:checked').val(), "false", "Set radio data ok.");
    deepEqual($('input[name="tCheckbox"]').prop("checked"), true, "Set checkbox data ok.");
    deepEqual($('input[name="tPassword"]').val(), "12345678", "Set password data ok.");
    deepEqual($('input[name="tText"]').val(), "Fiona", "Set text data ok.");
    deepEqual($('[data-bind="tBind"]').text(), "12:12:12:12:12:12", "Set mac ok.");

    //Get DOM data test
    var formData = $("#div0").getFormData();
    deepEqual(formData.tRadio, "false", "Get radio data ok.");
    deepEqual(formData.tCheckbox, "1", "Get checkbox data ok.");
    deepEqual(formData.tPassword, "12345678", "Get password data ok.");
    deepEqual(formData.tText, "Fiona", "Get text data ok.");
    deepEqual(formData.tBind, "12:12:12:12:12:12", "Get mac ok.");

});

QUnit.test("twoLevelDomData", function() {
    //Set two level DOM data test
    var inputObj = {
        div1: {
            tRadio: "false",
            tCheckbox: "0",
            tPassword: "12345678",
            tText: "Fiona",
            tBind: "12:12:12:12:12:12"
        },
        div2: {
            tRadio: "true",
            tCheckbox: "1",
            tPassword: "11111111",
            tText: "Johnny",
            tBind: "18:18:18:18:18:18"
        }
    };
    $("#container").inputData(inputObj);
    deepEqual($('input[name="div1_tRadio"]:checked').val(), "false", "Set div1 radio data ok.");
    deepEqual($('input[name="div1_tCheckbox"]').prop("checked"), false, "Set div1 checkbox data ok.");
    deepEqual($('input[name="div1_tPassword"]').val(), "12345678", "Set div1 password data ok.");
    deepEqual($('input[name="div1_tText"]').val(), "Fiona", "Set div1 text data ok.");
    deepEqual($('[data-bind="div1_tBind"]').text(), "12:12:12:12:12:12", "Set div1 mac ok.");
    deepEqual($('input[name="div2_tRadio"]:checked').val(), "true", "Set div2 radio data ok.");
    deepEqual($('input[name="div2_tCheckbox"]').prop("checked"), true, "Set div2 checkbox data ok.");
    deepEqual($('input[name="div2_tPassword"]').val(), "11111111", "Set div2 password data ok.");
    deepEqual($('input[name="div2_tText"]').val(), "Johnny", "Set div2 text data ok.");
    deepEqual($('[data-bind="div2_tBind"]').text(), "18:18:18:18:18:18", "Set div2 mac ok.");

    //Get two level DOM data test
    var formData = $("#container").getFormData();
    deepEqual(formData.div1_tRadio, "false", "Get div1 radio data ok.");
    deepEqual(formData.div1_tCheckbox, "0", "Get div1 checkbox data ok.");
    deepEqual(formData.div1_tPassword, "12345678", "Get div1 password data ok.");
    deepEqual(formData.div1_tText, "Fiona", "Get div1 text data ok.");
    deepEqual(formData.div1_tBind, "12:12:12:12:12:12", "Get div1 mac ok.");
    deepEqual(formData.div2_tRadio, "true", "Get div2 radio data ok.");
    deepEqual(formData.div2_tCheckbox, "1", "Get div2 checkbox data ok.");
    deepEqual(formData.div2_tPassword, "11111111", "Get div2 password data ok.");
    deepEqual(formData.div2_tText, "Johnny", "Get div2 text data ok.");
    deepEqual(formData.div2_tBind, "18:18:18:18:18:18", "Get div2 mac ok.");
});
