import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { postEvents } from '../actions'

class EventsNew extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onSubmit(values) {
    await this.props.postEvents(values)
    this.props.history.push('/')
  }

  render() {
    const { handleSubmit, pristine, submitting } = this.props

    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="Title" name="title" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="Body" name="body" type="text" component={this.renderField} />
          </div>
          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting} />
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = ({ postEvents })
const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "タイトルを入力してください。"
  if (!values.body) errors.body = "ボディーを入力してください。"

  return errors
}

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewFrom'})(EventsNew)
)
