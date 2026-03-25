import { createContext, useContext, useState } from 'react';

const RegistrationContext = createContext({});

export const RegistrationProvider = ({ children }) => {

  const [formData, setFormData] = useState({
    full_name : '',
    email     : '',
    specialty : '',   // required by the backend — collected on screen 1
    role      : '',   // set on screen 2: 'senior_partner' | 'associate' | 'secretary'
    password  : '',
  });

  const [registeredUser, setRegisteredUser] = useState(null);

  const setField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => {
    setFormData({ full_name: '', email: '', specialty: '', role: '', password: '' });
    setRegisteredUser(null);
  };

  return (
    <RegistrationContext.Provider
      value={{ formData, setField, registeredUser, setRegisteredUser, reset }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
