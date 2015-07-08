import React from "react";
import CardSection from "../src/index.jsx";

class Example extends React.Component {

  render() {
    let title = "title";
    let fields = [["foo", "bar"], ["baz", "qux"]];
    return (
      <section>
        <CardSection title={ title } fields={ fields }></CardSection>
      </section>
    );
  }
}

export default Example;
