import React, {Component} from 'react'
import {inject} from 'mobx-react'
import {Parallax} from 'react-scroll-parallax'

import Button from '../common/Button'

//TODO: Replace this desc to benefits section
// PreviewLegend component;
@inject('menuStore')
class PreviewLegend extends Component {
  render() {
    return (
      <Parallax
        className="preview__legend"
        offsetYMax={-30}
        offsetYMin={0}
        slowerScrollRate
        tag="figure"
      >
        <legend>
          <h2>Конструктор</h2>
          <p>
            Не знаете как выбрать? Зайдите в наш калькулятор и посмотрите сами. Вы найдете
            подходящий по размерам, цвету и форме. Или оставьте заявку и наш оператор перезвонит
            вам.
          </p>
          <Button caption="В кноструктор" onClick={this.props.menuStore.openChain.bind(null, 'constructor')}/>
        </legend>
      </Parallax>
    )
  }
}

export default PreviewLegend
