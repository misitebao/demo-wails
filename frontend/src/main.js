import 'core-js/stable';
import 'regenerator-runtime/runtime'; // 生成器函数、async、await函数经babel编译后，regenerator-runtime模块用于提供功能实现。
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.devtools = true;

// 该模块是Wails框架的Javascript运行时库。 它打算作为Wails项目的一部分而不是独立模块安装。
import * as Wails from '@wailsapp/runtime';

Wails.Init(() => {
	new Vue({
		render: h => h(App)
	}).$mount('#app');
});
