import React from "react";
import CardSection from "../src/index.jsx";
import R from "ramda";

let sectionData = [
  { title: "title", fields: [["title", "bar"]] },
  { title: "meta", fields: [["curator", "bar"]] },
  { title: "summary", fields: [["summary", "bar"]] }
];

class Example extends React.Component {

  render() {
    let sections = R.mapIndexed(({title, fields}, index) => (
      <CardSection key={ index } title={ title } fields={ fields } />
    ), sectionData);
    return (
      <section>
        { sections }
      </section>
    );
  }
}

export default Example;
