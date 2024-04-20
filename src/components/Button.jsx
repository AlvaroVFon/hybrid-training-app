'use client'
export const Button = ({ handleClick, label, className }) => {
  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  )
}
