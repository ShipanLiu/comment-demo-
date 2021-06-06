import React, { Component } from 'react'
// import CommentInput from './compnents/CommentInput'
import CommentInput from '@/comment/compnents/CommentInput'
import CommentItem from './compnents/CommentItem'
import 'antd/dist/antd.less'

export default class App extends Component {
  state = {
    commentList: [],
  }

  componentDidMount() {
    this.setState({
      commentList: JSON.parse(localStorage.getItem('comments') || '[]'),
    })
  }

  submitComment = async (info) => {
    await this.setState({
      commentList: [info, ...this.state.commentList], // 等到state 完事之后， 才储存。利用await
    })
    localStorage.setItem('comments', JSON.stringify(this.state.commentList))
  }

  deleteAction = (aimId) => {
    console.log(aimId, 'aidID')
    const newList = this.state.commentList.filter((item) => item.id !== aimId)
    console.log(newList)
    this.setState({
      commentList: newList,
    })
    localStorage.setItem('comments', JSON.stringify(newList))
  }

  render() {
    // console.log(this.state.commentList)
    return (
      <div style={{ width: '500px', padding: '20px' }}>
        {this.state.commentList.map((item, index) => {
          return (
            <CommentItem
              key={item.id}
              comment={item}
              deleteAction={this.deleteAction}
            />
          )
        })}
        <CommentInput
          submitComment={(info) => this.submitComment(info)}
        ></CommentInput>
      </div>
    )
  }
}
