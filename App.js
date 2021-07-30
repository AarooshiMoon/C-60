import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from './Config'

export default class App extends Component {
constructor(){
  super()
  this.state={
    teamRanks:[],
  }
}

showTeamRanks=()=>{
  var teamRef= db.ref('teams/')
  teamRef.on("value", (data)=>{
    var teamList=data.val()
    console.log(teamList)
     for(var team in teamList){
       if(teamList[team]['isButtonPressed'] === 'true'){
         teamList[team]['teamName'] = team
         teams.push(teamList[team])
       }
     }
     console.log(teams)
     teams.sort(function(team1, team2){
       return team1.timestamp - team2.timestamp
     });
     this.setState({teamRanks:teams})
  })
}

componentDidMount(){
  this.showTeamRanks()
}

resetDb=()=>{
  var resetDatabase=db.ref('teams/').set({
    red:{
      isButtonPressed:false,
      timestamp:0
    },
      green:{
      isButtonPressed:false,
      timestamp:0
    },
      blue:{
      isButtonPressed:false,
      timestamp:0
    },
      yellow:{
      isButtonPressed:false,
      timestamp:0
    },
  })

  this.setState({teamRanks:[]})
}

  render() {
    return (
      <View style={{flex:1}}>
     
      <View 
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center',

      }}>
      {this.state.teamRanks.map((team)=>{

      <View 
      style={{
        width:140,
        height:55,
        borderWidth:2,
        margin:5,
        justifyContent:'center',
        backgroundColor:team.teamName,

      }}>
      
        <Text>{team.teamName.toUpperCase()}</Text>
        </View>

      })}
      </View>

      <Button
      title="reset"
      style={{
        width:100,
        height:100
      }}
      onPress={this.resetDb}
      />

      </View>
    );
  }
}
