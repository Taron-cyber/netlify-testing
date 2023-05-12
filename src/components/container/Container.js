import * as React from "react"
import cx from "classnames"

import "./ContainerStyle.scss"

const Container = ({ children, outerClassName, innerClassName }) => {
  return (
    <section className={cx("outer-container", outerClassName)}>
      <div className={cx("inner-container", innerClassName)}>{children}</div>
    </section>
  )
}

export default Container
