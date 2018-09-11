import React, {Component} from 'react'
import {inject} from 'mobx-react'
import {Form, Icon, Input, Button} from 'antd'

const FormItem = Form.Item

// Callback component;
@inject('menuStore')
class Callback extends Component {
  _handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.menuStore.openMain()
        console.log('Received values of form: ', values)
      }
    })
  }
  render() {
    const {getFieldDecorator} = this.props.form
    return (
      <div className="main-callback">
        <Form onSubmit={this._handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{required: true, min: 3, message: 'Введите ваше имя'}],
            })(
              <Input
                placeholder="Ваше имя"
                prefix={<Icon type="user" style={{color: '#fe4365'}} />}
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('phone', {
              rules: [{required: true, min: 11, message: 'Введите ваш телефон'}],
            })(
              <Input
                placeholder="Ваш номер телефона"
                prefix={<Icon type="phone" style={{color: '#fe4365'}} />}
              />,
            )}
          </FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Отправить
          </Button>
        </Form>
      </div>
    )
  }
}

export default Form.create()(Callback)
