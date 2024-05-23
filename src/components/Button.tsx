import React from 'react';

interface MyComponentProps {
  children: React.ReactNode
}

const Button = ({ children }: MyComponentProps ): JSX.Element => {
  return (
    <button>
      {children}
    </button>
  )
}

export default Button;