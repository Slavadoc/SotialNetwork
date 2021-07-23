import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component{

  state={
    editMode: false,
    staus: this.props.status
  }

  activetedEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivetedEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (event) => {
    this.setState(
    {status:  event.currentTarget.value }
    )
  }

  componentDidUpdate(prevProps,prevState) {
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
    console.log('ComponentDidUpdate');
  }
  
  render() {
    console.log('render');
      return (
        <div>{
          !this.state.editMode &&
          <span onDoubleClick={this.activetedEditMode}>{this.props.status}</span>
        }{
          this.state.editMode &&
          <input onBlur={this.deactivetedEditMode} value={this.state.status}
                  onChange={this.onStatusChange}
                  />
        }
        </div>
      );
}
}

export default ProfileStatus;
/*onStatusChange = (event) => {
  this.setState({
        status: event.currentTarget.value});
}*/
