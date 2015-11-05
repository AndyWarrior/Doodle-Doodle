// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Blocks.begin_end={};Blockly.Blocks.begin_end={init:function(){this.appendDummyInput().appendField("begin");this.appendStatementInput("main").setCheck(null);this.appendDummyInput().appendField("end");this.setColour(105);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};Blockly.Blocks.conditions={};Blockly.Blocks["if"]={init:function(){this.appendValueInput("condition").setCheck(["boolean","factor"]).appendField("if");this.appendDummyInput().appendField("then");this.appendStatementInput("statment").setCheck(null);this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField("end");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(20);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.if_else={init:function(){this.appendValueInput("condition").setCheck(["boolean","factor"]).appendField("if");this.appendDummyInput().appendField("then");this.appendStatementInput("statment").setCheck(null);this.appendDummyInput().appendField("else");this.appendStatementInput("else_condition").setCheck(null);this.appendDummyInput().setAlign(Blockly.ALIGN_CENTRE).appendField("end");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(20);this.setTooltip("");
this.setHelpUrl("http://www.example.com/")}};Blockly.Blocks.equal_to={init:function(){this.appendValueInput("left_equal").setCheck(null);this.appendDummyInput().appendField("==");this.appendValueInput("right_equal").setCheck(null);this.setOutput(!0,"boolean");this.setColour(0);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.less_than={init:function(){this.appendValueInput("left_lt").setCheck("factor");this.appendDummyInput().appendField("<");this.appendValueInput("right_lt").setCheck("factor");this.setOutput(!0,"boolean");this.setColour(0);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.greater_than={init:function(){this.appendValueInput("left_gt").setCheck("factor");this.appendDummyInput().appendField(">");this.appendValueInput("right_gt").setCheck("factor");this.setOutput(!0,"boolean");this.setColour(0);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.less_than_or_equal_to={init:function(){this.appendValueInput("left_lte").setCheck("factor");this.appendDummyInput().appendField("<=");this.appendValueInput("right_lte").setCheck("factor");this.setOutput(!0,"boolean");this.setColour(0);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.greater_than_or_equal_to={init:function(){this.appendValueInput("left_gte").setCheck("factor");this.appendDummyInput().appendField(">=");this.appendValueInput("right_gte").setCheck("factor");this.setOutput(!0,"boolean");this.setColour(0);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.not_equal_to={init:function(){this.appendValueInput("left_not_equal").setCheck(["boolean","factor"]);this.appendDummyInput().appendField("!=");this.appendValueInput("right_not_equal").setCheck(["boolean","factor"]);this.setOutput(!0,"boolean");this.setColour(0);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.and={init:function(){this.appendValueInput("left_and").setCheck("boolean");this.appendDummyInput().appendField("and");this.appendValueInput("right_and").setCheck("boolean");this.setOutput(!0,"boolean");this.setColour(0);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.or={init:function(){this.appendValueInput("left_or").setCheck(["boolean","factor"]);this.appendDummyInput().appendField("or");this.appendValueInput("right_or").setCheck(["boolean","factor"]);this.setOutput(!0,"boolean");this.setColour(0);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};Blockly.Blocks.functions={};
Blockly.Blocks.def_function={init:function(){this.appendValueInput("params").setCheck(null).setAlign(Blockly.ALIGN_RIGHT).appendField("function").appendField(new Blockly.FieldTextInput("name"),"func_name").appendField("params").appendField("do");this.appendStatementInput("main").setCheck(null);this.appendValueInput("return_type").setCheck("return_value").appendField("end").appendField("                       ").appendField("return:");this.setInputsInline(!1);this.setColour(315);this.setTooltip("");
this.setHelpUrl("http://www.example.com/")}};Blockly.Blocks.call_function={init:function(){this.appendDummyInput().appendField("call function").appendField(new Blockly.FieldTextInput("function_name"),"function_call_value");this.appendValueInput("params").setCheck(null).appendField("params");this.setInputsInline(!0);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(315);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.return_function={init:function(){this.appendDummyInput().appendField("return value from").appendField(new Blockly.FieldTextInput("function_name"),"function_call_value");this.appendValueInput("params").setCheck(["param","no_params"]).appendField("params");this.setInputsInline(!0);this.setOutput(!0,["boolean","int","float","string"]);this.setColour(315);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.param={init:function(){this.appendValueInput("next_param").setCheck("param").appendField(new Blockly.FieldDropdown([["int","int"],["float","float"],["boolean","boolean"],["string","string"]]),"param_type").appendField(new Blockly.FieldTextInput("name"),"param_name");this.setInputsInline(!1);this.setOutput(!0,"param_type");this.setColour(290);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.no_params={init:function(){this.appendDummyInput().appendField("no params");this.setOutput(!0,"no_params");this.setColour(290);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};Blockly.Blocks.return_value={init:function(){this.appendDummyInput().appendField(new Blockly.FieldDropdown([["int","int"],["float","float"],["string","string"],["boolean","boolean"],["no return","no_return"]]),"return_type");this.setOutput(!0,null);this.setColour(315);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};Blockly.Blocks.loops={};Blockly.Blocks.repeat={init:function(){this.appendValueInput("NAME").appendField("repeat");this.appendDummyInput().appendField("times");this.appendStatementInput("statement").setCheck(null);this.appendDummyInput().appendField("end");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(285);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks["while"]={init:function(){this.appendValueInput("expression").setCheck("Boolean").appendField("while");this.appendDummyInput().appendField("do");this.appendStatementInput("statment").setCheck(null);this.appendDummyInput().appendField("end");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(285);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.do_while={init:function(){this.appendDummyInput().appendField("do");this.appendStatementInput("statment").setCheck(null);this.appendValueInput("expression").setCheck("Boolean").appendField("while");this.appendDummyInput();this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(285);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};Blockly.Blocks.movements={};Blockly.Blocks.move={init:function(){this.appendDummyInput().appendField("move").appendField(new Blockly.FieldTextInput("0"),"move_blocks").appendField("blocks");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(195);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.turn={init:function(){this.appendDummyInput().appendField(new Blockly.FieldTextInput("turn"),"turn_direction").appendField(new Blockly.FieldDropdown([["left","left"],["right","right"]]),"directions");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(195);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.wall_in_front={init:function(){this.appendDummyInput().appendField("wall in front?");this.setOutput(!0,"boolean");this.setColour(210);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};Blockly.Blocks.operations={};Blockly.Blocks.assignation={init:function(){this.appendValueInput("left_assig").setCheck("factor");this.appendDummyInput().appendField("=");this.appendValueInput("right_assig").setCheck(null);this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(65);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.sum={init:function(){this.appendValueInput("left_sum").setCheck(["Number","String"]);this.appendDummyInput().appendField("+");this.appendValueInput("right_sum").setCheck(["Number","String"]);this.setOutput(!0,["Number","String"]);this.setColour(65);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.substraction={init:function(){this.appendValueInput("left_substractor").setCheck("Number");this.appendDummyInput().appendField("-");this.appendValueInput("right_substractor").setCheck("Number");this.setOutput(!0,"Number");this.setColour(65);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.division={init:function(){this.appendValueInput("nominator").setCheck("Number");this.appendDummyInput().appendField("\u00f7");this.appendValueInput("denominator").setCheck("Number");this.setOutput(!0,"Number");this.setColour(65);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.multiplication={init:function(){this.appendValueInput("left_multiplier").setCheck("Number");this.appendDummyInput().appendField("x");this.appendValueInput("right_multiplier").setCheck("Number");this.setOutput(!0,"Number");this.setColour(65);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};Blockly.Blocks.print={};Blockly.Blocks.print={init:function(){this.appendDummyInput().appendField("print").appendField(new Blockly.FieldTextInput("value"),"print_value");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(45);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks.say={init:function(){this.appendDummyInput().appendField("say").appendField(new Blockly.FieldTextInput('"Hello"'),"say_value");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(45);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};Blockly.Blocks.variables_and_constants={};Blockly.Blocks.factor={init:function(){this.appendDummyInput().appendField(new Blockly.FieldTextInput("0"),"input");this.setOutput(!0,"factor");this.setColour(180);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};
Blockly.Blocks["var"]={init:function(){this.appendDummyInput().appendField("var").appendField(new Blockly.FieldDropdown([["int","integer"],["fload","float"],["bool","boolean"],["string","string"]]),"var_dic").appendField("name:").appendField(new Blockly.FieldTextInput(""),"value");this.setPreviousStatement(!0,null);this.setNextStatement(!0,null);this.setColour(120);this.setTooltip("");this.setHelpUrl("http://www.example.com/")}};