
window.onload = function() {

  //div($("#editor"),$("#editor-diagram"));
}

function buildNestedList(data) {

  const {main,content,items,inset,idAttr,color,childStyle,parentStyle,childClass,parentClass}=data;

  let $ul = $("<ul>");

  data.forEach(item => {
    let $li = $("<li>", { text: item.text });
    
    if (item.boldContent) {
      let $bold = $("<b>", { html: item.boldContent });
      $li.prepend($bold);
    }
    
    if (item.remainingHtml) {
      let $remaining = $("<span>", { html: item.remainingHtml });
      $li.append($remaining);
    }
    
    if (item.id) {
      $li.attr("id", item.id);
    }
    
    if (item.items) {
      $li.append(buildNestedList(item.items));
    }
    
    $ul.append($li);
  });

  return $ul;
}


function buildListItem() {
  return true;
}

function buildDivItem() {
  return true;
}


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
