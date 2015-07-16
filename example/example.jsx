import React from "react";
import CardSection from "../src/index.jsx";
import R from "ramda";

const sectionData = [
  { type: "title", data: "bar" },
  { type: "meta", data: [
    { title: "curator", value: "foobar" },
    { title: "followers", value: 3 }
  ] },
  { type: "summary", data: "bar" }
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
