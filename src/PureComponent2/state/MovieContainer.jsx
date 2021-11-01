import React from "react";
import MovieTitle from "../props/MovieTitle";

export default class MovieContainerState extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "Titanic",
      isReleased: true
    };
  }

  toggleRelease = () => {
    console.log("toggleRelease");
    this.setState({
      isReleased: true
    });
  };

  render() {
    console.log('MovieContainerState is rendered');
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
