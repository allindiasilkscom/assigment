import { configureStore  } from "@reduxjs/toolkit";

import rootred from "./redux/reducers/main";

const store = configureStore(

    rootred
);

export default store