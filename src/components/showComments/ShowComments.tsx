import React, { useState } from 'react'
import { Posts } from '../../data/CommentsData';
import SingleComment from './SingleComment';


interface Props {
  comments: Posts[];
  setComments: React.Dispatch<React.SetStateAction<Posts[]>>;
}

const ShowComments = ({ comments, setComments }: Props) => {

  return (
    <div className='comments_div_list'>
      {comments.map((item) =>
        <SingleComment
          item={item}
          key={item.id}
          comments={comments}
          setComments={setComments}
        />
      )}
    </div>
  )
}

export default ShowComments