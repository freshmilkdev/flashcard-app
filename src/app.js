
const store = Redux.createStore(function(state, action){
    switch (action.type){
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date()
            });
            return Object.assign({}, state, {
                cards: state.cards ? state.cards.concat([newCard]) : [newCard]
            });
        default:
            return state || {};
    }
});

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: 'ADD_CARD',
    data: {
        front: 'front',
        back: 'back'
    }
})