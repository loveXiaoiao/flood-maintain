package com.surfilter.flood.maintain.util;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

public class PageUtil {
	
	/**
	 * 第一页.
	 */
	public static final int FIRST_PAGE = 1;
	
	/**
	 * 默认每页行数.
	 */
	public static final int DEFAULT_PAGE_SIZE = 10;
	
	
	/**
	 * 
	 * get:通过起始行、每页行数得到分页信息. <br/>
	 *
	 * @author hongcheng
	 * @param pageNo 页数
	 * @param pageSize 每页行数
	 * @return 分页信息
	 * @since JDK 1.6
	 */
	public static PageRequest get(Integer pageNo, Integer pageSize, Sort sort) {
		if(pageNo == null || pageNo < 0) {
			pageNo = 1;
		}
		if(pageSize == null || pageSize <=0) {
			pageSize = DEFAULT_PAGE_SIZE;
		}
		if(sort == null){
			sort = new Sort(Direction.ASC, "id");
		}
		
		return new PageRequest(pageNo, pageSize, sort);
	}

}
