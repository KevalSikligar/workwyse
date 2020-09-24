// import { createStore, applyMiddleware, compose } from "redux";

// import rootReducer from "../reducer/Rootreducer";
// import thunk from "redux-thunk";
// // import logger from 'redux-logger';

// const store = createStore(
//     rootReducer,
//     process.env.NODE_ENV === "production"
//         ? compose(applyMiddleware(thunk))
//         : compose(
//             applyMiddleware(thunk),
//             window.__REDUX_DEVTOOLS_EXTENSION__
//                 ? window.__REDUX_DEVTOOLS_EXTENSION__()
//                 : compose
//         )
// );

// export default store;



import { createStore } from "redux";
import reducer from "../reducer/Rootreducer";


export default createStore(reducer);