/**
 * Created by acer on 2017/1/5.
 */
function cartoon ( option ){
    //构造函数执行的时候，立即调用初始化的函数
    this._init( option );
}
cartoon.prototype = {
    _init: function( option ){
        this.x = option.x === 0 ? 0 : (option.x || 10);//canvas上要绘制图片的起始X坐标
        this.y = option.y === 0 ? 0 : (option.y || 10);//canvas上要绘制图片的起始Y坐标

        this.w = option.w || 40; //绘制到canvas上的宽高
        this.h = option.h || 65; //绘制到canvas上的宽高

        this.fps = option.fps || 10;// frame per second 一秒多少帧
        this.originW = option.originW || 40;//截取的精灵图片中精灵的宽高
        this.originH = option.originH || 65;//截取的精灵图片中精灵的宽高

        this._dirindex = option._dirindex || 0;//这是定义方向的序列号，例如上对应2

        this._imgsrc = option.imgsrc || '';

    },

    // 渲染当前的动画
    render: function(ctx){
        // 第一步 加载图片
        var img = new Image();
        img.src = this._imgsrc;

        var self = this;

        img.onload = function(){
            var frameindex = 0;//帧动画的序列号，第一帧等
            // 此时this=img
            //第二步 图片加载完成后，启动一个定时器，不停得渲染图片
            setInterval(function(){
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.drawImage(
                     img //绘制的原始图片
                    , frameindex*self.originW //剪切图片的X坐标
                    , self._dirindex*self.originH //剪切图片的Y坐标
                    , self.originW //要剪切图片的宽度
                    , self.originH //要剪切图片的高度
                    , self.x //canvas上要绘制图片的起始X坐标
                    , self.y //canvas上要绘制图片的起始Y坐标
                    , self.w //在canvas上要绘制图片的宽度
                    , self.h //在canvas上要绘制图片的高度
                );
                frameindex ++;
                frameindex %= 4;
            },1000 / self.fps);
        }

    },

    // 改变方向
    changeDir: function(dir){
        if( dir == 'left' ){
            this._dirindex = 1;
        }
        if( dir == 'right' ){
            this._dirindex = 2;
        }
        if( dir == 'up' ){
            this._dirindex = 3;
        }
        if( dir == 'down' ){
            this._dirindex = 0;
        }
    }

}

































