// initialize all variables necesary for compilation
var scope;
var reserved_words;
var int_vars;
var float_vars;
var string_vars;
var boolean_vars;
var param_vars;
var quadruples;
var proc_table;
var functions_table;
var functions_call_table;
var function_params_array;
var current_function;
var pre_compilation;
var int_r = /^-?\d+$/;
var float_r = /^-?\d*\.\d+$/;
var string_r = /^"[^"]*"$/;
var boolean_r = /^(true|false)$/;
// set all variables necesary for compilation
function startCompilation(){
  current_function = 'main';
  // functions_table = {'hello':[0, ['integer', 'boolean'], 'string']};
  functions_table = {};
  // functions_call_table = [['hello', q_index, ['integer', 'boolean'], 'string']];
  functions_call_table = [];
  function_params_array = [];
  reserved_words = {
    '+': 0, '-': 1, '*': 2, '÷': 3, '==': 4, '<': 5,
    '>': 6, '<=': 7, '>=': 8, '!=': 9, 'and': 10,
    'or': 11, '=': 12, 'print': 13, 'say': 14, 'move': 15,
    'turn': 16, 'if': 17, 'else': 18, 'repeat': 19, 'do': 20,
    'while': 21, 'end': 22, 'var': 23, 'wall_in_front': 24, 'function': 25,
    'begin': 26, 'params': 27, 'no_params': 28, 'integer': 29, 'float': 30,
    'string': 31, 'boolean': 32, 'gotoFunk': 33, 'Return': 34, 'Begin': 35,
    'End': 36, 'gotoF': 37, 'goto': 38, 'gotoV': 39, 'on_goal': 40, 'not': 41
  };
  param_vars = {
    'integer': [],
    'float': [],
    'string': [],
    'boolean': []
  };
  int_vars = {
    'global': [],
    'local': [],
    'temporal': []
  };

  float_vars = {
    'global': [],
    'local': [],
    'temporal': []
  };

  string_vars = {
    'global': [],
    'local': [],
    'temporal': []
  };

  boolean_vars = {
    'global': [],
    'local': [],
    'temporal': []
  };

  quadruples = [];

  proc_table = {};
}
