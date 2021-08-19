import React, { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const formCount = () => {
    return count === 0 ? "Ноль" : count
  }
  const styles = {
    fontSize: "12px",
    fontWeight: "bold",
  }
  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-"
    classes += count === 0 ? "danger" : "primary"
    return classes
  }

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : count)
  }
  return (
    <>
      <span style={styles} className={getBadgeClasses()}>
        {formCount()}
      </span>
      <button onClick={handleIncrement} className="btn btn-secondary btn-sm">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-secondary btn-sm">
        Decrement
      </button>
    </>
  )
}

export default Counter
