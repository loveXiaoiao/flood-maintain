package com.surfilter.flood.maintain.service.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.surfilter.flood.maintain.repository.MenuDao;

@Component
@Transactional
public class MenuService {
	
	private MenuDao menuDao;

	@Autowired
	public void setMenuDao(MenuDao menuDao) {
		this.menuDao = menuDao;
	}
	
	

}
