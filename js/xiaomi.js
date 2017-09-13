var s=null;
                  $("nav .wrap").hover(
                      function(){ 
                        clearTimeout(s);
                            s=setTimeout(function(){
                          $(".shopCar").animate({"color":'#ff6700',"backgroundColor":"#fff"},1);
                          $(".cover").slideDown(200);
                            },1)
                      },
                      function(){
                        clearTimeout(s);
                        s=setTimeout(function(){
                      $(".cover").delay(100).slideUp(200);
                      $(".shopCar").delay(300).animate({"color":'#b0b0b0',"backgroundColor":"#424242"},1);
                    },200)
                  })
              
                var l=null;
                
                $(".head-wrap").hover(
                    function(){
                        clearTimeout(l);
                            l=setTimeout(function(){
                                $(".head-hide").delay(100).slideDown(200);
                            },200)
                        
            
                    },
                    function(){
                        clearTimeout(l);
                        l=setTimeout(function(){
                            $(".head-hide").delay(100).slideUp(200);
                        },200)
                    })
                    $(".head-wrap .a1").mouseover(
                        function(){
                            $(".row div").empty();
                            $(".row div").append("<div></div>").children("div").addClass("gg");
                            $(".img-1").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/xm6-320.png%202x").
                            end().append("<span>小米6</span>").append('<span>2499元起</span>').
                            children('span').eq(1).addClass('price-color');
                            $(".img-2").children(".gg").html("<span>现货</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/max2_toubu.png").
                            end().append("<span>小米MAX 2</span>").append('<span>1699元起</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-3").children(".gg").html("<span>新品</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/5x-2!160x110.jpg").end().
                            append("<span>小米5x</span>").append('<span>1299元起</span>').children('span')
                            .eq(2).addClass('price-color');
                            $(".img-4").children(".gg").html("<span>下单立减600</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/xiaomiNOTE2-320-220!160x110.jpg").
                            end().append("<span>小米note 2</span>").append('<span>2799元起</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-5").children(".gg").html("<span>下单立减500</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/MIX-320-220!160x110.jpg").
                            end().append("<span>小米MIX</span>").append('<span>3499元起</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-6").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/5s-12!160x110.jpg").
                            end().append("<span>小米5s</span>").append('<span>1999元</span>').
                            children('span').eq(1).addClass('price-color');
                        })
                        $(".head-wrap .a2").mouseover(
                        function(){
                            $(".row div").empty();
                            $(".row div").append("<div></div>").children("div").addClass("gg");
                            $(".img-1").children(".gg").html("<span>新品</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/3205a.png").
                            end().append("<span>红米note5A标准版</span>").append('<span>699元</span>').
                            children('span').eq(1).addClass('price-color');
                            $(".img-2").children(".gg").html("<span>新品</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/320-220!160x110.jpg").
                            end().append("<span>红米note5A高配版</span>").append('<span>899元起</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-3").children(".gg").html("<span>享免息</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/hmn4xtb!160x110.jpg").end().
                            append("<span>红米note4x</span>").append('<span>999元起</span>').children('span')
                            .eq(2).addClass('price-color');
                            $(".img-4").children(".gg").html("<span>享免息</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/hm4x!160x110.jpg").
                            end().append("<span>小米4x</span>").append('<span>699元起</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-5").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/320-2202!160x110.jpg").
                            end().append("<span>红米4</span>").append('<span>799元起</span>').
                            children('span').eq(1).addClass('price-color');
                        
                        })
                        $(".head-wrap .a3").mouseover(
                        function(){
                            $(".row div").empty();
                            $(".row div").append("<div></div>").children("div").addClass("gg");
                            $(".img-1").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/mipad3_320.png").
                            end().append("<span>小米平板3 64GB</span>").append('<span>1499元</span>').
                            children('span').eq(1).addClass('price-color');
                            $(".img-2").append("<img />").children().
                            attr("src","https:////i1.mifile.cn/f/i/g/2015/video/bijiben32012.5!160x110.jpg").
                            end().append("<span>小米笔记本Air 12.5\"</span>").append('<span>3599元起</span>').
                            children('span').eq(1).addClass('price-color');
                            $(".img-3").children(".gg").html("<span>新品</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https:////i1.mifile.cn/f/i/g/2015/cn-index/bijiben320!160x110.jpg").end().
                            append("<span>小米笔记本Air 13.3\"</span>").append('<span>4999元</span>').children('span')
                            .eq(2).addClass('price-color');                 
                        })
                        $(".head-wrap .a4").mouseover(
                        function(){
                            $(".row div").empty();
                           $(".row div").append("<div></div>").children("div").addClass("gg");
                            $(".img-1").children(".gg").html("<span>超薄旗舰</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/xmds_49.png").
                            end().append("<span>小米电视4 49英寸</span>").append('<span>3999元</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-2").children(".gg").html("<span>超薄旗舰</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/xmds_55.png").
                            end().append("<span>小米电视4 55英寸</span>").append('<span>4499元</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-3").children(".gg").html("<span>超薄旗舰</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/dianshi465.png").end().
                            append("<span>小米电视4 65英寸</span>").append('<span>9999元</span>').children('span')
                            .eq(2).addClass('price-color');
                            $(".img-4").children(".gg").html("<span>热卖</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/320_43.png").
                            end().append("<span>小米电视4A 43英寸</span>").append('<span>1999元起</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-5").children(".gg").html("<span>热卖</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/320_49.png").
                            end().append("<span>小米电视4A 49英寸</span>").append('<span>2399元起</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-6").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/70dianshi.png").
                            end().append("<span>查看全部</span>").append('<span>小米电视</span>');
                        })
                        $(".head-wrap .a5").mouseover(
                        function(){
                            $(".row div").empty();
                            $(".row div").append("<div></div>").children("div").addClass("gg");
                            $(".img-1").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/mihezi.png").
                            end().append("<span>小米盒子3s</span>").append('<span>329元</span>').
                            children('span').eq(1).addClass('price-color');
                            $(".img-2").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/mihezi.png").
                            end().append("<span>小米盒子3c</span>").append('<span>229元</span>').
                            children('span').eq(1).addClass('price-color');
                            $(".img-3").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/15/goods/nav/hezi3s!160x110.jpg").
                            end().append("<span>小米盒子3 增强版</span>").append('<span>399元</span>').
                            children('span').eq(1).addClass('price-color');
                            $(".img-4").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/320x220.png").
                            end().append("<span>小米家庭影院</span>").append('<span>1999元</span>').
                            children('span').eq(1).addClass('price-color');
                        })
                        $(".head-wrap .a6").mouseover(
                        function(){
                            $(".row div").empty();
                           $(".row div").append("<div></div>").children("div").addClass("gg");
                            $(".img-1").children(".gg").html("<span>大容量</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/HD-Pro.png").
                            end().append("<span>小米路由器 HD/Pro</span>").append('<span>499元起</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-2").children(".gg").html("<span>双千兆</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/3G.png").
                            end().append("<span>小米路由器 3G</span>").append('<span>249元</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-3").children(".gg").html("<span>双频</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/xmlyq3.png").end().
                            append("<span>小米路由器 3</span>").append('<span>149元</span>').children('span')
                            .eq(2).addClass('price-color');
                            $(".img-4").children(".gg").html("<span>包邮</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/3C.png").
                            end().append("<span>小米路由器 3C</span>").append('<span>99元</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-5").children(".gg").html("<span>新品</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/dlm01.png").
                            end().append("<span>小米WiFi电力猫</span>").append('<span>249元</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-6").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/fdq2!160x110.jpg").
                            end().append("<span>小米WiFi放大器 2</span>").append('<span>49元</span>').
                            children('span').eq(1).addClass('price-color');
                        })
                        $(".head-wrap .a7").mouseover(
                        function(){
                            $(".row div").empty();
                            $(".row div").append("<div></div>").children("div").addClass("gg");
                            $(".img-1").children(".gg").html("<span>航拍利器</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/123321!160x110.jpg").
                            end().append("<span>小米无人机</span>").append('<span>2999元</span>').
                            children('span').eq(2).addClass('price-color');
                            $(".img-2").children(".gg").html("<span>包邮</span>").children("span").
                            addClass("gg-span").end().append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/sh2-320-220.png").end().
                            append("<span>小米手环2</span>").append('<span>149元</span>').children('span')
                            .eq(2).addClass('price-color');
                            $(".img-3").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/jsqcs-320-220.png").
                            end().append("<span>小米净水器</span>").append('<span>1499元起</span>').
                            children('span').eq(1).addClass('price-color');
                            $(".img-4").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/saodijiqiren320-220!160x110.jpg").
                            end().append("<span>米家扫地机器人</span>").append('<span>1699元</span>').
                            children('span').eq(1).addClass('price-color');
                            $(".img-5").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/g/2015/cn-index/dfb!160x110.jpg").
                            end().append("<span>米家压力IH电饭煲</span>").append('<span>999元</span>').
                            children('span').eq(1).addClass('price-color');
                            $(".img-6").append("<img />").children().
                            attr("src","https://i1.mifile.cn/f/i/16/goods/nav/air2!160x110.jpg").
                            end().append("<span>查看全部</span>").append('<span>智能硬件</span>');
                        
                        })
