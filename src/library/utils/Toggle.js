import { Component } from 'react'

export default class Toggle extends Component {
  state = {
    on: false
  }

  toggle = () => {
    const { on } = this.state;
    this.setState({on: !on});
  }

  render() {
    const { children } = this.props;
    const { on } = this.state;
    return (children({on, toggle: this.toggle}))
  }
}
