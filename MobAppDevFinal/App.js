import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import List from "./Components/List";
import AddTodo from "./Components/Add";
import { StyleSheet, Text, View,Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer,NavigationEvents} from 'react-navigation';







class App extends React.Component{

constructor(){
  super();
  this.state={
    data:[]
  };
}


UpdateRecord=()=>{
  var data=localStorage.getItem("TodoData"); 
  if(data==null)var res=["No To do Available"];
  else var res=data.split(",");
  
  this.setState({
      data:res
  });

}


componentDidMount(){
  var data=localStorage.getItem("TodoData"); 
  if(data==null)var res=["No To do Available"];
  else var res=data.split(",");
  
  this.setState({
      data:res
  });
}

render(){
  return (
    <div>
      <NavigationEvents
          onWillFocus={this.UpdateRecord}
      />
      <View style={styles.container}>      
        <Button title="Add ToDo" onPress={() => {this.props.navigation.navigate("Add")}} />      
        <List datalist={this.state.data} />
      </View>
    </div>
    
    
  );
};

  
}

const AppNavigator=createStackNavigator({

  All_ToDos:{
    screen:App
  },
  Add:{
    screen:AddTodo
  }
});

export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
