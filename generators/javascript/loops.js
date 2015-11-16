'use strict';

goog.provide('Blockly.JavaScript.loops');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['repeat'] = function(block) {
  var value_n_times = Blockly.JavaScript.statementToCode(block, 'n_times');

  var left_quadruple = false;
  var right_quadruple = false;

  var left_value;
  var left_type;
  var left_index;
  var left_var_type;

  if (Number(value_n_times)) {
    left_quadruple = quadruples[value_n_times][3];
    left_type = indexToType(left_quadruple[0]);
    left_var_type = left_type;
  } else {
    left_value = value_n_times.input;
    left_type = value_n_times.type;
    left_var_type = left_type;
  }

  if (left_type === 'var'){
    if (findVariable(left_value) === -1){
      alert('Variable "' + left_value + '" not defined.');
      throw('Semantic Error');
    } else {
      left_index = findVariable(left_value);
      left_var_type = indexToType(left_index);
      left_quadruple = left_index;
    }
  } else if(left_quadruple === false) {
    left_quadruple = left_value;
  }

  if(left_var_type !== 'integer') {
    alert('Repeat loop must have an integer');
    throw('Type Mismatch');
  }

  var times = left_quadruple;
  var repeat_temporal = resultType('integer', 'integer', 0);
  quadruples.push(['=', repeat_temporal, '', times]);

  var bool_repeat_temporal = resultType('integer', 'integer', 6);
  var jump_index = quadruples.length;
  var false_jump_index;
  quadruples.push(['>', repeat_temporal, 0, bool_repeat_temporal]);

  quadruples.push(['-', repeat_temporal, 1, repeat_temporal]);

  false_jump_index = quadruples.length;
  quadruples.push(['gotoF', bool_repeat_temporal, '', 0]);

  Blockly.JavaScript.statementToCode(block, 'statement');

  quadruples.push(['goto', '', '', jump_index]);

  quadruples[false_jump_index][3] = quadruples.length;

  return '';
};

Blockly.JavaScript['while'] = function(block) {
  var value_expression = Blockly.JavaScript.statementToCode(block, 'expression');
  var jump_to_condition = quadruples.length - 1;
  var false_jump_index = quadruples.length;
  quadruples.push(['gotoF', quadruples[value_expression][3], '', 0]);

  Blockly.JavaScript.statementToCode(block, 'statment');
  quadruples.push(['goto', '', '', jump_to_condition]);
  quadruples[false_jump_index][3] = quadruples.length;

  return '';
};

Blockly.JavaScript['do_while'] = function(block) {
  var true_jump_index = quadruples.length;
  Blockly.JavaScript.statementToCode(block, 'statment');
  Blockly.JavaScript.statementToCode(block, 'expression');

  quadruples.push(['gotoV', quadruples[quadruples.length - 1][3], '', true_jump_index]);
  return '';
};
