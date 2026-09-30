import React, { createContext, useContext, useState } from 'react';
import portraitImg from '../assets/photos/NY1A0074.jpg';
import terminalImg from '../assets/photos/NY1A9768.jpg';
import labImg from '../assets/photos/NY1A9777.jpg';

export interface PhotoData {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  location: string;
}

export const PORTFOLIO_PHOTOS: Record<string, PhotoData> = {
  NY1A0074: {
    id: 'NY1A0074',
    src: portraitImg,
    title: 'Paul Owuor',
    subtitle: 'Software Engineer & Project Manager',
    tag: 'Profile & Engineering Leadership',
    description: 'Portrait of Paul Owuor at Zone01 Kisumu. Software Engineering Apprentice and Project Manager for FlexiRides, building distributed backend services and real-world African infrastructure.',
    location: 'Kisumu, Kenya',
  },
  NY1A9768: {
    id: 'NY1A9768',
    src: terminalImg,
    title: 'Hands-On Systems Engineering — Forum on ThinkPad T480',
    subtitle: 'Pure Go HTTP Backend & Browser Interface',
    tag: 'Systems Programming & Testing',
    description: 'Paul testing and compiling the Forum full-stack web application built from scratch with Go standard library, SQLite database migrations, and Docker on his ThinkPad T480 workstation.',
    location: 'Zone01 Engineering Lab · Kisumu',
  },
  NY1A9777: {
    id: 'NY1A9777',
    src: labImg,
    title: 'Collaborative Problem Solving at Zone01 Kisumu',
    subtitle: 'Apprenticeship & Peer Engineering',
    tag: 'Collaborative Development',
    description: 'Working side-by-side with peers at the Zone01 Kisumu tech hub, debugging concurrent routines, reviewing architecture, and developing distributed services.',
    location: 'Zone01 Kisumu Tech Hub',
  },
};

interface PhotoContextType {
  photos: {
    NY1A0074: string;
    NY1A9768: string;
    NY1A9777: string;
  };
  photoList: PhotoData[];
  activeLightboxPhoto: PhotoData | null;
  openLightbox: (photoOrKey: PhotoData | 'NY1A0074' | 'NY1A9768' | 'NY1A9777') => void;
  closeLightbox: () => void;
}

const PhotoContext = createContext<PhotoContextType>({
  photos: {
    NY1A0074: portraitImg,
    NY1A9768: terminalImg,
    NY1A9777: labImg,
  },
  photoList: Object.values(PORTFOLIO_PHOTOS),
  activeLightboxPhoto: null,
  openLightbox: () => {},
  closeLightbox: () => {},
});

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<PhotoData | null>(null);

  const photos = {
    NY1A0074: portraitImg,
    NY1A9768: terminalImg,
    NY1A9777: labImg,
  };

  const photoList = [
    PORTFOLIO_PHOTOS.NY1A0074,
    PORTFOLIO_PHOTOS.NY1A9768,
    PORTFOLIO_PHOTOS.NY1A9777,
  ];

  const openLightbox = (photoOrKey: PhotoData | 'NY1A0074' | 'NY1A9768' | 'NY1A9777') => {
    if (typeof photoOrKey === 'string') {
      setActiveLightboxPhoto(PORTFOLIO_PHOTOS[photoOrKey] || PORTFOLIO_PHOTOS.NY1A0074);
    } else {
      setActiveLightboxPhoto(photoOrKey);
    }
  };

  const closeLightbox = () => {
    setActiveLightboxPhoto(null);
  };

  return (
    <PhotoContext.Provider
      value={{
        photos,
        photoList,
        activeLightboxPhoto,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => useContext(PhotoContext);
