import React, { useState } from 'react';
import { Partner } from '../types';
import { media } from '../config/media';

interface SafePartnerImageProps {
  partner: Partner;
  imageUrl?: string;
  className?: string;
  alt?: string;
}

const categoryFallbacks: Record<string, string> = {
  cafeteria: media.images.parceiros.fallbackCafeteria,
  empório: media.images.parceiros.fallbackEmporio,
  restaurante: media.images.parceiros.fallbackRestaurante,
  padaria: media.images.parceiros.fallbackPadaria,
  hotel: media.images.parceiros.fallbackHotel,
  posto: media.images.parceiros.fallbackPosto,
  'rota cofcof': media.images.parceiros.fallbackRota,
  default: media.images.parceiros.fallbackDefault
};

export const SafePartnerImage: React.FC<SafePartnerImageProps> = ({ 
  partner, 
  imageUrl,
  className = "w-full h-full object-cover", 
  alt 
}) => {
  const [error, setError] = useState(false);
  
  const getFallback = () => {
    const cat = (partner.category || '').toLowerCase();
    return categoryFallbacks[cat] || categoryFallbacks.default;
  };
  
  const targetImage = imageUrl || partner.coverImage;
  const isUnsplash = targetImage && (targetImage.includes('source.unsplash') || targetImage.includes('images.unsplash'));
  const source = (!error && targetImage && !isUnsplash) 
    ? targetImage 
    : getFallback();

  return (
    <img
      src={source}
      alt={alt || partner.publicName || 'Parceiro CofCof'}
      className={className}
      onError={() => setError(true)}
      referrerPolicy="no-referrer"
    />
  );
};
