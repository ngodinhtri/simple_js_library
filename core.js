export default function html([first, ...strings], ...rest) {
    return rest.reduce((acc, curr) =>
        acc.concat(curr, strings.shift()),
        [first])
        //loại bỏ falsy và chấp nhận 0
        .filter(item => item && item !== true || item === 0)
        .join('')
}

export function createStore(reducer) {
    //lấy dữ liệu ban đầu cho state
    let state = reducer()
    //lưu cặp key - value: root - component
    const roots = new Map()

    //render ra View
    function render()
    {
        for (const [root, component] of roots) {
            const html = component() //thực thi dòng (**)
            root.innerHTML = html
        }
    }

    return {
        //nhận view => lưu vào roots và render
        attach(root, component) {
            roots.set(root, component)
            render()
        },
        //kết nối dữ liệu store và view (component)
        connect(selector = state => state) {
            //đẩy state, props, args vào component()
            return component => (props, ...args) =>
                component(Object.assign({},props,selector(state),...args)) //(**)
        },
        //nhận hành động từ view
        dispatch(action,...args) {
            state = reducer(state, action, args)
            render()
        }
    }
}