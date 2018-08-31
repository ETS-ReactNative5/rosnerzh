import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import {Form, Icon, Input, Button, Checkbox} from 'antd'

const FormItem = Form.Item

// Order component;
@inject('constStore')
@observer
class Order extends Component {
  _handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const {price} = this.props.constStore
    const {getFieldDecorator} = this.props.form
    return (
      <div className="main-constructor__order">
        <Form onSubmit={this._handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{required: true, message: 'Введите ваше имя'}],
            })(<Input placeholder="Ваше имя" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('phone', {
              rules: [{required: true, message: 'Введите ваше имя'}],
            })(<Input placeholder="Ваш номер телефона" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{type: 'email', required: true, message: 'Введите ваш e-mail'}],
            })(<Input placeholder="Ваша e-mail" />)}
          </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
        </Form>
        {this.props.children}
        <div className="main-constructor__order--price">
          <span>{price} руб.</span>
        </div>
      </div>
    )
  }
}

export default Form.create()(Order)
