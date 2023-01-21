'use strict';var vue=require('vue');var script = {
  name: "facebookLogin",
  props: {
    appId: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "normal"
    },
    text: {
      type: String
    },
    theme: {
      type: String,
      default: "dark"
    },
    classes: {
      type: String
    },
    styles: {
      type: String
    }
  },
  mounted() {
    this.loadFacebookSDK(document, "script", "facebook-jssdk");
    this.initFacebook();
  },
  emits: ["loggedIn", "loginFailed"],
  data() {
    return {};
  },
  methods: {
    async logInWithFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      const globalThis = this;
      window.FB.login(function (response) {
        if (response.authResponse) globalThis.$emit("loggedIn", response);else globalThis.$emit("loginFailed");
      });
      return false;
    },
    async initFacebook() {
      const {
        appId
      } = this;
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: appId,
          cookie: true,
          xfbml: true,
          version: "v13.0"
        });
        window.FB.AppEvents.logPageView();
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }
  }
};function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.type === 'minimal' ? (vue.openBlock(), vue.createElementBlock("button", {
    key: 0,
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.logInWithFacebook && $options.logInWithFacebook(...arguments);
    }),
    class: vue.normalizeClass(["minimal btn-def", {
      dark: $props.theme === 'dark',
      light: $props.theme === 'light',
      dark: $props.theme !== 'light'
    }])
  }, vue.toDisplayString($props.text || "Login with Facebook"), 3)) : $props.type === 'custom' ? (vue.openBlock(), vue.createElementBlock("button", {
    key: 1,
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.logInWithFacebook && $options.logInWithFacebook(...arguments);
    }),
    class: vue.normalizeClass($props.classes),
    style: vue.normalizeStyle($props.styles)
  }, vue.toDisplayString($props.text || "Login with Facebook"), 7)) : (vue.openBlock(), vue.createElementBlock("button", {
    key: 2,
    onClick: _cache[2] || (_cache[2] = function () {
      return $options.logInWithFacebook && $options.logInWithFacebook(...arguments);
    }),
    class: vue.normalizeClass(["normal btn-def", {
      dark: $props.theme === 'dark',
      light: $props.theme === 'light'
    }])
  }, vue.toDisplayString($props.text || "Login with Facebook"), 3));
}function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}var css_248z = "\n@import url(\"https://fonts.googleapis.com/css2?family=Domine:wght@700&family=Montserrat:ital,wght@0,200;0,400;1,300&display=swap\");\n.btn-def[data-v-326084e2] {\n  border: none;\n  cursor: pointer;\n  border-radius: 2px;\n}\n.normal[data-v-326084e2] {\n  cursor: pointer;\n  border: none;\n  padding: 10px 15px;\n  font-size: 20px;\n}\n.dark[data-v-326084e2] {\n  background: #3b5998;\n  color: #fff;\n  box-shadow: 0 0 10px #fff;\n}\n.light[data-v-326084e2] {\n  color: #3b5998;\n  background: #efefef;\n  box-shadow: 0 0 10px #3b5998;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-326084e2";// Import vue component

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
var component = /*#__PURE__*/(() => {
  // Get component instance
  const installable = script;

  // Attach install function executed by Vue.use()
  installable.install = app => {
    app.component('FacebookLogin', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
var namedExports=/*#__PURE__*/Object.freeze({__proto__:null,'default':component});// iife/cjs usage extends esm default export - so import it all

// Attach named exports directly to component. IIFE/CJS will
// only expose one global var, with named exports exposed as properties of
// that global var (eg. plugin.namedExport)
Object.entries(namedExports).forEach(_ref => {
  let [exportName, exported] = _ref;
  if (exportName !== 'default') component[exportName] = exported;
});module.exports=component;