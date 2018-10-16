import Vue from 'vue';

class Builder {
    constructor(ctx,comp){
        this.ctx = ctx;
        this.comp = comp;
    },
    createComponentProxy(S, data) {
		//为了可以让修改data时界面得到响应
		let vm = new Vue({
			data
		});
		vm.$destroy();
		
		S._Ctor = null;
		let Stub = Vue.extend(S);
		let Proxy = function(options) {
			let propsData = options.propsData = Vue.util.extend(options.propsData || {}, data);
			let vm = new Stub(options);
			let ufp = vm._updateFromParent;
			vm._updateFromParent = function() {
				arguments[0] = Vue.util.extend(arguments[0] || {}, propsData);
				ufp && ufp.apply(this, arguments);
			}
			return vm;
		}
		Vue.util.extend(Proxy, Stub);
		return Proxy;
	},
    createComp(opts) {
		var Proxy = this.createComponentProxy(this.comp, opts);
		var anchor = document.createElement('a');
		document.body.appendChild(anchor);
		var instance = new Vue({
			name: `${this.comp.name || Date.now()}_Root`,
			$flag: Enum.FLAG.GLOBAL | Enum.FLAG.DISABLE_RESIZE,
			el: anchor,
			render: h => {
				return h(Proxy);
			},
      		store
		});
		return instance;
	}
}

export default Builder;