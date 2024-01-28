import React from 'react';
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Profile from "./profile"


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <Profile />
        </ChakraProvider>
    </React.StrictMode>
);