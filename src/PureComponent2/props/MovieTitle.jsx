import React from "react";

class MovieTitle extends React.PureComponent {
  render() {
    console.log("MovieTitle is rendered");
    return <h1>Movie title {this.props.title} </h1>;
  }
}

export default MovieTitle;



