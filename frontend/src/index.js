import React from "react";
import ReactDOM from "react-dom";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import App from "./App";
import { rootReducer } from "./redux/rootReducer";
import { sagaWatcher } from "./redux/sagas";

// SAGA
const saga = createSagaMiddleware()

// Созздания store redux
const store = createStore(
  rootReducer,
  compose(applyMiddleware(
    thunk, saga
  ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(sagaWatcher)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
