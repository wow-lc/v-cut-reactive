import { setArea } from "./tools";

const area = {
  install(Vue) {
    Vue.directive("cut-reactive", {
      inserted: function(el, binding) {
        el.onload = function() {
          let { value, arg } = binding;
          // 设置usmap属性
          el.setAttribute("usemap", `#${arg}`);
          let map = document.createElement("map");
          map.setAttribute("name", arg);
          // 遍历area
          value.forEach(item => {
            let { events, ...attrs } = item;
            let area = document.createElement("area");
            Object.keys(attrs).forEach(key => {
              if (key === "coords") {
                area.setAttribute(
                  "coords",
                  setArea(el, attrs.coords).join(",")
                );
                return;
              }
              area.setAttribute(key, attrs[key]);
            });
            map.appendChild(area);
            el.parentElement.append(map);
            Object.keys(events).forEach(eventName => {
              area.addEventListener(eventName, events[eventName]);
            });
            // 监听窗口大小变化事件
            window.addEventListener('resize',function () {
              area.setAttribute(
                "coords",
                setArea(el, attrs.coords).join(",")
              );
            })
          });
        };
      }
    });
  }
};

export default area;
