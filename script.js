let sampledata = [
  {    
    content: "Item 1",
    inset: "inset1",    
    items: [
      {        
        content: "Subitem 1.1"      
      },      
      {        
        content: "Subitem 1.2"      
      }    
    ]
  },
  {
    content: "Item 2",
    items: [
      {
        content: "Subitem 2.1"
      },
      {
        content: "Subitem 2.2",
        inset: "inset2",
        items: [
          {
            content: "Subsubitem 2.2.1"
          },
          {
            content: "Subsubitem 2.2.2"
          }
        ]
      }
    ]
  }
];



window.onload = function() {

  buildNestedList($('#big-list'),$('#editor-diagram'),htmlData);

}

function buildNestedList($listContainer,$divContainer,data) {

  ulRecursive($listContainer,$divContainer,data);
}

function ulRecursive($superLi,$superDivLi,data) {

  let $ul = $('<ul>');
  let $divUl = $('<div>',{
    //class: 'ul',
    class: `ul ${data.ulClass}`,
    style: data.ulStyle,
    html: data.text
  });

  if (data.children) {
    data.children.forEach(item => {
      liRecursive($ul,$divUl,item);
    });
    
  } else {
    $divUl.addClass('end');
  }

  $superLi.append($ul);
  $superDivLi.append($divUl);

}

function liRecursive($superUl,$superDivUl,data) {

  const {main,content,text,inset,hue,liStyle,liClass}=data;

  let $li = $('<li>',{
    html: `<b>${main}</b>${(content ? content : '')}`,
  });

  let $divLi = $('<div>', {
    //class: 'li',
    class: `li ${liClass}`,
    style: liStyle,
    html: main
  });

  $li.css('color',color(hue));
  $divLi.css('color',color(hue));

  if (inset) {
    let $divLiInset = $divLi.clone();
    $divLiInset.append($('<div>',{class: 'ul see-inset', html: "see inset"}));

    $superDivUl.append($divLiInset);
    ulRecursive($li,$divLi,data);

    let insetDiagram = $(`#${inset}-diagram`);
    insetDiagram.append($divLi);
    $superUl.append($li);

  } else {
    ulRecursive($li,$divLi,data);
    $superDivUl.append($divLi);
    $superUl.append($li);
  }
}


function color(x) {
  return hsl(x);
}

function hsl(hue) {
  return 'hsl('+hue+',50%,60%)'
}

