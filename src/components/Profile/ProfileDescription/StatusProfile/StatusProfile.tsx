import React, { ChangeEvent } from "react";

export class StatusProfile extends React.Component<StatusProfilePropsType> {
  state = {
    statusSpan: false,
    valueInput: this.props.status,
  };
  componentDidMount(): void {
    
    
  }
  
  componentDidUpdate(prevProps: Readonly<StatusProfilePropsType>, prevState: Readonly<{}>){
    
    
    if(prevProps.status !== this.props.status){
      this.setState({
        valueInput:this.props.status
      })
    }
  }

  changeStatusSpanHandler() {
    this.setState({
      statusSpan: !this.state.statusSpan,
    });
  }
  onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      valueInput: e.currentTarget.value,
    });
  }
  onBlurHandler() {
    this.props.changeStatusProfile(this.state.valueInput)
    this.changeStatusSpanHandler()
  }

  render() {
    
    
    return (
      <div>
        {this.state.statusSpan ? (
          <input
            autoFocus
            onBlur={() => this.onBlurHandler()}
            type="text"
            value={this.state.valueInput}
            onChange={(e) => this.onChangeHandler(e)}
          />
        ) : (
          <span onDoubleClick={() => this.changeStatusSpanHandler()}>{this.props.status || '------'}</span>
        )}
      </div>
    );
  }
}


type StatusProfilePropsType = {
  status:string
  changeStatusProfile:(status:string) => void
}


