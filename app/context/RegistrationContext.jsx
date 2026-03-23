// ============================================================
// context/RegistrationContext.jsx
// ============================================================
//
// WHAT IS THIS FILE?
// The user fills in their details across 3 separate screens.
// We need somewhere to store that data as they move between screens.
//
// React Context is a built-in way to share state between screens
// without passing props manually through every screen.
//
// THINK OF IT LIKE THIS:
//   Screen 1 saves: full_name, email
//   Screen 2 saves: role
//   Screen 3 reads all of it + adds: password → calls the API
//   accountCreated reads: the API response (full_name, role)
//
// HOW TO USE IT IN ANY SCREEN:
//   import { useRegistration } from '../context/RegistrationContext';
//   const { formData, setField, setRegisteredUser } = useRegistration();
// ============================================================

import { createContext, useContext, useState } from 'react';

// ─── 1. CREATE THE CONTEXT ───────────────────────────────────
// This is the "container". It holds the shared state.
// We start with an empty object as the default.
const RegistrationContext = createContext({});


// ─── 2. CREATE THE PROVIDER ──────────────────────────────────
// The Provider is a wrapper component. Any screen inside it
// can access the shared data.
//
// We export this and wrap the whole app with it in _layout.jsx
export const RegistrationProvider = ({ children }) => {

  // formData holds everything the user types across all 3 screens
  const [formData, setFormData] = useState({
    full_name : '',
    email     : '',
    role      : '',    // set on screen 2: 'senior_partner' | 'associate' | 'secretary'
    password  : '',
  });

  // After the API call succeeds, we store the response here
  // so accountCreated.jsx can display the real name + role
  const [registeredUser, setRegisteredUser] = useState(null);

  // setField('full_name', 'Tunde Bakare') updates one field at a time
  // without wiping out the other fields
  const setField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // reset clears everything — useful if the user cancels registration
  const reset = () => {
    setFormData({ full_name: '', email: '', role: '', password: '' });
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


// ─── 3. CREATE THE CUSTOM HOOK ───────────────────────────────
// Instead of writing useContext(RegistrationContext) every time,
// we wrap it in a custom hook so screens just call useRegistration()
export const useRegistration = () => useContext(RegistrationContext);
