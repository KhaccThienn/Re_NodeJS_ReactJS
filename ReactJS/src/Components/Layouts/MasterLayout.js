import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function MasterLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MasterLayout