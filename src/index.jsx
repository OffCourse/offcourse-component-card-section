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
    const { component } = this.props;
    return component ? this.selectCustom() : this.selectDefault();
  }

  selectCustom(){
    const { component, data, handlers } = this.props;
    const Custom = component;
    return <Custom handlers={ handlers } data={ data } />;
  }

  selectDefault(){
    const { type, data } = this.props;
    const { collection } = data;

    switch(type){
      case "title": return <h1>{ data }</h1>;
      case "meta": return this.metaItems(data);
      case "list": return <ul>{ this.listItems(collection) }</ul>;
      default: return <p>{ data }</p>;
    }
  }

  listItems(items){
    return R.mapIndexed((item, index) => <li key={ index }>{item}</li>, items);
  }

  metaItems(items){
    return R.map(({title, value}) => {
      title = _.capitalize(title);
      return <p key={ title }><span>{ title }</span><span>{ value }</span></p>;
    }, items);
  }

  render(){
    const { type, component } = this.props;
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
  data: PropTypes.any.isRequired,
  component: PropTypes.func,
  handlers: PropTypes.object
};

export default CardSection;
