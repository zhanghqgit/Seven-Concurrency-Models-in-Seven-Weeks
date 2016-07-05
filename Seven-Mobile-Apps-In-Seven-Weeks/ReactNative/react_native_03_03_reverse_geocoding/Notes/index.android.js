/***
 * Excerpted from "Seven Mobile Apps in Seven Weeks",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/7apps for more book information.
***/
'use strict';

import React, {
  View,
  ToolbarAndroid,
  AppRegistry,
  Navigator,
  Component,
} from 'react-native';

import MainScreen     from './screens/MainScreen';
import NewNote        from './screens/NewNote';
import NotesDataModel from './data/NotesDataModel';
import EventEmitter   from 'EventEmitter';
import styles         from './styles';
import routes         from './routes';

var mainMenuActions = [ { title: 'New', show: 'ifRoom' } ];
var newNoteMenuActions = [
  { title: 'Save', show: 'ifRoom' },
  { title: 'Cancel', show: 'ifRoom' },
];

var noteDataModel = new NotesDataModel();
var saveEventEmitter = new EventEmitter();

var savePressed = function() {
    saveEventEmitter.emit('shouldSaveNewNote',
                          {model:noteDataModel});
};

class Notes extends Component {

  routeMapper(route, navigator) {
    switch(route.name) {
      case routes.mainRoute.name: return (
        <View style={{flex:1}}>
          <ToolbarAndroid
            title={route.name}
            actions={mainMenuActions}
            style={styles.androidToolbar}
            onActionSelected={() => {
              navigator.push(routes.newNoteRoute);
            }}
          />
          <MainScreen noteDataModel={noteDataModel} />
        </View>
      );
      case routes.newNoteRoute.name: return (
        <View style={{flex:1}}>
          <ToolbarAndroid
            title={route.name}
            actions={newNoteMenuActions}
            style={styles.androidToolbar}
            onActionSelected={(position) => {
              switch(position) {
              case 0:
                savePressed();
                navigator.pop();
                break;
              case 1:
                navigator.pop();
                break;
              }
            }}
          />
          <NewNote
            saveEventEmitter={saveEventEmitter}
            noteDataModel={noteDataModel} />
        </View>
      );
    }
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        initialRoute={routes.initialRoute()}
        renderScene={this.routeMapper} />
    );
  }
}

AppRegistry.registerComponent('Notes', () => Notes);
