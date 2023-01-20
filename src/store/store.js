import { createStore } from "redux";

import changeloginstate from "../Reducers/Loginreducer";

const store = createStore(changeloginstate);

export default store;