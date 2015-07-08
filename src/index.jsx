import React from "react";
import R from "ramda";
import classnames from "classnames";
import CardField from "offcourse-component-card-field";

class CardSection extends React.Component {

  static propTypes(){
    return {
      title: React.PropTypes.string.isRequired,
      fields: React.PropTypes.array.isRequired
    };
  }

  constructor(props){
    super(props);
    this.name = "card_section";
  }

  createFields(fields){
    return R.map(([key, value]) => {
      return <CardField key={ key } title={ key } field={value}/>;
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
    return (
      <section className={ this.classes(title) }>
        { this.createFields(fields) }
      </section>
    );
  }
}

export default CardSection;
