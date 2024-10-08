import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './lib/firebaseConfig.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App/>
    </FirebaseAppProvider>
  </StrictMode>,
)
