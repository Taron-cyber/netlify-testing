import React from "react"
import Container from "../../components/container/Container"

import "./styles/LetsGetStartedStyle.scss"

const LetsGetStartedSection = () => {
  return (
    <Container
      outerClassName="letsGetStarted-section-container"
      innerClassName="inner-container"
    >
      <div className="letsGetStarted-title">Let’s get started</div>
      <form className="form-container">
        <div>
          <input type="text" name="name" required placeholder="First name" />
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            placeholder="Last name"
          />
        </div>

        <div>
          <input
            id="companyName"
            type="text"
            name="companyName"
            required
            placeholder="Company name"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            required
            placeholder="Your work email"
          />
          <input type="tel" name="phone" required placeholder="Phone" />
        </div>
        <div>
          <textarea
            placeholder="Tell your story (about you and your project)"
            name="message"
            rows="4"
            cols="50"
            required
          ></textarea>
        </div>
        <div className="btn-checkbox-container">
          <button className="letsGetStarted-form-btn" type="submit">
            Send request
          </button>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              aria-label="checkbox"
            />
            <label for="checkbox">Subscribe to our newsletters</label>
          </div>
        </div>
      </form>
    </Container>
  )
}

export default LetsGetStartedSection
