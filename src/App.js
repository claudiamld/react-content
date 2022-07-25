import ClickCounterTwo from "./components/ClickCounterTwo";
import Counter from "./components/Counter";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";

function App() {
  return (
    <div>
      <Counter 
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )} 
      />
      <Counter 
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )} 
      />
      {/* <ClickCounterTwo />      
      <HoverCounterTwo />
      <User render={ (isLoggedIn) => isLoggedIn ? 'Claudia' : 'Guest'} /> */}
    </div>
  );
}

export default App;
