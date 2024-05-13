import "./App.css";
import TodoList from "./views/TodoList";
import { Provider } from "react-redux";
import store from "./store";
import ThemeContextProvider from "./contexts/ThemeContext";
import CounterHook from "./containers/CounterHook";
import CounterReducer from "./containers/CounterReducer";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeContextProvider>
          <TodoList />
          <CounterHook />
          <CounterReducer />
        </ThemeContextProvider>
      </Provider>
    </>
  );
}

export default App;
