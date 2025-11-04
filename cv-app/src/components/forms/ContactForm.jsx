function ContactForm({ setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <form id="contact-form">
        <div id="first-name-and-surname">
          <div className="contact-form">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="contact-form">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              name="surname"
              id="surname"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="contact-form">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            required
            onChange={handleChange}
          />
        </div>
        <div id="county-region-and-postcode">
          <div className="contact-form">
            <label htmlFor="countyRegion">County/Region</label>
            <input
              type="text"
              name="countyRegion"
              id="countyRegion"
              required
              onChange={handleChange}
            />
          </div>
          <div className="contact-form">
            <label htmlFor="postCode">Postcode</label>
            <input
              type="text"
              name="postCode"
              id="postCode"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div id="phone-and-email">
          <div className="contact-form">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              required
              onChange={handleChange}
            />
          </div>
          <div className="contact-form">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
