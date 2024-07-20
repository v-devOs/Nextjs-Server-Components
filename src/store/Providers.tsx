'use client';
import { Provider } from "react-redux"
import { store } from './index';

interface Props{
  children: React.ReactNode
}

export default function Providers({children}:Props) {
  return (
    <Provider store = {store}>
      { children }
    </Provider>
  )
}
