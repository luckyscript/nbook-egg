# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.25)
# Database: nbook
# Generation Time: 2019-03-01 03:33:59 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table articles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `articles`;

CREATE TABLE `articles` (
  `aid` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `text` text,
  `order` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否置顶',
  `authorId` int(10) unsigned NOT NULL DEFAULT '0',
  `status` varchar(16) NOT NULL DEFAULT 'public',
  `commentsNum` int(10) unsigned NOT NULL DEFAULT '0',
  `allowComment` tinyint(1) NOT NULL DEFAULT '1',
  `categoryId` int(10) NOT NULL DEFAULT '0',
  `slug` varchar(100) DEFAULT NULL,
  `readnum` int(11) NOT NULL DEFAULT '0',
  `type` varchar(20) NOT NULL DEFAULT 'article',
  PRIMARY KEY (`aid`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `articles` WRITE;
/*!40000 ALTER TABLE `articles` DISABLE KEYS */;

INSERT INTO `articles` (`aid`, `title`, `created`, `modified`, `text`, `order`, `authorId`, `status`, `commentsNum`, `allowComment`, `categoryId`, `slug`, `readnum`, `type`)
VALUES
	(21,'新博客，新开始','2018-07-17 00:00:00','2019-01-05 09:43:45','![](/static/upload/article_nblog.png)\n新博客的第一篇博文送给它本身。当你看到这篇博文时，也一定发现了我的博客换成了另外的样式。这代表我已经抛弃了用了一年多的`typecho`。毕竟寄人篱下的感觉总是不舒服的，想修改一些功能又因为对`PHP`的不熟悉而望而却步。\n我基于`Node.js`、MySQL开发了这个博客。\n\n新博客目前仍然在dev的状态，也将会有很长时间处在dev的状态中，我会一直做一些功能上的改进和bug的修复。所以如果你发现了一些bug，请毫不留情的在下面留言，或者[email](mailto:main.lukai@gmail.com)我。\n\n我给其取名为`nbook`，n是新的意思，希望自己能在新的博客中，有一个新的开始。\n\n<!--more-->\nTODOLIST：\n\n1. 多模板选择。\n2. 邮件提醒\n3. Docker\n4. 安全性提高\n5. 其他\n\n更新日志：\n\n2018-09-12： 添加serviceWorker缓存\n\n2018-08-29： 添加link功能，分享自己看过的感觉不错的网站博文等地址。\n\n2019-01-05: 支持HTTP/2',0,1,'public',0,1,4,'nbook',434,'article'),
	(25,'evercookie调研小结','2016-01-02 00:00:00','2018-07-03 21:21:00','### 信息来源:\n\n- https://github.com/samyk/evercookie\n- http://samy.pl/evercookie\n\n\n### 主要实现方式\n\n1. Standard HTTP Cookies\n2. Flash Local Shared Objects\n3. Silverlight Isolated Storage\n4. CSS History Knocking\n5. Storing cookies in HTTP ETags (Backend server required)\n6. Storing cookies in Web cache (Backend server required)\n7. HTTP Strict Transport Security (HSTS) Pinning\n8. window.name caching\n9. Internet Explorer userData storage\n10. HTML5 Session Storage\n11. HTML5 Local Storage\n12. HTML5 Global Storage\n13. HTML5 Database Storage via SQLite\n14. HTML5 Canvas - Cookie values stored in RGB data of auto-generated, force-cached PNG images (Backend server required)\n15. HTML5 IndexedDB\n16. Java JNLP PersistenceService\n17. .Java exploit CVE-2013-0422 - Attempts to escape the applet sandbox and write cookie data directly to the user\'s hard drive.\n\n\n### 实际实现情况\n\n经过检测主流浏览器可以实现的地方完全相同，之前认为IE应该会在userdata里存储，但是并没有。\n\n1. cookie\n2. localstorage\n3. sessionstorage\n4. window.name\n5. png+canvas\n6. etag\n7. cache\n8. dbData\n9. flash cookie\n\n\n### 清除方法\n\n- chrome\n  - 设置 window.name\n  - 清除所有浏览器数据\n- safari\n  - 设置 window.name\n  - 清除所有浏览器数据\n- IE11\n  - 关闭浏览器缓存\n  - 清除所有浏览器数据\n  - 清除window.name\n  - 清除localstorage\n  - 清除sessionstorage\n- firefox\n  - 清除所有浏览器数据\n  - 清除window.name\n  - 清除localstorage\n  - 清除sessionstorage\n    \n		\n### 其它\n\n- 由于我电脑firefox和Safari的flash是共享的，所以，evercookie在Safari上的时候，也会影响到firefox。\n- 在隐私模式下不起作用。\n',0,1,'public',0,1,2,'evercookie',142,'article'),
	(26,'关于','2018-07-03 00:00:00','2018-08-30 00:17:33','# 本博客使用:\n\n* `Node.js`驱动\n* VPS: [Vultr](http://www.vultr.com/?ref=7171519)\n\n* 强力推荐日本结点~稳定快速\n\n## 建站经验\n[新博客，新开始](/article/nbook)\n\n***\n\n\n# 关于我\n\nXDU本科生一枚。\n\n喜欢简洁文艺的风格。\n\n爱足球，爱皇马，爱C罗。\n\n女神是米兰达可儿。\n\n最想去的球场是伯纳乌，最喜欢的妹子是[...](javascript:alert(\'火火火火旦\'))（点击查看\n\n略懂摄影，但是还是处于小白的水平，PS只会用一点点啦。\n\n不喜欢田家产品，日常用的系统是`openSUSE`和`Mac OS`，但是仍然拥有一个田牌的phone，并且很喜欢`vscode`\n\n热爱CS，想做一名独立开发者，有代码洁癖，正在学`Cpp`，以后想做计算机图形学相关的东西。\n\n近期想读`《UNIX环境高级编程》`\n\nLeetcode[解题地址](https://github.com/luckyscript/Leetcode)\n\n不懂政治，感觉是蛮复杂的东西。所以万一我的文章里有什么不和谐的东西，千万要通知我。\n\n## 关于luckyscript\n`lucky`是名字的谐音。\n\n`script`是因为刚入行就接触了*JavaScript*。\n\n写博客推荐Markdown+$L^AT_EX$.\n\n想学好多东西呀，时间还来得及嘛。\n## 联系方式|社交媒体\n\nEmail: [email](mailto:main.lukai@gmail.com)\n\nWeibo: [luckyscript](https://weibo.com/luckyscript)\n\n\n ',0,1,'private',0,1,3,'about',0,'article'),
	(27,'wasm初体验','2018-05-31 00:00:00','2018-07-19 07:20:15','WebAssembly无疑是前端将来一个很重要的发展方向。\n\n在下好编译环境之后，我开始了自己的wasm探索之路。\n\n```c\nlong fib(int num) {\n    if(num == 1)\n        return 1;\n    if(num == 2)\n        return 2;\n    return fib(num-1) + fib(num-2);\n}\n```\n写了一个最简单的fib函数，写完后用emcc编译成wasm文件。\n\n```bash\nemcc fib.c -O1 -s WASM=1 -s ONLY_MY_CODE=1 -s EXPORTED_FUNCTIONS=\"[\'_fib\']\" -o fib.js\n```\n<!--more-->\n-O1是对代码的优化程度，这个我觉得是和LLVM的静态优化相关？还没有详细了解。\nONLY_MY_CODE 这个是告诉编译器，只输出我们自己的代码，一些库文件中的不输出。\nEXPORTED_FUNCTIONS 这个告诉编译器我们想输出的函数。\n\n最后，编译好之后，生成一个`.wasm`和一个`.js`文件。\n我们这里只用`.wasm`文件\n\n由于现在js还不能通过模块化的方式加载文件，html也无法通过script标签来引入wasm格式的内容。所以我们只能用ajax或者fetch来取得内容。\n```js\n// Fetch\nfetch(\'./fib.wasm\').then(response => \n    response.arrayBuffer()\n).then(bytes =>   {\n    return WebAssembly.instantiate(bytes, importObj)\n}).then(result => {  \n    alert(result.instance.exports._fib(6)\n})\n```\nfetch是一个promise操作 所以我们也可以更优雅的写成async/await这种形式。\n\n当然在js中还是要做一些配置的。\n```js\n// Memory\nconst memory = new WebAssembly.Memory({initial: 256, maximum: 256});\n\nconst importObj = {\n    global: {},\n    env: {\n        abortStackOverflow: () => { throw new Error(\'overflow\')},\n        memory: memory,\n        table: new WebAssembly.Table({initial: 0, maximum: 0, element: \'anyfunc\'}),\n        tableBase: 0,\n        memoryBase: 0,\n        STACKTOP: 0,\n        STACK_MAX: memory.buffer.byteLength\n    }\n}\n```\n\n引入浏览器，[打开链接查看](http://www.luckyscript.me/static/upload/wasm/index.html)\n\n\n  [1]: https://www.luckyscript.me/usr/uploads/2018/05/2255196248.png',0,1,'public',0,1,1,'wasm-init',252,'article'),
	(29,'从Simple JavaScript Inheritance源码来谈js的原型链','2017-11-15 00:00:00','2018-07-16 23:14:10','最近写ES6写的比较多，对于面向对象方面用的还是比较顺手的， 但是说到底，ES6的class也就是js的语法糖而已，js的面向对象以及继承，底层的原理还是绕不开原型链。\n\n有人说，谈原型链这些网上早已大篇文章，你写这篇意义又在哪呢?我也思考过这个问题，但是阅读了网上大多数文章，感觉良莠不齐，所以我想借助阅读jQuery作者的一小段源码来讲讲我复习原型链遇到的坑。\n<!--more-->\n由于源码只有20几行（是的，我没有少打一个0），我就直接贴出来了。\n\n```javascript\n\n(function(){\n  var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\\b_super\\b/ : /.*/;\n\n  this.Class = function(){};\n\n  Class.extend = function(prop) {\n    var _super = this.prototype;\n\n    initializing = true;\n    var prototype = new this();\n    initializing = false;\n\n    for (var name in prop) {\n\n      prototype[name] = typeof prop[name] == \"function\" && \n        typeof _super[name] == \"function\" && fnTest.test(prop[name]) ?\n        (function(name, fn){\n          return function() {\n            var tmp = this._super;\n             \n            this._super = _super[name];\n\n            var ret = fn.apply(this, arguments);        \n            this._super = tmp;\n             \n            return ret;\n          };\n        })(name, prop[name]) :\n        prop[name];\n    }\n\n    function Class() {\n\n      if ( !initializing && this.init )\n        this.init.apply(this, arguments);\n    }\n\n    Class.prototype = prototype;\n\n    Class.prototype.constructor = Class;\n\n    Class.extend = arguments.callee;\n     \n    return Class;\n  };\n})();\n```\n整个源代码，在一个自执行函数里。函数中，给window对象定了一个Class属性，并且Class拥有一个extend方法。\n\n解读源码第一步:我们先看看怎么用。\n\n```javascript\n    var A = Class.extend({\n        init: function () {\n            this.name = \'A\';\n        },\n        showName: function () {\n            console.log(this.name);\n        },\n    });\n\n    var B = A.extent({\n        init: function () {\n            this.name = \'B\';\n        },\n    });\n\n    var b = new B();\n\n    b.showName() // \'B\'\n```\n\n以上代码很轻易的实现了JavaScript的继承，而且让你摆脱了烦恼的prototype。\n\n\n我们先来看这个功能：\n\n```javascript\n    var A = Class.extend({\n        init: function () {\n            this.name = \'A\';\n        },\n        showName: function () {\n            console.log(this.name);\n        },\n    });\n```\n\n那么我们试着自己来实现一下这个功能。\n```javascript\nwindow.Class = function () {}\n\nClass.extend = function () {\n    function A() {}\n    A.prototype = new this();\n    A.prototype.construct = A;\n    return A;\n}\n```\n\n几行代码而已，pofei！\n\n但是我们怎么实现继承呢？\n难道又要写一段`A.extent = ...`\n？？？\n当然不是写一段，而是写一句,对，作者写了一句\n`A.extent = arguments.callee`\n仔细想想，`arguments.callee`这个指针就代表当前方法，我们在js中写递归的时候会用到这样的方法，这里也是这种思想的提现。\n\n那么，简单的继承和面向对象实现了，我们再来看看作者的源码，看看他还写了哪些东西。\n\n```javascript\n var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\\b_super\\b/ : /.*/;\n```\n\n这个`initializing`先不谈，`fnTest`是啥意思...看了许久，没能明白，因为`/xyz/.test(function(){xyz;})`的返回值一直是true啊，那么这个三元运算符的意义何在？难道是大佬随便写的么？不可能。我去MDN上搜了下`test`方法，发现test的传参只能是`string`，但是我们这里传了一个function，浏览器内部是帮我们做了toString的操作的。那么是否在某些浏览器上不会toString所以返回false呢？我试了下（window7系统）在IE、Firefox、chrome都正常。\ngoogle一番后发现，IE6不支持...\n\n心想在2017年应该不会有傻子还在用ie6了，但是同时又对作者心生佩服，写代码如此严谨。毕竟他们那个年代人们,IE的适配是前端的必备技能。\n\n再来看这个`initializing`,\n```javascript\n if ( !initializing && this.init )\n        this.init.apply(this, arguments);\n```\n这里的这个判断，是因为我们new 了一个实例来进行继承的。所以父类的构造函数会执行多次，所以作者为什么不用`Object.create`方法呢，我想应该也是由于兼容问题的考虑吧。\n\n以上。',0,1,'public',0,1,2,'jsprototype',198,'article'),
	(30,'从co源码来看Promise','2017-11-10 00:00:00','2018-07-21 23:34:36','co源码库地址：[code](https://github.com/tj/co)\n\nco是著名程序员的一个开源库，这个项目的初衷是解决异步回金字塔的问题。我们曾经在[之前的博文](/article/continuation-callback)中，提到过回调金字塔的优化方式，实现callcc函数，其实这种方式就是利用Thunk的方式来进行优化，Thunkify这个库工作原理也是如此。\n\n我们今天谈到的co，在早起的版本也是通过这种方式来进行处理回调的问题，但是当Generator和Promise出现的时候，co便利用这两个特性很好的解决了这些问题。著名框架[koa1](https://github.com/koajs/koa/tree/1.4.1)便是利用了co模块作为解决异步问题的基础来实现的。\n\n\n\n> 如果你对nodejs的异步工作原理不是很懂，建议你可以花几分钟先去了解一下，这可能更利于你理解本文的内容。\n\n\n\n要阅读源码，我们先来看看它怎么用。\n\n```\nco(function* (){\n    var fileName = yield readFile(\'./fileName.txt\', \'utf-8\');\n    var fileContent = yield readFile(fileName, \'utf-8\');\n    return fileContent\n}).then(console.log, console.error);\n```\n\n我们看这个代码，首先我们希望从`fileName.txt`中获取到fileName，然后再读名称为fileName这个的文件，最后返回文件内容。\n\n如果不用co模块，我们写出来的代码可能是这样的：\n\n```\ncontent = function () {\n    return readFile(\'./fileName.txt\', \'utf-8\', function (err, data) {\n        return readFile(data, \'utf-8\', function (err, data) {\n            return data;\n        })\n    })\n}\n```\n绕来绕去的明显不够直观。相比于co模块的用法，这种传统的代码简直会让人抓狂。\n\nco模块的源码只有短短的240行。让我们就直入正题吧。\n\n```\nfunction co(gen) {\n  var ctx = this;\n  var args = slice.call(arguments, 1);\n  return new Promise(function(resolve, reject) {\n    if (typeof gen === \'function\') gen = gen.call(ctx); // 如果gen是Generator，则执行\n    if (!gen || typeof gen.next !== \'function\') return resolve(gen); // 如果不是函数，则直接resolve\n  ...\n  }\n```\nco函数接收一个Generator，返回一个Promise对象。所以我们在执行完co之后，可以链式调用then的原因也是如此。\n\n### 自动执行\n自动执行Generator是co的重要特点。我们看Promise对象的函数中，执行了`onFulfilled()`。\n```\nfunction onFulfilled(res) {\n      var ret;\n      try {\n        ret = gen.next(res); // 这是构造器的next方法\n      } catch (e) {\n        return reject(e);\n      }\n      next(ret); // 这个是名字为next的函数调用\n      return null;\n    }\n```\n可以看到这个函数调用了gen的next方法之后，调用了next()函数，gen是传入的Generator function，一般执行完gen的next方法，协程会将执行权交出。而next()函数一定就是co自动执行Generator的核心。\n\n```\n    function next(ret) {\n      if (ret.done) return resolve(ret.value); // 如果gen.next已经执行完了整个构造器，那么直接resolve这个值。\n      var value = toPromise.call(ctx, ret.value); \n      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);\n      return onRejected(new TypeError(\'You may only yield a function, promise, generator, array, or object, \'\n        + \'but the following object was passed: \"\' + String(ret.value) + \'\"\'));\n    }\n```\n可以看到next函数接收gen.next()的结果，这个结果是一个包含value和done的键值对，不在赘述。函数的第二行开始，给ret.value转化为Promise对象，然后再调用value.then(onFulfilled,onRejected)。问题来了，next函数执行完了，可是哪里调用了gen.next()呢？仔细看看onFulfilled，恩，已经讲过这个函数了。\nco通过这种递归的方式，只要gen.next()没有完成就会一直执行下去。\n而我们发现，co内部的状态管理，也是通过toPromise来构造成为Promise对象，使得能够处理好异步之间的关系。\n\n我们来看看这个 toPromise方法：\n```\nfunction toPromise(obj) {\n  if (!obj) return obj;\n  if (isPromise(obj)) return obj; // 如果是Promise对象直接返回\n  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj); // 如果是generator函数，用co模块来返回Promise对象\n  if (\'function\' == typeof obj) return thunkToPromise.call(this, obj); // Thunk函数\n  if (Array.isArray(obj)) return arrayToPromise.call(this, obj); // arrayToPromise方法\n  if (isObject(obj)) return objectToPromise.call(this, obj); //objectToPromise\n  return obj;\n}\n```\n```\nfunction objectToPromise(obj){\n  var results = new obj.constructor();\n  var keys = Object.keys(obj);\n  var promises = [];\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    var promise = toPromise.call(this, obj[key]);\n    if (promise && isPromise(promise)) defer(promise, key);\n    else results[key] = obj[key];\n  }\n  return Promise.all(promises).then(function () {\n    return results;\n  });\n\n  function defer(promise, key) {\n    // predefine the key in the result\n    results[key] = undefined;\n    promises.push(promise.then(function (res) {\n      results[key] = res;\n    }));\n  }\n}\n```\n我们来看看典型的objectToPromise,主要实现方法是对obj的每一个键值对执行toPromise方法，通过Promise.all异步并行，将一个promise数组里的每个promise保存到相应的key里面。\n对于co模块的解读，由于本人水平有限，有些地方可能理解的不足，还望指教。\n\n## Promise\n对于Promise，我觉得前端程序员应该都已经很熟悉了。promise拥有pending,fulfilled,rejected这几种状态，当执行了resolve或者reject之后，promise的状态会由初始的pending转化为fulfilled或者rejected。当然并不是你想的那样，resolve之后就是fulfilled的状态，当promise resolve一个reject的promise的时候，这时候就是rejected的状态。\n\n同一个promise对象可以有多个then方法，这些then方法会在promise被resolve或者reject的时候，顺序调用。但是这个顺序调用的代码执行还是异步的。\n\n```\nconst promise = Promise.resolve(1)\npromise.then(setTimeout(()=>console.log(1), 100))\npromise.then(console.log(2));\n```\n这段代码的输出为 2 1\n\nPromise的then方法也可以链式调用，因为then方法本身返回一个新的Promise对象，且之前的onFulfilled或onRejected执行后返回值会作为下一个then方法的onFulfilled对象传入。\n```javascript\npromise.then(setTimeout(v=>console.log(\'first\', v), 100)).then(console.log(2))\n```\n这段代码输出为2 1\n可见.then方法的链式调用也是异步的，那么我们如何才能让其执行了前一个再执行后一个呢？\n答案不是很明显么，用Promise或者可以返回then方法的实例\n```\n// 返回值为promise的实例\nPromise.resolve(1)\n  .then(v=> new Promise((resolve, reject)=>{\n    setTimeout(()=> resolve(v+3), 3000);\n  }))\n  .then(v=>console.log(v)); //三秒后输出 4\n\n// 返回值为含有then方法的对象\nPromise.resolve(1)\n  .then(v=>({\n    then(resolve, reject){\n      setTimeout(()=> resolve(v+2), 2000);\n    }\n  }))\n  .then(v=> console.log(v)); //二秒后输出 3\n```\n\n\n\n',0,1,'public',0,1,2,'co-promise',185,'article'),
	(31,'被攻击了...','2017-11-01 00:00:00','2018-07-11 22:59:07','凌晨打开博客，发现进不了后台了。\n博客表面看起来很正常，但是里面却被种了好多脚本。\n\n恩，漏洞嘛，就是最近那个install.php导致的。这几天其实一直想删，但是没有时间，所以被人趁虚而入了。\n\n网站目前已经修复，漏洞也没有了。恩，一切还好，数据都有备份。',0,1,'public',0,1,1,'attacked',124,'article'),
	(32,'Metaball算法的简易实现','2017-10-07 00:00:00','2018-07-16 20:55:09','记得之前大二的时候，球球大作战这款游戏还比较火。虽然服务器在国外比较炸，但是球与球接触时的动画非常逼真，当时想了好久都不知道怎么做，后来有一次看到了贝塞尔曲线，才明白原来这个东西再工业界早已应用广泛。\n\nmetaball算法的实现也是基于贝塞尔曲线，在一些应用，比如qq消息的小红点消除都是用的这个算法。\n效果如图：\n![metaball.png][1]\n下面给出算法的实现代码：\n```javascript\n        var canvas = document.querySelector(\'#canvas\');\n\n        canvas.width = 800;\n        canvas.height = 600;\n\n        var ctx = canvas.getContext(\'2d\');\n        \n        var radius = 50;\n        var arc1 = {\n            x: 100,\n            y: 100\n        },\n        arc2 = {\n            x: 400,\n            y: 400\n        },\n        controlP = {\n            x: (arc1.x + arc2.x)/2,\n            y: (arc1.y + arc2.y)/2\n        }\n        var distance = Math.sqrt((arc1.x - controlP.x)*(arc1.x - controlP.x) + (arc2.y - controlP.y)*(arc2.y - controlP.y));\n        var angleA = Math.acos(radius/distance);\n\n        var angleB = Math.acos((controlP.x - arc1.x)/distance);\n        var off1 = {\n            x: (radius * Math.cos(angleA - angleB)),\n            y: (radius * Math.sin(angleA - angleB))\n        }\n        var point1 = {\n            x: arc1.x + off1.x,\n            y: arc1.y - off1.y\n        }\n\n        var angleC = Math.asin((controlP.x - arc1.x)/distance);\n        var off2 = {\n            x: (radius * Math.sin(angleA - angleC)),\n            y: (radius * Math.cos(angleA - angleC))\n        }\n        var point2 = {\n            x: arc1.x - off2.x,\n            y: arc1.y + off2.y\n        }\n\n        var angleD = Math.acos((arc2.y - controlP.y)/distance);\n        var off3 = {\n            x: (radius * Math.sin(angleA - angleD)),\n            y: (radius * Math.cos(angleA - angleD))\n        }\n        var point3 = {\n            x: arc2.x + off3.x,\n            y: arc2.y - off3.y\n        }\n\n\n        var angleE = Math.acos((arc2.x - controlP.x)/distance);\n        var off4 = {\n            x: radius * Math.cos(angleA - angleE),\n            y: radius * Math.sin(angleA - angleE)\n        }\n        var point4 = {\n            x: arc2.x - off4.x,\n            y: arc2.y + off4.y\n        }\n\n\n        ctx.beginPath();\n        ctx.arc(arc1.x, arc1.y, radius, 0, 2 * Math.PI);\n        ctx.stroke();\n        ctx.closePath();\n\n        ctx.beginPath();\n        ctx.arc(arc2.x, arc2.y, radius, 0, 2 * Math.PI);\n        ctx.stroke();\n        ctx.closePath();\n\n        ctx.beginPath();\n        \n        ctx.arc(controlP.x, controlP.y, 1, 0, 2 * Math.PI);\n        ctx.stroke();\n        ctx.closePath();\n\n        ctx.beginPath();\n        ctx.moveTo(point1.x, point1.y);\n        ctx.quadraticCurveTo(controlP.x, controlP.y, point3.x, point3.y);\n        ctx.stroke();\n        ctx.closePath();\n\n        ctx.beginPath();\n        ctx.moveTo(point2.x, point2.y);\n        ctx.quadraticCurveTo(controlP.x, controlP.y, point4.x, point4.y);\n        ctx.stroke();\n        ctx.closePath();\n```\n\n\n  [1]: /static/upload/1005152478.png',0,1,'public',0,1,2,'metaball2d',148,'article'),
	(33,'站在数学的角度思考世界','2018-07-11 00:00:00','2018-07-21 19:20:55','近期阅读了吴军博士的[《数学之美》](https://book.douban.com/subject/26163454/)，这本书是吴军博士在他多年的科研经历中对科学问题的深入思考。\n\n数学之美，通过吴军博士在谷歌的一些实际经历和项目，穿插着数学知识和计算机科学家们的典故，用很直白易懂的方式讲述着计算机和数学之间千丝万缕的联系。\n\n数学知识，暂且不谈，嚼人口食应该是大家都不喜欢的。这里我主要谈谈读完书我的一些收获。\n\n首先是多思考，将自己的生活和数学联系起来。在书的第十二章，吴军博士主要讲了地图搜索和有限状态机的关联以及导航算法和动态规划的关联。其实地图这个应用在近几年已经是非常火了，我在百度地图也实习有半年左右，虽然没有涉及导航算法，但是平时生活还是经常用到的，在读这篇文章之前却是没有思考过其实现原理和改进方式。有限状态机和动态规划这两个对于大部分学计算机得人是再熟悉不过的了，地名搜索和导航算法也是日常生活中很常见的了，所以作为一个计算机从业者，多思考，多动手才是正确的姿势。其实很多看似很神奇的东西，背后都是基础的计算机原理和数学知识。比如网络爬虫，就是图的遍历，但是也不仅仅这么简单，去重涉及到哈希或布隆过滤器，图的遍历也是广度优先和深度优先的结合。\n\n其次是多尝试新的思路，这点其实在吴军博士讲的很多例子都能体现出来。对于自然语言分析，一开始，所有的科学家们都从信息论的角度出发，试图以人类的角度，让机器拥有相同的能力去分析出信息的含义。但是即使这种方法不太行得通的时候，大部分人却仍然执着。直到有人提出了从统计学的角度出发，才逐渐有科学家转变思路，接着才有了马尔科夫模型，才有了现在的人工智能发展。在网页排名算法方面，Google的pagerank算法也是从另一个角度切入，不同于传统的，基于内容的排名，Google的排名算法，基于自身排名的迭代，输出权重。利用向量，迭代出最后的值。\n\n最后，也是最重要的，我觉得是吴军博士多次提到的学习的态度。“技术分为术和道两种，具体的做事方法是术，做事的原理和原则是道。这本书的目的是讲道而不是讲术。很多具体的搜索技术很快会从堵门绝技到普及，再到落伍，追求术的人一辈子工作很辛苦。…但是真正做好事没有捷径，离不开一万小时的专业训练和努力”，这让我想到了《大国手》里面的施襄夏对一个只会一两手偷棋的人说，你这两招如果能偷到别人，那么是会赚了大便宜，但是没偷到就会输的很惨，这是术。而真正的围棋之道是从布局到中盘到收尾的一个综合。想想自己平时这方面也还待提高，凡事得追求所以然。\n\n我觉得最触动我的，是吴军博士提到的，社会的浮躁。“当今物欲横流的中国社会，学术界浮躁，年轻人焦虑，少数有着远大志向的年轻人实际上是非常孤独的。”也希望自己，能够戒骄戒躁，读完本书，从知识，到感悟都受益良多，写下此文，与君共勉。',0,1,'public',0,1,4,'math-beautiful',313,'article'),
	(34,'友情链接','2018-07-16 00:00:00','2018-07-21 19:16:35','## [Huspy](https://mierhuo.com)\n## [于是，](http://lovefeng.group)\n## [vinthony](https://github.com/vinthony/vinthony.github.io/issues)\n## [Mr.Thunder](https://qqdaiyu55.github.io/)\n\n',0,1,'private',0,1,1,'link',0,'article'),
	(35,'浅谈尾递归','2016-03-17 00:00:00','2018-07-16 23:20:22','> 第一次接触`尾递归`（Tail recursion）是在读[《SICP》](https://book.douban.com/subject/1148282/)这本书上。第二次是面试的时候，被面试官问到了。\n\n## 递归\n```\n(define (Fibonacci x)\n  (cond (= x 1) 1\n    (= x 2) 2\n        (else \n              (+ (Fibonacci (- x 2) (Fibonacci (- x 1))))))\n```\n\n这是个简单的斐波那契函数，函数的作用就是算出对应的斐波那契值。我们很容易想到，Fibonacci x 的值就是\n\n```\n(+ (Fibonacci (- x 2)) (Fibonacci (- x 1))) \n```\n的值。\n\n因此以上代码就是对自身的调用，直到满足递归出口，这样的思想叫做递归。\n\n## 性能堪忧\n\n但是，递归的思想虽然简单，计算机可不喜欢这样子。因为每个线程在执行代码的时候，计算机都会分配一定的空间给它。每次方法调用的时候都会堆栈里面存东西，因此，这种方法很容易会导致堆栈溢出。\n\n拿斐波那契函数来说吧。这种递归其实是属于树形递归，假设一个解释器是应用序的，这个递归的运算过程可以展开成一个树形。也就是说，计算f(5)的值我需要计算f(4)和f(3),但是计算f(4)的时候，我需要计算f(3)和f(2)，计算f(3)的时候我们要计算f(1)和f(2)，可以看到我们的计算大多都是重复性的，尤其是到了f(3)这些低级的时候，重复了太多。这还只是f(5)的计算过程。\n\n## 如何优化\n\n采用尾递归的方法，会让这种情况产生缓解。\n\n```\n(define (Fibonacci x a b) \n  (if (= n 0)\n       a\n            (Fibonacci (- x 1) a,a+b)))\n(Fibonacci 10 0 1)\n```\n\n以上代码就使用了尾递归的思想，那么到底什么是尾递归呢？\n\n> In computer science, a tail call is a subroutine call performed as the final action of a procedure. If a tail call might lead to the same subroutine being called again later in the call chain, the subroutine is said to be tail-recursive, which is a special case of recursion.\n\n这是维基百科的定义，中文意思大概是：\n\n在计算机科学里，尾调用是指一个函数里的最后一个动作是一个函数调用的情形：即这个调用的返回值直接被当前函数返回的情形。这种情形下称该调用位置为尾位置。若这个函数在尾位置调用本身（或是一个尾调用本身的其他函数等等），则称这种情况为尾递归，是递归的一种特殊情形。\n\n讲的过于抽象，很难理解，其实尾递归就是尾调用的一种特殊，尾调用是指函数的最后一个行为是调用函数，所以尾递归，顾名思义就是函数的最后一个行为是调用其本身。所谓最后一个行为，是指除了调用之外不能有其它的附加动作，比如加法之类的。因此，我感觉尾递归是一种长着递归脸的迭代，因为他每次都把数据传递到下一次调用，在SICP中也被认为是迭代。在一些函数式编程语言中，尾递归编译后会被优化成迭代的形式，所以效率才会很高。\n\n和普通递归相比较，由于尾递归的调用处于方法的最后，因此方法之前累积在堆栈中的结果已经对下次递归没有用处，因此可以把留在堆栈中的数据清除，即使是无限递归也不会让堆栈溢出。这也就是尾递归的好处。',0,1,'public',0,1,2,'',150,'article'),
	(38,'后续传递(continuation)和回调(callback)的差别','2016-04-05 00:00:00','2018-07-21 23:33:52','## 前言\n\n在绝大多数的编程语言中，函数通常返回值给调用它的对象。举个例子:\n\n```\nvar sum = add(2, 3);\nconsole.log(sum);\nfunction add(x, y) {\n    return x + y;\n}\n```\n\n然而，在现在很多的“函数是一等公民”的语言（函数式编程语言）中，我们也可以把值返回给回调函数，而不是直接返回给调用的那个对象。\n\n```\nadd(2, 3, function (sum) {\n    console.log(sum);\n});\nfunction add(x, y, cont) {\n    cont(x + y);\n}\n```\n\n上面的例子可以看出，我们并没有把参数运行后的值返回，而是将它传递给了cont，而cont也就是调用时的那个函数。我们称cont是add的一个传递。\n\n相信大家对回调非常熟悉吧，对于后续传递风格，或许只是喜欢函数式编程的小伙伴可能了解过。那么回调与后续传递的差别是什么呢？\n\n## 中语\n\n我认为后续传递是回调的一种特殊的形式。一个函数可以有许多个回调函数，许多次回调：\n\n```\nvar array = [1, 2, 3];\nforEach(array, function (element, array, index) {\n    array[index] = 2 * element;\n});\nfunction forEach(array, callback) {\n    var length = array.length;\n    for (var i = 0; i < length; i++)\n        callback(array[i], array, i);\n}\n```\n\n当一个函数做的最后一件事情是回调另一个函数的时候，我们称第二个函数为第一个函数的后续传递。e.g:\n\n```\nvar array = [1, 2, 3];\nforEach(array, function (element, array, index) {\n    array[index] = 2 * element;\n});\nfunction forEach(array, callback) {\n    var length = array.length;\n    // last thing forEach does\n    // cont is a continuation of forEach\n    cont(0);\n    function cont(index) {\n        if (index < length) {\n            callback(array[index], array, index);\n            // last thing cont does\n            // cont is a continuation of itself\n            cont(++index);\n        }\n    }\n}\n```\n\n如果当一个函数的最后一件是是调用另一个函数的时候，我们称这种情况叫做尾调用（参考尾递归#2 ）。一些解释器，比如Scheme语言的解释器会对尾调用进行优化。这样不会导致函数的堆积（比如斐波那契的运算），而将状态层层传递。\n\n## 后话\n\n如果想继续了解后续传递风格请往下读\n\n```\nalert(pythagoras(3, 4));\nfunction pythagoras(x, y) {\n    return x * x + y * y;\n}\n```\n\n如果我们将每一种运算，包括加减乘除都写成函数的形式（在函数式编程中，运算符就是函数）。\n\n```\nalert(pythagoras(3, 4));\nfunction pythagoras(x, y) {\n    return add(square(x), square(y));\n}\nfunction square(x) {\n    return multiply(x, x);\n}\nfunction multiply(x, y) {\n    return x * y;\n}\nfunction add(x, y) {\n    return x + y;\n}\n```\n\n如果我们不允许返回任何值，我们可以利用后续传递风格来重新改下代码：\n\n```\npythagoras(3, 4, alert);\nfunction pythagoras(x, y, cont) {\n    square(x, function (x_squared) {\n        square(y, function (y_squared) {\n            add(x_squared, y_squared, cont);\n        });\n    });\n}\nfunction square(x, cont) {\n    multiply(x, x, cont);\n}\nfunction multiply(x, y, cont) {\n    cont(x * y);\n}\nfunction add(x, y, cont) {\n    cont(x + y);\n}\n```\n\n(面目狰狞，仿佛又看到了node的魔鬼金字塔)\n\n不允许返回任何值，所以你不得不吧这些值或者状态传到下一个函数里面。这种风格叫做后续传递风格(continuation passing style)。\n不过仍然存在两个问题需要考虑。\n\n这种风格明显增加了调用栈的大小需求，如果你没有用Scheme或者支持尾调用优化的语言去写代码，很容易就会栈溢出（我也不知道容易不容易。。。）\n魔鬼金字塔。\n当然，第一个问题其实是好解决的，因为js支持异步编程。异步调用的结果就是，当你调用传递函数的时候，前面的状态已经计算好了。这样就导致堆栈大小并不会增加。\n\n```\nFunction.prototype.async = async;\npythagoras.async(3, 4, alert);\nfunction pythagoras(x, y, cont) {\n    square.async(x, function (x_squared) {\n        square.async(y, function (y_squared) {\n            add.async(x_squared, y_squared, cont);\n        });\n    });\n}\nfunction square(x, cont) {\n    multiply.async(x, x, cont);\n}\nfunction multiply(x, y, cont) {\n    cont.async(x * y);\n}\nfunction add(x, y, cont) {\n    cont.async(x + y);\n}\nfunction async() {\n    //use js setTimeout to implement async\n    setTimeout.bind(null, this, 0).apply(null, arguments);\n}\n```\n\n解决第二个问题的方法通常是利用一个函数callcc，全称是call-with-current-continuation，可惜的是callcc并没有在js里完整的实现。所以我们重写一下\n\n```\npythagoras(3, 4, alert);\nfunction pythagoras(x, y, cont) {\n    var x_squared = callcc(square.bind(null, x));\n    var y_squared = callcc(square.bind(null, y));\n    add(x_squared, y_squared, cont);\n}\nfunction square(x, cont) {\n    multiply(x, x, cont);\n}\nfunction multiply(x, y, cont) {\n    cont(x * y);\n}\nfunction add(x, y, cont) {\n    cont(x + y);\n}\nfunction callcc(f) {\n    var cc = function (x) {\n        cc = x;\n    };\n    f(cc);\n    return cc;\n}\n```',0,1,'public',0,1,2,'continuation-callback',171,'article'),
	(39,'浅谈函数式编程','2016-04-19 00:00:00','2018-07-21 19:22:29','> 这是来百度后的新人技术分享，这是个大体的提纲，分析的比较简单，因为我觉得自己对FP也存在一知半解。\n### 什么是函数式编程(What?)\n\n函数式编程中的函数这个术语不是指计算机中的函数（实际上是子程序），而是指数学中的函数，即自变量的映射。也就是说一个函数的值仅决定于函数参数的值，不依赖其他状态。比如sqrt(x)函数计算x的平方根，只要x不变，不论什么时候调用，调用几次，值都是不变的。\n### 特点(fectures)\n\n函数是一等公民（first-class），可以在任何地方定义，在函数内或函数外，可以作为函数的参数和返回值，可以对函数进行组合。\n### 纯函数（ Pure Function ）\n- sin(x)，返回实数x的sin值\n- length(s),返回串s的大小\n- encrypt(k,d)，运行一个使用key k 关于日期片d的确定加密算法\n### 非纯函数 ( Impure Function )\n- random()是非纯函数，因为每次调用潜在地产生不同的值。这是因为伪随机数产生器使用和更新了一个全局的“种子”状态。假如我们修改它去拿种子作为参数，例如random(seed)，那么random变为纯函数，因为使用同一种子值的多次调用返回同一随机数。\n- printf() 是非纯函数，因为它促使输出到一个I/O装置，产生了副作用。\n- 总结：纯函数就是不受外部影响的函数。\n### 副作用（side effect）\n\n指当调用函数时，除了返回函数值之外，还对主调用函数产生附加的影响。例如修改全局变量（函数外的变量）或修改参数。\n\n在JavaScript中，引入了函数。但显然JS中的函数可以访问、修改全局变量（或定义在函数外的变量），如下\n\n``` javascript\nvar a = 5;\nfunction fun(){\n    a = 10\n}\nfun();\n```\n\nJS中要想保证函数无副作用这项特性，只能依靠编程人员的习惯，即\n\n1，函数入口使用参数运算，而不修改它\n\n2，函数内不修改函数外的变量，如全局变量\n\n3，运算结果通过函数返回给外部（出口）\n\n``` javascript\nvar a = 5;\nfunction fun(c){\n    return c + 5\n}\nfun(a);\n```\n### 引用透明( referential transparent )\n\n引用透明的概念与函数的副作用相关，且受其影响。 如果程序中两个相同值得表达式能在该程序的任何地方互相替换，而不影响程序的动作，那么该程序就具有引用透明性。它的优点是比非引用透明的语言的语义更容易理解，不那么晦涩。纯函数式语言没有变量，所以它们都具有引用透明性。\n### 高阶函数（high－order function）\n\n高阶函数应该是指至少满足下列条件之一的函数：\n1. 可以接受函数作为输入参数\n2. return 一个函数\n### 惰性求值（lazy evaluation）\n\nHaskell的精髓\n所谓惰性求值就是指“需要的时候再去求”\n举个例子：\n\n通过将表达式包装成一个thunk实现的\nf(g x)，实际上给f传递的参数就是一个类似于包装成(_ -> (g x))的一个thunk\n然后在真正需要计算g x的时候才会调用这个thunk\n事实上这个thunk里面还包含一个boolean表示该thunk是否已经被计算过（若已经被计算过，则还包含一个返回值），用来防止重复计算\nES6里面的Generator函数其实就是用了惰性求值。\n### 求值策略\n\n如下的函数应该如何求值？    \n\n``` javascript\nvar x = 1;  \nfunction f(m){\n    return m * 2;     \n}\nf(x + 5)\n```\n\n应该先求1＋5  然后求 6_2 \n还是先求出式子`（x+5）_2`然后代入1\n如果想深究的话 可以在维基百科上搜索求值策略\n### trunk\n\nc语言采用第一种\n而Haskell采用第二种\n所以Haskell中应该是这样的一个过程\n\n``` javascript\nvar thunk = function () {\n    return x + 5;\n};\nfunction f(thunk){\n    return thunk() * 2;\n}\n```\n\ntrunk其实就是传名调用的一个策略，用来保存表达式。\n如果想知道惰性求值的原理可以读一下sicp中关于流式计算的那章\n### 模式匹配（pattern match）\n\n``` haskell\nequal_list :: [a] -> [a] -> Bool\nequal_list list_1 list_2 = case (list_1, list_2) of\n    ([], [])       -> False\n        ([], _ )       -> False\n        (_ , [])       -> False\n        (x: xs, y: ys) -> (x == y) && (xs `equal_list` ys)\n```\n\n模式匹配是函数式编程中一个比较重要的概念，这也很方便的使我们做一些操作。\n### lambda\n\nlambda比较火，目前很多语言都开始引入lambda的概念。\njs的匿名函数（anonymity function） es6的箭头函数（arrow function）\npython中的lambda\njava8中的lambda\n### Monad\n\n个人认为是为了达到纯函数的目的，所采用的方法。\n比如，Haskell中实现random函数。计算机中的任何random方法除了unix内核中的random是真随机外，其余的都是伪随机。所谓伪随机，就是要提供一个种子。而如果Haskell中定义了一个种子，那么就明显不是纯函数了。所以Haskell要做的就是把这个种子向下传递，Haskell中的random方法不仅仅返回random的值，同时返回种子（但是不是显式），那么如何将种子传下去呢？这就是monad的作用了。\n再比如，io操作是无法避免的会有状态的改变的，所以Haskell中也提供了大量的与io相关的monad。\n### 优点(good-part)\n\n由于命令式编程语言也可以通过类似函数指针的方式来实现高阶函数，函数式的最主要的好处主要是不可变性带来的。没有可变的状态，函数就是引用透明（Referential transparency）的和没有副作用（No Side Effect）。\n\n函数即不依赖外部的状态也不修改外部的状态，函数调用的结果不依赖调用的时间和位置，这样写的代码容易进行推理，不容易出错。这样做的好处就是测试和调试的时候就会非常容易。\n\n由于不变性，多个线程之前就不共享状态，不会导致资源的竞争，也就不会出现死锁的情况。所以函数式编程目前广泛被用在并发编程上（concurrency），比如著名的Scala。\n\n由于没有状态的改变，所以纯函数式编程语言无法实现循环（loop）的。我们平时接触的for／while循环都是需要可变的状态作为跳出循环的条件。\n所以函数式编程中只能用递归（recursive）来解决迭代（iteration）问题。以阶乘为例\n\niteration实现阶乘:\n\n``` javascript\nfunction fact(n) {\n    var acc = 1;\n    for (var i = 1; i <= n; i++) {\n        acc = acc * i;\n    }\n    return acc;\n}\nfact(10);\n```\n\nrecursive实现阶乘:\n\n``` javascript\nfunction fact(n) {\n    if (n == 1) {\n        return 1;\n    } else {\n        return n*fact(n-1);\n    }\n}\nfact(10);\n```\n\n函数式编程是面向数学的抽象，更接近人的语言，代码简洁，更容易被理解。\n\n阶乘的Haskell的实现\n\n``` haskell\nfact :: Int -> Int\nfact n = case n of\n    1 -> 1\n    _ -> n * fact (n-1)\n```\n### 递归带来的问题(recursive\'s problem)\n\n``` javascript\nfunction fib(n) {\n    if (n == 1) {\n        return 1;\n    } else if (n == 2) {\n        return 1;\n    } else {\n        return fib(n - 1) + fib (n - 2);\n    }\n}\nfib(12);\n```\n\n尾递归(tail-recursive)解决\n#2\n\n``` javascript\nfunction fib(n, acc1, acc2) {\n    if(n == 1) {\n        return acc1;\n    } else if(n == 2) {\n        return acc2 + acc1;\n    } else {\n        return fib(n-1, acc2 + acc1, acc1)\n    }\n}\nfib(60,1,1);\n```\n### 缺陷\n1. 学术界比较风靡，商业应用不广泛。\n2. 国内编程注重c这些图灵机衍生的语言，所以编程思维局限于指令式编程。\n### 总结\n1. 纯函数并不完美，因为有些东西就不是纯的，副作用这东西是必然存在的。用c语言实现一个随机数发生器多么简单？但是用Haskell就不一样了。（曾经有个学长让我用Haskell写个helloworld，我想了半天,必须得传个helloworld，才能的到helloworld）\n2. 纯面向对象也不完美，比如java，由于缺乏函数一等的机制，java完全不允许把函数当作数据来传递。java中可以将函数绑架到对象里面，然后称作方法，然而缺乏一等函数的机制，导致java需要太多的设计模式。\n\n但是，学习FP和OOP的思想是我们每个编程爱好者需要做的。虽然当中有糟粕，但是学习这些还是大有裨益的。\n如果你不想去看Haskell的FP，也不想花大精力去研究java的OOP，那么javascript是个不错的选择。\n\n好吧，我想说，php是最好的语言（逃。\n',0,1,'public',0,1,2,'fp',178,'article'),
	(42,'真的只是随机吗','2016-03-20 00:00:00','2018-07-21 19:29:45','### 背景\n\n随机数在我们的日常应用中可谓是非常广泛，比如俄罗斯方块的下一个，部落冲突砍树获得的宝石数，DOTA斧王转不转。例子实在不要太多。\n### Math.random()\n\n但是说到随机数的生成，我想懂一点编程的人都可以写出来。比如js中，可以用`Math.random()*range+n`来实现。\n### 伪随机\n\n然而，你有没有考虑过，计算机所生产的随机数，其实是属于伪随机，那么什么是伪随机呢？伪随机所生产随机数，只是一个重复周期比较大的数列按一定的「算法」和「种子值」生成的。参考：[维基百科](https://zh.wikipedia.org/wiki/随机数生成器)\n那么说，如果算法和种子数是一定的，则生成的随机数也是一定的。不过js的方法无法提供种子值，所以我用Java测试了下。\n\n``` java\npublic class TestRandom {\n    public static void main(String[] args) {\n        int r1 = new Random(1024).nextInt();\n        int r2 = new Random(1024).nextInt();\n        System.out.println(r1 + \" \" + r2);\n    }\n}\n```\n\n结果，意料之中的结果是相等的。\n### 真随机\n\n那么问题来了，计算机可以产生所谓的真随机么？真随机，如果非要讲这个真，或许只有量子力学的不确定才算是真的吧，而我们平时所说的随机应该是属于统计学范畴的，也就是具备不确定性，可以被安全的用于金融等领域，德国联邦信息安全办公室给出了随机数发生器质量评判的四个标准：\n\n> K1——相同序列的概率非常低\n> K2——符合统计学的平均性，比如所有数字出现概率应该相同，卡方检验应该能通过，超长游程长度概略应该非常小，自相关应该只有一个尖峰，任何长度的同一数字之后别的数字出现概率应该仍然是相等的等等\n> K3——不应该能够从一段序列猜测出随机数发生器的工作状态或者下一个随机数\n> K4——不应该从随机数发生器的状态能猜测出随机数发生器以前的工作状态\n\n计算机理论上是不能产生真随机数的，像C，MATLAB这些产生的随机数，都是伪随机的，它们的方法无非也是通过可确定的函数比如线性同余，可确定的种子数比如毫秒数，来产生随机数，但是一旦函数和种子数都可知，那么随机数也是可预测的。\n但是，我们知道一个典型的计算机体系里面的真随机数发生器，UNIX内核里的`/dev/random`便是一个典型的例子（但是我进去后，发现random是个字符设备，这有点不懂，之后再看一下字符设备和块设备）。它在理论上能产生真随机。即这个随机数的生成，独立于生成函数，或者说这个产生器是非确定的。实现方法呢？简单的讲就是软硬结合，或者说，引入系统外的变量（把软件，代码，算法想象成一个封闭的系统）。\n### 其它生成随机的方法\n1. (new Date() - 0)%1024\n   由时间毫秒数来对你所需要的range进行取余，得到随机。\n2. LCG随机数生成器\n\n``` javascript\nvar nativeRandomLCG = function (seed) {\n    return function () {\n        seed = (214013 * seed + 2531011) % 0x100000000;\n        return seed * (1.0 / 4294967296.0);\n    };\n};\n\nvar evalRandomLCG = function (seed) {\n    var randomLCG = eval(\"(\" + nativeRandomLCG.toString() + \")\");\n    return randomLCG(seed);\n};\n```\n\n#### 参考资料\n\n[怎样解释伪随机](https://www.zhihu.com/question/23397525)\n[由eval生成的代码效率真的很差吗？](http://blog.zhaojie.me/2012/08/js-code-from-eval-benchmark.html)\n[如何评价一个伪随机数生成算法的优劣？](https://www.zhihu.com/question/20222653)\n[电脑取随机数是什么原理，计算机能产生“真随机数”吗？](https://segmentfault.com/a/1190000000661777)',0,1,'public',0,1,2,'just-true-random',136,'article'),
	(43,'C++ rvalue','2018-07-24 00:00:00','2018-08-22 20:10:14','## 左值和右值\n\n```C\nint a = 3;\n// a is lvalue, 3 is rvalue\n```\n\n学C的时候，对左值的概念是既能出现在表达式等号左边，又能出现在右边的变量；右值是只能出现在等号右边的量。\n但是C++中，这两个的定义更加晦涩一点。《C++ primer》中这样定义这两个的差别\n\n> 当一个对象被用作右值得时候，用的是对象的值；当对象被用作左值得时候，用的是对象的身份。\n\n这个定义还是略显抽象，但是我们可以看出，我们往往关注表达式中的左值所代表的内存地址，对于右值，我们更关注这个值是多少。\n同样，C++中，左值可以当做右值对象用，但是右值不能当成左值用。当一个左值被当成右值用的时候，实际上是使用的它的值。\n\n```C\nint a;\n3 = a;\n```\n这样的定义明显是不合法的。\n\n***\n\n## 差别\n\n提炼出以下差别。\n1. 左值指的是可以取地址的变量，左值与右值的根本区别在于能否获取内存地址，而能否赋值不是区分的依据。通常临时量均为右值。\n2. 对于基础类型右值是不可以被修改的，对于自定义类型，右值可以通过它的成员函数来修改。\n3. 左值具有持久的状态，右值要么是字面常量，要么是在表达式求值过程中的临时对象。\n\n***\n\n## 右值引用\n\n右值引用是C++11中新的特性，C++中用&&来获得右值引用，为了和右值引用区分，我们可以将常规引用称作左值引用。\n\n```c\nint i = 10;\nint &r = i;\nint && rr = i; // error\nint && rr1 = i*10;\nconst int &r3 = i*10; // 我们将一个const引用绑定到一个右值上\n```\n当一个右值被 const 引用指向时，它的生命周期就被延长了。\n\n### 移动构造函数\n\n移动构造函数是右值引用的一个典型代表了，同时它也是C++11里面的新特性。移动构造函数顾名思义就是将一个东西给转移走，所以它的构造函数参数是一个右值引用。\n\n```c++\nConstructor(Constructor &&c) {\n...\n}\n```\n\n一个典型的利用移动构造函数的例子是stl中的`move`。\n\n```c++\nstring st = \"Hello world\";\nvector<string> vc ;\nvc.push_back(move(st));\ncout<<vc[0]<<endl;\nif(!st.empty())\n	cout<<st<<endl;\n```\n\n运行以上例子，发现只打印了一次。说明st这个字符串在调用move后，已经是空的了。\n\n## xvalue\n\nexpiring value, x值，指通过“右值引用”产生的对象。\n\n对于函数调用，根绝返回值类型不同，可以是lvalue、xvalue、prvalue:\n\n* The result of calling a function whose  return type is an lvalue reference is an lvalue.\n* The result of calling a function whose return type is an rvalue reference is an xvalue.\n* The result of calling a function whose return type is not a reference is a prvalue.\n\n***\n\n#### 参考\n* [c++中的左值与右值](http://www.cnblogs.com/catch/p/3500678.html)\n* [C++左值与右值？](https://www.zhihu.com/question/26203703)',0,1,'public',0,1,2,'rvalue',310,'article'),
	(44,'The Wasted Times','2016-12-31 00:00:00','2018-07-25 00:14:19',' 昨天一个人去电影院看了[《罗曼蒂克消亡史》](https://movie.douban.com/subject/24751763/)，之前对历史人物杜月笙也算有点了解，于是对这部电影也有着不一样的期待。\n\n整部影片以倒叙插叙刻画了一个个鲜活的人物，以蒙太奇的手法，将这个时代的传奇描写的淋漓尽致。\n\n黑帮老大，日本间谍，交际花，电影皇后，黑帮小弟，妓女，这些平凡而不平凡的人物，正是这个动荡时代独有的特征。\n\n从活埋绑架工人的工会首领，到拒绝日本人合作开银行，满满的教父即视感，而由葛优饰演陆先生，恰好体现出了那种黑帮老大需要的绵力藏刀，刚柔并济的性格。他爱慕着交际花小六，却在小六说出“你带我走吧”的时候，只能拒绝，他知道他要保护的人太多，作为黑帮老大，他却时刻心系国家，由于拒绝和日本人合作，失去了所有的家人，最后只能在香港孤独终老。\n\n交际花小六，做了大哥的姨太太后却仍然水性杨花，被逐出上海后，被渡边劫持到家中做了性奴。最后被陆先生找到，到了菲律宾杀死渡边。前期的风光，和后期的悲惨，身世浮沉雨打萍，令人扼腕。本该属于她的是雍容华贵，却成为了电影里最悲惨的人物。\n\n要说悲惨，姨太太小五又何尝不是呢？作为陆先生的姨太太，她深爱着陆先生，却得不到陆先生心，她为了陆，选择刺杀叛徒二哥，献出了自己的生命。有人说，爱情是要两厢情愿，但是这单方的复出，不更显现出爱情的可贵与伟大吗？正所谓“生命诚可贵，爱情价更高”。\n\n陆先生的妹夫渡边，作为日本间谍，讲着一口流利的上海方言。为了日军的利益，不惜手刃自己的妻儿。受陆先生托付将小六送出上海，却在半路将其强奸，甚至带回家做了几年的性奴。这种残忍，变态也是他内心压力的写照。做了半辈子的间谍，他骗了所有的人，害了自己最亲近的人。可能上世纪的日本人都被这种军国主义所缠绕，这种民族的洗脑带来了人性的泯灭。而庆幸的是他仍关心他的儿子，这也是最后小六能够杀死他的原因。将一辈子都献给军国主义，失去了亲情爱情，这是上世纪很多日本人的缩影。\n\n罗曼蒂克消亡史，与其说是刻画了一个个鲜活的人物，不如说是刻画了一个年代。在那个动荡的年代，这些不同的人物都曾经满怀对生活的憧憬，然而这些憧憬在时代的动荡下消失殆尽。作者并没有交代所有人的结局，或许是留给我们思考，或许在告诉我们，在这座城市的所有人，随着城市的沦陷而消失，有些人死了，有些人活着，而更多的人在这乱世之中再无音讯。',0,1,'public',0,1,4,'The-Wasted-Times',143,'article'),
	(45,'C++ keyword extern','2018-08-22 00:00:00','2018-08-22 20:11:04','extern关键字在C++中通常有三个作用\n\n### 存储类指定符\n\nextern作为存储类指定符的时候，被声明的对象具有静态存储期。\n所谓静态存储期就是和static以及全域变量一样，在程序的运行周期都存在。\n\n```\n// extern.h\nextern int e;\n```\n\n```\n// extern.cc\nint e = 0;\n```\n\n```\n//main.cc\n#include \"extern.h\"\nvoid fun()\n{\n	e++;\n	cout << e << endl;\n}\nint main()\n{\n	fun();\n	fun();\n}\n```\n\n运行这段代码：\n```\n$ g++ extern.cc main.cc\n$ ./a.out\n1\n2\n```\n<!--more-->\n可以看到控制台输出1和2。\n\n当然，用extern声明和不用extern有什么差别呢？\n\n```\nextern int i;\nint j;\n```\n以上这段代码，声明了i但是未定义，声明了j并且定义了j。\n\n所以 extern常用作文件之间的变量共享。尤其是一些const对象，尤其是一些const对象，它的初始值不是一个常量表达式，但是有需要在文件内共享。这个时候我们就需要用到extern表达式了。\n\n### C++调用C语言的函数\n\nC++作为C语言的超集，应该是可以直接和C语言进行调用的。但是又由于C++和C语言存在诸多不同点，所以在生成对象文件的时候，其符号表(symbol tables)存在一些不同，导致链接失败。\n\n举个例子：\n假如有一个函数 \nint add(int, int);\n\n在C语言的符号表中我们可以直接叫做`add`，但是如果在C++的符号表中，我们也叫做`add`就会有问题，因为C++是允许函数重载的。所以在C++中符号表很可能就是`addii`。就是因为这种原因，导致我们在C++中调用C语言的函数的时候，会找不到对应的函数。而extern关键字在这里又有一个比较特殊的作用。\n\n我们先不用extern开始实现一个C++调用C的例子：\n\n```\n// add.c\nint add(int x, int y) {\n	return x + y;\n}\n```\n\n```\n//add.h\nint add(int x, int y);\n```\n\n```\n// addp.cc\n#include \"add.h\"\nint main () {\n	int x = 1;\n	int y = 2;\n	cout << add(x, y) << endl;\n}\n```\n先编译C语言,再和C++文件一起编译\n```\n$ gcc -c add.c\n$ g++ addp.cc add.o\n```\n发现编译报错：\n```\n/tmp/ccX07K44.o: In function `main\':\naddp.cc:(.text+0x21): undefined reference to `add(int, int)\'\ncollect2: error: ld returned 1 exit status\n```\n\n然后我们看一下符号表\n```\n$ objdump add.o -t\n```\n![](/static/upload/cppextern1.png)\n同理 再看一下C++生成的符号表\n\n![](/static/upload/cppextern2.png)\n果然不一样。\n\n于是我们加上extern关键字\n\n```\n//add.h\nextern \"C\" {\n	int add(int x, int y);\n}\n```\n\n接着编译运行，一路顺风。\n\n这时候我们看一下C++的符号表：\n\n![](/static/upload/cppextern3.png)\n果然一样了呢。\n\n### 模板的实例化控制\n在比较大的项目中，对于一些模板的运用比较频繁。如果在多个独立编译的文件中用了相同的模板并且提供了相同的类型参数的时候，每个文件都会生成一个模板的实例，这是我们不愿意看到的。\n所以\n```\nextern template declaration; //实例化声明\ntemplate declaration;        //实例化定义\n```\nextern在这种情况下就显得比较有意义。\n\n以上，欢迎吐槽。',0,1,'public',0,1,2,'cpp-extern',213,'article'),
	(46,'virtual method table in C++','2018-08-24 00:00:00','2018-08-27 22:47:52','最近闲逛v2ex的时候，发现了这么一个帖子：[求助 C++大神看一个问题](https://www.v2ex.com/t/481897)。\n\n点进去一看代码，一脸懵逼，这是啥。。。\n```cpp\nclass B {\npublic:\n    virtual void foo() {}\n};\nclass D: public B {\npublic:\n    D() : mA(0) {}\n    virtual void foo() {\n        cout<<\"D::foo::mA \"<<mA<<endl;\n    }\n    int mA;\n};\nint main() {\n    D d1;\n    D* pD = &d1;\n    cout<<pD<<endl;\n    typedef void (*PFun)();\n    PFun fun =  (PFun)((long *)*((long *)*(long*)(pD))); //???\n    fun();\n    cout<<\"D::pD::mA: \"<<pD->mA<<endl;\n}\n```\n<!--more-->\n\n`PFun fun =  (PFun)((long *)*((long *)*(long*)(pD)))`看到这行代码的时候，我整个人都是拒绝的。但是当我重新扶扶黑框眼镜的时候，我发现事情并没有这么`复杂`。\n\n首先我们来逐步分析一下这段代码。\n1. B是一个基类，并且拥有一个虚函数`foo`\n\n2. D是一个派生类，继承于B。D的构造函数中初始化了成员变量mA。D也有一个虚函数，这个虚函数打印了mA并且由于名称也是`foo`所以会重写基类的虚函数。\n\n3. 在主函数中，我们先实例化了D类的对象d1，取得d1的地址 `pD`,pFun是一个指针函数。\n\n4. 再最长的那一行里，我们将一个void函数fun定义为pD指向的对象的首地址指向的某个东西的首地址。\n\n5. 接着调用fun。然后打印mA。\n\n再来把目光聚焦在`PFun fun =  (PFun)((long *)*((long *)*(long*)(pD)))`这里。\n这里我们可以做一些简化，这段代码应该等同于`PFun fun =  (PFun)(*(*(long**)(pD)))`\n这样就清晰多了。\n我们再不妨再msvc中看看pD的内存分配。\n![](/static/upload/cppvmt3.PNG)\n\n这里我们看到`pD`被强制转成一个二级指针。那么问题来了，这个指针指向哪里呢？这就是我们标题谈到的`虚函数表`\n\n关于虚函数的基本概念,可以去 [](https://en.cppreference.com/w/cpp/language/virtual)了解一下。其中最关键的一个概念是`运行时多态`。\n\n我们先来了解一下，类中的内存分布情况。\n\n1. 空的类\n\n```\nclass A {\n};\ncout << sizeof(A) << endl; // 1\n```\n\n一个空的类，它的大小是1而不是0.\n并且以下类的大小也是1\n\n```\nclass B: public A {\n};\nclass C : public A {\n	char x;\n};\n```\n\n2. 有成员变量的类\n\n```\nclass A {\n	char x;\n	int y;\n};\n```\n\n![](/static/upload/cpp-vmt.png)\n\n但是打印出`sizeof(A)`的时候，结果是8字节而不是想象的5字节。这里 就和内存的字节对齐有关系了，这里不赘述。\n\n3. 有成员函数的类\n\n```\nclass A {\n	char x;\n	int y;\n	void print() {}\n}\n```\n打印出`sizeof(A)`,结果仍然为8。说明成员函数并没有存在类里面。\n\n4. 有虚函数的类\n\n```\nclass A {\n	char x;\n	int y;\n	virtual void print() {}\n}\n```\n\n![](/static/upload/cpp-vmt2.png)\n打印出`size(A)`结果为12。是不是很神奇。那么对比上面，多出的4个字节存了什么呢？\n\n答案就是今天的主题`虚函数表`。\n\n可以看到`_vfptr`是一个指向指针数组的指针。而这个指针数组存放的是类里面的虚函数指针。\n\n这也是为啥本文一开始提到的代码可以执行的原因。通过类型转换的手法强行取到虚函数表中的函数执行。这种写法是不可取的，但是我们作为程序员也要能从现象看到本质。\n\n关于虚函数表，本文暂且讲到这里。有关`继承`以及`多继承`中虚函数表的内存表现形式，读者可以自行调试，不再赘述。\n',0,1,'public',0,1,2,'cpp-vmt',339,'article'),
	(47,'苏幕遮','2016-08-19 00:00:00','2018-08-27 23:44:59','碧清天，月氲地，夜色连波，江上薄雾醉。孤影前行月如水，何处有情，皆于孤影后。\n\n空思量，自惆怅。时时迷惘，寒裘难入寐。星寒波重雪独傲，风景入画，幻作乡思泪。',0,1,'public',0,1,1,'sumuzhe',112,'article'),
	(48,'致命魔术简评','2016-03-27 00:00:00','2018-08-27 23:47:35','爱迪生说：天才就是1%的天分加上99%的汗水，但是那1%的天分是最重要的，甚至比那99%的汗水都重要。\n\n爱迪生是天才吗？和特斯拉比起来显然不是。\n\n最近又重现看了遍《致命魔术》，少了之前的惊讶，多了几分佩服。最伟大的魔术师是谁？不是Borden，不是Angier，而是导演诺兰。这部电影用了类比蒙太奇的手法，将老道具师Cutter为女孩讲解鸟笼魔术和时间轴上更为推前的Angier最后一场演出联系到一起，完成了倒叙开场，比《失忆》中轰炸式的倒叙，更加圆润自如，并由Cutter的“prestige”一词，呼应主题同时完成转场，电影自然过渡到法庭部分。Borden因被目击在水箱旁看着Angier溺毙而被捕，有重大杀人嫌疑。在狱中Borden得到了Angier生前的日记，由日记引出时间轴比最后演出更为推前的Angier科罗拉多之行部分，结构再次进入倒叙，更为巧妙的是：Angier的日记中，记载了他对于Borden日记的破译过程，并由Borden的日记，话说从头，开始了整个故事的正叙。\n\n电影在母题：“复仇”之下，还探讨了“Obsession（痴迷） & Sacrifice（牺牲）”痴迷使得Angier和Borden不断的追求提升，达到个人的极限，为此他们都做出了超出寻常的牺牲。在两人观看中国魔术师表演后，Borden的话已经暗示了这一观点：“完全的为他的艺术献身，巨大的自我牺牲。”而随后Angier在家同妻子的话，又包含着暗示。他说：Borden马上就看出来了（中国魔术师的秘密），而我却不行。让我一生都装成另一个人（我受不了）。” Borden能看出来，是因为他已经具有做出这样牺牲的准备，而且实际上他到死都装成另一个人。电影利用Tesla讲出这段话：“痴迷是属于年轻人的事，我已经不能自拔了。”\n\n与诺兰高超的结构操作相比，Jonathan Nolan的剧本同样出色。除了精心构建出令人惊奇的故事内容外，类似上面提到的暗示在电影中比比皆是，只待细心的观众逐一发现。首先，在电影开头Cutter给小女孩演示了鸟笼魔术，这个魔术正是整部电影中最重要的一个魔术。Borden和Angier的瞬间移动，和鸟笼魔术在本质上没有任何区别，只不过把笼子变成箱子，一个消失掉，另一个跳出来。在随后的监狱部分，Borden说Fallon会照顾他女儿，律师紧接着说：Fallon，A man with a past as obscure as you own（一个有着和你一样卑贱过去的人），obscure同时还有模糊不清的意思，暗示两人之间的秘密。当Cutter应法官的要求解释Angier魔术的秘密时，Cutter说了这样的一句话：玩杂耍的人，他们靠掩盖一些简单，有时也是残酷的事实为生。这句话暗示了最主要的剧情。Angier和Borden都通过掩盖一些简单，但是残酷的事实获得了事业的成功。在回忆部分中，Borden在演出后台说：“真正的魔术师会创造出他的同行绞尽脑汁也想不出的新花样。”这句话随后成为了Borden和Angier最大的心魔。后来，Cutter嘲笑他说：你一定有这样伟大的魔术，你可以把它卖给我么？Borden说：“我当然有。但别人变不了我这个魔术。”这句话暗示了Borden最大的秘密，并提示在学徒时，他已经在那样做了。Borden先一步离开后，Angier问Cutter关于Borden从哪里来的问题。Cutter反问：你从哪里来？结合后面妻子问Angier的话：你不是也在装成别人么？Angier回答：我觉得换个名字算不上伪装。以及最后的Caldlow爵士剧情。表明Angier学徒时也掩饰了自己的过去，他本就出身贵族。这是两个人最初为魔术做出的牺牲。\n\nBorden和Sarah在鸟笼魔术后相识，这一段为观众演示了真正的鸟笼魔术，实际上是两只相同的鸟，其中一只在魔术中被杀死。这个魔术和最后Angier的瞬间移动几乎一模一样。在Borden送Sarah回家时，Borden没法到Sarah家做客而离开，Sarah关门，发现Borden已经在屋子里了。这一剧情，实际上正是后面Borden的瞬间移动魔术。也是几乎一模一样。以上仅是电影前20分钟内出现的隐喻情节，已基本暗示了整部电影的内容。此后，Angier的妻子在魔术事故中丧生，两人的恩仇故事正式展开。另外，导演在电影中还故意放置了彩蛋，当Angier从科罗拉多回到伦敦后，Cutter按他的提示，到他的排练场找他。Cutter一进屋，盲人看守听到动静，问“是谁？”在随后短暂的两个镜头中，你会看到两个一模一样的盲人看守，一个坐在杂物上，一个在瞬间移动的箱子边弯着腰。这部电影由于剧情的关系，也存在一些争议之处。比如：到底哪个Angier是真的的问题。第一次试验时，他射杀了出现在远处的Angier，但后来的表演中，每次都是在道具内的被杀。也许这里面没有真假主次之分，总之不好解释，Tesla不是说过科学存在随机性么。而电影中也提到Angier讲到，我不知道哪一次活着的是不是还是我。\n\n电影中的Tesla在历史上确有其人，早年是爱迪生的手下，曾在爱迪生公司负责研发直流电发电机，由于爱迪生狭隘的心胸，他后来在西木公司的资助下发明了交流电。随后引发直流电和交流电之争，Tesla和爱迪生决裂。\n\nBorder和特斯拉无疑都是天才，Border魔术天分非常高，但是缺乏舞台表演的天分。特斯拉发明出交流电，却不能将它和自己推广好。\n\nAngier和爱迪生无疑是最勤奋的那个，Angier无时无刻都在专研魔术，哪怕追到美国，也要追到秘密，而爱迪生的实验失败了无数次，仍然坚持不懈。\n\n没有办法说，这个世界是属于天才还是属于勤奋的人的。而导演选择了天才，或许，是因为电影出来的那一年是特斯拉诞辰150周年。\n\n不过，如果你不是天才，还不想努力，那么等待你的，只有平庸。',0,1,'public',0,1,4,NULL,114,'article'),
	(49,'小诗一首','2016-01-29 00:00:00','2018-08-27 23:49:40','或许，我们终究会有一天，挽着别人的手，忘了曾今的她。\n\n或许，曾经发过的山盟海誓，也会淹没在滔滔的江水中，不留一丝。\n\n我走在这片雪地里，望着南方。那是你的方向。\n\n爱听音乐的南方姑娘，过了年就20了吧？\n\n可是，那些因为缘分而带来的东西，也终究会缘尽别离呀。\n\n就像这北国的雪花，虽然美丽，终究也会融化。\n\n我走着，那漫天的雪花，在空中飞舞，不知疲倦。\n\n仍记得，那年秋天。\n\n落叶如疲倦的蝴蝶，我俩躺在草地上，望着​天边。\n\n你说，你要去大城市。\n\n我看着你的双眸，好想时间就停在那一刻。\n\n后来，我只身来到北方，渐渐的，淡了，淡了。\n\n远处，灯桥楼树，摇曳追逐。\n\n我说那蓝天，我依稀记得。\n\n你说那白云，藏着你的誓言。\n\n到头来不过是一场梦，别了，我心爱的姑娘。\n\n',0,1,'public',0,1,4,NULL,110,'article'),
	(50,'3D in web','2018-09-28 00:00:00','2019-01-14 05:38:56','\n\n### OpenGL介绍\n* OpenGL 是一种跨平台的图形 API，其自诞生至今已催生了各种计算机平台及设备上的数千优秀应用程序。\n* 目前OpenGL已经停止更新了，同一公司下的Vulkan引擎在将来可能会大放异彩。但是这并不妨碍我们学习WebGL与OpenGL。\n\n\n## WebGL简要介绍\n\n* WebGL是一种3D绘图协议。\n* 在Linux/Unix和MacOS上，WebGL是基于OpenGL的，而在Windows系统上，则是基于微软的DirectX。\n* 这种绘图技术标准允许把JavaScript和OpenGL ES 2.0结合在一起，WebGL可以为HTML5 Canvas提供硬件3D加速渲染，\n* 这样Web开发人员就可以借助系统显卡来在浏览器里更流畅地展示3D场景和模型。\n\n* 目前WebGL技术在各个方面都有很多应用，Google的街景地图，3D的可视化网页上的3D模型等等，像Three.js、AFrame这种3d框架也都是基于WebGL的。\n\n\n##Echarts的3D可视化例子：\n[3d可视化](http://gallery.echartsjs.com/preview.html?c=xrJHCfsfE-&v=2)\n\n\n### WebGL怎么写？\n* 着色器（Shader）\n* 程序（Program）\n* 数据（Buffer）\n\n### 着色器的介绍\n\n* 着色器程序，是运行在 GPU 中负责渲染算法的一类总称。语言是类似C语法的GLSL。因为写的代码是执行在 CPU 中的，因此，现在我们可以自豪地说，我们在写 GPU 程序...\n\n* 事实上，着色器通常是用来做一些`渲染效果`上的事，比如水面的渲染、马赛克效果、素描风格化渲染等等……\n\n\n\n着色器有两种：\n1. 顶点着色器\n2. 片段（片元）着色器\n\n* 在顶点着色器中，可以访问到顶点的三维位置、颜色、法向量等信息。可以通过修改这些值，或者将其传递到片元着色器中，实现特定的渲染效果。\n* 在片元着色器中，可以访问到片元在二维屏幕上的坐标、深度信息、颜色等信息。通过改变这些值，可以实现特定的渲染效果。\n\n\ne.g.\n\n```c\nattribute vec2 a_position;\nuniform vec2 u_resolution;\nvoid main()\n{\n    vec2 zeroToOne = a_position / u_resolution;\n    vec2 zeroToTwo = zeroToOne * 2.0;\n    vec2 clipSpace = zeroToTwo - 1.0;\n    gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);\n}\n```\n```c\nprecision mediump float;\nvoid main ()\n{\n    gl_FragColor = vec4(1, 0, 0.5, 1);\n}\n```\n写在哪里？\n1. 拼接字符串\n2. Type不为javascript的script标签中\n3. ES6中的多行字符串将着色器代码写到js中\n\n[slide style=\"text-align: left;\"]\n### 程序的介绍\nProgram是着色器的容器，我们写好着色器代码后，需要用Program将其引入到js中，并且链接，交给WebGL。\n\n* 写一个C程序的步骤：\n	\n	1. 创建一个文件(.c)\n	2. 写源代码\n	3. 编译为obj文件(.o)\n	4. 链接，成为可执行文件\n\n* 怎么写着色器程序\n\n	1. 创建一个着色器对象\n	2. 将源码放进着色器中\n	3. 编译着色器\n	4. 添加到程序中，并链接。\n\n\n```javascript\nvar vs,fs,vs_s,fs_s;\n//创建顶点着色器和片段着色器\nvs=webgl.createShader(webgl.VERTEX_SHADER);\nfs=webgl.createShader(webgl.FRAGMENT_SHADER);\n//着色器程序的源码\nvs_s=\"attribute vec4 p;void main(){gl_Position=p;}\";\nfs_s=\"void main(){gl_FragColor=vec4(1.0,0.0,0.0,1.0);}\";\n//把源码添加进着色器\nwebgl.shaderSource(vs,vs_s);\nwebgl.shaderSource(fs,fs_s);\n//编译着色器\nwebgl.compileShader(vs);\nwebgl.compileShader(fs);\n//把着色器添加到程序中\nwebgl.attachShader(program,vs);\nwebgl.attachShader(program,fs);\n//把这两个着色器程序链接成一个完整的程序\nwebgl.linkProgram(program);\n```\n\n### buffer的介绍\n```javascript\ncreatePositionBuffer = function () {\n	let b = this.gl.createBuffer();\n	this.gl.bindBuffer(this.gl.ARRAY_BUFFER, b);\n	this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.positions), this.gl.STATIC_DRAW);\n	this.positionBuffer = b;\n}\n```\nBuffer的主要作用就是存储图形所需要的数据，并且最后会传到着色器程序中。\n\n\n### 图元的介绍\n\n简单来讲，图元就是组成图像的基本单元，其实在WebGL中基本图元只有三大类，它们分别是，点、线和三角形。无论需要画什么样的图形都只能用这些图元去拼凑。\n\n三角形是最常用的图元，WebGL所有的图形都是由三角形拼成的。\n\n\n## 简单的几何学\n\n\n#### 投影\n* 在WebGL和Three.js中，都是运用的右手坐标系，对于WebGL，X方向和Y方向的坐标范围都是[-1,1]，人眼观察的方向是Z轴的负方向。\n* 投影分为正交投影和透视投影。\n* 正交投影可以理解为上帝视角，人眼在Z轴的方向内观察物体没有任何偏移，我们看到的空间是一个正方体空间，最前面和最后面的东西的大小由坐标来决定。\n* 这样是真实的，但是却不符合人眼所看到的。\n\n\n> 横看成岭侧成峰 远景高低各不同\n\n因为透视，所以我们才会在相同的物体上看到不同的景色。 怎么在我们所绘制的内容中使用透视呢？ 我们先从一张图说起：\n![perspective](/static/upload/perspective.png)\n\n\n\n假设我们人眼在EYE这个地方，往Z轴负方向看，离眼睛近的那条边的y的长度是[-1,1]，而离眼睛远的那条边的长度也是[-1,1]，这显然在透视模型中是不可能的。 所以我们要做一些变化，让我们的y根据z的不同来改变，所以这里我们假设有一个方法f(z)能够做到这一点，所以:$$f(z) = y$$,怎么来计算呢，假设我们知道FOV（机器所观察到的角度），在上图中，$$y/-z = tan(fov/2)$$;x同理$$x/-z = tan(fov/2)$$; 我们令$$f = 1/tan(fov/2)$$，故有$$y = 1/f * -z -> y = -z/f$$;\n\n\n\n有了以上知识，我们来构建我们的矩阵来将正交投影转为透视视图,这里有四个参数分别得到fov，屏幕比例，最近能够看到的点，最远能够看到的点。\n\n```javascript\nfunction perspective(fov,aspect,near,far){\n	var f = Math.tan(Math.PI/2 - fov/2);\n	var rangeInv = 1.0 / (near - far); \n\n	return [\n	//  x         y  	z  						 w \n		f/aspect, 0, 	0, 						 0,\n		0,        f, 	0, 						 0,\n		0,        0, 	(near + far)*rangeInv,  -1,\n		0,        0, 	near*far* rangeInv *2,   0\n	];\n}\n```\n\n\n#### 变换\n\n1. 平移\n\n```\n| ?  ?  ? |       | x |     | x+t |\n| ?  ?  ? |   *   | y |  =  | y+t |\n| ?  ?  ? |       | z |     | z+t |\n```\n这个矩阵怎么实现？\n\n\n\n在三维矩阵运算中，我们很难去定义这样一个矩阵满足如上的内容。 所以我们通过增加一维内容在实现平移的转换：\n\n```\n| 1  0  0  t |       | x |      | x+t |\n| 0  1  0  t |       | y |      | y+t | \n| 0  0  1  t |   *   | z |   =  | z+t |\n| 0  0  0  1 |       | 1 |      |  1  |\n```\n\n在shader中，gl_Position 的值为四维就是因为这个原因。可以通过四维矩阵乘法来保证齐次性变换\n\n2. 旋转\n\n在webGL中，旋转操作对于某个物体来说是作用于这个物体上的每个顶点相对于原点沿着某条特定的线的旋转距离。 特殊情况下为绕X，Y，Z轴，在下面的情况中我们固定z轴，得到：\n![webgl rotate](/static/upload/rotate.png)\n\n\n故对于坐标点(x0,y0,z0)和目标坐标点(xr,yr,zr),如果转动了Θ角度：\n\n$$ cos(\\alpha+\\theta) = cos\\alpha cos\\theta - sin\\alpha sin\\theta $$\n\n```\n| cosΘ  -sinΘ  0  0 |       | x |      | cosΘx0 - sinΘy0 |\n| sinΘ   cosΘ  0  0 |       | y |      | sinΘx0 + cosΘy0 | \n|    0      0  1  0 |   *   | z |   =  |  z  |\n|    0      0  0  1 |       | 1 |      |  1  |\n```\n\n3. 缩放\n\n```\n| w  0  0 |       | x |     | w * x |\n| 0  w  0 |   *   | y |  =  | w * y |\n| 0  0  w |       | z |     | w * z |\n```\n\n但是为了统一，我们还是用四维的矩阵\n\n```\n| w  0  0  0 |       | x |      | x * w |\n| 0  w  0  0 |       | y |      | y * w | \n| 0  0  w  0 |   *   | z |   =  | z * w |\n| 0  0  0  1 |       | 1 |      |   1   |\n```\n\n无论是投影还是这里的变换，都用到了矩阵的变换\n\n在WebGL中的变换方式有两种，一种是javascript阶段，一种是shader阶段，由于shader阶段是在GPU中运算，而且GLSL对于矩阵有很好的优化，所以我们选择在shader中进行运算。\n\n\n### 小结\n因为 WebGL的各种API都是过程式的，用起来各种不方便，也很容易忘记。所以还是自己封装一下，更方便使用。\n\n其实不仅仅是前端，图形渲染对于整个软件工程来说，都是一个很特定的研究领域。这就意味着，大部分情况下，你可能并没有那么迫切的需求去学习它。这也是为什么，WebGL 标准推出了那么多年，在前端的各种分享会上，即使介绍，也永远都是 Hello World。\n\n\n\n\n## Three.js简介\n\n\n一个程序：\n渲染器（Renderer）\n场景（Scene）\n照相机（Camera）\n\n### Render\n渲染器是将canvas元素和程序绑定的桥梁。一个THREE的程序，从渲染器开始，也从渲染器结束。\n\n``` javascript\nrenderer = new THREE.WebGLRenderer(\n    document.getElementById(\'canvas\')\n);\n\n...\n\nrenderer.render(scene, camera);\n```\n\n### Scene\n场景相当于一个比较大的容器，Three.js中的物体都是添加到场景中的，场景不会有很复杂的操作。\n场景通常也会很早实例化。\n```javascript\n    var scene = new THREE.Scene();\n```\n\n### camera\n照相机。什么是照相机？\n\n现实中的照相机：咔嚓\n\n程序中的照相机：3维到2维的抽象\n\ncamera定义了三维空间到二维空间的投影方式。我们刚才已经谈到过投影有正交投影和透视投影之分，照相机也分这两种。\n\n```javascript\nTHREE.OrthgrapicCamera(left, right, top, bottom, near, far); //正交投影\nTHREE.PerspectiveCamera(fov, aspect, near, far) //透视投影\n```\n\n而在webgl中，正交投影和透视投影，我们都得自己构造矩阵来进行变换，但是在Three.js中我们只需要传入特定的参数就可以。\n\ncamera有一个lookAt方法，lookAt函数接受的是一个THREE.Vector3的实例。使得相机朝指定的方向观察，关于这个函数的实现，后面和大家稍微分析一下。\n\n\n### 物体\n\n之前在WebGL，我们讲着色器分顶点着色器和片段着色器。着色器的叫法可能抽象了一点。在Three.js中，物体传入两个参数，一个是形状，一个是材质。\n\n\n#### 形状\n在WebGL中，我们构造3D图形，需要传入图元的顶点，需要考虑用哪种图元保存的数组才是最小的。\n\n在Three.js中，封装了绝大多数的形状，我们写Three.js就像写Canvas一样。\n\n```javascript\nTHREE.SphereGeometry(radius, segmentsWidth, segmentsHeight, phiStart, phiLength, thetaStart, thetaLength) \n```\n比如构造一个球体，我们只需要调用上面的构造函数就可以。radius是半径；segmentsWidth表示经度上的切片数；segmentsHeight表示纬度上的切片数；phiStart表示经度开始的弧度；phiLength表示经度跨过的弧度；thetaStart表示纬度开始的弧度；thetaLength表示纬度跨过的弧度。\n\n因为构造球体是一个近似的过程，切片数目越多 越近似于球。\n\n\n<iframe src=\"/static/upload/web-in-3d-demo2.html\" style=\"width: 800px;height:600px;\"></iframe>\n\n#### 材质\n\n材质（Material）是独立于物体顶点信息之外的与渲染效果相关的属性。通过设置材质可以改变物体的颜色、纹理贴图、光照模式等。\n\nThree.js中的材质分为基本材质、 Lambert材质、 Phong材质等。几种材质主要区别是对于光照模型的处理算法上的不同，Phong材质对于金属、镜面等镜面反射占主要的材质比较适合，Lambert则相反。基本材质则不受光照影响。\n\n\n<iframe src=\"/static/upload/web-in-3d-demo3.html\" style=\"width: 800px;height:600px;\"></iframe>\n\n继续回到形状,\n\nThree.js帮我们封装好了一些物体，Mesh（网格）是最有代表性的，由点 线 面 构成的形状，都属于网格，此外还有粒子系统等。\n```\nMesh(geometry, material) \n```\n我们直接把形状和材质传入网格的构造函数，再加入Scene中，就可以生成想要的物体了。\n\n```\nmesh.position.set(1.5, -0.5, 0); \n```\n实例上也有一些属性可以设置。\n\n\n### 动画\nHTML5提供了requestAnimationFrame方法\n\n为什么不用setInterval?\n\n\n### 光源\n0. 环境光\n1. 平行光\n2. 点光源\n3. 聚光灯\n\n<iframe src=\"/static/upload/web-in-3d-demox.html\" style=\"width: 800px;height:600px;\"></iframe>\n\n\n\n### 引入外部模型\n\n很多复杂的模型，直接用Three建立也是很有难度的,这时候通常会用3dMax或者Maya导出模型文件,用Ajax等请求的方式导入进Three.js。\n\n\n\n### 调试\nchrome之前的版本中可以开启WebGL的分析，但是新版本中并没有看到，后续可能会完善功能后推出。\n\nchrome的插件 WebGL inspector。可以分析出着色器，某一帧buffer的内容，贴图等。\n\n\n\n## Three.js 部分代码分析\n\n### lookAt 的矩阵生成\n```javascript\nTHREE.Matrix4 = function () {\n	this._x = new THREE.Vector3();\n	this._y = new THREE.Vector3();\n	this._z = new THREE.Vector3();\n};\nTHREE.Matrix4.prototype = {\n	n11: 1, n12: 0, n13: 0, n14: 0,\n	n21: 0, n22: 1, n23: 0, n24: 0,\n	n31: 0, n32: 0, n33: 1, n34: 0,\n	n41: 0, n42: 0, n43: 0, n44: 1,\n	...\n	lookAt: function ( eye, center, up ) {\n		var x = this._x, y = this._y, z = this._z;\n		z.sub( eye, center );\n		z.normalize();\n		x.cross( up, z );\n		x.normalize();\n		y.cross( z, x );\n		y.normalize();\n		this.n11 = x.x; this.n12 = x.y; this.n13 = x.z; this.n14 = - x.dot( eye );\n		this.n21 = y.x; this.n22 = y.y; this.n23 = y.z; this.n24 = - y.dot( eye );\n		this.n31 = z.x; this.n32 = z.y; this.n33 = z.z; this.n34 = - z.dot( eye );\n    },\n}\n```\n\n\n简单的数学知识：矩阵的叉乘（cross）\n\nlookAt：\n\n```\n| x.x  x.y  x.z  eye.x |       | a |      | ? |\n| x.x  x.y  x.z  eye.x |       | b |      | ? | \n| x.x  x.y  x.z  eye.x |   *   | c |   =  | ? |\n| 0    0    0    1     |       | 1 |      | ? |\n```\n\n\n\n\n\n## 总结\n\n### 用途：\n1. 酷炫的活动页（AFrame、Hilo的3d版本）\n2. 数据可视化 （Echarts的3d图表）\n3. 游戏、直播视频的处理\n。。。\n\n### 参考:\n* [Web 技术研究所](https://www.web-tinker.com/selection/)\n* [Three.js入门指南](https://read.douban.com/reader/ebook/7412854/)\n* [羡辙杂俎](http://zhangwenli.com/blog/)\n* [Ovilia](https://github.com/Ovilia)\n* [Vinthony](https://github.com/vinthony/vinthony.github.io)\n',0,1,'public',0,1,6,'3d-in-web',216,'article'),
	(51,'Node.js中的全局变量','2018-10-30 00:00:00','2019-01-04 05:03:57','之前在看阮一峰博士的`ES6标准入门`的时候，注意到一句话：\n> 全局对象的属性赋值和全局变量的赋值是一回事。（对于Node.js来说，这一条只针对REPL环境适用，环境模块中，全局变量必须显示声明成global对象的属性）\n\n今天在`segmentfault`上看到一个问题：\n[node中this的指向](https://segmentfault.com/q/1010000016494413)\n\n>问题描述\nnode下this的指向问题，其他的我都知道，不过如果直接定义局部变量呢，这个局部变量怎么获取到呢，是存放在哪里的。\n相关代码\n// 请把代码文本粘贴到下方（请勿用图片代替代码）\n```javascript\nvar name = 1\nconsole.log(name)\nconsole.log(this.name)\nconsole.log(global.name)\n```\n你期待的结果是什么？实际看到的错误信息又是什么？\n1，undefined，undefined\n\n突然就想到了Node.js中的全局变量的问题，于是准备做一下深入的调研。\n\n我们再来看阮博士的那句话，说REPL环境中和环境模块中的表现是不一样的。那么我们就去这两个场景中跑一下这段代码:\n\n```\n// REPL中\n1\n1\n1\n```\n\n```\n// 文件中\n1\nundefined\nundefined\n```\n\n果然是不一样的！突然感觉自己这些年的JS是白学了，居然会有这样的情况。\n但是仔细想想，Node中的每个文件其实都是用一个自执行函数来包起来的，也就是说这段代码在文件中的表现其实是:\n```\n(function() {\nvar name = 1\nconsole.log(name)\nconsole.log(this.name)\nconsole.log(global.name)\n})()\n```\n这样也就瞬间明白了为啥我们直接var一个变量，不会挂到全局上了。不过仔细想想也是，如果随便在js的某个文件中var一个变量，就挂到全局作用域上面也是一件细思极恐的事情了。\n\n想明白了这点,我们再来研究一下为啥在REPL中可以直接打印呢。\n我一开始猜想是REPL不会作为模块，所以也不会用自执行函数包起来，所以表现的和浏览器一样。但是猜想终归是猜想，\n\n(待续...)\n\n',0,1,'private',0,1,6,'nodejs-global',120,'article'),
	(52,'关于优化博客','2019-01-05 00:00:00','2019-01-10 11:21:49','迫于贫穷，博客挂在境外，国内的访问速度本来就比较慢，加上之前自己开发这个博客的时候都是在下班后，为了快速看到效果很多地方都没有考虑清楚，导致无论是前台还是后台都有很多问题，这也是我一直羞于开源的原因。但是底子不好不代表我们后天不努力，最近，我还是决定要将博客的体验做的更好点。首先放出目前的优化效果：\n![优化结果](/static/upload/web-optimize.jpeg)\n\n### 合并css\n之前写博客为了本地开发方便，直接用postcss自动编译，每个模块有自己的css，然后在相应的模块中引入，但是这样造成了一个页面请求多个css的情况。所以合并了css的编译结果。\n【优点】：减少了css的请求\n【缺点】：css模块化能力的缺陷导致可能会产生样式冲突。\n\n### 减少js\n个人博客，重要的是内容而不是花里胡哨。也没啥地方需要用到大的js库，能不用就不用。能不用到的地方就不用。本博客删除了除了mathJax之外的所有库文件。大大减少了js的请求。\n\n### 小图片采用base64或者雪碧图\n我的网站logo（saber）一开始我放了一张128\\*128的。。。后来我缩小到60\\*60后还是觉得效果不好，直接上了base64。\n\n### 减少ttfb的响应时间\nhttp可以分段吐出，我们可以在响应的时候，先渲染出一部分，而后渲染剩下的一部分。可以减少所谓的ttfb时间。博客首页目前就采用了分段渲染。具体的方法是因为响应本身是一个`Stream`，而在koa中也是能直接操作node.js的响应对象的，所以可做的事情还是有一点的。\n\n### servicework+cache\n强大的sw-tools，将来pwa的技术支撑，我在博客上只是草草做了一些东西，但是目前仍然有一些困难点没有解决。也就是说sw的更新问题。这个有时间得好好研究一下。\n\n### HTTP/2\n开启了`HTTP/2`，但是效果呢？并没有觉得提速的多少，大概原因是因为我的并发请求数并没有太多，然后server push我也没用到。等后期再看看效果如何。\n\n优化之路漫漫，吾将上下而求索。\n',0,1,'public',0,1,6,'web-optimize',94,'article');

/*!40000 ALTER TABLE `articles` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `name` varchar(20) NOT NULL DEFAULT '',
  `count` int(11) NOT NULL DEFAULT '0',
  `ename` varchar(20) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;

INSERT INTO `categories` (`id`, `pid`, `name`, `count`, `ename`, `created`)
VALUES
	(1,NULL,'默认分类',0,'default',NULL),
	(2,NULL,'技术',0,'tech',NULL),
	(3,NULL,'生活',0,'life',NULL),
	(4,3,'随笔',0,'suibi',NULL),
	(5,2,'C++',0,NULL,NULL),
	(6,2,'web',0,NULL,NULL),
	(7,2,'算法',0,NULL,NULL),
	(8,2,'架构',0,NULL,NULL);

/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table comments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `comments`;

CREATE TABLE `comments` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(20) NOT NULL DEFAULT '',
  `content` text,
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(20) NOT NULL DEFAULT '',
  `pid` int(11) DEFAULT NULL,
  `identity` varchar(20) DEFAULT NULL,
  `site` varchar(100) NOT NULL DEFAULT '',
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;

INSERT INTO `comments` (`id`, `type`, `content`, `name`, `email`, `pid`, `identity`, `site`, `created`)
VALUES
	(2,'article','老哥，这个代码在32位机器是不是可能出现问题呢，强行转换成(long *)把地址值取出来，不知道C++里面有没有size_t这种东西','Huspy','mierhuo@gmail.com',0,'46','https://www.mierhuo.com','2018-08-25 14:12:12'),
	(4,'article','@Huspy 嗯~~这本身就是一段有问题的代码。只是刚好趁机学习了一下虚函数表。话说文章还没写完呢哈哈哈。这两天太浪了。','luckyscript','main.lukai@gmail.com',2,'46','http://www.luckyscript.me','2018-08-26 22:24:12'),
	(5,'article','@Huspy 有size_t，定义在包含于<cstddef>中。','田所浩二','114514@yjsp.jp',2,'46','','2018-08-27 23:28:25'),
	(6,'article','虚函数的实现是实现定义的，他这样没炸只能说是巧合，换个编译器或者换个平台都可能不一样。而且D::foo的类型是void (D::)()，强转成void ()()是UB(确信)。比起搞清楚为什么没炸，数数有多少UB更加迫真有意义','田所浩二','114514@yjsp.jp',0,'46','','2018-08-27 23:40:07'),
	(7,'article','@田所浩二  ok，多谢指点~','luckyscript','main.lukai@gmail.com',6,'46','http://www.luckyscript.me','2018-08-28 08:56:38'),
	(8,'article','很棒','nilevols','-',0,'52','-','2019-01-15 02:55:53');

/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table links
# ------------------------------------------------------------

DROP TABLE IF EXISTS `links`;

CREATE TABLE `links` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `created` varchar(50) NOT NULL DEFAULT '',
  `name` varchar(50) NOT NULL DEFAULT '',
  `url` varchar(200) NOT NULL DEFAULT '',
  `categoryId` int(11) NOT NULL DEFAULT '0',
  `readnum` int(11) NOT NULL DEFAULT '0',
  `uuid` varchar(16) NOT NULL DEFAULT '' COMMENT '唯一id',
  `show` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否显示',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `links` WRITE;
/*!40000 ALTER TABLE `links` DISABLE KEYS */;

INSERT INTO `links` (`id`, `created`, `name`, `url`, `categoryId`, `readnum`, `uuid`, `show`)
VALUES
	(1,'2018-08-29 23:47:10','测试','https://www.luckyscript.me',1,66,'328c5605',1),
	(2,'2018-08-29 23:51:11','C语言字节对齐问题详解','https://www.cnblogs.com/clover-toeic/p/3853132.html',5,114,'de8a76ac',1),
	(3,'2018-08-30 08:54:20','正则表达式测试网站','https://regexr.com/',2,63,'16d2f97c',1),
	(4,'2018-08-30 11:53:56','node eventloop','https://cnodejs.org/topic/57d68794cb6f605d360105bf',6,142,'3da3389a',1),
	(5,'2018-08-30 21:09:27','C++ 引用计数技术及智能指针的简单实现','https://www.cnblogs.com/QG-whz/p/4777312.html',5,157,'304e3257',1),
	(6,'2018-08-31 15:16:45','五子棋AI教程第二版','https://github.com/lihongxun945/myblog/issues/11',2,103,'f883c3ee',1),
	(7,'2018-08-31 16:18:12','正则表达式30分钟入门教程','http://deerchao.net/tutorials/regex/regex-1.htm',2,91,'6172df17',1),
	(8,'2018-09-04 00:21:43','从暴力到 NAN 再到 NAPI——Node.js 原生模块开发方式变迁','https://www.jianshu.com/p/68b134e5ece3',6,92,'fbc2b1f9',1),
	(9,'2018-09-05 17:16:42','每天一本电子书','https://salttiger.com/',2,137,'ca1d2fc0',1),
	(10,'2018-09-05 21:27:39','MySQL索引背后的数据结构及算法原理','http://blog.jobbole.com/24006/',2,80,'da668f9f',1),
	(11,'2018-09-05 21:29:12','认识 V8 引擎','https://zhuanlan.zhihu.com/p/27628685',6,135,'cc3ae443',1),
	(12,'2018-09-07 10:21:02','C++的静态联编和动态联编','https://www.cnblogs.com/GyForever1004/p/8443241.html',5,62,'69114a2b',1),
	(13,'2018-09-10 21:22:20','2017 前端大事件和趋势回顾，2018 何去何从？','https://mp.weixin.qq.com/s/LvooedOYCJzM8G20Tlw0HQ?',6,83,'6784fdaa',1),
	(14,'2018-09-10 21:22:38','讲讲PWA','https://segmentfault.com/a/1190000012353473',6,111,'0a120293',1),
	(15,'2018-09-10 21:34:57','关于PWA落地问题的思考','https://blog.csdn.net/horkychen/article/details/67943963',6,126,'3f967dbe',1),
	(16,'2018-09-11 10:43:27','GotW #102: Exception-Safe Function Calls','https://herbsutter.com/gotw/_102/',5,80,'cb0c9304',1),
	(17,'2018-09-12 10:02:39','Memory Management part 1 of 3: The Allocator','http://allenchou.net/2013/05/memory-management-part-1-of-3-the-allocator/',5,91,'3305bb8c',1),
	(18,'2018-09-12 11:09:07','When should static_cast, dynamic_cast, const_cast ','https://stackoverflow.com/questions/332030/when-should-static-cast-dynamic-cast-const-cast-and-reinterpret-cast-be-used',5,110,'dc21d86f',1),
	(19,'2018-09-19 09:26:28','夜深人静写算法（二） - 动态规划','http://cppblog.com/menjitianya/archive/2015/10/23/212084.html',7,96,'052cd2d1',1),
	(20,'2018-09-28 16:12:19','husky git hooks','https://www.npmjs.com/package/husky',2,81,'78d9eb35',1),
	(21,'2018-09-28 16:14:33','Object.assign的正确使用','https://segmentfault.com/a/1190000013167556',6,106,'86ba6798',1),
	(22,'2018-09-29 10:26:17','Koa2进阶学习笔记','https://chenshenhai.github.io/koa2-note/',6,112,'7ba745a4',1),
	(23,'2018-09-29 11:25:01','分布式系统的事务处理','http://www.infoq.com/cn/articles/distributed-system-transaction-processing',8,75,'84f1e9c5',1),
	(24,'2018-09-30 09:02:49','跨域请求传递Cookie问题','https://www.cnblogs.com/nuccch/p/7875189.html',6,142,'fa6eb184',1),
	(25,'2018-10-25 19:07:52','在 Kindle 上阅读 RSS 新闻','http://reabble.com/',3,57,'3f0e0eb3',1),
	(26,'2018-11-27 14:26:51','C/C++面向WebAssembly编程','https://github.com/3dgen/cppwasm-book',5,61,'a5df4c7e',1),
	(27,'2019-01-05 09:17:40','网站性能分析','https://gtmetrix.com',6,27,'2c7c325f',1),
	(28,'2019-01-07 03:43:05','如何为 ThinkJS 3 网站优化 TTFB 时间','https://imququ.com/post/reduce-ttfb-on-thinkjs3-website.html',6,27,'e9ce8c91',1),
	(29,'2019-01-14 11:33:48','图说设计模式','https://github.com/me115/design_patterns',8,21,'39267d65',1),
	(30,'2019-01-16 01:03:24','Java工程师进阶知识完全扫盲','https://github.com/doocs/advanced-java',6,19,'65e3b780',1);

/*!40000 ALTER TABLE `links` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table tag_configs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tag_configs`;

CREATE TABLE `tag_configs` (
  `tag_id` int(11) unsigned NOT NULL,
  `aid` int(11) NOT NULL,
  PRIMARY KEY (`tag_id`,`aid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tag_configs` WRITE;
/*!40000 ALTER TABLE `tag_configs` DISABLE KEYS */;

INSERT INTO `tag_configs` (`tag_id`, `aid`)
VALUES
	(3,21),
	(3,31),
	(3,33),
	(3,44),
	(4,25),
	(4,32),
	(4,50),
	(5,30),
	(5,51),
	(6,35),
	(6,38),
	(6,39),
	(7,43),
	(7,45),
	(7,46),
	(8,47),
	(8,48),
	(8,49);

/*!40000 ALTER TABLE `tag_configs` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table tags
# ------------------------------------------------------------

DROP TABLE IF EXISTS `tags`;

CREATE TABLE `tags` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;

INSERT INTO `tags` (`id`, `name`)
VALUES
	(7,'C++'),
	(5,'Node'),
	(6,'函数式编程'),
	(4,'前端'),
	(8,'文学'),
	(3,'随笔');

/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table un_history
# ------------------------------------------------------------

DROP TABLE IF EXISTS `un_history`;

CREATE TABLE `un_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `date` varchar(20) DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `un_history` WRITE;
/*!40000 ALTER TABLE `un_history` DISABLE KEYS */;

INSERT INTO `un_history` (`id`, `title`, `date`, `content`)
VALUES
	(1,'使用Hexo','2015-08-20','使用Hexo，博客迁移到GitHub Pages'),
	(4,'迁移到vps','2014-11-20','在搬瓦工购买VPS，博客迁移到VPS上并且使用WordPress'),
	(5,'建站初体验','2014-10-06','1. 使用Zblog CMS 搭建博客\n\n2. 阿里云购买`6kblog.com`\n\n3. 淘宝购买一个月主机'),
	(6,'迁移到HostUS上','2015-12-10','博客迁移到HostUS上'),
	(7,'使用Hexo','2015-08-20','博客迁移到GitHub Pages'),
	(8,'微信公众号','2017-01-20','个人微信公众号开启，主要写作非技术类文章'),
	(9,'typecho上线','2017-06-20','全站开启https\n支持LATEX'),
	(10,'网站被攻击','2017-10-31','网站被攻击'),
	(11,'nblog上线','2018-07-18','自建博客nblog上线');

/*!40000 ALTER TABLE `un_history` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `mail` varchar(200) DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  `screenName` varchar(32) DEFAULT NULL,
  `created` int(10) unsigned DEFAULT '0',
  `activated` int(10) unsigned DEFAULT '0',
  `logged` int(10) unsigned DEFAULT '0',
  `group` varchar(16) DEFAULT 'visitor',
  `authCode` varchar(64) DEFAULT NULL,
  `salt` varchar(8) DEFAULT NULL COMMENT '盐值',
  PRIMARY KEY (`uid`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `mail` (`mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`uid`, `name`, `password`, `mail`, `url`, `screenName`, `created`, `activated`, `logged`, `group`, `authCode`, `salt`)
VALUES
	(1,'luckyscript','7dc65716b991c95effcbd2ae623268ae','main.lukai@gmail.com','http://www.luckyscript.me','luckyscript',0,0,0,'admin',NULL,'xyd');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
