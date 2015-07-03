import React from "react";
import _ from "lodash";

class CardSectionField extends React.Component {

  static propTypes(){
    return {
      title: React.PropTypes.string,
      field: React.PropTypes.string.isRequired
    };
  }

  render(){
    const { title, field } = this.props;
    const output = title ? <p>{ _.capitalize(title) }: { field }</p> : <h1>{ field }</h1>;
    return output;
  }
}

export default CardSectionField;
