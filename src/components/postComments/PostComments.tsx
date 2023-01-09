import React, { useState, useEffect, useRef } from 'react'


interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  submitHandler: (e: React.FormEvent) => void;
}

const PostComments: React.FC<Props> = ({ name, setName, comment, setComment, submitHandler }: Props) => {


  return (
    <div className='postComments_div'>
      <form className='comments_form' onSubmit={submitHandler}>

        <div className="comments_form_div">

          <div className='comments_inputs_div'>
            <input
              onChange={(e) => setName(e.target.value)}
              type='text'
              name='name'
              id='name'
              className='comments_input'
              placeholder='Name...'
              required
            />
            <textarea name='comment' className='comments_textarea' placeholder='Comment...' value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
          </div>

          <button type='submit' className="post_btn">Post</button>
        </div>

      </form>
    </div>
  )
}

export default PostComments