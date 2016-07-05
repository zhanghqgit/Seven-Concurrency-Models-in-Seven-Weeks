/***
 * Excerpted from "Seven Mobile Apps in Seven Weeks",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/7apps for more book information.
***/
'use strict';

var React = require('react-native');
var {
  StyleSheet,
} = React;

var Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  iosContainer: {
    flex:1,
    paddingTop: 64,
    backgroundColor: '#F5F5F5',
  },
  androidToolbar: {
    backgroundColor: '#DDDDDD',
    height: 56,
  },
  navBar: {
    backgroundColor: '#F5F5F5',
  },
  navButtonText: {
    paddingTop: 14,
    color: '#005DB3',
  },
  navButtonRight: {
    paddingRight: 8,
  },
  navButtonLeft: {
    paddingLeft: 8,
  },
  navBarTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
  noDataScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  noDataMessage: {
    textAlign: 'center',
    color: '#A0A0A0',
  },
  viewPager: {
    flex: 1,
  },
  androidTabButton: {
    flex:1,
    flexDirection: 'column',
  },
  androidTabButtonTitle: {
    flex: 1,
    marginTop: 8,
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
  },
  androidTabButtonSelected: {
    flex: 1,
    height: 3,
    backgroundColor: '#A0A0A0',
    marginTop: 8,
  },
  noteTextInput: {
    margin: 8,
  },
  titleTextInput: {
    height: 40,
  },
  noteBodyTextInput: {
    flex:1,
  },
  divider: {
    height: 1,
    marginTop: 2,
    marginBottom: 2,
    borderColor: '#F5F5F5',
    borderWidth: .5
  },
  noteCellTitle: {
    flex: 2,
    fontSize: 18,
    fontWeight: '500',
    margin: 4,
  },
  noteCellLocation: {
    flex: 1,
    fontSize: 10,
    color: '#A0A0A0',
    margin: 4,
  },
  noteCellBody: {
    flex: 1,
    fontSize: 12,
    margin: 6,
  },
  locationButtonContainer: {
    flex:0,
    padding:4,
  },
  locationPreferenceLabel: {
    color: '#A0A0A0',
    margin: 4,
  },
});

module.exports = Styles;
