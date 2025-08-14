import React from 'react';

interface BlurEffectProps {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * BlurEffect: fondo decorativo con blur radial, reutilizable.
 * Props opcionales para tamaño y estilos adicionales.
 */
export const BlurEffect: React.FC<BlurEffectProps> = ({
  width = '320px',
  height = '320px',
  style = {},
  className = '',
}) => {
  const blurStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width,
    height,
    background: 'radial-gradient(circle, #e3b6c7 0%, rgba(250, 237, 237, 0) 70%)',
    filter: 'blur(40px)',
    borderRadius: '50%',
    zIndex: 0,
    pointerEvents: 'none',
    ...style,
  };
  return <div className={className} style={blurStyle}></div>;
};
