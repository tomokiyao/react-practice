import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
import { getEvent, deleteEvent, putEvent } from '../actions'
=======
import { getEvents, deleteEvent, putEvent } from '../actions'
>>>>>>> 63e1872... delete-event

class EventsShow extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

<<<<<<< HEAD
  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }

=======
>>>>>>> 63e1872... delete-event
  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    )
  }

  async onDeleteClick() {
    const { id } = this.props.match.params
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  async onSubmit(values) {
<<<<<<< HEAD
    await this.props.putEvent(values)
=======
    // await this.props.postEvents(values)
>>>>>>> 63e1872... delete-event
    this.props.history.push('/')
  }

  render() {
<<<<<<< HEAD
    const { handleSubmit, pristine, submitting, invalid } = this.props
=======
    const { handleSubmit, pristine, submitting } = this.props
>>>>>>> 63e1872... delete-event

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
<<<<<<< HEAD
            <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
=======
            <input type="submit" value="Submit" disabled={pristine || submitting} />
>>>>>>> 63e1872... delete-event
            <Link to="/">Cancel</Link>
            <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

<<<<<<< HEAD
=======
const mapDispatchToProps = ({ deleteEvent })

>>>>>>> 63e1872... delete-event
const validate = values => {
  const errors = {}

  if (!values.title) errors.title = "タイトルを入力してください。"
  if (!values.body) errors.body = "ボディーを入力してください。"

  return errors
}

<<<<<<< HEAD
const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id]
  return { initialValues: event, event }
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowFrom', enableReinitialize: true })(EventsShow)
=======
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventShowFrom' })(EventsShow)
>>>>>>> 63e1872... delete-event
)
