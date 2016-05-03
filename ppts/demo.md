title: 用Qunit做单元测试
speaker: 王江漫
url: https://github.com/wangjiangman/nodePPT
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: moon
usemathjax: yes

[slide]

# 用Qunit做前端单元测试
<small>演讲者：王江漫</small>

[slide data-transition="glue"]

## 何为单元测试？

----
* 功能：**验证一个模块或一段代码的执行效果是否和设计或预期一样** {:&.fadeIn}
* 适用于：逻辑性的代码(前端：**javascript** 服务器端：**nodejs**等)
* 不适用于：UI相关代码(样式处理，复杂的DOM处理等)
* 做单元测试的好处
    * 测试驱动开发(**TDD**)
    * 对于回归测试非常有用——判断重构的代码是否改变了原有的结果
    * 实现测试自动化
    * 提高测试覆盖率

[slide data-transition="newspaper"]

## 为什么选择Qunit
----
* **好用** 使用方便 {:&.rollIn}
* **够用** 测试功能完整
* **干净** 不需要依赖其它任何软件包或框架
* **用起来心情愉悦** 框架外观漂亮

[slide data-transition="earthquake"]

## 单元测试框架对比
### Qunit\Jasmine\JSTestDriver\Mocha
---
| Qunit | Jasmine | JSTestDriver | Mocha
:-------|:------|:-------|:--------
优点 |见之前介绍 | 语法简单明了 API丰富 | 用于eclipse {:.highlight} | 充满jeek感
缺点 | 对自动化支持不如Jasmine | 测试界面不美观 | | 用命令行进行测试

[slide data-transition="movie"]

## Qunit的安装
----
* npm下载 {:&.bounceIn}
    * npm install qunitjs
* CDN
    * 
    ```html
    <link rel="stylesheet" href="http://code.jquery.com/qunit/qunit-1.23.1.css" />
    ```
    * 
    ```html
    <script src="http://code.jquery.com/qunit/qunit-1.23.1.js"></script>
    ```

[slide data-transition="horizontal3d"]

# 此处应该来个Hello World！
----
* Organization {:&.rollIn}
* Planning
* Authoring
* Execution
* Reporting

[slide data-transition="vertical3d"]

# Qunit如何保证单元的独立性
----
* 特定的DOM {:&.fadeIn}
    * **#qunit-fixture**
    * 每个测试模块跑完之后，该节点内容都会被清空
* module模块 Qunit.module()
    * 测试结果会按模块组织
    * 模块以 Qunit.module()开始，以下一个 Qunit.module()结束
    * Example: **moduleTest.js**
[slide]
## 异步测试

----

<pre><code class="javascript">QUnit.test("settimeout test", function(assert) {
    assert.expect(1);
    var done = assert.async();
    setTimeout(function() {
        ok(true, "3 seconds passed.");
        done();
    }, 3000);
});
</code>
</pre>

**More Example: asyncTest.js**

[slide data-transition="zoomin"]

# 抛出异常断言
> assert.throws()

**Example: throws.js**

[slide data-transition="zoomout"]
## 已有的断言已经无法满足你，你可以:
----
**自定义断言 Example:custom.js**
<pre><code class="javascript"> 
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
</code></pre>

[slide data-transition="movie"]

## 调试工具
-----

* **Hide passed tests** {:&.rollIn}
    隐藏通过的测试
* **Check for Globals**
    在运行测试之前，QUnit会枚举window所有属性，然后与运行结束之后的window做比较，如果前后不一样
* **No try-catch**
    选中则意味着QUnit会在try-catch语句外运行回调，此时，如果测试出现异常，测试就会停止。
* **Module** 
    按模块组织用例
* **Filter**
    查找用例关键字

[slide]

## 更多资料
---
https://qunitjs.com

