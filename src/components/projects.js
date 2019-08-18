import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card  style={{minWidth: '550', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText style={{ height: '200px'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>FrontEnd</Button>
              <Button colored>BackEnd</Button>
            </CardActions>
            <CardMenu style={{color: 'black'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText style={{ height: '200px'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <Button colored>FrontEnd</Button>
              <Button colored>BackEnd</Button>
            </CardActions>
            <CardMenu style={{color: 'black'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText style={{ height: '200px'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <Button colored>FrontEnd</Button>
             <Button colored>BackEnd</Button>
            </CardActions>
            <CardMenu style={{color: 'black'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
       
          <div className="projects-grid">
          {/* Project 1 */}
          <Card  style={{minWidth: '550', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText style={{ height: '200px'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>FrontEnd</Button>
              <Button colored>BackEnd</Button>
            </CardActions>
            <CardMenu style={{color: 'black'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card  style={{minWidth: '550', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
          <CardText style={{ height: '200px'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button colored>FrontEnd</Button>
            <Button colored>BackEnd</Button>
          </CardActions>
          <CardMenu style={{color: 'black'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    }
  }
  render() {
    return(
      <div >
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Ruby & Rails</Tab>
          <Tab> JavaScript </Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;