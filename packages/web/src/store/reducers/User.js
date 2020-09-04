const INITIAL_STATE = {
  name: null,
  email: null
}

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        name: 'Guilherme Da Silva Santos',
        email: 'guilhermedev@hotmail.com'
      }

    default:
      return state
  }
}

export default user
