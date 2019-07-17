import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <h1>City Explorer</h1>
      <p>
        Enter a location below to learn about the weather, events, restaurants,
        movies filmed there, and more!
      </p>

      <Main />
    </React.Fragment>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <search>
          <form>
            <label>Search for a location</label>
            <input />
            <button>Explore!</button>
          </form>
        </search>

        <map>
          <img
            src="https://staticmapmaker.com/img/google@2x.png"
            alt="Google maps placeholder"
          />
        </map>

        <results>
          <section>
            <h2>Dark Sky API</h2>
          </section>
          <section>
            <h2>Yelp API</h2>
          </section>
          <section>
            <h2>Meetup API</h2>
          </section>
          <section>
            <h2>MovieDB API</h2>
          </section>
          <section>
            <h2>Hiking Project API</h2>
          </section>
        </results>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
