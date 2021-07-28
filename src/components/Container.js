import { CommentList } from './CommentList';
import { PostComment } from './PostComment';
import { RequestState } from '../types/RequestState';
import { useEffect, useState } from 'react';
import { ApiService } from '../api/ApiService';
import { Pagination } from './Pagination';
import { Preloader } from './Preloader';

export const Container = () => {
  const [rsList, setRsList] = useState(RequestState.none);
  const [rsPost, setRsPost] = useState(RequestState.none);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const requestList = async (page) => {
    if (rsList !== RequestState.request) {
      try {
        setRsList(RequestState.request);
        const response = await ApiService.getCommentList(page);
        setComments(response.data.data);
        setPageCount(response.data['last_page'] || 0);
        setRsList(RequestState.success);
      } catch (e) {
        setRsList(RequestState.failure);
      }
    }
  }

  const postMessage = async () => {
    if (rsPost !== RequestState.request) {
      try {
        setRsPost(RequestState.request);
        await ApiService.postComment(name, text);
        setText('');
        setRsPost(RequestState.success);
        await requestList(pageCount);
      } catch (e) {
        setRsPost(RequestState.failure);
      }
    }
  }

  useEffect(() => requestList(), []);

  const handleClickPageNum = async (page) => {
    setCurrentPage(page)
    await requestList(page);
  }

  return (
    <>
      <PostComment
        name={name}
        text={text}
        onChangeName={setName}
        onChangeText={setText}
        onPost={postMessage}
        requestState={rsPost}
      />
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        onSelect={handleClickPageNum}
      />
      <Preloader inProgress={rsList === RequestState.request}>
        <CommentList comments={comments}/>
      </Preloader>
    </>
  )
}
