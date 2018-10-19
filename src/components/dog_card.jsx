import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import './dog_card.css'

const Card = ({ opened,
   clickHandler, name, picture, description }) => {
  return (
    <div className={"card " + (opened ? "open" : "closed")} onClick={clickHandler}>
      <div className="header">{name}</div>
      <div className="body">
        <img src={picture} alt={name} />
        <p>{description}</p>
      </div>
    </div>
  )
}

const enhance = compose(
  withState('opened', 'setOpened', true),
  withHandlers({
    clickHandler: props => event => {
      event.preventDefault()
      props.setOpened(!props.opened)
    }
  })
)

export default enhance(Card);