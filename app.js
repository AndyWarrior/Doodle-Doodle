var workspace = Blockly.inject('blocklyDiv',
    {media: '../../media/',
     toolbox: document.getElementById('toolbox')});
Blockly.Xml.domToWorkspace(workspace,
    document.getElementById('startBlocks'));

function resetShell(){
  var shellBody = document.getElementById('shell-body');
  shellBody.innerHTML = '';
}

function insertIntoShell(text){
  var shellBody = document.getElementById('shell-body');
  var li = document.createElement('li');
  li.innerHTML = text;
  shellBody.appendChild(li);
}

function toggleMazeNShell(){
  var maze = document.getElementById('maze');
  var shell = document.getElementById('shell');
  if (maze.className === 'hidden') {
    maze.className = '';
    shell.className = 'hidden shell-wrap';
  }else {
    maze.className = 'hidden';
    shell.className = 'shell-wrap';
  }
}

function showCode() {
  resetShell();
  // Generate JavaScript code and display it.
  pre_compilation = true;
  startCompilation();
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  pre_compilation = false;
  code = Blockly.JavaScript.workspaceToCode(workspace);
  checkFunctionCalls();
  alert(code);
}
