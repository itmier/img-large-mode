/*
 * @Author: Tmier
 * @Date: 2021-06-02 15:39:02
 * @LastEditTime: 2021-06-02 16:14:52
 * @Description:
 * @LastModifiedBy: Tmier
 */
// 引入组件
import imgLargeMode from "@/components/img-large-mode";
// install方法,以供Vue.use()注册使用
const install = (Vue, option) => {
  // 创建构造器,生成一个Vue实例
  const componentInstance = Vue.extend(imgLargeMode);
  // 定义实例化对象
  let currentComponent = null;
  // 对象实例化,将组件挂载到body下
  const initInstance = () => {
    currentComponent = new componentInstance();
    let componentEL = currentComponent.$mount().$el;
    document.body.appendChild(componentEL);
  };
  // 定义用户使用的方法,挂在到Vue
  Vue.prototype.$_openLargeMode = {
    show(opt) {
      initInstance();
      return currentComponent.show(opt);
    }
  };
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  imgLargeMode
};
