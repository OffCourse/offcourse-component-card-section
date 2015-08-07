import React, { PropTypes } from "react";
import R from "ramda";
import Radium from "radium";
import classnames from "classnames";
import _ from "lodash";
import Styles from "./styles";

@Radium
class CardSection extends React.Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.any.isRequired,
    component: PropTypes.func,
    handlers: PropTypes.object,
    theme: PropTypes.object
  };

  static defaultProps = {
    theme: {}
  };

  constructor(props){
    super(props);
    const { theme } = this.props;
    this.styles = new Styles(theme);
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
    const { data: collection } = data;
    const { cardTitle } = this.styles;

    switch(type){
      case "title": return <h1 style={ [cardTitle] }>{ data }</h1>;
      case "meta": return this.metaItems(data);
      case "list": return <ul>{ this.listItems(collection) }</ul>;
      default: return <p>{ data }</p>;
    }
  }

  listItems(items){
    return R.mapIndexed((item, index) => <li key={ index }>{item}</li>, items);
  }

  metaItems(items){
    return R.mapIndexed(({type, data}) => {
      let title = _.capitalize(type);
      return <p key={ title }><span>{ title }</span>: <span>{ data }</span></p>;
    }, items);
  }

  render(){
    const { type, component } = this.props;
    const titleless = ["title", "meta"];
    const hasTitle = !R.contains(type, titleless);
    const element = this.selectElement();
    const { base, sectionTitle, smallerBottomMargin } = this.styles;
    const sectionStyles = hasTitle ? [base] : [base, smallerBottomMargin];
    return (
      <section className={ this.classes(type) }
         style={ sectionStyles }>
        { hasTitle && <h1 style={ [sectionTitle] }>{ _.capitalize(type) }</h1> }
        { element }
      </section>
    );
  }
}

export default CardSection;
