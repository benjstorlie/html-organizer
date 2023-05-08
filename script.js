
let randColors;


window.onload = function() {

  //randColors = newRandColorsList($('li').length);

  //div($("#editor"),$("#editor-diagram"));
  
  let data = JSON.stringify({data: parseNestedList($('#big-list'))},null,2);


  $('#pre').text(data);
  copyToClipboard('pre');

}

function parseNestedList($list,idPrefix='') {
  let data = [];
  let idCounter = 0;

  $list.children('li').each(function() {
    const $item = $(this);
    let itemData = {};

    itemId = idPrefix + idCounter;
    itemData.id = itemId;
    idCounter++;

    // Get text content
    const [main,content] = parseListItem($item);
    itemData.main = main;
    if (content) {itemData.content = content;}

    // Get class name
    itemData.parentClass = $item.data('parent-class');

    // Get style properties
    itemData.parentStyle = $item.data('parent-style');

    // Get class name
    itemData.childClass = $item.data('child-class');

    // Get style properties
    itemData.childStyle = $item.data('child-style');

    itemData.childStyle = $item.data('child-style');

    itemData.text = $item.data('html');

    itemData.idAttr = $item.attr('id');

    itemData.class = $item.attr('class');

    // Check for nested list
    var $nestedList = $item.children('ul');
    if ($nestedList.length) {
      itemData.children = parseNestedList($nestedList,itemId);
    }

    // Add item data to array
    data.push(itemData);
  });

  return data;
}

function parseListItem($item) {
  const $parsedHtml = $("<div>").html($item.html());
  const main = $parsedHtml.find('b').html();
  const $remainingHtml = $parsedHtml.clone().find('b').remove().end();
  $remainingHtml.find('ul').remove();
  const content = $remainingHtml.html().trim();
  return [main,content];
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

function randColor(colorIndex) {

  colorIndex = colorIndex % randColors.length;

  return randColors[colorIndex];
}

function newRandColorsList(n) {

  let seed = Math.floor(360 * Math.random());

  let int = [...Array(n).keys()]; // integers 0 to n-1
  

  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = int[i];
    int[i] = int[j];
    int[j] = temp;
  }

  return int.map((e) => {return 'hsl('+ (seed+e*360/n)%360 +',50%,60%)'});;

}

function randColor2() {
  // Outputs a string rgb()

  let r = Math.floor(256 * Math.random());
  let g = Math.floor(256 * Math.random());
  let b = Math.floor(256 * Math.random());

  return 'rgb('+r+','+g+','+b+')'
}

function randColor3() {
  // Outputs a string hsl()

  let h=Math.floor(360 * Math.random());
  return 'hsl('+h+',50%,60%)';

}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}