import React from 'react';
import {StaggeredMotion, spring, presets} from 'react-motion';

import {opacityFastPreset, opacityPreset, transformPreset} from '../../settings/conf'
const coordinates = [
  {x: 0, y: -107, o: 0},
  {x: 107, y: 0, o: 0},
  {x: 0, y: 107, o: 0},
  {x: -107, y: 0, o: 0},
  {x: -107, y: 0, o: 0},
  {x: -107, y: 0, o: 0},
  {x: -107, y: 0, o: 0},
  {x: -107, y: 0, o: 0},
  {x: -107, y: 0, o: 0},
]
export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {x: 250, y: 300};
  };

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('touchmove', this.handleTouchMove);
  };

  handleMouseMove = ({pageX: x, pageY: y}) => {
    this.setState({x, y});
  };

  handleTouchMove = ({touches}) => {
    this.handleMouseMove(touches[0]);
  };

  getStyles = (prevStyles) => {
    const res = prevStyles.map((_, i) => ({
      x: spring(true ? coordinates[i].x : 0, transformPreset),
      y: spring(true ? coordinates[i].y : 0, transformPreset),
      o: spring(true ? 1 : 0, opacityPreset),
    }))
    // console.log(' LOG ___ res ', res)
    return res
  };

  render() {
    return (
      <StaggeredMotion
        defaultStyles={[...new Array(6)].map(() => ({x: 0, y: 0}))}
        styles={this.getStyles}>
        {balls =>{ //console.log(" LOG ___ balls ", balls )
          return <div className="demo1">
            {/* balls.map(({x, y}, i) =>
              <div
                key={i}
                className={`demo1-ball ball-${i}`}
                style={{
                  WebkitTransform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                  transform: `translate3d(${x - 25}px, ${y - 25}px, 0)`,
                  zIndex: balls.length - i,
                }} />
            ) */}
          </div>}
        }
      </StaggeredMotion>
    );
  };
}
