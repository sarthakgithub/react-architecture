import React from "react";

class ComponentAPanel extends React.Component {
  componentDidMount(){
    const {componentAActions} = this.props;
    componentAActions.fetch();
  }
  render() {
    return <div>component A</div>;
  }
}

export default ComponentAPanel;
