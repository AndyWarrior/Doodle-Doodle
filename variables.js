var reserved_words = {
  '+': 0, '-': 1, '*': 2, '÷': 3, '==': 4, '<': 5,
  '>': 6, '<=': 7, '>=': 8, '!=': 9, 'and': 10,
  'or': 11, '=': 12, 'print': 13, 'say': 14, 'move': 15,
  'turn': 16, 'if': 17, 'else': 18, 'repeat': 19, 'do': 20,
  'while': 21, 'end': 22, 'var': 23, 'wall_in_front': 24, 'function': 25,
  'begin': 26, 'params': 27, 'no_params': 28, 'int': 29, 'float': 30,
  'string': 31, 'boolean': 32
};

var int_vars = {
  'global': [],
  'local': [],
  'temporal': []
};

var float_vars = {
  'global': [],
  'local': [],
  'temporal': []
};

var string_vars = {
  'global': [],
  'local': [],
  'temporal': []
};

var boolean_vars = {
  'global': [],
  'local': [],
  'temporal': []
};

var quadruples = [];

// proc_table {
  // 31 = return value
  // [] = params
  // "say_hello": [ 31, [] ]
//}
var proc_table = {};
