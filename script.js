
/**
 * user-created data
 * @typedef {Object} OrganizerData
 * @property {String} main - Emmet abbreviation, most identifiable information to include in the diagram, accepts html
 * @property {String} [content] - Emmet abbreviation, the rest of the properties of the element, included in list but not diagram, accepts html
 * @property {Number} hue - Number [0,360] to include in hsl
 * @property {String} [text] - html to be put inside the box, such as the x inside of a close button
 * @property {OrganizerData[]} [children] - the sub-element of the given element
 * @property {{liClass?:String,liStyle?:String,ulClass?:String,ulStyle?:String}} [diagramFormat] - strings to add to the html for formatting the diagram. 'li' is for the unbordered box containing the Emmet abbrev. and the bordered box. 'ul' is the bordered box.
*/

window.onload = function() {

  buildNestedList($('#big-list'),$('#editor-diagram'),htmlData);

}

function buildNestedList($listContainer,$divContainer,data) {

  // ulRecursive($listContainer,$divContainer,data);
  ulRecursive($listContainer,$divContainer,data);
  scrollToId()
}

/**
 * Build "ul" elements and attach to parameters $li and $divLi, respectively
 * @param {JQuery} $li <li> element to attach the new <ul> to
 * @param {JQuery} $divLi <div class='li'> element to attach the new <div class='ul'> to
 * @param {OrganizerData} data the user-created data
 * @param {String} [listId=''] the suffix to attach to the id's of new elements
 */
function ulRecursive($li,$divLi,data,listId='') {

  const {children=[],text='',diagramFormat} = data;
  const {ulClass='',ulStyle=''} = diagramFormat;

  let $ul = $('<ul>',{id: 'ul'+listId});
  let $divUl = $('<div>',{
    id: 'dul'+listId,
    //class: 'ul',
    class: `ul ${ulClass}`,
    style: ulStyle,
    html: text
  });

  if (children) {
    children.forEach((item,index) => {
      liRecursive($ul,$divUl,item,(listId ? listId+index : ''));
    });
    
  } else {
    $divUl.addClass('end');
  }

  $li.append($ul);
  $divLi.append($divUl);

}

/**
 * Build 'li' elements and attach to the ul and divUl elements, respectively
 * @param {JQuery} $ul <ul> element to attach the new <li> to
 * @param {JQuery} $DivUl <div class='ul'> element to attach the new <div class='li'> to
 * @param {OrganizerData} data the user-created data
 * @param {String} listId the suffix to attach to the id's of new elements
 */
function liRecursive($ul,$divUl,data,listId='') {

  const {main,content='',inset=false,hue,diagramFormat}=data;

  const {liStyle='',liClass=''}=diagramFormat;

  let html =`<span ${(listId ? `id='liText${listId}'` : '')}" class='liText'><b>${main}</b>${content}</span>`;

  let $li = $('<li>',{
    id: 'li'+listId,
    html: html,
  });

  let $divLi = $('<div>', {
    id: 'dil'+listId,
    //class: 'li',
    class: `li ${liClass}`,
    style: liStyle,
    html: `<span ${(listId ? `id='liText${listId}'` : '')}" class='dliText'>${main}</span>`
  });

  $li.css('color',color(hue));
  $divLi.css('color',color(hue));

  if (inset) {
    let $divLiInset = $divLi.clone();
    $divLiInset.append($('<div>',{class: 'ul see-inset', html: "see inset"}));

    $divUl.append($divLiInset);
    ulRecursive($li,$divLi,data,listId);

    let insetDiagram = $(`#${inset}-diagram`);
    if (!insetDiagram) {
      insetDiagram = $('<section>',{class:'boxes inset',id: inset+'-diagram'});
      $('body').append(insetDiagram);
    }
    insetDiagram.append($divLi);
    $ul.append($li);

  } else {
    ulRecursive($li,$divLi,data,listId);
    $divUl.append($divLi);
    $ul.append($li);
  }
}

/** 
* Adds click events to $(".liText") and $(".dliText") Clicking either element scrolls to the other element with the matching id.
*/
function scrollToId() {
  $(".liText").click(function() {
    var divId = $(this).attr("id").replace("li", "dli");
    $('html, body').animate({
      scrollTop: $("#" + divId).offset().top
    }, 500);
  });

  $(".dliText").click(function() {
    var liId = $(this).attr("id").replace("dli", "li");
    $('html, body').animate({
      scrollTop: $("#" + liId).offset().top
    }, 500);
  });
  
}


function color(x) {
  return hsl(x);
}

function hsl(hue) {
  return 'hsl('+hue+',50%,60%)'
}

