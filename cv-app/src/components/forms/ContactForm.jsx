import { useImperativeHandle } from "react";

function ContactForm({ contactFormRef, formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.surname) {
      alert("Please fill in your first name and surname.");
      return false;
    }
    if (!formData.city) {
      alert("Please fill in your city.");
      return false;
    }
    if (!formData.countyRegion || !formData.postCode) {
      alert("Please fill in your county/region and postcode.");
      return false;
    }
    if (!formData.phone || !formData.email) {
      alert("Please fill in your phone and email.");
      return false;
    }
    console.log("Contact form submitted");
    return true;
  };

  useImperativeHandle(contactFormRef, () => ({
    submit: handleSubmit,
  }));

  return (
    <>
      <form id="contact-form" ref={contactFormRef} onSubmit={handleSubmit}>
        <div id="first-name-and-surname">
          <div className="contact-form">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              value={formData.firstName}
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
              value={formData.surname}
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
            value={formData.city}
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
              value={formData.countyRegion}
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
              value={formData.postCode}
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
              value={formData.phone}
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
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
