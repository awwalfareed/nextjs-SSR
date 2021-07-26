import React from 'react'

function pages({ data }) {
    return (
        <div>
            {data.map((item, i) => (
                <li key={i}>
                    <a> {item.title} </a>
                </li>

            ))}
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/navListName`);
    const data = await res.json();
    console.log({ data })
    return {
        props: {
            data
        }
    }
}

export default pages
