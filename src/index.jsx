import React, { PropTypes } from "react";
import R from "ramda";
import classnames from "classnames";
import CardField from "offcourse-component-card-field";

class CardSection extends React.Component {

  constructor(props){
    super(props);
    this.name = "card_section";
  }

  createFields(fields){
    return R.map(([key, value]) => {
      return <CardField key={ key } type={ key } field={ value }/>;
    }, fields);
  }

  classes(type){
    const title = type.toLowerCase();
    const sectionName = `${this.name}-${title}`;
    return classnames({
      [this.name]: true,
      [sectionName]: title
    });
  }

  render(){
    const { section } = this.props;
    const { type, fields } = section;
    const sectionBlacklist = ["title", "meta"];
    const isBlacklisted = R.contains(type, sectionBlacklist);

    return (
      <section className={ this.classes(type) }>
        { !isBlacklisted && <h1>{ type }</h1> }
        { this.createFields(fields) }
      </section>
    );
  }
}

CardSection.propTypes = {
  section: PropTypes.object.isRequired
};

export default CardSection;
