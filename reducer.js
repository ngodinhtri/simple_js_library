//giá trị khởi tạo cho state
const init = {
    cars: ['BMW'],
    animals: ['cat', 'dogs', 'duck']
}

export default function reducer(state = init, action, args) {
    switch (action) {
        case 'add':
            return {
                ...state,
                animals: [...state.animals,args]
            }
        default:
            return state
    }
}