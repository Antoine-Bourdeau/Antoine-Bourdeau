import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  icon?: ReactNode
  href?: string
  padding?: string
  variant?: 'primary' | 'secondary' | 'outlined'
  borderRadius?: string
}

export default function Button({ 
  children, 
  icon, 
  className = '',
  href,
  padding = 'px-6 py-3',
  variant = 'primary',
  borderRadius = '15px',
  ...props 
}: ButtonProps) {
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: '#226DE0',
          borderRadius: borderRadius,
          border: '3px solid #FAF9F7',
          padding: '3px 4px',
          color: '#3F4C61',
          boxShadow: '0 -1px 20px 0 rgba(0, 0, 0, 0.25)'
        }
      case 'outlined':
        return {
          backgroundColor: '#FAF9F7',
          borderRadius: borderRadius,
          boxShadow: '0 0 0 3px #226DE0, 0 4px 20px 0 rgba(0, 0, 0, 0.25)',
          color: '#226DE0'
        }
      case 'primary':
      default:
        return {
          backgroundColor: '#226DE0',
          borderRadius: borderRadius,
          boxShadow: '0 0 0 3px #FAF9F7, 0 -1px 20px 0 rgba(0, 0, 0, 0.25)',
          color: '#FAF9F7'
        }
    }
  }

  const buttonStyle = getButtonStyle()

  const buttonContent = variant === 'secondary' ? (
    <div 
      className="w-full h-full flex items-center justify-center gap-3 bg-abc-white px-6 py-2"
      style={{ borderRadius: '7px' }}
    >
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1 flex items-center">{icon}</span>}
    </div>
  ) : (
    <>
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1 flex items-center">{icon}</span>}
    </>
  )

  const commonClasses = `inline-flex items-center gap-5 transition-all duration-200 hover:scale-105 active:scale-95 ${className} group text-lg font-bold`
  const finalPadding = variant === 'secondary' ? 'p-1' : padding

  if (href) {
    return (
      <a 
        href={href}
        className={`${commonClasses} ${finalPadding}`}
        style={buttonStyle}
      >
        {buttonContent}
      </a>
    )
  }

  return (
    <button 
      className={`${commonClasses} ${finalPadding}`}
      style={buttonStyle}
      {...props}
    >
      {buttonContent}
    </button>
  )
}
