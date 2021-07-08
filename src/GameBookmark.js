import React, { Component } from 'react';


// GameBookmark handles the "Saved Games" page
export default class GameBookmark extends Component {
    // https://dev.to/asimdahall/client-side-image-upload-in-react-5ffc
  
    constructor(props) {
      super(props);
      this.state = {
        gameTitle: '',
        gameComments: '',
        gameArr: [],
        fileURL: null,
      }
  
      this.submitData = this.submitData.bind(this);
      this.handleComment = this.handleComment.bind(this);
      this.handleTitle = this.handleTitle.bind(this);
      this.uploadSingleFile = this.uploadSingleFile.bind(this);
      this.delete = this.delete.bind(this);
    }
  
    delete(name) {
        let tempEl = this.state.gameArr.find((element) => element.props.gameTitle === name)
        console.log(tempEl);
        var index = this.state.gameArr.indexOf(tempEl);
        this.state.gameArr[index] = (<div />);
        this.setState( {
          gameArr: this.state.gameArr
        })
    }
  
    uploadSingleFile(e) {
      this.setState({
        fileURL: URL.createObjectURL(e.target.files[0])
      })
  }
  
    submitData() {
      this.state.gameArr.push(<GameCard key={this.state.gameTitle} gameTitle={this.state.gameTitle} gameComments={this.state.gameComments} img={this.state.fileURL} delete={this.delete}/>);
      this.setState( {
        gameArr: this.state.gameArr
      })
    }
  
    handleTitle(event) {
      this.setState({gameTitle: event.target.value})
    }
  
    handleComment(event) {
      this.setState({gameComments: event.target.value})
    }
  
    render() {
      return (
        <section class="content">
  
          <div class="container mt-4">
            <div class="card text-white bg-secondary mb-4">
              <form onSubmit={this.submitData}>
                <div className="form-group">
                  <label for="boardName">Board Game Title:</label><br />
                  <input onChange={this.handleTitle} class="form-control inputs" type="text"></input><br />
                  <label for="boardName">How the game left off:</label><br />
                  <textarea onChange={this.handleComment} class="form-control inputs" type="text"></textarea><br />
                  <label for="boardName">Upload a picture of the board:</label><br />
                  <input class="inputs upload" type="file" accept="image/*" multiple="false" onChange={(e) => this.uploadSingleFile(e)} />
                  <input type="submit" value="Submit Game Data" class="btn btn-primary"></input>
                </div>
              </form>
            </div>
          {<div>{this.state.gameArr}</div>}
          </div>
        </section>
      )
    }
  }
  
  class GameCard extends Component {
    render() {
      return (
        <div className="pad">
        <div class="row text-white bg-dark mb-3">
              <div class="card-body flex">
                <h3 class="cards-text left">{this.props.gameTitle}</h3>
                <p class="cards-text">{this.props.gameComments}</p>
              </div>
              <img class="card-img-top game_photo flex" alt="" src={this.props.img} />
        </div>
        <button class="btn btn-primary" onClick={() => {this.props.delete(this.props.gameTitle)}}>Delete</button>
        </div>
      )
    }
  }