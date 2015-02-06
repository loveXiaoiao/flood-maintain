<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/views/layouts/header.jsp" %>
<script
	src="${resourceRoot }/js/modules/user/userList.js"></script>
<!-- 条件查询 -->
<div class="">
	<form UI-Module="listForm">
		<span class="list-search-ico"></span> 
		<span>
			<label class="navbar-text">账号名：</label>
			<input class="span2" type="text" name="search_LIKE_loginName" style="width: 100px;"></input>
		</span> 
		<span>
			<button type="button" class="btn">查询</button>
			<button type="button" class="btn">重置</button>
		</span>
	</form>
</div>
<!-- 列表区域 -->
<div class="list padding20">
	<table UI-Module="listGrid">
	</table>
</div>
