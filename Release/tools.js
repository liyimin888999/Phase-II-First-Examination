var tools = {
	/* 获取元素的样式
	 * @param  obj <DOM Object> 要获取样式的元素对象
	 * @param  attr <string>  要获取的属性名
	 * @return  <string>  样式的值
	 */
	getStyle : function (obj, attr) {
		return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
	},
	/* 给元素设置样式
	 * obj <DOM Object> 要设置样式的元素
	 * attrObj <object> 设置的样式，如 {"width" : "200px", "height" : "300px"}
	 */
	setStyle : function (obj, attrObj) {
		for(var key in attrObj) {
			obj.style[key] = attrObj[key];
		}
	},
	/* 获取整个body的宽高
	 * @return <object> {width, height}
	 */
	getBody : function () {
		return {
			width : document.documentElement.clientWidth || document.body.clientWidth,
			height : document.documentElement.clientHeight || document.body.clientHeight
		}
	},
	/* 让元素在窗口范围绝对居中
	 * obj  <DOM Object> 要居中的那个元素
	*/
	showCenter : function (obj) {
		// 显示
		// this.setStyle(obj, {display: "block"});
		obj.style.display = "block";
		// 加上绝对定位
		// 计算坐标
		let _this = this;
		function center () {
			var _top = (_this.getBody().height - obj.offsetHeight) / 2;
			var _left = (_this.getBody().width - obj.offsetWidth) / 2;
			console.log(obj.offsetHeight, obj.offsetWidth);
			_this.setStyle(obj, {
				position :"absolute",
				left : _left + "px",
				top : _top + "px"
			});
		};
		center();
		// 窗口大小发生改变的时候重新计算坐标
		window.onresize = center;
	}
}

