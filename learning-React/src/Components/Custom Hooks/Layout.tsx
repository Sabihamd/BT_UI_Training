import React from 'react'
import useWindowWidth from './useWindowWidth';

export default function Layout() {
    const isSmallScreen = useWindowWidth();
  return (
    <div>
      {isSmallScreen ? 'Small Screen' : 'Large Screen'}
    </div>
  )
}
