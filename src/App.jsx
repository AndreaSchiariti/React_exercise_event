import { AlertClock } from "./AlertClock";

export function App() {
  function handleShowTime() {
    const currentTime = new Date()
    alert(currentTime.toLocaleTimeString())
  }

  return(
    <div>
      <AlertClock eventHandler={handleShowTime} />
    </div>
  )
}