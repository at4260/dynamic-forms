import React, { Component } from 'react'
import './App.css'
import { formFields } from './constants/formFields'

export class App extends Component {
  state = {
    inputs: {},
    submitted: false
  }

  handleInput = (e) => {
    const { name, value } = e.target
    const updatedInputs = this.state.inputs
    updatedInputs[name] = value
    this.setState({ inputs: updatedInputs })
  }

  getConditionalForm = (formField) => {
    const { name, human_label, type, conditional: { name: conditionName, show_if } } = formField
    const { inputs } = this.state
    const field = inputs[conditionName]

    if (field) {
      var dateSplit = field.split('-')
      var dateField = new Date(dateSplit[0], dateSplit[1] - 1, dateSplit[2])
      return show_if(dateField)
        ? <div className='form-group' key={name}>
          <p style={{ margin: '0px' }}>{human_label}</p>
          <input
            className='form-input'
            name={name}
            type={type}
            onInput={this.handleInput}
          />
        </div>
        : <div />
    } else {
      return <div />
    }
  }

  onSubmit = (e) => {
    e.preventDefault(e)

    // TODO: save payload to database; return a submitted state after saving to show desired page to user
    // const load = this.state.inputs
    // fetch('/fields', {
    //   method: 'POST',
    //   body: JSON.stringify(load),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => {
    //   res.status === 200
    //     ? this.setState({ submitted: true })
    //     : this.setState({ submitted: false })
    // })

    this.setState({ submitted: true })
  }

  render() {
    const { inputs, submitted } = this.state

    return (
      <div className='app'>
        { submitted
          ? <div className='container'>
              Thanks for your information. Here's your data:
              {JSON.stringify(inputs)}.
            </div>
          : <form className='container' onSubmit={this.onSubmit}>
            {formFields.map(formField => {
              const { name, human_label, type, conditional } = formField
              return conditional
                ? this.getConditionalForm(formField)
                : <div className='form-group' key={name}>
                  <p style={{ margin: '0px' }}>{human_label}</p>
                  <input
                    className='form-input'
                    name={name}
                    type={type}
                    onInput={this.handleInput}
                    required
                  />
                </div>
            })}
            <div className='form-group-submit'>
              <button type='submit'>
                Submit
              </button>
            </div>
          </form>
        }
      </div>
    )
  }
}

export default App
