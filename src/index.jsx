import React, { PropTypes } from "react";
import R from "ramda";
import classnames from "classnames";
import _ from "lodash";

class CardSection extends React.Component {

  constructor(props){
    super(props);
    this.name = "card_section";
  }

  classes(type){
    const title = type.toLowerCase();
    const sectionName = `${this.name}-${title}`;
    return classnames({
      [this.name]: true,
      [sectionName]: title
    });
  }

  selectElement(){
    const { type, data } = this.props;
    switch(type){
      case "title":
        return <h1>{ data }</h1>;
      case "meta":
        return R.map(({title, value }) => (
          <p key={ title }><span>{ _.capitalize(title) }</span><span>{ value }</span></p>
        ), data);
      default:
        return <p>{ data }</p>;
    }
  }

  render(){
    const { type } = this.props;
    const titleless = ["title", "meta"];
    const noTitle = R.contains(type, titleless);
    const element = this.selectElement();
    return (
      <section className={ this.classes(type) }>
        { !noTitle && <h1>{ _.capitalize(type) }</h1> }
        { element }
      </section>
    );
  }
}

CardSection.propTypes = {
  type: PropTypes.string.isRequired,
  field: PropTypes.string,
  fields: PropTypes.array,
  collection: PropTypes.object,
  component: PropTypes.func
};

export default CardSection;
