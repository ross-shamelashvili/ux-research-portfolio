interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

const sizeStyles = {
  default: 'max-w-6xl',
  narrow: 'max-w-4xl',
  wide: 'max-w-7xl',
};

export function Container({ children, className = '', size = 'default' }: ContainerProps) {
  return (
    <div
      className={`${sizeStyles[size]} ${className}`}
      style={{
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem'
      }}
    >
      {children}
    </div>
  );
}
