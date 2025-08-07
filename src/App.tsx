import Divider from "./components/Divider"
import Hero from "./sections/Hero"
import MissionStatement from "./sections/MissionStatement"
import Progress from "./sections/Progress"
import Solution from "./sections/Solution"
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
    </div>
  )
}

export default App