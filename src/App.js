import React, { Component } from 'react';
	import logo from './logo.svg';
	import './App.css';
	

	const { ScoreServiceClient } = require('./score_grpc_web_pb');
	const { ListMatchesRequest, ListMatchesResponse } = require('./score_pb.js');
	

	var client = new ScoreServiceClient('http://localhost:8082', null, null);
	

	class App extends Component {
	  
	  callGrpcService = () => {
	    const request = new ListMatchesRequest();
      request.setCountry("brian");

     client.listMatches(request, {}, (err, response) => {
	      if (response == null) {
	        console.log("EERRRRRR      ",err)
	      }else {
	        console.log(response )
	      }
	    });
	  }


	  render() {
	    return (
	      <div className="App">
	        <header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <button style={{padding:10}} onClick={this.callGrpcService}>Click for grpc request</button>
	        </header>
	      </div>
	    );
	  }
	}
	

	export default App;