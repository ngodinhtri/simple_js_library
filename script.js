//App ở đây là connector(App)
/* Tức App được import là hàm: 
(props, ...args) =>
component(Object.assign({},props,selector(state),...args))
 */
import App from "./components/App.js" 
import { attach } from "./store.js"

const root = document.getElementById('root')
//Thêm component vào roots trong store
attach(root, App)