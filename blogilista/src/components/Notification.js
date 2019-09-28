import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  if (props.notification === null) {
    return null
  }


  //TODO <div className={props.message.error ? 'error' : 'success'}>
  return (
    <div className={props.notification.error ? 'error' : 'success'}>
      {props.notification.text}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    notification: state.notification,
  }
}

export default connect(
  mapStateToProps,
  null,
)(Notification)
