'use client'
export const Button = ({ handleClick, label, className, children }) => {
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  )
}
