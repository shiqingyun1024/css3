
function CircleText( option ){
    this._init( option );
}
 CircleText.prototype = {
     _init: function( option ){
     this.x = option.x || 0, //圆形组的中心点坐标
     this.y = option.y || 0,
     this.innerRadius = option.innerRadius || 0,  // 内圆半径
     this.outerRadius = option.outerRadius || 0,  // 外圆半径
     this.text = option.text || 'canvas', // 圆内的文字
     this.innerStyle = option.innerStyle || 'red', // 内圆的填充样式
     this.outerStyle = option.outerStyle || 'blue', // 外圆的填充样式

         // 创建文字和原型的一个组
     this.group = new Konva.Group({
         x: this.x, //设置组的x，y坐标后，所有的内部元素按照组内的新坐标系定位
         y: this.y
     });

         // 初始化一个内部的圆
     var innerCircle = new Konva.Circle({ //创建一个内部圆
         x: 0, // 内圆的坐标
         y: 0,
         radius: this.innerRadius,//内圆的半径
         fill: this.innerStyle,//内圆的填充色
         opacity:.8
     });
         // 把内部圆添加到组内
      this.group.add( innerCircle );

       // 初始化一个圆环
       var outRing = new Konva.Ring({
           x: 0, // 坐标
           y: 0,
           innerRadius: this.innerRadius,// 内部半径
           outerRadius: this.outerRadius, // 外部半径
           fill: this.outerStyle, // 圆环的填充色
           opcity:.3 //圆环的透明度
       });
         //把圆环添加到组内
       this.group.add( outRing );

         //初始化一段文字

         var Text = new Konva.Text({
             x: 0 - this.outerRadius,
             y: -7,
             width: this.outerRadius * 2,//文字的宽度
             fill: '#fff',			    //文字的颜色
             fontSize: 17,				//文字的大小
             text: this.text,			//文字的内容
             align: 'center',			//居中显示
             fontStyle: 'bold'			//字体加粗
         });
         //把文字添加到组内
         this.group.add( Text );
     },
     //把组添加到层或其他组中去
     addToGourpOrLayer: function( arg ){
         arg.add( this.group );
     }
 };
