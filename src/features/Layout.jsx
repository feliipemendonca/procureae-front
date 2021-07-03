import React,{Component} from 'react'
import Footer from './Footer'
import Header from './Header'

class Layout extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                {this.props.children}
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout