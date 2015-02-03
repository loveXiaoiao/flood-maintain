<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/js/common/header.jsp" %>
<script>
$(function(){
	Surfilter.main.init();//记载main.jsp的时候才初始化main.js
})
</script>
</head>
<body>
<!-- 头部 start -->
<div class="header">
  <div class="nav">
    <ul>
       <!-- 
			一级菜单
	    -->
	</ul>
  </div>
</div>
<!-- 头部 end -->

<div class="main">
	<!-- 内容左 start -->
	<div class="main-left">
	   <h1 class="sidebar-title"><i class="sidebar-titleIco"></i><!-- 任务管理 --></h1>
	<ul>
	  <!-- 
	  		左侧二级、三级菜单
	   -->
	   </ul>
	 </div>
	<!-- 内容左 end -->
  
  
	 <!-- 内容右 start -->
	<iframe class="main-right" id="mainPage" frameborder=0>
	</iframe>

</div>
</body>
</html>