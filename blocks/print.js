'use strict';

goog.provide('Blockly.Blocks.print');

goog.require('Blockly.Blocks');

Blockly.Blocks['print'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("print")
        .appendField(new Blockly.FieldTextInput("value"), "print_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['say'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("say")
        .appendField(new Blockly.FieldTextInput("\"Hello\""), "say_value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
