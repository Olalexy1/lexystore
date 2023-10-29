import React from 'react'

//api test page

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    console.log(data, 'fakestore')

    return (data as any) || [];
}

const SignUpPage = async () => {
    const data = getData()

    console.log(data, 'fakestore')
    return (
        <p>sign up page</p>
    )
}

export default SignUpPage