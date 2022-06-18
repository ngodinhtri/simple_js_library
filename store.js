import { createStore } from "./core.js"
import reducer from "./reducer.js"

//tạo store
const { attach, connect, dispatch } = createStore(reducer)

//lấy các method trong core.js
export {attach, connect}
window.dispatch = dispatch //global method