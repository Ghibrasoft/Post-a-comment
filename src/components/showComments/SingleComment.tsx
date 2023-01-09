import React, { useState, useRef, useEffect } from 'react'
import { Posts } from '../../data/CommentsData';
import { RiDeleteBinLine } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi'
import { BiReplyAll } from 'react-icons/bi'
import { Reply, Replier } from '../../data/CommentsData';
import Replies from './Replies';


type Props = {
    item: Posts;
    comments: Posts[];
    setComments: React.Dispatch<React.SetStateAction<Posts[]>>;
}


const SingleComment = ({ item, comments, setComments }: Props) => {
    let date = new Date().toLocaleDateString();
    const [edit, setEdit] = useState<boolean>(false);  // for check if clicked edit btn.
    const [editComment, setEditComment] = useState<string>(item.comment);

    const [reply, setReply] = useState(false);  // for check if clicked reply btn.
    const [commentReply, setCommentReply] = useState('');
    const [addReply, setAddReply] = useState<Reply[]>([]);

    const [replierName, setReplierName] = useState('');




    /* ========== focus on name inputfield ========== */
    const replierNameInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => { replierNameInputRef.current?.focus() }, [reply]);

    /* ========== add reply ========== */
    const handleAddReply = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        const newReply = { id: Date.now(), replierName: replierName, reply: commentReply, setAddReply };
        if (commentReply) {
            setAddReply([...addReply, newReply]);
            setCommentReply('');
            setReply(false);
        }
    }


    /* ========== focus on edit inputfield ========== */
    const editInputRef = useRef<HTMLInputElement>(null);
    useEffect(() => { editInputRef.current?.focus() }, [edit])


    /* ========== add an edited comment and return edit value to false ========== */
    const handleAdd = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setComments(
            comments.map((item) => (
                item.id === id ? { ...item, comment: editComment } : item
            ))
        )
        setEdit(false);
    }


    /* ========== delete comment ========== */
    const deleteHandler = (id: number) => {
        setComments(comments.filter((item) => item.id !== id));
    }

    return (
        <form className='singleComment_form' onSubmit={(e) => handleAdd(e, item.id)}>
            <fieldset className='singleComment_fieldset'>

                <legend className='singleComment_legend'>{item.name + ' '}<small className='date'>{'(' + date + ')'}</small></legend>
                {
                    edit ? (
                        <input
                            ref={editInputRef}
                            value={editComment}
                            onChange={(e) => setEditComment(e.target.value)}
                            className='edit_input_field'
                        />
                    ) : editComment
                }
                <div className='icon_btns_div'>
                    <span className='icon_btn reply' onClick={() => {
                        if (!reply && !item.isDone) { setReply(!reply) }
                    }}><BiReplyAll /></span>

                    <span className='icon_btn edit' onClick={() => {
                        if (!edit && !item.isDone) { setEdit(!edit) }
                    }}><BiEditAlt /></span>

                    <span className='icon_btn delete' onClick={() => deleteHandler(item.id)}><RiDeleteBinLine /></span>
                </div>
                <Replies
                    id={item.id}
                    commentReply={commentReply}
                    setCommentReply={setCommentReply}
                    addReply={addReply}
                    setAddReply={setAddReply}
                    replierName={replierName}
                    setReplierName={setReplierName}
                    handleAddReply={handleAddReply}
                    replierNameInputRef={replierNameInputRef}
                    reply={reply}
                />

            </fieldset>
        </form>
    )
}

export default SingleComment
