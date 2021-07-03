import React,{Component} from 'react'
import SeachForm from '../components/SeachForm'
import SectionProducts from '../components/SliderProduct'
import Layout from '../features/Layout'

class index extends Component{
    render(){
        return(
            <Layout>
                <SeachForm />
                <SectionProducts />
            </Layout>
        )
    }
}

export default index