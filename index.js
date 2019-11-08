let keyCodes = {
    'lang1':
    {
        'Backquote': ['\`','\~'],
        'Digit1': [1,'!'],
        'Digit2': [2,'@'],
        'Digit3':[3,'#'],
        'Digit4':[4,'$'],
        'Digit5':[5,'%'],
        'Digit6':[6,'^'],
        'Digit7':[7,'\&'],
        'Digit8':[8,'*'],
        'Digit9':[9,'('],
        'Digit0': [0,')'],
        'Minus':['-','_'],
        'Equal': ['=','+'],
        'Backspace': ['Backspace','Backspace'],
        "Tab":['Tab','Tab'],
        "KeyQ":['q','Q'],
        "KeyW":['w','W'],
        "KeyE":['e','E'],
        "KeyR":['r','R'],
        "KeyT":['t','T'],
        "KeyY":['y','Y'],
        "KeyU":['u','U'],
        "KeyI":['i','I'],
        "KeyO":['o','O'],
        "KeyP":['p','P'],
        "BracketLeft": ['\[','\{'],
        "BracketRight": ['\]','\}'],
        "Backslash": ['\\','\|'],
        "CapsLock": ['CapsLk','CapsLk'],
        "KeyA": ['a','A'],
        "KeyS": ['s','S'],
        "KeyD": ['d','D'],
        "KeyF": ['f','F'],
        "KeyG": ['g','G'],
        "KeyH": ['h','H'],
        "KeyJ": ['j','J'],
        "KeyK": ['k','K'],
        "KeyL": ['l','L'],
        "Semicolon": ['\;','\:'],
        "Quote": ['\'','\"'],
        "Enter": ['Enter','Enter'],
        "ShiftLeft": ['Shift','Shift'],
        "KeyZ": ['z','Z'],
        "KeyX": ['x','X'],
        "KeyC": ['c','C'],
        "KeyV": ['v','V'],
        "KeyB": ['b','B'],
        "KeyN": ['n','N'],
        "KeyM": ['m','M'],
        "Comma": ['\,','\<'],
        "Period": ['\.','\>'],
        "Slash": ['\/','\?'],
        "ShiftRight": ['Shift','Shift'],
        "ControlLeft":['Ctrl','Ctrl'],
        "AltLeft":['Alt','Alt'],
        "Space":['Space','Space'],
        "AltRight":['Alt','Alt'],
        "ControlRight" :['Ctrl','Ctrl']    
    },
    'lang2':{
        'Backquote': ['ё','Ё'],
        'Digit1': [1,'!'],
        'Digit2': [2,'\"'],
        'Digit3':[3,'№'],
        'Digit4':[4,'\;'],
        'Digit5':[5,'%'],
        'Digit6':[6,'\:'],
        'Digit7':[7,'\?'],
        'Digit8':[8,'\*'],
        'Digit9':[9,'('],
        'Digit0': [0,')'],
        'Minus':['-','_'],
        'Equal': ['=','+'],
        'Backspace':['Backspace','Backspace'],    
        'Tab': ['Tab','Tab'],
        'KeyQ': ['й','Й'],
        'KeyW': ['ц','Ц'],
        'KeyE': ['у','У'],
        'KeyR': ['к','К'],
        'KeyT': ['е','Е'],
        'KeyY': ['н','Н'],
        'KeyU': ['г','Г'],
        'KeyI': ['ш','Ш'],
        'KeyO': ['щ','Щ'],
        'KeyP': ['з','З'],
        'BracketLeft': ['х','Х'],
        'BracketRight': ['ъ','Ъ'],
        "Backslash": ['\\','\|'],
        'CapsLock':['CapsLk','CapsLk'],
        'KeyA':['ф','Ф'],
        'KeyS':['ы','Ы'],
        'KeyD':['в','В'],
        'KeyF':['а','А'],
        'KeyG':['п','П'],
        'KeyH':['р','Р'],
        'KeyJ':['о','О'],
        'KeyK':['л','Л'],
        'KeyL':['д','Д'],
        'Semicolon':['ж','Ж'],
        'Quote': ['э','Э'],
        'Enter': ['Enter','Enter'],
        'ShiftLeft': ['Shift','Shift'],
        'KeyZ': ['я','Я'],
        'KeyX': ['ч','Ч'],
        'KeyC': ['с','С'],
        'KeyV': ['м','М'],
        'KeyB': ['и','И'],
        'KeyN': ['т','Т'],
        'KeyM': ['ь','Ь'],
        'Comma':['б','Б'],
        'Period':['ю','Ю'],
        'Slash':['\.','\,'],
        'ShiftRight': ['Shift','Shift'],
        "ControlLeft":['Ctrl','Ctrl'],
        "AltLeft":['Alt','Alt'],
        "Space":['Space','Space'],
        "AltRight":['Alt','Alt'],
        "ControlRight" :['Ctrl','Ctrl'] 
    }
} 
let codeArray = [
    ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace"],
    ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"],
    ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],
    ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight"],
    ["ControlLeft", "AltLeft",'Space',"AltRight", "ControlRight"]
];

let body = document.getElementsByTagName('body')[0];
body.appendChild(document.createElement('textarea'));
let textarea = document.getElementsByTagName('textarea')[0];
let section = document.createElement('section');
section.className = 'virtual_keyboard';
for (let i = 0; i < 5; i++){
    let row = document.createElement('div');
    row.className = `row ${i+1}`;
    ////////ES6 features
    section.appendChild(row);
}
body.appendChild(section);
let capsShift = new Set();
let lang;
if (lang = localStorage.getItem('language')){

}

function initKeyboard(lang='lang1'){
    localStorage.setItem('language',lang);
    let i;
    if (capsShift.has(16)||capsShift.has(20)){
        i =1;
    } else {
        i=0;
    }
    for (let rowNum = 0; rowNum < 5; rowNum++){
        let row = document.getElementsByClassName('row')[rowNum];
        row.innerHTML = '';
        for (let j=0; j<codeArray[rowNum].length; j++){
            let key = document.createElement('div');
            let keyCode = codeArray[rowNum][j];
            key.className= `key`;
            key.setAttribute('data',keyCode)
            let keyValue = keyCodes[lang][keyCode];
            key.innerHTML = keyValue[i];
            row.appendChild(key);
        }
    }
}

initKeyboard(lang);

let pressed = new Set();

document.addEventListener('keydown',function(event){
    let key = document.querySelector(`[data = \"${event.code}\"]`);
    key.className = key.className+" active";
    if(event.keyCode ==16){
        capsShift.add(16);
        initKeyboard(lang);
        pressed.add(event.keyCode);
        if(pressed.has(17)&&pressed.has(16)){
            if(lang=="lang1"){
                lang = "lang2";
                initKeyboard(lang);
            } else {
                lang = "lang1";
                initKeyboard(lang);
            }       
        }
    } else if(event.keyCode ==17){
        pressed.add(event.keyCode);

    } else if(event.keyCode ==20){
        if(capsShift.has(20)){
            capsShift.delete(20);
            initKeyboard(lang);
        } else {
            capsShift.add(20);
            initKeyboard(lang);
        }
    } else if(event.keyCode == 8){
        textarea.innerHTML = textarea.innerHTML.slice(0,textarea.textContent.length-1);
    } else if(event.code =='Space'){
        textarea.innerHTML+=" ";
    } else if (event.code=='Enter' || event.code=='Tab'){

    } else {
        textarea.innerHTML+=key.textContent;
    }   
})

document.addEventListener('keyup',function(event){
    if(event.keyCode ==17){
        pressed.delete(17);
    }
    if(event.keyCode ==16){
        pressed.delete(16);
        capsShift.delete(16);
        initKeyboard(lang);
    }
    let key = document.querySelector(`[data = \"${event.code}\"]`);
    key.className = "key";
}) 

body.onclick = function(event){
    if(event.target.hasAttribute('data')){
        let key = event.target;
        if (key.getAttribute('data')=='CapsLock'){
            if (capsShift.has(20)){
                capsShift.delete(20);
                initKeyboard(lang);
            } else {
                capsShift.add(20);
                initKeyboard(lang);
            }
        }

        if (key.getAttribute('data')=='Space'){
            textarea.innerHTML+=" ";
        }
        if (key.getAttribute('data')=='Backspace'){
            textarea.innerHTML=textarea.innerHTML.slice(0,textarea.textContent.length-1);
        }
        
        if (key.getAttribute('data')!='CapsLock' && key.getAttribute('data')!='Backquote' && key.getAttribute('data')!='Tab' && key.getAttribute('data')!='Enter' && key.getAttribute('data')!='ShiftLeft' && key.getAttribute('data')!='ShiftRight' && key.getAttribute('data')!='ControlLeft' && key.getAttribute('data')!='ControlRight' && key.getAttribute('data')!='AltLeft' && key.getAttribute('data')!='AltRight' && key.getAttribute('data')!='Space' && key.getAttribute('data')!='Backspace'){
            textarea.innerHTML+=event.target.textContent;
        }
    }              
}
