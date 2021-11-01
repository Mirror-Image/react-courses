import React from "react";
import MovieTitle from "./MovieTitle";

export default class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Titanic",
      isReleased: true
    };
  }

  toggleRelease = () => {
    console.log("toggleRelease");
    this.setState((prevState) => ({
      isReleased: !prevState.isReleased
    }));
  };

  render() {
    const { title, isReleased } = this.state;
    return (
      <>
        <MovieTitle title={title} />
        <h1>Movie is released: {isReleased ? "yes" : "no"} </h1>
        <button onClick={this.toggleRelease}>Toggle Release</button>
      </>
    );
  }
}
