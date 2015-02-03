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
		// 菜单缓存,暂时写死
		Surfilter.menus = [{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/front/front.jsp","children":[],"text":"起始页","leaf":true,"iconCls":"ico-home","memo":null}],"text":"首页","leaf":false,"iconCls":"","memo":null},{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/businessCenter/auditUrl/contentManageTab.jsp","children":[],"text":"引导链接审核","leaf":true,"iconCls":"ico-ycgl","memo":null},{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/businessCenter/newsGuide/commentPraise/commentPraiseTab.jsp?","children":[],"text":"评论置热","leaf":true,"iconCls":"ico-plzr","memo":null},{"checked":null,"expanded":true,"id":"/businessCenter/newsGuide/batchReply/batchReplyList.jsp","children":[],"text":"批量回复","leaf":true,"iconCls":"ico-plhf","memo":null}],"text":"新闻引导","leaf":false,"iconCls":"ico-wzgl","memo":null},{"checked":null,"expanded":true,"id":"/businessCenter/twitterGuide/twitterGuideTab.jsp","children":[],"text":"微博引导","leaf":true,"iconCls":"ico-wbgl","memo":null},{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/businessCenter/appGuide/appPraise/appPraiseTab.jsp","children":[],"text":"APP评论置热","leaf":true,"iconCls":"ico-appplzr","memo":null},{"checked":null,"expanded":true,"id":"/businessCenter/appGuide/appBatchReply/appBatchReplyList.jsp","children":[],"text":"APP批量回复","leaf":true,"iconCls":"ico-appplhf","memo":null}],"text":"APP引导","leaf":false,"iconCls":"ico-appyd","memo":null},{"checked":null,"expanded":true,"id":"/businessCenter/vote/voteTaskList.jsp","children":[],"text":"投票","leaf":true,"iconCls":"ico-tp","memo":null},{"checked":null,"expanded":true,"id":"/businessCenter/voteMaintain/voteMaintainList.jsp","children":[],"text":"投票维护","leaf":true,"iconCls":"ico-tp","memo":null},{"checked":null,"expanded":true,"id":"/businessCenter/tempVote/voteTaskList.jsp","children":[],"text":"临时投票","leaf":true,"iconCls":"ico-tp","memo":null},{"checked":null,"expanded":true,"id":"/businessCenter/taskExecuteInfo/taskExecuteInfoList.jsp","children":[],"text":"任务执行状态","leaf":true,"iconCls":"ico-zxjrz","memo":null},{"checked":null,"expanded":true,"id":"/businessCenter/searchGuide/searchGuideList.jsp","children":[],"text":"搜索引导","leaf":true,"iconCls":"ico-ycgl","memo":null},{"checked":null,"expanded":true,"id":"/businessCenter/keywordGuide/keyWordGuideList.jsp","children":[],"text":"联想词引导","leaf":true,"iconCls":"ico-ycgl","memo":null}],"text":"任务中心","leaf":false,"iconCls":"","memo":null},{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/manageCenter/topicManage/topicManageList.jsp","children":[],"text":"主题管理","leaf":true,"iconCls":"ico-ztgl","memo":null},{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/manageCenter/accountManage/bigAccountManage/bigAccountManageList.jsp","children":[],"text":"大号管理","leaf":true,"iconCls":"ico-dhgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/accountManage/smallAccountManage/smallAccountManageTab.jsp","children":[],"text":"小号管理","leaf":true,"iconCls":"ico-xhgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/accountManage/autoRegister/autoRegisterList.jsp","children":[],"text":"自动注册","leaf":true,"iconCls":"ico-zhgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/accountManage/registerTotal/registerTotalList.jsp","children":[],"text":"注册统计","leaf":true,"iconCls":"ico-zhgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/accountManage/smallAccountManage/smallAccountActiveList.jsp","children":[],"text":"帐号活跃","leaf":true,"iconCls":"ico-dhgl","memo":null}],"text":"账号管理","leaf":false,"iconCls":"ico-zhgl","memo":null},{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/manageCenter/materialManage/eventMaterialList.jsp","children":[],"text":"事件舆材","leaf":true,"iconCls":"ico-sjycgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/materialManage/netmanMaterialList.jsp","children":[],"text":"网民回复舆材","leaf":true,"iconCls":"ico-wmhfgl","memo":null},{"checked":null,"expanded":true,"id":"/manageCenter/materialManage/greateMaterialList.jsp","children":[],"text":"优秀舆材","leaf":true,"iconCls":"ico-yxycgl","memo":null}],"text":"舆材管理","leaf":false,"iconCls":"ico-ycgl","memo":null}],"text":"管理中心","leaf":false,"iconCls":"","memo":null},{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/statisticsAnalysis/reportManage/reportManageList.jsp","children":[],"text":"报表管理","leaf":true,"iconCls":"ico-bbgl","memo":null},{"checked":null,"expanded":true,"id":"/statisticsAnalysis/reportManage/totalityStatistics.jsp","children":[],"text":"总体统计","leaf":true,"iconCls":"ico-zttj","memo":null},{"checked":null,"expanded":true,"id":"/statisticsAnalysis/workstat/workstat.jsp","children":[],"text":"绩效考核","leaf":true,"iconCls":"ico-jxkh","memo":null}],"text":"统计分析","leaf":false,"iconCls":"","memo":null},{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/configCenter/siteConfig/siteConfigList.jsp","children":[],"text":"网站配置","leaf":true,"iconCls":"ico-wzgl","memo":null},{"checked":null,"expanded":true,"id":"/configCenter/fieldManage/fieldList.jsp","children":[],"text":"领域管理","leaf":true,"iconCls":"ico-lygl","memo":null},{"checked":null,"expanded":true,"id":"/configCenter/lanIpManage/lanIpList.jsp","children":[],"text":"内网IP管理","leaf":true,"iconCls":"ico-ipgl","memo":null},{"checked":null,"expanded":true,"id":"/configCenter/wanIpManage/wanIpList.jsp","children":[],"text":"外网IP管理","leaf":true,"iconCls":"ico-ipgl","memo":null},{"checked":null,"expanded":true,"id":"/configCenter/areaManage/areaList.jsp","children":[],"text":"地域管理","leaf":true,"iconCls":"ico-dygl","memo":null},{"checked":null,"expanded":true,"id":"/configCenter/scriptManage/scriptList.jsp","children":[],"text":"脚本管理","leaf":true,"iconCls":"ico-jbgl","memo":null},{"checked":null,"expanded":true,"id":"/configCenter/propertyConfig/propertyConfig.jsp","children":[],"text":"参数配置","leaf":true,"iconCls":"ico-cspz","memo":null},{"checked":null,"expanded":true,"id":"/configCenter/socialWebsiteManage/socialWebsiteList.jsp","children":[],"text":"社交网站管理","leaf":true,"iconCls":"ico-wzgl","memo":null},{"checked":null,"expanded":true,"id":"/configCenter/policyConfig/policyConfigList.jsp","children":[],"text":"策略配置","leaf":true,"iconCls":"ico-pzcl","memo":null}],"text":"配置中心","leaf":false,"iconCls":"","memo":null},{"checked":null,"expanded":true,"id":"","children":[{"checked":null,"expanded":true,"id":"/systemManage/userManage/userList.jsp","children":[],"text":"用户管理","leaf":true,"iconCls":"ico-user","memo":null},{"checked":null,"expanded":true,"id":"/systemManage/roleManage/roleList.jsp","children":[],"text":"角色管理","leaf":true,"iconCls":"ico-jsgl","memo":null},{"checked":null,"expanded":true,"id":"/systemManage/systemLog/systemLogList.jsp","children":[],"text":"系统日志","leaf":true,"iconCls":"ico-xtrz","memo":null},{"checked":null,"expanded":true,"id":"/systemManage/executeMachineLog/executeMachineLogList.jsp","children":[],"text":"执行机日志","leaf":true,"iconCls":"ico-zxjrz","memo":null},{"checked":null,"expanded":true,"id":"/systemManage/accountOperateLog/accountOperateLogList.jsp","children":[],"text":"账号操作日志","leaf":true,"iconCls":"ico-zhczrz","memo":null},{"checked":null,"expanded":true,"id":"/systemManage/activeLog/activeLogList.jsp","children":[],"text":"活跃日志","leaf":true,"iconCls":"ico-hyrz","memo":null},{"checked":null,"expanded":true,"id":"/systemManage/codeRecord/coderRecordList.jsp","children":[],"text":"打码记录","leaf":true,"iconCls":"ico-bbgl","memo":null},{"checked":null,"expanded":true,"id":"/systemManage/callproceduce/callProceduce.jsp","children":[],"text":"调用存储过程","leaf":true,"iconCls":"ico-hyrz","memo":null},{"checked":null,"expanded":true,"id":"/systemManage/backdata/backdata.jsp","children":[],"text":"备份表","leaf":true,"iconCls":"ico-hyrz","memo":null}],"text":"系统管理","leaf":false,"iconCls":"","memo":null}];
		/**
		 * 重新建立一级菜单 HTML格式如下
		 * <li><a href="#">任务管理</a></li>
		 */
		$('.nav ul').children().remove();
		$(Surfilter.menus).each(function(firstLevelIndex,firstLevelMenu){//遍历菜单数组
			$('<li><a href="#">'+ firstLevelMenu.text +'</a></li>').appendTo('.nav ul').click(function(){
				// 显示二级菜单
				$('.main').css({'margin-left' : '177px'}).find('.main-left').show();
				
				$(this).siblings().removeClass('hover').end().addClass('hover');
				
				// 二级菜单顶部横幅 HTML格式 <span class="often-ico"></span>常用功能
				$('.main-left .sidebar-title').html('<i class="sidebar-titleIco"></i>' + $(this).text());
				/**
				 * 重新建立二级菜单 HTML格式如下 
				 * 无三级菜单 <li><a href="#"><i class="ico ico-fzh"></i>发转回</a></li>
				 * 有三级菜单 <li><a href="#"><i class="ico ico-fzh"></i>发转回</a><ul>……</ul></li>
				 */ 
				$('.main-left>ul').children().remove();
				$(Surfilter.menus[firstLevelIndex].children).each(function(secondLevelIndex,secondLevelMenu){
					$secondMenu = $('<li><a href="#"><i class="ico ' + secondLevelMenu.iconCls + '"></i>' + secondLevelMenu.text + '</a></li>');
					$secondMenu.click(function(){//给二级菜单绑定click事件
						$(this).siblings().removeClass('unfold').removeClass('hover').children('ul').hide();
					});
					// 有三级菜单就构建三级菜单
					if(secondLevelMenu.children.length > 0){ 
						$secondMenu.click(function(event){
						$(this).addClass('unfold').children('ul').show();
						$(this).children('ul').find('li:first').click();//触发三级菜单的click事件
					});
						
						$thirdMenu = $('<ul/>');//三级菜单
						$.each(secondMenu.children,function(thirdLevelIndex,thirdLevelMenu){
							$('<li><a href="#"><i class="ico ' + thirdLevelMenu.iconCls + '"></i>' + thirdLevelMenu.text + '</a></li>').appendTo($thirdMenu).click(function(event){
								$(this).siblings().removeClass('hover').end().addClass('hover');
								Surfilter.main.loadModule(thirdLevelMenu);
								event.stopPropagation(); // 阻止事件冒泡，避免同步触发二级菜单点击事件
							});
						});
						// 追加三级菜单
						$thirdMenu.appendTo($secondMenu); 
					}else{
						$secondMenu.click(function(){
						$(this).addClass('hover');
						Surfilter.main.loadModule(secondLevelMenu);
					});
				}
				// 追加二级菜单
				$secondMenu.appendTo('.main-left>ul');
				});
				
				// 点击一级菜单时默认点击第一个二级菜单
				$('.main-left ul li:first').click();
			});
		});
	},
	
	/**
	 * 加载菜单项
	 */
	loadModule : function(menu){
		this.getPage('modules/' + menu.id);
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
		$(Surfilter.getTopBody()).find('#mainPage').get(0).src = resourceRoot + path;
	},
	
	/**
	 * 模拟菜单点击
	 */
	clickMenu : function(firstMenu, secondMenu, thirdMenu) {
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