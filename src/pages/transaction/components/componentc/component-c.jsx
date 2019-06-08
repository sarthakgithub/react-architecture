import React from "react";

class ComponentC extends React.Component {
  render() {
    console.log('this.props in c', this.props);
    return <div>component C</div>;
  }
}

export default ComponentC;
