import "./App.css";

import Styledpage from "./components/Styledhomepage"
import FootballTeamList from "./components/FootballTeamList";
import { people } from "./data/data";
import Listexample from "./components/Listcomponent";
import Info from "./components/Info";
import StyledBox from "./components/simpleStyle";

export default function Example() {
  return (
    <div>
      <Styledpage />
      <Listexample />
      <FootballTeamList teams={people} />
      <StyledBox>
        <Info />
      </StyledBox>
    </div>
  );
}
