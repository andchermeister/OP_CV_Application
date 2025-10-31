function Form() {
  return (
    <>
      <form action="" id="contact-form">
        <div id="first-name-and-surname">
          <div className="contact-form">
            <label htmlFor="first-name">First name</label>
            <input type="text" name="first-name" id="first-name" required />
          </div>
          <div className="contact-form">
            <label htmlFor="surname">Surname</label>
            <input type="text" name="surname" id="surname" required />
          </div>
        </div>
        <div className="contact-form">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" required />
        </div>
        <div id="county-region-and-postcode">
          <div className="contact-form">
            <label htmlFor="county-region">County/Region</label>
            <input
              type="text"
              name="county-region"
              id="county-region"
              required
            />
          </div>
          <div className="contact-form">
            <label htmlFor="postcode">Postcode</label>
            <input type="text" name="postcode" id="postcode" required />
          </div>
        </div>
        <div id="phone-and-email">
          <div className="contact-form">
            <label htmlFor="phone">Phone</label>
            <input type="number" name="phone" id="phone" required />
          </div>
          <div className="contact-form">
            <label htmlFor="email">Email address</label>
            <input type="email" name="email" id="email" required />
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
