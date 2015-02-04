<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/views/layouts/header.jsp" %>
<title>哈哈</title>
    <style type="text/css">
      body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
      .sidebar-nav {
        padding: 9px 0;
      }
      
      .nav-list li.unfold {
			color: #000;
			font-weight: bold;
			background-color: #70C5F4;
		}
    </style>
<script>
$(function(){
	Surfilter.main.init();
})
</script>
</head>
<body>
<!-- 头部 start -->
<div class="navbar navbar-inverse navbar-fixed-top">
  <div class="navbar-inner">
  	<div class="container-fluid">
  	<b class="brand">舆情运维系统</b>
    <ul class="nav">
       <!-- 
			一级菜单
	    -->
	</ul>
	</div>
  </div>
</div>
<!-- 头部 end -->

<div class="container-fluid">
<div class="row-fluid">
	<!-- 内容左 start -->
	<div class="span3">
	<div class="well sidebar-nav">
		<h1 class="nav-header"><!-- 任务管理 --></h1>
		<ul class="nav nav-list">
	  		<!-- 
	  			左侧二级、三级菜单
	   		-->
	 	</ul>
	 </div>
	 </div>
	<!-- 内容左 end -->
  
  
	 <!-- 内容右 start -->
	 <div class="span9">
	<iframe class="main-right" id="mainPage" frameborder=0>
	</iframe>
	</div>
</div>
</div>
</body>
</html>