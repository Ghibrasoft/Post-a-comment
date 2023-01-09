import React, { useState, useRef, useEffect } from 'react'
import { IReplyProps, Replier } from '../../data/CommentsData'
import { RiDeleteBinLine } from 'react-icons/ri'

const Replies = (props: IReplyProps) => {
  const replyDeleteHandler = (id: number) => {
    props.setAddReply(props.addReply.filter((item) => item.id !== id));
  }

  return (
    <div className='replies_div'>
      {
        props.reply ? (
          <form className='reply_form'>
            <div className='reply_inputs'>
              <input
                ref={props.replierNameInputRef}
                type='text'
                onChange={(e) => props.setReplierName(e.target.value)}
                className='replier_name_input'
                placeholder='Name...'
                required
              />
              <textarea
                value={props.commentReply}
                onChange={(e) => props.setCommentReply(e.target.value)}
                className='replier_textarea'
                placeholder='Reply...'
                required
              ></textarea>
            </div>
            <button className='addReply_btn' type='submit' onClick={(e) => { props.handleAddReply(e, props.id) }}>Add</button>
          </form>
        ) : props.addReply.map((item) =>
          <fieldset className='replier_fieldset'>
            <legend className='replier_legend'>{item.replierName}</legend>
            {item.reply}
            <span className='replier_icon_btn delete' onClick={() => replyDeleteHandler(item.id)}><RiDeleteBinLine /></span>
          </fieldset>
        )
      }
    </div>
  )
}

export default Replies
