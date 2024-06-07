import React from "react";
import { Provider } from "react-redux";
import AppRouting from "./routes/AppRouting";
import store from "./app-redux/store";

const App = () => {


  return (
    <Provider store={store}>
      <AppRouting />
    </Provider>
  );
}

export default App;