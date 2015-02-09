<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/views/layouts/header.jsp" %>
<script
	src="${resourceRoot }/js/modules/user/userList.js"></script>


<div id="myAlertSuccess" class="alert alert-success hide">
<strong id="warningAlertMsg">成功!</strong>
<button type="button" class="close" onclick='javascript: $("#myAlertSuccess").hide();'>
  <span aria-hidden="true">&times;</span>
</button>
</div>

<div id="myAlertInfo" class="alert alert-info hide">
<strong id="infoAlertMsg">信息!</strong>
<button type="button" class="close" onclick='javascript: $("#myAlertInfo").hide();'>
  <span aria-hidden="true">&times;</span>
</button>
</div>

<div id="myAlertWarning" class="alert alert-warning hide">
<strong id="warningAlertMsg">警告!</strong>
<button type="button" class="close" onclick='javascript: $("#myAlertWarning").hide();'>
  <span aria-hidden="true">&times;</span>
</button>
</div>

<div id="myAlertDanger" class="alert alert-danger hide">
<strong id="dangerAlertMsg">危险!</strong>
<button type="button" class="close" onclick='javascript: $("#myAlertDanger").hide();'>
  <span aria-hidden="true">&times;</span>
</button>
</div>

<!-- 条件查询 -->
<div class="">
	<form UI-Module="listForm">
		<span class="list-search-ico"></span> 
		<span>
			<label class="help-inline" >账号名：</label>
			<input class="span2" type="text" name="search_LIKE_loginName" style="margin-top: 10px;"></input>
		</span> 
		<span>
			<button type="button" class="btn btn-success">查询</button>
			<button type="button" class="btn">重置</button>
		</span>
	</form>
</div>
<!-- 列表区域 -->
<div name="gridParent" id="list_tab">
	<table UI-Module="listGrid">
	</table>
</div>
