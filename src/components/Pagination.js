export const Pagination = ({ pageCount, currentPage, onSelect, commentsPerPage = 10 }) => {
  const renderPageNum = (pageNum) => {
    return (
      <div key={pageNum} onClick={pageNum !== currentPage ? () => onSelect(pageNum) : null}>
        {pageNum}
      </div>
    )
  };

  const renderPageList = () => {
    const pageList = [];
    for (let i = 0; i < pageCount; i++) {
      pageList.push(renderPageNum(i + 1))
    }
    return pageList;
  }

  return (
    <div className="pagination">
      {renderPageList()}
    </div>
  )
}
