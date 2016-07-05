/***
 * Excerpted from "Seven Mobile Apps in Seven Weeks",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/7apps for more book information.
***/
﻿using System;

namespace Calc {
  public class CalculatorModel {

    private Value currentValue;

    public string Display {
      get {
        if (currentValue == null) {
          return "0";
        } else {
          return currentValue.ToString();
        }
      }
    }

    public void Input(string expression) {
      if (currentValue == null) {
        currentValue = new Value();
      }
      currentValue.append(expression);
    }

  }

  class Value {
    string value;
    public bool isFloat;
    public void append(string s) {
      if (s.Equals("0") && value == null) {
        return;
      };
      var isDecimal = s.Equals(".");

      if (isDecimal && isFloat) {
        return;
      } else {
        if (isDecimal && value == null) {
          value += 0;
        }
        value += s;
      }

      isFloat = isFloat || isDecimal;
    }
    public override string ToString() {
      if (value == null) {
        return "0";
      }
      return value;
    }
  }
}

