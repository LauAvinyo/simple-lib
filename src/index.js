import Button from "./components/Button.vue"

export default {
  install: (app, options) => {
    app.component("Button", Button)
  }
}