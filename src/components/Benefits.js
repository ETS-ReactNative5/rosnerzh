import React, {Component} from 'react'

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
          <figure className="benefits__dryer">
            <img src={srcWhiteDryer} alt="" />
          </figure>
          <legend className="benefits__legend">
            Наша компания производит водянные и электрические полотенцесушители из нержавеющей
            стали. Вся продукция отвечает санитарно-гигеническим нормам и имеют сертификаты.
          </legend>
        </div>
      </section>
    )
  }
}

export default Benefits
