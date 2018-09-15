import React, {Component} from 'react'
import {inject, observer} from 'mobx-react'
import axios from 'axios'
import {Form, Icon, Input, Button} from 'antd'

import {serelize} from '../common/utils'
const FormItem = Form.Item

// Order component;
@inject('constStore')
@inject('menuStore')
@observer
class Order extends Component {
  _handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = serelize({...values, ...this.props.constStore.getData})
        axios
          .post('http://localhost:5000/send.php', data)
          .then(() => this.props.menuStore.openTY())
          .catch(err => console.error(err))
      }
    })
  }
  render() {
    const {price} = this.props.constStore
    const {getFieldDecorator} = this.props.form
    return (
      <div className="main-constructor__order">
        <h2>Оставьте заявку</h2>
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
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{type: 'email', required: true, message: 'Введите ваш e-mail'}],
            })(
              <Input
                placeholder="Ваша e-mail"
                prefix={<Icon type="home" style={{color: '#fe4365'}} />}
              />,
            )}
          </FormItem>
          <div className="main-constructor__order--submit">
            <div className="main-constructor__order--price">
              <span>{price} руб.</span>
            </div>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Отправить
            </Button>
          </div>
        </Form>
        {this.props.children}
      </div>
    )
  }
}

export default Form.create()(Order)
