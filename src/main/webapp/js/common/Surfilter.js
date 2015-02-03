(function(){
	// 避免低版本浏览器不支持控制台console对象
	var console  = this.console || {
		log : function(){
		}
	}
	
	// 顶级命名空间
	var Surfilter = this.Surfilter || {};
	
	(function(){
		this.version = 1.0;
		/**
		 * 定义命名空间
		 * 
		 * @name 命名空间
		 * @content 定义对象
		 */
		this.ns = this.namespace = function(name, content, ingoreInit){
			var names, defineObject, defineJsCode;
			names = name.split(".");//将传入的模块名用"."切开
			for(var i = 0; i < names.length; i++){//例如name=a.b.c
				for(j = 0; j < i + 1; j++){
					defineName = "." + names[j];//那么这里，defineName依次是.a,.a.b,.a.b.c
				}
				defineName = "Surfilter" + defineName;
				defineJsCode = defineName + "=" + defineName + "|| {}";
				eval(defineJsCode);//执行构造的Js代码，创建对象
				
				// 最深层的对象定义
				if (i == names.length - 1) {//Surfilter.a.b.c
					result = eval(defineName);
					// 继承
					if (content.extend) {//如果content对象有extend对象
						for (v in content.extend) {//遍历父类的对象
							result[v] = content.extend[v];//依次拿到父类的个各属性的值，给子类
						}
					}
					if(content && typeof  content == "object"){
						for(v in content){//遍历自己类的content
							result[v] = content[v];//将content中的对象都依次给自己类持有，如果有与父类相同的属性，则覆盖父类
						}
					}
					console.log(defineName + ' has been defined',eval(defineName));
					
					// 是否忽略初始化
					if (!ingoreInit) {
						$(function(){
								if(eval(defineName + '.init')){//如果init存在
								console.log('Call ' + defineName + '.init()');
								eval(defineName + '.init();');//调用init()方法
							}
						})
					}
				}
			}
		}
		/**
		 * 定义模块
		 * 
		 * @moduleName 模块名称
		 * @content 模块对象
		 */
		this.define = function(){//给一个前缀"modules"，代表是模块
			return this.namespace('modules.' + moduleName, content, ingoreInit);//为的是将模块与扩展的工具对象分开
		}
		
		/**
		 * JS热加载
		 */
		this.loadJs = function(src, callback){
			var script = document.createElement("script");
			script.type = "text/javascript";
			script.language = "javascript";
			script.src = src;
			script.onload = script.onreadystatechange = function(){
				if (!script.readyState || script.readyState == "loaded"
					|| script.readyState == "complete") {
				callback.call(script);
			}
			}
			document.getElementsByTagName('head')[0].appendChild(script);
		}
		
		/**
		 * CSS热加载
		 */
		this.loadCSS = function(src){
			var script = document.createElement("link");//创建引入css的元素
			script.rel = "stylesheet";
			script.type = "text/css";
			script.media = "screen";//媒体类型
			script.href = src;
			document.getElementsByTagName("head")[0].appendChild(script);
		}
		
		/**
		 * 获取顶级window
		 */
		this.getTopWindow = function(){
			var top = window;
			while(top != top.parent){
				top = top.parent;
			}
			return top;
		}
		
		/**
		 * 获取顶级window的document
		 */
		this.getTopDocument = function(){
			return this.getTopWindow().document;
		}
		
		/**
		 * 获取顶级window的document的body
		 */
		this.getTopBody = function(){
			return this.getTopDocument().body;
		}
		
	}).call(Surfilter);//使用Surfilter来调用这个方法，用Surfilter来持有里面的变量
	console.log("Surfilter.js has been defined",Surfilter);
}).call(window)//让window成为这个方法的调用者，持有里面的变量