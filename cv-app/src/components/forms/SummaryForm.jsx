function SummaryForm({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      summary: e.target.value,
    }));
  };
  return (
    <>
      <div id="summary-form">
        <textarea
          name="summary"
          id="summary"
          placeholder="Add your summary here..."
          value={formData.summary || ""}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default SummaryForm;
