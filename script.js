
let randColors;


window.onload = function() {

  randColors = newRandColorsList($('li').length);

  div($("#editor"),$("#editor-diagram"));
  //div($("#inset-card"),$("#inset-card-diagram"),true);
  
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
    const color = randColors[colorIndex];
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
    colorIndex += colorIncrement;
  });
  
}

function randColor(colorIndex) {

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