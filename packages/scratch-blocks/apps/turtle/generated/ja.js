// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">視覚的なプログラミング環境</span><span id="blocklyMessage">ブロックリー</span><span id="codeTooltip">生成された JavaScript コードを表示します。</span><span id="linkTooltip">ブロックの状態を保存してリンクを取得します。</span><span id="runTooltip">ブロックで作成したプログラムを実行します。</span><span id="runProgram">プログラムを実行</span><span id="resetProgram">リセット</span><span id="dialogOk">OK</span><span id="dialogCancel">キャンセル</span><span id="catLogic">論理</span><span id="catLoops">繰り返し</span><span id="catMath">数学</span><span id="catText">テキスト</span><span id="catLists">リスト</span><span id="catColour">色</span><span id="catVariables">変数</span><span id="catProcedures">Procedures</span><span id="httpRequestError">ネットワーク接続のエラーです。</span><span id="linkAlert">ブロックの状態をこのリンクで共有できます:\n\n%1</span><span id="hashError">すみません。「%1」という名前のプログラムは保存されていません。</span><span id="xmlError">保存されたファイルを読み込めませんでした。別のバージョンのブロックリーで作成された可能性があります。</span><span id="listVariable">list</span><span id="textVariable">テキスト</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">指定した長さだけ前または後ろにタートルを動かします。</span><span id="Turtle_moveForward">前に進む</span><span id="Turtle_moveBackward">後ろに進む</span><span id="Turtle_turnTooltip">指定した角度だけタートルを回転させます。</span><span id="Turtle_turnRight">右に回転</span><span id="Turtle_turnLeft">左に回転</span><span id="Turtle_widthTooltip">ペンの太さを変えます。</span><span id="Turtle_setWidth">太さを変える</span><span id="Turtle_colourTooltip">ペンの色を変えます。</span><span id="Turtle_setColour">色を変える</span><span id="Turtle_penTooltip">線を引いたり引くのをやめたりするために、ペンを上げるか下げるかします。.</span><span id="Turtle_penUp">ペンを上げる</span><span id="Turtle_penDown">ペンを下ろす</span><span id="Turtle_turtleVisibilityTooltip">タートル (円と矢印) の表示/非表示を切り替えます。</span><span id="Turtle_hideTurtle">タートルを隠す</span><span id="Turtle_showTurtle">タートルを表示する</span><span id="Turtle_printHelpUrl">https://ja.wikipedia.org/wiki/印刷</span><span id="Turtle_printTooltip">タートルの方向と場所を文字として表示します。</span><span id="Turtle_print">表示</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">表示ブロックで使うフォントを設定します。</span><span id="Turtle_font">フォント</span><span id="Turtle_fontSize">フォント サイズ</span><span id="Turtle_fontNormal">標準</span><span id="Turtle_fontBold">太字</span><span id="Turtle_fontItalic">斜体</span><span id="Turtle_unloadWarning">このページから離れると、作った作品が失われます。</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">ブロックリー</a> : タートル グラフィックス</span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><script type="text/javascript" src="../slider.js"><\/script><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /><!-- Fast icon. --><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Makes the turtle do what the blocks say."><img src="../../media/1x1.gif" class="run icon21">プログラムを実行</button><button id="resetButton" class="primary" style="display: none"><img src="../../media/1x1.gif" class="stop icon21"> リセット</button></td></tr></table><div id="toolbarDiv"><button id="codeButton" class="notext" title="生成された JavaScript コードを表示します。"><img src=\'../../media/1x1.gif\' class="code icon21"></button><button id="linkButton" class="notext" title="ブロックの状態を保存してリンクを取得します。"><img src=\'../../media/1x1.gif\' class="link icon21"></button><button class="notext" id="captureButton" title="絵を保存します。"><img src=\'../../media/1x1.gif\' class="img icon21"></button><a id="downloadImageLink" download="お絵描き.png"></a></div><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="タートル"><block type="draw_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="draw_width"><value name="WIDTH"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="draw_pen"></block><block type="turtle_visibility"></block><block type="draw_print"><value name="TEXT"><block type="text"></block></value></block><block type="draw_font"></block></category><category name="色"><block type="draw_colour"><value name="COLOUR"><block type="colour_picker"></block></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"></block><block type="colour_blend"></block></category><category name="論理"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="繰り返し"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="数学"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="リスト"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><field name="NUM">5</field></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block></category><category name="変数" custom="VARIABLE"></category><category name="Procedures" custom="PROCEDURE"></category></xml>';
};
