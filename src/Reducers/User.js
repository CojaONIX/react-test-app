

export const initialUserState = {
    username: '',
    money: null,
    isUserCreated: false
};

export const loadUserState = () => {
    const userData = localStorage.getItem('userState');
    if(userData) {
        return JSON.parse(userData);
    }
    return initialUserState;
};

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERNAME':
            return { ...state, username: action.payload };
        case 'SET_MONEY':
            return { ...state, money: parseInt(action.payload) };
        case 'SET_USER_CREATED':
            return { ...state, isUserCreated: action.payload };

        default:
            return state;
    }
};