import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Notification {
  id: string;
  message: string;
  isVisible: boolean;
}

const BookingNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isEuropeanUser, setIsEuropeanUser] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const europeanNames = [
    'Anna', 'Lucas', 'Sofia', 'Oliver', 'Emma', 'Marco', 'Isabella', 'Henrik',
    'Marie', 'Giuseppe', 'Ingrid', 'Fernando', 'Katarina', 'Alessandro', 'Astrid',
    'Pablo', 'Francesca', 'Erik', 'Carmen', 'Giorgio', 'Helena', 'Miguel',
    'Valentina', 'Lars', 'Lucia', 'Antonio', 'Bianca', 'Johan', 'Paloma', 'Matteo',
    'Greta', 'Rafael', 'Chiara', 'Nils', 'Esperanza', 'Federico', 'Maja', 'Carlos',
    'Giulia', 'Oskar', 'Alejandra', 'Lorenzo', 'Astrid', 'Diego', 'Benedetta',
    'Magnus', 'Consolación', 'Davide', 'Frida', 'Javier'
  ];

  const europeanCountries = [
    'Germany', 'France', 'Italy', 'Spain', 'Netherlands', 'Sweden', 'Norway',
    'Denmark', 'Finland', 'Belgium', 'Austria', 'Switzerland', 'Portugal',
    'Poland', 'Czech Republic', 'Hungary', 'Greece', 'Ireland', 'Luxembourg',
    'Slovenia', 'Estonia', 'Latvia', 'Lithuania', 'Slovakia', 'Croatia'
  ];

  const tourPackages = [
    'Zanzibar Beach Tour', 'Safari Adventure in Tanzania', 'Zanzibar Holiday Package',
    'Tanzania Safari Tour', 'Stone Town Cultural Tour', 'Serengeti Safari Experience',
    'Zanzibar Spice Tour', 'Ngorongoro Crater Safari', 'Tanzania Wildlife Safari',
    'Zanzibar Sunset Cruise', 'Mount Kilimanjaro Trek', 'Tanzania Beach Safari Combo',
    'Zanzibar Dolphin Tour', 'Tarangire Safari Adventure', 'Tanzania Cultural Tour'
  ];

  // Check if user is from Europe using geolocation
  useEffect(() => {
    const checkUserLocation = async () => {
      try {
        // For demo purposes, we'll assume user is European
        // In production, you'd use a geolocation service like ipinfo.io or similar
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const europeanCountryCodes = [
          'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
          'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK',
          'SI', 'ES', 'SE', 'GB', 'NO', 'CH', 'IS', 'LI', 'MC', 'SM', 'VA'
        ];
        const isPreview = typeof window !== 'undefined' && window.location.hostname.includes('lovable.app');
        setIsEuropeanUser(isPreview || europeanCountryCodes.includes(data.country_code));
      } catch (error) {
        // Fallback: assume user is European for demo
        setIsEuropeanUser(true);
      }
    };

    checkUserLocation();
  }, []);

  // Generate random booking notification
  const generateNotification = (): Notification => {
    const randomName = europeanNames[Math.floor(Math.random() * europeanNames.length)];
    const randomCountry = europeanCountries[Math.floor(Math.random() * europeanCountries.length)];
    const randomTour = tourPackages[Math.floor(Math.random() * tourPackages.length)];
    
    const actions = ['just booked', 'reserved', 'booked'];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];

    return {
      id: Date.now().toString(),
      message: `${randomName} from ${randomCountry} ${randomAction} a ${randomTour}!`,
      isVisible: true
    };
  };

  // Show notifications every 5 seconds
  useEffect(() => {
    if (!isEuropeanUser || notificationCount >= 50) return;

    const interval = setInterval(() => {
      if (notificationCount < 50) {
        const newNotification = generateNotification();
        setNotifications(prev => [...prev, newNotification]);
        setNotificationCount(prev => prev + 1);

        // Auto remove after 4 seconds
        setTimeout(() => {
          setNotifications(prev => 
            prev.map(notif => 
              notif.id === newNotification.id 
                ? { ...notif, isVisible: false }
                : notif
            )
          );

          // Remove from array after fade out animation
          setTimeout(() => {
            setNotifications(prev => 
              prev.filter(notif => notif.id !== newNotification.id)
            );
          }, 300);
        }, 4000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isEuropeanUser, notificationCount]);

  const removeNotification = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id 
          ? { ...notif, isVisible: false }
          : notif
      )
    );

    setTimeout(() => {
      setNotifications(prev => 
        prev.filter(notif => notif.id !== id)
      );
    }, 300);
  };

  if (!isEuropeanUser) return null;

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`
            transform transition-all duration-300 ease-in-out
            ${notification.isVisible 
              ? 'translate-x-0 opacity-100 scale-100' 
              : 'translate-x-full opacity-0 scale-95'
            }
            bg-white rounded-lg shadow-lg border border-gray-100
            p-4 flex items-start justify-between
            hover:shadow-xl transition-shadow duration-200
          `}
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-3 h-3 bg-green-500 rounded-full mt-1"></div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900 leading-relaxed">
                {notification.message}
              </p>
            </div>
          </div>
          <button
            onClick={() => removeNotification(notification.id)}
            className="flex-shrink-0 ml-3 text-gray-400 hover:text-gray-600 transition-colors duration-150"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookingNotifications;