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
			iconCls : 'btn btn-success',
			handler : function(){
				me.showEditWindow("新增用户",null,1);
			}
		},{
			text : "修改",
			iconCls : 'btn btn-info',
			handler : function(){
				var sels = $("[UI-Module=listGrid]").datagrid("getChecked");
				if (sels.length != 1) {
					//Surfilter.easyuiUtil.pushMessage("必须且只能选择一个账号进行编辑操作");
					model("Surfilter_i18n_message_common_pleaseSelectOnlyOne");
					return;
				}
				me.showEditWindow("修改用户",sels[0],2);
			}
		},{
			text : "删除",
			iconCls : 'btn btn-danger',
			handler : function(){
				this.deleteUser();
			}
		}];
		
		me.$grid.datagrid({
			url : ctx + '/admin/user/listUser',
			toolbar : toolbar,
			height : 300,
			fit : true,
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
			queryParams : me.$form.getFormValues()
		});
	},
	
	/**
	 * 初始化编辑窗口
	 */
	showEditWindow : function(operate,data,operateId){
		var me = this;
		var $window = tipsWindown(operate + " " + me.moduleName,"id:listWindow","500","400%","true","","true","");
		if(operate == 'Surfilter_i18n_operate_common_update'){
			$window.find('input[name=loginName]').attr("readonly",'readonly');
		}
		// 初始化验证条件
		$window.find('input[name=loginName]').validatebox({required:true});
		$window.find('input[name=name]').validatebox({required:true});
		// 所属地区
		$window.find('input#province').combobox({
			valueField:'id',
			textField:'region',
			url : ctx + '/config/area!listAllProvince.action',
			onSelect: function(rec){
				// 加载城市
				var id = $window.find('input#province').combobox('getValue');
				var url = ctx + '/config/area!listAllCity.action?id='+id;
				$window.find('input#city').combobox({
				    url:url,
				    valueField:'id',
				    textField:'region'
				});
	        }
		});
		$window.find('input#city').combobox();
		//初始化角色树
		$window.find("#user-info-tree").tree({
			url : ctx + "/account/role!listNode.action",
			checkbox : true
		});
		//检查并设置Ukey
//		if(!data){
//			Surfilter.systemManage.userManage.fillUkey();
//		}
		// 保存按钮
		$window.find('.tipswindown-btn button').eq(0).click(function(){
			$window.find('form').form('submit', {
				method : 'post',
				url: ctx + '/account/user!saveUser.action',
				onSubmit: function(param){
					// 角色权限
					var checkedIds = [];
					$.each($window.find('#user-info-tree').tree('getChecked','indeterminate'),function(index,item){
						checkedIds.push(item.id);
					});
					$.each($window.find('#user-info-tree').tree('getChecked'),function(index,item){
						checkedIds.push(item.id);
					});
					param.checkedRoleIds = checkedIds;
					if(checkedIds.length==0){
						Surfilter.easyuiUtil.pushMessage("请选择角色");
						return false;
					}else{
						if(!checkedIds.some(function(data){if(data==2) return true;})){
							if(!$window.find("#province").combobox("getSelected")){
								Surfilter.easyuiUtil.pushMessage("创建省级管理员请选择地区");
								return false;
							}
						}
					}
					return $(this).form('validate');
				},
				success: function(data){
					data = eval('(' + data + ')');
					Surfilter.easyuiUtil.pushMessage(data.description);
					if(data.ok){
						me.$grid.datagrid("reload");
						closeTipsWindown();
					}
				}
			});
		});
		// 重置按钮
		$window.find('.tipswindown-btn button').eq(1).click(function(){
			$window.find('input[name=ukeyId]').val(data ? data.ukeyId : '');
			$window.find('input[name=ukeyData]').val(data ? data.ukeyData : '');
			$window.find('input[name=id]').val(data ? data.id : '');
			$window.find('input[name=areaId]').val(data ? data.areaId : '');
			$window.find('input[name=loginName]').val(data ? data.loginName : '');
			$window.find('input[name=name]').val(data ? data.name : '');
			$window.find('input[name=phone]').val(data ? data.phone : '');
			$window.find('input[name=tel]').val(data ? data.tel : '');
			$window.find('input[name=fax]').val(data ? data.fax : '');
			$window.find('input[name=email]').val(data ? data.email : '');
			$window.find('input[name=workAddress]').val(data ? data.workAddress : '');
			
			if(operateId==2){
			if(data && data.provinceId){
				$window.find('input#province').combobox('setValue',data.provinceId).combobox('options').onSelect();
			}
			if(data && data.cityId){
				$window.find('input#city').combobox('setValue',data.cityId);
			}
			if(data && data.roleIds){
				setTimeout(function(){
					for (index in data.roleIds) {
						$window.find('#user-info-tree').tree('check',$window.find('#user-info-tree').tree('find',data.roleIds[index]).target );
					}
				},500);
				$window.find('#user-info-tree').tree('reload');
			}
		  }else if(operateId==1){
			  $window.find('input#province').combobox('setValue','');
			  $window.find('input#city').combobox('setValue','');
			  $window.find('#user-info-tree').tree('reload');
		  }
		}).click();
	},
	
	deleteUser : function(){
		
	}
})