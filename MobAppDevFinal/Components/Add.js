import React from "react";
import { TextInput,Text,Button,StyleSheet } from 'react-native';

class AddTodo extends React.Component{


    constructor(){
        super();
        this.state={
            ToDO:""
        };
    }

    
   Add=()=>{
        var data=localStorage.getItem("TodoData");        
        if(data==null) data=this.state.ToDO;
        else data=data+","+this.state.ToDO;        
        localStorage.setItem("TodoData",data);        
       alert("Added Successfully");
   }


    render(){

        const style=StyleSheet.create({
            text:{
                margin:8,
                padding:10,
                fontSize:20
            },
            input:{
                width:360,
                backgroundColor:'#fff',
                margin:8,
                padding:10
            }
        });
        return(
            <div>
                <Text style={style.text}>Enter ToDo</Text>
                <p></p>
                <TextInput style={style.input} onChangeText={ToDO=>this.setState({ToDO})}/>
                <Button title="Add" onPress={this.Add} />   
            </div>
            
        )
    }

}

export default AddTodo;