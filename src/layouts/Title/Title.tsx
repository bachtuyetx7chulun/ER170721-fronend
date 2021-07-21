import React, { useEffect, useState } from 'react'

function Title() {
  const [title, setTitle] = useState('adidas Vietnam Online - Shop Sports & Originals | adidas VN')
  const onFocus = () => {
    setTitle('adidas Vietnam Online - Shop Sports & Originals | adidas VN')
  }

  const onBlur = () => {
    setTimeout(() => {
      setTitle('')
    }, 500)
  }

  useEffect(() => {
    window.addEventListener('focus', onFocus)
    window.addEventListener('blur', onBlur)
    const focusTitle = () => {
      document.title = title
    }

    focusTitle()
    return () => {
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('blur', onBlur)
    }
  }, [title])

  return <div className="titlepage"></div>
}

export default Title
