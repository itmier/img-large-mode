/*
 * @Author: Tmier
 * @Date: 2021-06-02 15:39:02
 * @LastEditTime: 2021-06-02 16:14:52
 * @Description:
 * @LastModifiedBy: Tmier
 */
import imgLargeMode from "@/components/img-large-mode";
const install = (Vue, option) => {
  const componentInstance = Vue.extend(imgLargeMode);
  let currentComponent = null;
  const initInstance = () => {
    currentComponent = new componentInstance();
    let componentEL = currentComponent.$mount().$el;
    document.body.appendChild(componentEL);
  };
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
