#targetengine "session"
/**
 * @@@BUILDINFO@@@ UnitConverter_ID&IC.jsx !Version! Wed Aug 20 2014 23:31:22 GMT-0300
 * @ autor : Luis Fernando Brito
 */
var win = new Window("palette", 'Conversor de unidade InDesign e InCopy', [0, 0, 325, 125], );
with(win)
{
	win.eTextDeUnit = add("edittext", [185, 25, 310, 47], undefined);
	win.sText = add("statictext", [15, 30, 75, 50], 'De:');
	win.sText = add("statictext", [15, 60, 75, 80], 'Para:');
	win.eTextParaUnit = add("edittext", [185, 55, 310, 77], undefined);
	win.deUnit = add("dropdownlist", [80, 25, 175, 47], undefined,
	{
		items: ['Pixel: ', 'Polegadas:', 'Milímetros: ', 'Centímetros:', 'Pontos: ', 'Picas:', 'Cíceros:'],
	});
	win.deUnit.selection = 0;
	win.paraUnit = add("dropdownlist", [80, 55, 175, 77], undefined,
	{
		items: ['Pixel: ', 'Polegadas:', 'Milímetros: ', 'Centímetros:', 'Pontos: ', 'Picas:', 'Cíceros:'],
	});
	win.paraUnit.selection = 0;
	win.sText = add("statictext", [205, 112, 320, 132], 'powerby lbrito 2013');
	win.sText.graphics.font = ScriptUI.newFont(win.sText.graphics.font.name, 'Bold', 10);
	win.btnConverter = add("button", [240, 90, 310, 112], 'Converter');
	win.btnConverter.onClick = function ()
	{
		win.eTextParaUnit.text = loadConvertUnists()
	}
}
win.center();
win.show();

function loadConvertUnists()
{
	var converterDe = Number(win.eTextDeUnit.text);
	var unidade = selectItem()[0];
	var converterPara = selectItem()[1];
	return convertUnits(converterDe + "" + unidade, converterPara);
}

function convertUnits(converterDe, converterPara)
{
	var UnidadeDeValor = new UnitValue(converterDe);
	if (UnidadeDeValor.type == "?")
	{
		alert(" Tipo de unidade desconhecida.");
	}
	else
	{
		UnidadeDeValor.convert(converterPara);
	}
	return UnidadeDeValor;
}

function selectItem()
{
	switch (win.deUnit.selection.valueOf())
	{
	case 0:
		var de = "px";
		break;
	case 1:
		var de = "in";
		break;
	case 2:
		var de = "mm";
		break;
	case 3:
		var de = "cm";
		break;
	case 4:
		var de = "pt";
		break;
	case 5:
		var de = "pica";
		break;
	case 6:
		var de = "cicero";
		break;
	}
	switch (win.paraUnit.selection.valueOf())
	{
	case 0:
		var para = "px";
		break;
	case 1:
		var para = "in";
		break;
	case 2:
		var para = "mm";
		break;
	case 3:
		var para = "cm";
		break;
	case 4:
		var para = "pt";
		break;
	case 5:
		var para = "pica";
		break;
	case 6:
		var para = "cicero";
		break;
	}
	var selectUnit = [de, para];
	return selectUnit;
}