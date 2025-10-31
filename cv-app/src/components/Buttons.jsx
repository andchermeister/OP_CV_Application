function Buttons({ pageIndex, pages, setPage, setPageIndex }) {
  const previous = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
      setPage(pages[pageIndex - 1]);
    }
  };
  const next = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
      setPage(pages[pageIndex + 1]);
    }
  };
  return (
    <div>
      {pageIndex !== 0 && (
        <button onClick={previous} id="back-btn">
          Back
        </button>
      )}
      {pageIndex !== pages.length - 1 && (
        <button onClick={next} id="conitnue-btn">
          Continue
        </button>
      )}
    </div>
  );
}

export default Buttons;
