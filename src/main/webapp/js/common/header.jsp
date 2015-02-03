<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- import -->
<%@page import="java.util.*"%>
<%@page import="com.surfilter.flood.maintain.entity.User"%>
<!-- jsp标签 -->
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!-- 作用域变量 -->
<c:set var="ctx" value="${pageContext.request.contextPath}" />
<c:set var="resourceRoot" value="${ctx}" />
<!-- 以下为HTML document -->
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Cache-Control" content="no-store" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<!--****************************************第三方资源引入 start，请注意引入顺序****************************************-->
<!-- jQuery -->
<script type="text/javascript" src="${ctx }/static/jquery/jquery-1.9.1.min.js"></script>
<!-- jQuery-validation -->
<script src="${ctx}/static/jquery-validation/1.11.1/jquery.validate.min.js" type="text/javascript"></script>
<script src="${ctx}/static/jquery-validation/1.11.1/messages_bs_zh.js" type="text/javascript"></script>
<!-- bootstrap -->
<script src="${ctx}/static/bootstrap/2.3.2/js/bootstrap.min.js" type="text/javascript"></script>
<!-- easyui -->
<script src="${ctx}/static/easyui/jquery.easyui.min.js" type="text/javascript"></script>

<!-- 系统css -->
<link href="${ctx}/static/bootstrap/2.3.2/css/bootstrap.min.css" type="text/css" rel="stylesheet" />
<link href="${ctx}/static/jquery-validation/1.11.1/validate.css" type="text/css" rel="stylesheet" />
<link href="${ctx}/static/styles/default.css" type="text/css" rel="stylesheet" />
<!-- easyui css -->
<link href="${ctx }/static/easyui/easyui.css" rel="stylesheet" type="text/css" />
<!--****************************************第三方资源引入 end，请注意引入顺序****************************************-->
<!-- 系统图片 -->
<link type="image/x-icon" href="${ctx}/static/images/favicon.ico" rel="shortcut icon">
<!--****************************************JavaScript引入 start，请注意引入顺序****************************************-->
<!-- Surfilter.js库文件 -->
<script type="text/javascript" src="${resourceRoot }/js/Surfilter.js"></script>
<!-- 自定义jQuery扩展 -->
<script type="text/javascript" src="${resourceRoot }/js/Surfilter.jquery.ex.js"></script>
<!-- 自定义jQuery easyui扩展 -->
<script type="text/javascript" src="${resourceRoot }/js/Surfilter.easyui.ex.js"></script>
<!-- JavaScript原型扩展 -->
<script type="text/javascript" src="${resourceRoot }/js/Surfilter.javascript.ex.js"></script>
<!-- easyui 校验扩展 -->
<script type="text/javascript" src="${resourceRoot }/js/Surfilter.easyui.validate.js"></script>
<!-- --------------------自定义模块--------------------- -->
<script type="text/javascript" src="${resourceRoot }/modules/common/listModule.js"></script>
<!------------------------入口模块------------------------->
<script type="text/javascript" src="${resourceRoot }/modules/Main.js"></script>
<!--****************************************JavaScript引入 end****************************************-->
<!--系统初始化javascript代码块start-->
<script type="text/javascript">
	var ctx = '${ctx }';
	var resourceRoot = '${resourceRoot }';
	var nowServerTime = <%=new Date().getTime() %>;
	
	//encache userInfo
	<%User currentUser = (User)session.getAttribute("UserSession");if(currentUser == null){currentUser = new User();}%>
	Surfilter.currentUser = 
<%-- 	{
		userId : <%= currentUser.getId()%>,
		isAdmin : '<%=UserAction.isAdmin(currentUser)%>',
		loginName : '<%=currentUser.getLoginName()%>',
		provinceId : <%=currentUser.getProvinceId()%>,
		cityId : <%=currentUser.getCityId()%>,
	}; --%>
</script>
<!--系统初始化javascript代码块end-->
