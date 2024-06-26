"use client"
import React, { Children } from 'react'
import { Provider } from 'react-redux'
import { store } from './store';

export default function StoreProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <Provider store={store}>{children}</Provider>
  )
}
