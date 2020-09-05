genimport React, { Component } from 'react'
import QrReader from 'react-qr-reader'
// FIX THIS
class ReadQRCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "No result"
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "30%" }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default ReadQRCode