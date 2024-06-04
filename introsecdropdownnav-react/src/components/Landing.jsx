import Clients from "./Clients"
import Intro from "./Intro"

function Landing(){
  return(
    <article className="landing pad-landing">
      <Intro />
      <Clients />
    </article>
  )
}
export default Landing