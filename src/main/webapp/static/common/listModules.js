Surfilter.define("common.listModules",{
	/**
	 * 模块名称
	 */
	moduleName : '列表模块',
	
	/**
	 * 基类初始化方法
	 */
	init : function(){
		//引用自身，以防在子域中this冲突混乱
		var me = this;
		//特有的作为form和grid的标示
		me.$form = $('[UI-Module=listForm]');
		me.$grid = $('[UI-Module=listGrid]');
		
		me.$form.keypress(function(event){
			if(event.keyCode == 13){
				me.query();
				event.preventDefault();
			}
		});
		
		me.find("button:contains('查询')").click(function(){
				me.query();
		});
		
		me.find("button:contains('重置')").click(function(){
			me.reset();
		});
		
		me.$form.find('.combobox-f').combobox({
			
		});
	},
	
	/**
	 * 查询
	 */
	query : function() {
		
	},
	
	/**
	 * 重置查询条件
	 */
	reset : function() {
		
	},
	
	/**
	 * 重设列表区尺寸
	 */
	resetGridSize : function(){
		
	}
},true)