'use client'
export const Button = ({ handleClick, className, children }) => {
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
