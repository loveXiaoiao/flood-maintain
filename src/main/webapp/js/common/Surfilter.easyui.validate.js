/**
 * 扩展easyUI 中 form表单验证
 */
$.extend($.fn.validatebox.defaults.rules, {
	/**
	 * 数值校验
	 * @param  [min,max,msg]
	 */
	numberEx : {
		validator : function(value, param) {
			if (!/^-?\d+$/.test(value)) {
				this.message = 'Surfilter_i18n_message_validate_inputNumberFormatter';//请输入数字
				return false;
			}
			var val = parseInt(value);
			if (isNaN(val)) {
				this.message = 'Surfilter_i18n_message_validate_inputNumberFormatter';//请输入数字
				return false;
			}
			if (param[0] !== '' && val < param[0]) {
				this.message = 'Surfilter_i18n_message_validate_minTimes' + param[0];//数字不能小于
				return false;
			}
			if (param[1] !== '' && val > param[1]) {
				this.message = 'Surfilter_i18n_message_validate_maxTimes' + param[1];//数字不能大于
				return false;
			}
			return true;
		},
		message : ''
	},
	/**
	 * 长度校验
	 * @param  [min,max,msg]
	 */
	lengthEx : {
		validator : function(value, param) { // param = [min,max,msg]
			var flag = true;
			if (param && $.isArray(param)) {
				var min = param[0];
				var max = param[1];
				var prefix = param[2];
				var msg = '';
				// 前缀
				if (prefix) {
					msg += prefix + " : ";
				}
				msg += 'Surfilter_i18n_message_validate_lengthCanNot';//长度不能
				// min判断
				if (min != 0 && value.length < min) {
					msg += 'Surfilter_i18n_message_validate_lessThan' + min;//少于
					flag = false;
				} else if (max != 0 && value.length > max) {
					msg += 'Surfilter_i18n_message_validate_moreThan' + max;//超过
					flag = false;
				}
				msg += 'Surfilter_i18n_message_validate_word';//个字
				this.message = msg;
			} else {
				this.message = 'Surfilter_i18n_message_validate_wrongAttribute';//哥们儿，参数配置错了
				flag = false;
			}
			return flag;
		},
		message : ''
	},
	/**
	 * ip校验
	 */
	ip : {
		validator : function(value) {
			return /^(?:(?:[1-9]?[0-9]|1[0-9]{2}|2(?:[0-4][0-9]|5[0-5]))\.){3}(?:[1-9]?[0-9]|1[0-9]{2}|2(?:[0-4][0-9]|5[0-5]))$/i
					.test(value);
		},
		message : 'Surfilter_i18n_message_validate_wrongIpFormatter'//IP地址格式不正确
	},
	timeGT : {
		validator : function(value){
			value = (value.length)>15?value : value.concat(" 23:59:59")
			return new Date() < new Date(value);
		},
		message : '时间不可小于当前时间'//时间不可小于当前时间
	}
});
