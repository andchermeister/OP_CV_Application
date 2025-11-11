function Buttons({
  pageIndex,
  page,
  pages,
  setPage,
  setPageIndex,
  contactFormRef,
  experienceFormRef,
  educationFormRef,
}) {
  const previous = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
      setPage(pages[pageIndex - 1]);
    }
  };
  const next = () => {
    let canContinue = true;

    if (page === "contact" && contactFormRef.current?.submit) {
      canContinue = contactFormRef.current.submit();
    } else if (page === "experience" && experienceFormRef.current?.submit) {
      canContinue = experienceFormRef.current.submit();
    } else if (page === "education" && educationFormRef.current?.submit) {
      canContinue = educationFormRef.current.submit();
    }
    if (!canContinue) return;

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
        <button
          onClick={next}
          id="conitnue-btn"
          style={{
            left:
              pageIndex === 0
                ? "calc((100vw - 491px - 150px) / 2)"
                : "calc((100vw - 491px - 150px) * 0.75)",
          }}
        >
          {page === "experience" ? "Add details" : "Continue"}
        </button>
      )}
    </div>
  );
}

export default Buttons;
