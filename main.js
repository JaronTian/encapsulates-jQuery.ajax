window.jQuery = function(nodeOrSelector){
  let nodes = {}
  nodes.addClass = function(){}
  nodes.html = function(){}
  return nodes
}

// window.jQuery.ajax = function(options){
//   let url
//   if(arguments.length === 1){
//     url = options.url
//   }else if(arguments.length === 2){
//     url = auguments[0]
//     options = arguments[1]
//   }
//   let method = options.method
//   let body = options.body
//   let successFn = options.successFn
//   let failFn = options.failFn
//   let headers = options.headers

//   let {url, method, body, successFn, failFn, headers} = options //同上面5句，（ES6 解构赋值）


window.jQuery.ajax = function({url, method, body, headers}){
  return new Promise(function(resolve, reject){ // promise 可以 then()
    let request = new XMLHttpRequest()
    request.open(method, url) // 第一部分 配置request
    for(let key in headers){ // 遍历 headers 对象
      let value = headers[key]
      request.setRequestHeader(key, value)
    }
    request.onreadystatechange = ()=>{
      if(request.readyState === 4){
        if(request.status >= 200 && request.status < 300){
          resolve.call(undefined, request.responseText)
        }else if(request.status >= 400){
          reject.call(undefined, request) 
        }
      }
    }
    request.send(body) // 第四部分
  })
}

window.$ = window.jQuery

// function f1(responseText){console.log(responseText)}
// function f2(responseText){console.log('f2')}

myButton.addEventListener('click', (e)=>{ 
  let promise = window.jQuery.ajax({
    url: '/xxx', 
    method: 'post', 
    headers: { // 对象
      'content-type': 'application/x-www-form-urlencoded',
      'frank': '18'
    },
    body: 'a=1&b=2', 
    // successFn: (x)=>{ // 回调
    //   f1.call(undefined,x) // x: responseText
    //   f2.call(undefined,x)
    // },
    // failFn: (x)=>{ // 回调
    //   console.log(x.status) // 404   x: request
    //   console.log(x.responseText)
    // }  
  })

  promise.then(
    (x)=>{console.log(x)}, // 成功 回调 requestText
    (x)=>{console.log(x)} // 失败 回调 request
  )
})