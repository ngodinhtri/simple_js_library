import html from "../core.js"
import { connect } from "../store.js"

const connector = connect()

function App({animals}) {
    return html`
        <ul>
            ${animals.map(animal => `<li>${animal}</li>`)}
        </ul>
        <button onclick="dispatch('add','chicken')">Add</button>
    `
}

export default connector(App)