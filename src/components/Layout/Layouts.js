import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        showSideDrawer:false
    };

    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer:false});
    };
    sideDrawerToggleHandler = () =>{
        this.setState((prevState) =>{       //Correct way of referencing old state
            return {showSideDrawer:!prevState.showSideDrawer };
        });
    };

    render(){
        return(
          <Aux>
              <div>   toolbar, sidedrawer, backdrop  </div>
              <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
              <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
              <main className={classes.Content}>
                  {this.props.children}
              </main>
          </Aux>
        )
    }
}

export default Layout;