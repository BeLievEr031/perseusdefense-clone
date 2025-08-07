import Divider from "./components/Divider"
import Hero from "./sections/Hero"
import MissionStatement from "./sections/MissionStatement"
import Progress from "./sections/Progress"
import Solution from "./sections/Solution"
import Teams from "./sections/Teams"
import Testing from "./sections/Testing"

function App() {
  return (
    <div className="bg-black p-2">
      <Hero />
      <MissionStatement />
      <Solution />
      <Divider />
      <Progress />
      <Testing />
      <Teams />
    </div>
  )
}

export default App