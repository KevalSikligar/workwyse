// import { createStore, applyMiddleware, compose } from "redux";

// import rootReducer from "../reducer/Rootreducer";
import { createStore } from "redux";
import reducer from "../reducer/Rootreducer";

export default createStore(reducer);