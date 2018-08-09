import React, {Component} from 'react'
import {Parallax} from 'react-scroll-parallax'

import srcWhiteDryer from '../img/white_dryer.jpg'
import srcBg from '../img/benefits_bg.jpg'

// Benefits component;
class Benefits extends Component {
  render() {
    return (
      <section className="benefits">
        <div className="benefits__wrap">
          <figure className="benefits__bathroom">
            <img src={srcBg} alt="" />
          </figure>
          <Parallax
            className="benefits__dryer"
            offsetYMax={50}
            offsetYMin={20}
            slowerScrollRate
            tag="figure"
          >
            <figure className="benefits__dryer--img">
              <img src={srcWhiteDryer} alt="" />
            </figure>
          </Parallax>

          <Parallax
            className="benefits__legend"
            offsetYMax={-50}
            offsetYMin={-20}
            slowerScrollRate
            tag="figure"
          >
            <legend>
              Наша компания производит водянные и электрические полотенцесушители из нержавеющей
              стали. Вся продукция отвечает санитарно-гигеническим нормам и имеют сертификаты.
            </legend>
          </Parallax>
        </div>
      </section>
    )
  }
}

export default Benefits
