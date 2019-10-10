/* eslint-disable */
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movie: []
  };

  getMovies = async () => {
    const moives = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(moives.data.data.moives);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are Ready"}</div>;
  }
}

export default App;
