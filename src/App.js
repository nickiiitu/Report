import './App.css';
// import { CircularGraph } from './components/mandatory-optional-skills-graph/CircularGraph';
import { CircularGraph } from "./components/mandatory-optional-skills-graph/CircularGraph"
import { CodeSnippet } from "./components/CodeSnippet/CodeSnippet"
import { DetailedFeedBack } from './components/DetailedFeedBack/DetailedFeedBack';
import { Report } from "./components/Report/Report";
import { SoftSkills } from './components/SoftSkill/SoftSkills';

function App() {
  return (
    <div className="App">
      <Report />
      <CircularGraph />
      <DetailedFeedBack />
      <SoftSkills />
      <CodeSnippet />
    </div>
  );
}

export default App;
