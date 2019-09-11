import React, { Component } from "react";

import Constructor from './constructor';
import PreviewLegend from './PreviewLegend';

// Preview component;
class Preview extends Component {
  render() {
    return (
      <section className="preview">
        <PreviewLegend />
        <Constructor />
      </section>
    );
  }
}

export default Preview;