import "./App.css";
import React from "react";
//import DataFetching from './components/Hooks/useEffect/DataFetching';
// import HookCounterTwo from './components/Hooks/useEffect/HookCounterTwo';
// import HookMouse from './components/Hooks/useEffect/HookMouse';
// import MouseContainerCleanup from './components/Hooks/useEffect/MouseContainerCleanup';
// import HookCounterFour from './components/Hooks/UseState/HookCounterFour';
// import HookCounterOne from './components/Hooks/UseState/useEffect/HookCounterOne';
// import IntervalClassCounter from './components/Hooks/useEffect/IntervalClassCounter'
// import IntervalHookCounter from './components/Hooks/useEffect/IntervalHookCounter';
// import HookCounterThree from './components/Hooks/HookCounterThree';
// import HookCounterTwo from './components/Hooks/HookCounterTwo';
// import ClassCounter from './components/Hooks/ClassCounter';
// import HookCounter from './components/Hooks/HookCounter';
// import PostForm from './components/PostForm';
//import PosiList from './components/PostList';
import ComponentC from "./components/Hooks/usecontext/ComponentC";

export const UserContext = React.createContext();

export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Ram"}>
        <ChannelContext.Provider value={'Priyanshuwebdev'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
      {/* <DataFetching/> */}
      {/* <IntervalClassCounter/>
     <IntervalHookCounter/> */}
      {/* <MouseContainerCleanup/> */}
      {/* <HookMouse/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
      {/* <ClassCounter/> */}
      {/* <PostForm/> */}
      {/* <PosiList/> */}
    </div>
  );
}

export default App;
