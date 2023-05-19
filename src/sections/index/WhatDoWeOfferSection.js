import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Container from "../../components/container/Container"

import "./styles/WhatDoWeOfferStyle.scss"

const WhatDoWeOfferSection = () => {
  return (
    <Container
      outerClassName="WhatDoWeOffer-container"
      innerClassName="inner-container"
    >
      <div className="WhatDoWeOffer-title">What Lorem Lorisoo offer</div>

      <div className="WhatDoWeOffer-card-container">
        <div className="WhatDoWeOffer-card">
          <StaticImage
            className="WhatDoWeOffer-icon"
            src="../../images/purple.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="vectors"
          />
          <div className="content-container">
            <div className="WhatDoWeOffer-card-title">Transparent billing</div>
            <div className="WhatDoWeOffer-card-content">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections 1.10.32 and
              1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
              reproduced in their exact original form, accompanied by English
              versions from the 1914 translation by H. Rackham.
            </div>
          </div>
        </div>
        <div className="WhatDoWeOffer-card">
          <StaticImage
            className="WhatDoWeOffer-icon"
            src="../../images/green.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="vectors"
          />
          <div className="content-container">
            <div className="WhatDoWeOffer-card-title">Clean communication</div>
            <div className="WhatDoWeOffer-card-content">
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
              <ul>
                <li>Weekly stand-ups, calls reporting</li>
                <li>Detailed documentation, PRD, BRD</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="WhatDoWeOffer-card">
          <StaticImage
            className="WhatDoWeOffer-icon"
            src="../../images/yellow.png"
            formats={["webp"]}
            quality={100}
            loading="lazy"
            alt="vectors"
          />
          <div className="content-container">
            <div className="WhatDoWeOffer-card-title">
              Detailed reporting and deliverables
            </div>
            <div className="WhatDoWeOffer-card-content">
              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                reproduced in their exact original form, accompanied by English
                versions from the 1914 translation by H. Rackham.
              </p>
              <ul>
                <li>Weekly stand-ups, calls reporting</li>
                <li>Detailed documentation, PRD, BRD</li>
                <li>Detailed documentation, PRD, BRD</li>
                <li>Detailed documentation, PRD, BRD</li>
                <li>Detailed documentation, PRD, BRD</li>
                <li>Detailed documentation, PRD, BRD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default WhatDoWeOfferSection
