let cv = document.querySelector('#cv')
let setcss = document.querySelector('#setcss')
let string = `/*你好，我是一名前端新人
接下来我要制作一个八卦图
首先准备一个div*/
#div1{
    width: 200px;
    height: 200px;
    border: 1px solid black;
}
/*接着，将div变成一个圆*/
#div1{
    box-shadow: 0 0 0 1px #000;
    border-radius: 50%;
    border: none; 
}
/*八卦是阴阳形成的
一半黑一半白*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加上两个神秘的圆圈*/
#div1::before{
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform:translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 20%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 100%);
}
#div1::after{
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform:translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 100%);
}
`
let n = 0
let string2 = ''

let step = () => {
    setTimeout(()=>{
        if(string[n] === '\n'){
            string2 += '<br>'
        }else if(string[n] === ' '){
            string2 += '&nbsp'
        } else{
            string2 += string[n]
        }

        cv.innerHTML = string2
        setcss.innerHTML = string.substring(0,n)
        window.scrollTo(0,9999)
        cv.scrollTo(0,9999)
        if(n < string.length-1) {
            n += 1
            step()
        }
    },80)
}
step()
