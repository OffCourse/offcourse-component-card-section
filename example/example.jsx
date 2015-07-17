/*eslint no-undef:0 */
/*eslint no-alert:0 */

import React from "react";
import CardSection from "../src/index.jsx";
import R from "ramda";

class Test extends React.Component {
  render(){
    const { data, handlers } = this.props;
    const { foo } = handlers;
    return <button onClick={ foo.bind(this, "Goodbye") }>Hello { data }</button>;
  }
}

const sectionData = [
  { type: "title", data: "bar" },
  { type: "meta", data: [
    { title: "curator", value: "foobar" },
    { title: "followers", value: 3 }
  ] },
  { type: "list", data: {
      type: "foo",
      collection: ["foo", "bar", "baz"]
    }
  },
  { type: "summary", data: "Big World",
    handlers: { foo(msg) { alert(msg); } }, component: Test }
];

class Example extends React.Component {

  render() {
    const sections = R.mapIndexed((section, index) => (
      <CardSection key={ index } {...section } />
    ), sectionData);
    return (
      <section>
        { sections }
      </section>
    );
  }
}

export default Example;
