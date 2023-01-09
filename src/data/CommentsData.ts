export type Posts = {
    id: number;
    name: string;
    comment: string;
    isDone: boolean;
}

export type Reply = {
    id: number;
    reply: string;
    replierName: string;
    setAddReply: React.Dispatch<React.SetStateAction<Reply[]>>;
}
export type Replier = {
    id: number;
    repliers: string;
    setRepliers: React.Dispatch<React.SetStateAction<Replier[]>>
}

export interface IReplyProps {
    id: number;
    commentReply: string;
    setCommentReply: React.Dispatch<React.SetStateAction<string>>;
    addReply: Reply[];
    setAddReply: React.Dispatch<React.SetStateAction<Reply[]>>;
    replierName: string;
    setReplierName: React.Dispatch<React.SetStateAction<string>>;
    handleAddReply: (e: React.FormEvent, id: number) => void;
    replierNameInputRef: React.RefObject<HTMLInputElement>;
    reply: boolean;
}