import React, { PureComponent } from 'react'
import { Input, Button } from 'antd'
import moment from 'moment'

export default class ComponentInput extends PureComponent {
  state = {
    content: '',
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    })
  }

  handleClick = () => {
    this.props.submitComment({
      id: moment().valueOf(),
      avatar: '/img/1.jpg',
      nickname: 'coderwhy',
      datatime: moment(),
      content: this.state.content,
    })
    // 提交完事之后，清空
    this.setState({
      content: '',
    })
  }

  render() {
    return (
      <div>
        <Input.TextArea
          rows={4}
          style={{ width: '100%', height: '100px' }}
          placeholder="leave a comment"
          value={this.state.content}
          onChange={(e) => this.handleChange(e)}
        />
        <Button type="primary" onClick={this.handleClick}>
          comment
        </Button>
      </div>
    )
  }
}
