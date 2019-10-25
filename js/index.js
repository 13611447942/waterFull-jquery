
window.onload = function () {
    waterFall();
}
function waterFall(){
    var items =$('.item')
    var tab = 15

    var screenWidth = $(window).width()//获取屏幕宽度

    var itemWidth =items.width() //获取盒子宽度
    
    var col = parseInt(screenWidth/(itemWidth+tab)) //获取列数
    console.log(col)
    var arr=[] //存储元素的高度

    $.each(items,function(index,item){
        
        if(index<col){
            $(item).css({
                top:0,
                left:$(item).width()*index+'px'
            })
           
            arr.push($(item).height())
            
        }else{
            var minHeight = Math.min.apply(Math.min,arr)
            var minIndex = $.inArray(minHeight,arr)
            
            $(item).css({
                top:minHeight+tab+'px',
                left:itemWidth*minIndex+(minIndex-1)*tab+'px'
            })

          

            arr[minIndex]=arr[minIndex]+$(item).height()+tab
        
        }

        
    })

    
    
}
window.onresize = function () {
    waterFall()
}

