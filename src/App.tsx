import Hero from "./sections/Hero"
import MissionStatement from "./sections/MissionStatement"
import Solution from "./sections/Solution"

function App() {
  return (
    <div className="bg-black p-2">
      <Hero />
      <MissionStatement />
      <Solution />
    </div>
  )
}

export default App