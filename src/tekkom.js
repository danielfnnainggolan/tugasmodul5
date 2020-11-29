import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
export default class tekkom extends Component {
constructor(props) {

super(props);
this.state = {
tekkom: [],
visible: false,
};
}

handleButton = (img, name, nickname, portrayed, birthday) => {
this.setState({
visible: true,
img: img,
nickname: nickname,
name:name,
birthday:birthday,
portrayed:portrayed


});
};
componentDidMount() {
axios({
method: "get",
url: "https://www.breakingbadapi.com/api/characters",
headers: {
accept: "*/*",
},
})
.then((data) => {
console.log(data.data);
this.setState({
tekkom: data.data,
});
})
.catch((error) => {
console.log(error);
});
}

render() {

return (
<div>
<div className="boxWhite">
<center>
<h1>Breaking Bad Character List</h1>
</center>

<Modal
title= {this.state.name}
centered
visible={this.state.visible}
onOk={() => this.setState({ visible: false })}
onCancel={() => this.setState({ visible: false })}
width={500}
>
<div style={{ textAlign: "center" }}>
<p><img src={this.state.img} width="300" height="400"/> </p>

<b>
<p>Nickname : {this.state.nickname} </p>
<p>Portrayed By : {this.state.portrayed} </p>
<p>Birthday: {this.state.birthday} </p>
</b>
</div>
</Modal>



{this.state.tekkom.map((results, index) => {
return (

  <div className="card" key={results.char_id}>
  <div className="card-body">
  <h5 className="card-title">Name : {results.name}</h5>
  <h5 className="card-title">Initial Occupation : {results.occupation[0]}</h5>
  <h5 className="card-title">Status : {results.status}</h5>


  </div>
  <button
  className="button"
  onClick={() => this.handleButton(results.img, results.name, results.nickname, results.portrayed, results.birthday)}
  >
  {" "}
  Character Details
  </button>
  </div>
  );
  })}
  </div>
  </div>
  );
  }
  }
