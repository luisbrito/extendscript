#targetengine "session" 
/**
* @@@BUILDINFO@@@ UnitConverter_ID&IC.jsx !Version! Thu May 16 2013 16:58:48 GMT-0300
* @ autor : Luis Fernando Brito
*/


var win = new Window("palette", 'Conversor de unidade InDesign e InCopy', [0,0,325,125], );
with(win){
	win.eTextDeUnit = add( "edittext", [185,25,310,47], undefined  );
	win.sText = add( "statictext", [15,30,75,50], 'De:' );
	win.sText = add( "statictext", [15,60,75,80], 'Para:' );
	win.eTextParaUnit = add( "edittext", [185,55,310,77], undefined );
	win.deUnit = add( "dropdownlist", [80,25,175,47], undefined, {items: ['Pixel: ','Polegadas:','Milímetros: ','Centímetros:','Pontos: ','Picas:','Cíceros:'], } );
    win.deUnit.selection = 0;
	win.paraUnit = add( "dropdownlist", [80,55,175,77], undefined, {items: ['Pixel: ','Polegadas:','Milímetros: ','Centímetros:','Pontos: ','Picas:','Cíceros:'], } );
    win.paraUnit.selection = 0;
	win.btnConverter = add( "button", [240,90,310,112], 'Converter' );
    win.btnConverter.onClick = function () {win.eTextParaUnit.text = loadConvertUnists() }
	}

win.center();
win.show();

function loadConvertUnists(){
        var converterDe = Number(win.eTextDeUnit.text);
        var unidade = selectItem ()[0];
        var converterPara = selectItem ()[1];    
    return convertUnits(converterDe+""+unidade,converterPara);
}

function convertUnits(converterDe,converterPara){
    var UnidadeDeValor = new UnitValue(converterDe);
    if (UnidadeDeValor.type == "?")
    {
        $.writeln(" Tipo de unidade desconhecida.");
        beep()
    }
    else
    {
         UnidadeDeValor.convert(converterPara);
    }
    return UnidadeDeValor;   
}


function selectItem(){
    if(win.deUnit.selection == 0){
        var de = "px";
    }    
    if(win.deUnit.selection == 1){
        var de = "in";
    }
    if(win.deUnit.selection == 2){
        var de = "mm";
    }    
    if(win.deUnit.selection == 3){
        var de = "cm";
    }
    if(win.deUnit.selection == 4){
        var de = "pt";
    }
    if(win.deUnit.selection == 5){
        var de = "pica";
    }    
    if(win.deUnit.selection == 6){
        var de = "cicero";
    }
    if(win.paraUnit.selection == 0){
        var para = "px";
    }    
    if(win.paraUnit.selection == 1){
        var para = "in";
    }
    if(win.paraUnit.selection == 2){
        var para = "mm";
    }    
    if(win.paraUnit.selection == 3){
        var para = "cm";
    }
    if(win.paraUnit.selection == 4){
        var para = "pt";
    }
    if(win.paraUnit.selection == 5){
        var para = "pica";
    }    
    if(win.paraUnit.selection == 6){
        var para = "cicero";
    }
    var selectUnit = [de,para];
return selectUnit;
}    