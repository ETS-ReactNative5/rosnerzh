import React from 'react'

// FormattedDesc stateless component;
function FormattedDesc({content}) {
  return (
    <div className="main-constructor__image--desc-table">
      {content.map(({id, content}) => (
        <p>
          <span>{id}</span>
          <span>{content}</span>
        </p>
      ))}
    </div>
  )
}

export default FormattedDesc
