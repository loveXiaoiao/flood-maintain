Surfilter.ns("main",{
	
	/**
	 * 初始化
	 */
	init : function(){
		// 初始化菜单
		this.initMenu();
	},
	
	/**
	 * 菜单初始化
	 */
	initMenu : function(){
		Surfilter.menus = "";
		$.ajax({
			url : ctx +  "/menu/getMenu",
			async : false,
			success : function(data){
				Surfilter.menus = data;
			}
		});
/*		 = [{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/manageCenter/accountManage/bigAccountManage/bigAccountManageList.jsp","children":[],"text":"大号管理","leaf":true,"iconCls":"ico-dhgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/accountManage/smallAccountManage/smallAccountManageTab.jsp","children":[],"text":"小号管理","leaf":true,"iconCls":"ico-xhgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/accountManage/autoRegister/autoRegisterList.jsp","children":[],"text":"自动注册","leaf":true,"iconCls":"ico-zhgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/accountManage/registerTotal/registerTotalList.jsp","children":[],"text":"注册统计","leaf":true,"iconCls":"ico-zhgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/accountManage/smallAccountManage/smallAccountActiveList.jsp","children":[],"text":"帐号活跃","leaf":true,"iconCls":"ico-dhgl","memo":null}],"text":"账号管理","leaf":false,"iconCls":"ico-zhgl","memo":null},{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/manageCenter/materialManage/eventMaterialList.jsp","children":[],"text":"事件舆材","leaf":true,"iconCls":"ico-sjycgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/materialManage/netmanMaterialList.jsp","children":[],"text":"网民回复舆材","leaf":true,"iconCls":"ico-wmhfgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/materialManage/greateMaterialList.jsp","children":[],"text":"优秀舆材","leaf":true,"iconCls":"ico-yxycgl","memo":null}],"text":"舆材管理","leaf":false,"iconCls":"ico-ycgl","memo":null}],"text":"管理中心","leaf":false,"iconCls":"","memo":null}];*/
		/**
		 * 重新建立一级菜单 HTML格式如下
		 * <li><a href="#">任务管理</a></li>
		 */
		$('.navbar-inner ul').children().remove();
		$(Surfilter.menus).each(function(firstLevelIndex,firstLevelMenu){//遍历菜单数组
			$('<li class="active"><a href="#">'+ firstLevelMenu.text +'</a></li>').appendTo('.navbar-inner ul').click(function(){
				// 显示二级菜单
				$('.container-fluid').find('.span2').show();
				
				$(this).siblings().removeClass('active').end().addClass('active');
				
				// 二级菜单顶部横幅 HTML格式 <span class="often-ico"></span>常用功能
				$('.sidebar-nav > .nav-header').html($(this).text());
				/**
				 * 重新建立二级菜单 HTML格式如下 
				 * 无三级菜单 <li><a href="#"><i class="ico ico-fzh"></i>发转回</a></li>
				 * 有三级菜单 <li><a href="#"><i class="ico ico-fzh"></i>发转回</a><ul>……</ul></li>
				 */ 
				$('.sidebar-nav > ul').children().remove();
				$(Surfilter.menus[firstLevelIndex].children).each(function(secondLevelIndex,secondLevelMenu){
					$secondMenu = $('<li><a href="#"><i class="ico ' + secondLevelMenu.iconCls + '"></i>' + secondLevelMenu.text + '</a></li>');
					$secondMenu.click(function(){//给二级菜单绑定click事件
						$(this).siblings().removeClass('unfold').removeClass('active').children('ul').hide();
					});
					// 有三级菜单就构建三级菜单
					if(secondLevelMenu.children.length > 0){ 
						$secondMenu.click(function(event){
						$(this).children('ul').show();
						$(this).children('ul').find('li:first').click();//触发三级菜单的click事件
					});
						
						$thirdMenu = $('<ul class="nav nav-list"/>');//三级菜单
						$.each(secondLevelMenu.children,function(thirdLevelIndex,thirdLevelMenu){
							$('<li><a href="#"><i class="ico ' + thirdLevelMenu.iconCls + '"></i>' + thirdLevelMenu.text + '</a></li>').appendTo($thirdMenu).click(function(event){
								$(this).siblings().removeClass('active').end().addClass('active');
								Surfilter.main.loadModule(thirdLevelMenu);
								event.stopPropagation(); // 阻止事件冒泡，避免同步触发二级菜单点击事件
							});
						});
						// 追加三级菜单
						$thirdMenu.appendTo($secondMenu); 
					}else{
						$secondMenu.click(function(){
						$(this).addClass('active');
						Surfilter.main.loadModule(secondLevelMenu);
					});
				}
				// 追加二级菜单
				$secondMenu.appendTo('.sidebar-nav > ul');
				});
				
				// 点击一级菜单时默认点击第一个二级菜单
				$('.sidebar-nav > ul li:first').click();
			});
		});
	},
	
	/**
	 * 加载菜单项
	 */
	loadModule : function(menu){
		this.getPage(ctx + menu.id);
		$(Surfilter.getTopBody()).find('.main-left').css({width:200});
		$(Surfilter.getTopBody()).find('.main').css({marginLeft:200});
	},
	
	/**
	 * 加载JSP至主界面
	 */
	getPage : function(path,hideMenu){
		if(hideMenu){
			$(Surfilter.getTopBody()).find('.main-left').css({width:0});
			$(Surfilter.getTopBody()).find('.main').css({marginLeft:10});
		}
		$(Surfilter.getTopBody()).find('div.main').height(Surfilter.getTopBody().clientHeight - $(Surfilter.getTopBody()).find('div.header').height() - 5);
		$(Surfilter.getTopBody()).find('#mainPage').get(0).src = resourceRoot + "/jump/user_userList";
		$(Surfilter.getTopBody()).find('#mainPage').css({width:1100,height:500});
	},
	
	/**
	 * 模拟菜单点击
	 */
	clickMenu : function(firstMenu, secondMenu, thirdMenu) {//依次相应知道点击到顶级菜单对应的第一个叶子菜单
		if(!firstMenu)return;
		$(Surfilter.getTopBody()).find('.nav li').each(function(index, item) {
			if ($(item).text() == firstMenu) {
				$(item).click();
				if(!secondMenu)return;
				$(Surfilter.getTopBody()).find('.main-left>ul>li').each(function(index, item) {
					if ($(item).children('a').text() == secondMenu) {
						$(item).click();
						if(!thirdMenu)return;
						$(Surfilter.getTopBody()).find('.main-left>ul>li>ul>li').each(function(index, item) {
							if ($(item).children('a').text() == thirdMenu) {
								$(item).click();
							}
						});
					}
				});
			}
		});
	}

},true);