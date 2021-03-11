import HelloWorld from './Components/HelloWorld';
import LangSelector from './Components/LangSelector';
import ReactExample from './Components/ReactExample';
import ThankYou from './Components/ThankYou';

const App = () => {
  return (
    <>
      <LangSelector />
      <div className="app">
          <HelloWorld />
          <ReactExample />
          <ThankYou />
      </div>
    </>
  );
}

export default App;
