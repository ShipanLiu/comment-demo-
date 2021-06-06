import React, { createElement, useState } from 'react'
import { Comment, Tooltip, Avatar, Button } from 'antd'
import moment from 'moment'
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons'

export default function CommentItem(props) {
  const { id, avatar, nickname, datatime, content } = props.comment
  const { deleteAction } = props

  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [action, setAction] = useState(null)

  const like = () => {
    setLikes(1)
    setDislikes(0)
    setAction('liked')
  }

  const dislike = () => {
    setLikes(0)
    setDislikes(1)
    setAction('disliked')
  }

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === 'disliked' ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
    <span onClick={() => deleteAction(id)}>
      <DeleteOutlined />
      delete
    </span>,
  ]
  console.log(id)
  return (
    <>
      <Comment
        actions={actions}
        author={<a>{nickname}</a>}
        avatar={
          <Avatar
            style={{ width: '32px', height: '32px', borderRadius: '50%' }}
            src={avatar}
            alt="pic not found"
          />
        }
        content={<p>{content}</p>}
        datetime={<span>{moment().format('YYYY-MM-DD HH:mm:ss')}</span>}
      />
    </>
  )
}
