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
}





/* 
function buildNested(data) {
  // 'data' is an array of objects.
  // the function will create a <ul> and a <div class='ul'>
  // for each object in the array, it will append an <li> to $ul and append a <div> to $divul
  // then it will return the new elements [$ul, $divul]

  let $ul = $('<ul>');
  let $divul = $('<div>', {class: 'ul'});

  data.forEach(item => {
    
    const {main,content,text,children,inset,hue,liStyle,ulStyle,liClass,ulClass}=item;

    let [$li,$divli] = buildListItem(main,content,hue,text,liClass,liStyle);

    if (inset) {
      let $diagram = $(`#${inset}-diagram`);
        // An already existing element on the page
      if ($diagram) {
        let $divulInset = $('<div>', {class: 'ul'});


      }
    }

    if (children) {
      let [$subul,$subdivul] = buildNested(children);

      $subdivul.addclass(ulClass);
      $subdivul.attr('style', ulStyle);

      $li.append($subul);
      $divli.append($subdivul);
    }
    
    return [$ul.append($li),$divul.append($divli)];
  });
}

function buildListItem(main,content,hue,text,liClass,liStyle) {

  let $li = $('<li>', {html:`<b>${main}</b>${content}`});
  let $divli = $('<div>',{
    class:`li ${liClass}`,
    style: liStyle,
    text: main
  });

  $li.css('color',hsl(hue));
  $divli.css('color',hsl(hue));

  $divli.append(
    $('<span>',{
      style: 'color:#e1e1e1',
      html: text 
    })
  );

  return [$li,$divli];
}

function buildSubList(ulClass,ulStyle) {
}
 */


function div(listItem,divEl,colorIndex=0,inset=false) {
  // For the list item, for each sub-item create a new div with a border in divEl

  const subListItems = listItem.children().children("ul>li");

  const endlist =(!subListItems.length || (listItem.hasClass("inset-end") && !inset) );

  if (endlist)  {
    divEl.addClass("end").append(listItem.data("html"))
    return
  }

  subListItems.each(function()  {
    const color = randColor(colorIndex);
    const itemEl = $(this);
    let colorIncrement = itemEl.find('li').length;
    const subdiv = $("<div>").addClass(itemEl.data('child-class')).attr("style",itemEl.data('child-style'));
    itemEl.css('color',color);
    itemEl.children("ul").css('border-color',color);
    subdiv.css('border-color',color);
    const newSection = $("<section>").addClass(itemEl.data('parent-class')).attr("style",itemEl.data('parent-style'))
      .append($("<span>").css('color',color).html(itemEl.children("b").html()))
      .append(subdiv);
    divEl.append(newSection);

    div(itemEl,subdiv,colorIndex+1,inset);

    if (itemEl.hasClass('inset-start') && !inset) {
      const divEl2 = $('#'+itemEl.attr('id')+'-diagram');
      const subdiv2 = $("<div>").addClass(itemEl.data('child-class')).attr("style",itemEl.data('child-style'));
      subdiv2.css('border-color',color);
      const newSection2 = $("<section>").addClass(itemEl.data('parent-class')).attr("style",itemEl.data('parent-style'))
        .append($("<span>").css('color',color).html(itemEl.children("b").html()))
        .append(subdiv2);
      divEl2.append(newSection2);

      div(itemEl,subdiv2,colorIndex+1,true);
    }
    colorIndex += colorIncrement+1;
  });
  
}

function hsl(hue) {
  return 'hsl('+hue+',50%,60%)'
}
