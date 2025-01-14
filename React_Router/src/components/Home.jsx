import React from 'react'

const Home = () => {
    return (
        <div className='p-4'>
            <h2 className='text-center text-2xl underline'>React Router</h2>
            <ul className='list-disc list-inside'>
                <li><b>BrowserRouter : </b>It wraps your entire application and enables client-side routing using the browser’s history API.
                    <li style={{'listStyle':'none','marginLeft':'25px'}}>BrowserRouter: Manages the routing context.</li>
                </li>
                <li><b>Routes : </b>It acts as a container for all the Route components in your application.It is responsible for rendering the first matching route based on the current URL.</li>
                <li style={{'listStyle':'none','marginLeft':'25px'}}>Routes: Contains all the routes and determines which one to render.</li>
                <li><b>Route : </b>It defines a specific path and the component to render when that path is matched.The path attribute specifies the URL to match, and the element attribute specifies the component to display.</li>
                <li style={{'listStyle':'none','marginLeft':'25px'}}>Route: Specifies the path and the component to render for that path.</li>
            </ul>
        </div>
    )
}

export default Home