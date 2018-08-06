import React, {Component} from 'react'
import Button from '../common/Button';

// PreviewLegend component;
class PreviewLegend extends Component {
  render() {
    return (
      <legend>
        <h2>Посмотрите наш конструктор</h2>
        <p>
          Не знаете как выбрать? Зайдите в наш калькулятор и посмотрите сами. Вы найдете подходящий
          по размерам, цвету и форме. Или оставьте заявку и наш оператор перезвонит вам.
        </p>
        <Button caption="В кноструктор"/>
      </legend>
    )
  }
}

export default PreviewLegend
