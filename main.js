myButton.addEventListener('click', (e)=>{
    let request = new XMLHttpRequest()
    request.onreadystatechange = ()=>{
      if(request.readyState === 4){
        console.log('请求响应都完毕了')
        console.log(request.status) //第一部分 200
        console.log(request.statusText) //第一部分 OK
        if(request.status >= 200 && request.status < 300){
          console.log('说明请求成功')
          console.log(request.getAllResponseHeaders()) //第二部分
          console.log(request.getResponseHeader('content-Type'))
          console.log(typeof request.responseText) //第四部分是 string
          console.log(request.responseText) // 第四部分
          let string = request.responseText
          // 把符合 JSON 语法的字符串
          // 转换成 JS 对应的值
          let object = window.JSON.parse(string) 
          // JSON.parse 是浏览器提供的
          console.log(typeof object)
          console.log(object)
          console.log(object.note)
        }else if(request.status >= 400){
          console.log('说明请求失败') 
        }
      }
    }
    request.open('POST', '/xxx') // 第一部分 配置request
    request.setRequestHeader('content-Type', 'x-www-form-urlencoded') // 第二部分
    request.send('我要设置第四部分') // 第四部分
  })