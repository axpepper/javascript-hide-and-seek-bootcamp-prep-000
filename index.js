function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for(var i in lis){
    lis[i].innerHTML=(n+parseInt(lis[i].innerHTML)).toString()
  }
}

function deepestChild(){
  return unravel(document.getElementById('grand-node'))
}

function unravel(list){
  if(list.querySelector('div')===null){
    return list
  }
  return unravel(list.querySelector('div'))
}