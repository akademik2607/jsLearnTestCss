'use strict';

const DomElement = function(height, width, bg, fontSize){

    this.selector = '';
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.element = '';
};

DomElement.prototype.createElement = function(selector){
    if(selector[0] === '.'){
        this.element = document.createElement('div');
        this.element.classList.add(selector.slice(1));
        this.element.textContent = 'Новый блок';
    }
    else if(selector[0] === '#'){
        this.element = document.createElement('p');
        this.element.id = selector.slice(1);
        this.element.textContent = 'Новый параграф';
    }
    if(this.element){
        let cssStr = '';
        cssStr += (this.height) ? 'height: ' + this.height + ';' : '';
        cssStr += (this.width) ? 'width: ' + this.width + ';' : '';
        cssStr += (this.bg) ? 'background: ' + this.bg + ';' : '';
        cssStr += (this.fontSize) ? 'font-size: ' + this.fontSize + ';' : '';
        this.element.style.cssText = cssStr;
        console.log(cssStr);
    }
};

DomElement.prototype.addElemToDoc = function(){
    document.body.append(this.element);
};

const domElement = new DomElement('100px', '150px', '#345238', '24px');
domElement.createElement('.test-div');
domElement.addElemToDoc();
const domElement2 = new DomElement('150px', '100px', '#526417', '12px');
domElement2.createElement('#test-p');
domElement2.addElemToDoc();

