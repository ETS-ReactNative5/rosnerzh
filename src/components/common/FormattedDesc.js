import React from 'react'

// FormattedDesc stateless component;
// Parse data
function FormattedDesc({content}) {
  return (
    <div className="main-constructor__image--desc-table">
      {content.map(({id, content}, i) => (
        <p key={i}>
          <span>{id}</span>
          <span>{content}</span>
        </p>
      ))}
    </div>
  )
}

export default FormattedDesc
