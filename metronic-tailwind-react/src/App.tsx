import {useEffect}  from 'react';
import KTComponent from './metronic/core';
import KTLayout from './metronic/app/layouts/demo1.js';
import {Home} from './pages/Home'; 
import { ListaPacientes } from './pages/Pacientes/index.tsx';
import { CadatroPaciente } from './pages/Pacientes/cadastro.tsx';
import { Login } from './pages/Login/index.tsx';
import { RecuperarSenha } from './pages/Login/recuperar-senha.tsx';
import { CheckEmail } from './pages/Login/check-email.tsx';
import { ResetarSenha } from './pages/Login/resetar-senha.tsx';

import { ListaComunidade } from './pages/Comunidade/index.tsx';

import { Chat } from './pages/Comunidade/chat.tsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {  

  useEffect(() => {
    KTComponent.init();
    KTLayout.init();
  }, []);

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login  />
  },  
  {
    path: "/resetar-senha",
    element: <ResetarSenha  />
  },    
  {
    path: "/recuperar-senha",
    element: <RecuperarSenha  />
  },
  {
    path: "/check-email",
    element: <CheckEmail  />
  },
  
  {
    path: "/home",
    element: <Home  />
  },
  {
    path: "/pacientes",
    element: <ListaPacientes  />
  },
  {
    path: "/cadastro-paciente",
    element: <CadatroPaciente  />
  },
  {
    path: "/comunidade",
    element: <ListaComunidade  />
  },
  {
    path: "/chat",
    element: <Chat  />
  },
  
])

  return (
    <>

      <RouterProvider router={router}  />   

      </>
  
  )
}

export default App
