import Hero from "./components/Hero";
import Info from "./components/Info";
import { earthObj, jupiterObj, marsObj, mercuryObj, neptuneObj, saturnObj, sunObj, uranusObj, venusObj } from "./images/Data";

function App() {
  return (
    <>
      <Hero />
      <Info {...sunObj} />
      <Info {...earthObj} />
      <Info {...saturnObj} />
      <Info {...jupiterObj} />
      <Info {...marsObj} />
      <Info {...mercuryObj} />
      <Info {...venusObj} />
      <Info {...uranusObj} />
      <Info {...neptuneObj} />
    </>
  );
}

export default App;
