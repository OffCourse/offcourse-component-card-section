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

  classes(title){
    title = title.toLowerCase();
    const sectionName = `${this.name}-${title}`;
    return classnames({
      [this.name]: true,
      [sectionName]: title
    });
  }

  render(){
    const { title, fields } = this.props;
    const sectionBlacklist = ["title", "meta"];
    const isBlacklisted = R.contains(title, sectionBlacklist);

    return (
      <section className={ this.classes(title) }>
        { !isBlacklisted && <h1>{ title }</h1> }
        { this.createFields(fields) }
      </section>
    );
  }
}

CardSection.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired
};

export default CardSection;
