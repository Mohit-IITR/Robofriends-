import React from 'react'
import "./Cardinfo.css"

function Cardinfo({filtercards}) {
    return (
        <div key={filtercards.id} className="card">
            <img src={` https://robohash.org/${filtercards.id}`} alt="robot" />
            <div className='text'>
                <h2>{filtercards.name}</h2>
                <p> {filtercards.email}</p>
                <p>{filtercards.username}</p>
            </div>
        </div>
    )
}

export default Cardinfo