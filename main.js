window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}

window.jQuery.ajax = function(url, method, body, successFn, failFn){
  let request = new XMLHttpRequest()
  request.open(method, url) // 第一部分 配置request
  request.onreadystatechange = ()=>{
    if(request.readyState === 4){
      if(request.status >= 200 && request.status < 300){
        successFn.call(undefined, request.responseText)
      }else if(request.status >= 400){
        failFn.call(undefined, request)
        console.log(request) 
      }
    }
  }
  request.send(body) // 第四部分
  
}

window.$ = window.jQuery
myButton.addEventListener('click', (e)=>{
  window.jQuery.ajax(
    '/xxx', 
    'post', 
    'a=1&b=2', 
    (responseText)=>{console.log(1)}, 
    (request)=>{console.log(2)})
  })