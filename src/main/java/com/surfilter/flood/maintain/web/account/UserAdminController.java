/*******************************************************************************
 * Copyright (c) 2005, 2014 springside.github.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *******************************************************************************/
package com.surfilter.flood.maintain.web.account;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springside.modules.web.Servlets;

import com.surfilter.flood.maintain.entity.User;
import com.surfilter.flood.maintain.service.ServiceException;
import com.surfilter.flood.maintain.service.account.AccountService;
import com.surfilter.flood.maintain.util.PageUtil;
import com.surfilter.flood.maintain.vo.ResultObject;

/**
 * 管理员管理用户的Controller.
 * 
 * @author calvin
 */
@Controller
@RequestMapping(value = "/admin/user")
public class UserAdminController {

	@Autowired
	private AccountService accountService;
	private ResultObject resultObject = new ResultObject(true, "OK!");
	
	
	/**
	 * 
	 * @param request
	 * @param entity
	 * @param page 页数
	 * @param rows 每页行数
	 * @return
	 */
	@RequestMapping("listUser")
	@ResponseBody
	public Page<User> getPageModel(HttpServletRequest request,User entity,Integer page,Integer rows){
		Map<String, Object> searchParams = Servlets.getParametersStartingWith(request, "search_");
		Page<User> pages = null;
		try{
			pages = accountService.getEntityList(searchParams, PageUtil.get(page, rows));
			
		}catch(ServiceException e){
			e.printStackTrace();
		}
		return pages;
	}
	@RequestMapping("saveUser")
	@ResponseBody
	public ResultObject saveUser(User entity, HttpServletRequest request) {
		try {
			if(entity.getId() != null){
				accountService.updateUser(entity);
			}else{
				accountService.registerUser(entity);
			}
			resultObject.setMsg("保存成功");
			resultObject.setSuccess(true);
			return resultObject;
		} catch (ServiceException e) {
			e.printStackTrace();
			resultObject.setMsg(e.getMessage());
			resultObject.setSuccess(false);
			return resultObject;
		}
	}
	
	@RequestMapping("deleteUser")
	@ResponseBody
	public ResultObject deleteUser(User entity, HttpServletRequest request) {
		try {
			accountService.deleteUser(entity.getId());
			resultObject.setMsg("删除成功");
			resultObject.setSuccess(true);
			return resultObject;
		} catch (ServiceException e) {
			e.printStackTrace();
			resultObject.setMsg("删除失败");
			resultObject.setSuccess(false);
			return resultObject;
		}
	}
	
	

	@RequestMapping(method = RequestMethod.GET)
	public String list(Model model) {
		List<User> users = accountService.getAllUser();
		model.addAttribute("users", users);

		return "account/adminUserList";
	}
	

	@RequestMapping(value = "update/{id}", method = RequestMethod.GET)
	public String updateForm(@PathVariable("id") Long id, Model model) {
		model.addAttribute("user", accountService.getUser(id));
		return "account/adminUserForm";
	}

	@RequestMapping(value = "update", method = RequestMethod.POST)
	public String update(@Valid @ModelAttribute("user") User user, RedirectAttributes redirectAttributes) {
		accountService.updateUser(user);
		redirectAttributes.addFlashAttribute("message", "更新用户" + user.getLoginName() + "成功");
		return "redirect:/admin/user";
	}

	@RequestMapping(value = "delete/{id}")
	public String delete(@PathVariable("id") Long id, RedirectAttributes redirectAttributes) {
		User user = accountService.getUser(id);
		accountService.deleteUser(id);
		redirectAttributes.addFlashAttribute("message", "删除用户" + user.getLoginName() + "成功");
		return "redirect:/admin/user";
	}

	/**
	 * 所有RequestMapping方法调用前的Model准备方法, 实现Struts2 Preparable二次部分绑定的效果,先根据form的id从数据库查出User对象,再把Form提交的内容绑定到该对象上。
	 * 因为仅update()方法的form中有id属性，因此仅在update时实际执行.
	 */
	@ModelAttribute
	public void getUser(@RequestParam(value = "id", defaultValue = "-1") Long id, Model model) {
		if (id != -1) {
			model.addAttribute("user", accountService.getUser(id));
		}
	}
}
