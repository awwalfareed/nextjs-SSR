import React from 'react'
import styles from '../styles/Header.module.css'
import { useState, useEffect } from 'react'


// console.log(data.map(e => ({
//   label: e.id ,topic: e.title
// })))


const Header = () => {
  const [show, setShow] = useState();
  const data = [
    {
      'id': '01',
      'title': 'Graphics & Design'
    },
    {
      'id': '02',
      'title': 'Digital Marketing'
    },
    {
      'id': '03',
      'title': 'Writing & Translation'
    },
    {
      'id': '04',
      'title': 'Video & Animation'
    },
    {
      'id': '05',
      'title': 'Music & Audio'
    },
    {
      'id': '06',
      'title': 'Programming & Tech'
    },
    {
      'id': '07',
      'title': 'Data'
    },
    {
      'id': '08',
      'title': 'Business'
    },
    {
      'id': '09',
      'title': 'Lifestyle'
    },
  ]

  const HideNav = () => {
    // console.log(window.scrollY + 'recieved')
    if (window.scrollY >= 90) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', HideNav)
    return () => {
      window.removeEventListener('scroll', HideNav)
    }
  }, [])
  return (
    <div className={`${styles.module_nav} ${show && styles.module}`}>
      {data.map((item, i) => (
        <h5 key={i}> {item.title} </h5>

      ))}
    </div>
  )

}
export default Header
