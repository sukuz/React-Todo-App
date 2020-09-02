import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./components/reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
