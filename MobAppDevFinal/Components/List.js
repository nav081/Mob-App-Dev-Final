import React from "react";
import {  Text} from 'react-native';

export default class List extends React.Component{

    render(){
        const data=this.props.datalist.map((a,i)=>{
            return <Text key={i}>{a}</Text>
        });

        return(
            data
        )    
    };
}