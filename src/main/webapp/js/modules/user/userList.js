Surfilter.define("user.userList",{
	/**
	 * 模块名称
	 */
	moduleName : '用户管理模块',
	
	/**
	 * 继承公共列表模块
	 */
	extend : Surfilter.modules.common.listModules,
	
	/**
	 * 初始化列表
	 */
	initGrid : function() {
		var me = this;
		
		var toolbar = [{
			text : '新增',
			iconCls : 'ico-add',
			handler : function(){
				
			}
		},{
			text : "修改",
			iconCls : 'ico-add',
				handler : function(){
				
			}
		},{
			text : "删除",
			iconCls : 'ico-add',
				handler : function(){
				
			}
		}];
		
		me.$grid.datagrid({
			url : ctx + '/admin/user/listUser',
			toolbar : toolbar,
			frozenColumns : [ [ {
				field : 'ck',
				checkbox : true
			} ] ],
			columns : [[{
				title : 'ID',
				field : 'id',
				align : 'center'
			},{
				title : '账号',
				field : 'loginName',
				width : 1,
				align : 'center'
			},{
				title : '姓名',
				field : 'name',
				width : 1,
				align : 'center'
			},{
				title : '注册日期',
				field : 'registerDate',
				width : 1,
				align : 'center'
			}]],
			queryParams : me.$form.getFormValues(),
			onLoadSuccess:function(data){
				me.$grid.find(".datagrid-wrap").css({width:1100,height:300});
			}
		});
	}
})