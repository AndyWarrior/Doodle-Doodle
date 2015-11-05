'use strict';

goog.provide('Blockly.Blocks.movements');

goog.require('Blockly.Blocks');

Blockly.Blocks['move'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("move")
        .appendField(new Blockly.FieldTextInput("0"), "move_blocks")
        .appendField("blocks");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['turn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("turn"), "turn_direction")
        .appendField(new Blockly.FieldDropdown([["left", "left"], ["right", "right"]]), "directions");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['wall_in_front'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wall in front?");
    this.setOutput(true, "boolean");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
