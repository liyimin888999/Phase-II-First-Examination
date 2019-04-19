class Release{
	constructor (btn) {
		// 找到点击弹框按钮
		// 传参或者直接查找根据实际情况决定
		this.btn = document.querySelector(btn);
		this.container = document.querySelector("#container");
		this.bindEvents();
	}
	bindEvents () {
		let _this = this;
		this.btn.onclick = function () {
			//给container插入内容
			_this.container.innerHTML = '<h4>用户发布</h4>'+
			'<a id="closeBtn" class="close_btn" href="javascript:;">×</a>'+
			'<p><label>用户名：<input id="username" type="text"></label></p>'+
			'<p><label><textarea class="textarea" id="textarea"></textarea></label></p>'+
			'<p><button id="releaseBtn" class="releaseBtn" type="button">发布</button></p>';
			//让container内容显示并居中
			tools.showCenter(_this.container);
			// 创建模态层
			_this.model = document.createElement("div");
			_this.model.className = "modal";
			document.body.appendChild(_this.model);
			//container可拖拽
			//var h4 = _this.container.querySelector("h4");
			//new Darg(_this.container,"h4").init();
		}
		// 给删除按钮绑事件
		this.container.onclick = e => {
			e = e || event;
			var target = e.target || e.srcElement;
			//利用switch穿透
			switch(target.id){
				case "releaseBtn" :
					let username = document.querySelector("#username").value;
					let textarea = document.querySelector("#textarea").value;
					//console.log(username,textarea);
					this.fn(username,textarea);
				case "closeBtn" :
					_this.container.style.display = "none";
					document.body.removeChild(_this.model);
			}
		}
	}
	fn(username,textarea){
		let release = document.createElement("div");
		release.className = "ccc";
		let html =`<p>用户名:${username}</p>
		<p class="one">内容:<br/>${textarea}</p>
		<button type="button">撤销</button>`;
		release.innerHTML = html;
		this.btn.parentNode.appendChild(release);
		//撤销
		release.onclick = e => {
			if(e.target.nodeName === "BUTTON"){
				release.remove();
			}
		}
	}
}
