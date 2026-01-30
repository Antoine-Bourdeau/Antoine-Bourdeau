import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: ReactNode
  href?: string
  padding?: string
}

export default function Button({ 
  children, 
  icon, 
  className = '',
  href,
  padding = 'px-6 py-4',
  ...props 
}: ButtonProps) {
  const buttonStyle = {
    backgroundColor: '#226DE0',
    borderRadius: '20px',
    boxShadow: '0 0 0 3px #FAF9F7, 0 -1px 20px 0 rgba(0, 0, 0, 0.25)'
  }

  const buttonContent = (
    <>
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <a 
        href={href}
        className={`inline-flex items-center gap-10 ${padding} text-lg font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 ${className} group`}
        style={buttonStyle}
      >
        {buttonContent}
      </a>
    )
  }

  return (
    <button 
      className={`inline-flex items-center gap-10 ${padding} text-lg font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 ${className} group`}
      style={buttonStyle}
      {...props}
    >
      {buttonContent}
    </button>
  )
}
