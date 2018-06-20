// $("canvas").css("width","window.innerWidth");
// $("canvas").css("height","window.innerHeight ");
var canvas_width=$("body").width();
var canvas_height=window.innerHeight-5;
function sketchProc(processing){
    var ds_x=new Array();
    var ds_y=new Array();
    var dsyd_x=new Array();
    var dsyd_y=new Array();
    var dian = new Array();
    var flag=new Array();
    var Y_AXIS = 1;
    var X_AXIS = 2;
        var i=0;
    var c=255;
    var pingyi=0,pingyi2=0,pingyi3=0;
    var geshu=parseInt(canvas_width/50)*parseInt(canvas_height/50)/6;
    processing.setup=function(){
        for(i=0;i<=geshu;i++){
            ds_x[i]=parseInt(processing.random(0,canvas_width));
            ds_y[i]=parseInt(processing.random(0,canvas_height));
            flag[i]=parseInt(processing.random(0,5));
            if(flag[i]==0){
                dsyd_x[i]=ds_x[i];
                dsyd_y[i]=ds_y[i];
            }
            if(flag[i]==1){
                dsyd_x[i]=ds_x[i]-50;
                dsyd_y[i]=ds_y[i];
            }
            if(flag[i]==2){
                dsyd_x[i]=ds_x[i];
                dsyd_y[i]=ds_y[i]-50;
            }
            if(flag[i]==3){
                dsyd_x[i]=ds_x[i];
                dsyd_y[i]=ds_y[i];
            }
            if(flag[i]==4){
                dsyd_x[i]=ds_x[i];
                dsyd_y[i]=ds_y[i]+50;
            }
            if(flag[i]==5){
                dsyd_x[i]=ds_x[i]+50;
                dsyd_y[i]=ds_y[i];
            }

        }
        processing.smooth();
        processing.frameRate(20);
    }
    processing.draw=function(){
        processing.size($("body").width(),window.innerHeight-5);

        processing.background(processing.color(9,8,35));

        for(var j=0;j<=i;j++){
        processing.strokeWeight(1);
        processing.stroke(255);
        processing.point(dsyd_x[j],dsyd_y[j]);
        processing.strokeWeight(2);
        processing.stroke(0);
        processing.point(ds_x[j],ds_y[j]);

        processing.strokeWeight(1);
        if(processing.mouseX<dsyd_x[j]+100&&processing.mouseX>dsyd_x[j]-100){
            if(processing.mouseY<dsyd_y[j]+100&&processing.mouseY>dsyd_y[j]-100){
        processing.stroke(100);
        processing.line(dsyd_x[j],dsyd_y[j],processing.mouseX,processing.mouseY);
        processing.strokeWeight(5);
        processing.stroke(processing.color(255,255,33));
        processing.point(dsyd_x[j],dsyd_y[j]);
            }
        }


        if(flag[j]==0){
            hengzou_left(j);
            if(parseInt(dsyd_x[j])==parseInt(ds_x[j])-100)
            flag[j]=1;
        }
        if(flag[j]==1){
            shangban(j);
            if(parseInt(ds_x[j])==parseInt(dsyd_x[j]))
            flag[j]=2;
        }
        if(flag[j]==2){
            shuzou_top(j);
            // alert(dsyd_y[0]);
            if(parseInt(ds_y[j])==parseInt(dsyd_y[j])){
                // alert();
            flag[j]=3;
            }
        }
        if(flag[j]==3){
            shuzou_bottom(j);
            if(parseInt(dsyd_y[j])==parseInt(ds_y[j])+100)
                flag[j]=4;
        }
        if(flag[j]==4){
            xiaban(j);
            if(parseInt(dsyd_x[j])==parseInt(ds_x[j])+100)
                flag[j]=5;
        }
        if(flag[j]==5){
            hengzou_right(j);
            if(parseInt(dsyd_x[j])==parseInt(ds_x[j]))
                flag[j]=0;
        }

        }

        processing.stroke(processing.color(255,150,50,50));
        processing.strokeWeight(400);
        processing.point((window.innerWidth/4)*3,0);

            pingyi+=15;
            processing.strokeWeight(1);
            processing.stroke(255,100);
            processing.line(window.innerWidth-pingyi,0+pingyi,window.innerWidth-30-pingyi,30+pingyi);
            if(pingyi>=window.innerHeight*15)
                pingyi=0;

            if(processing.frameCount>=100){
                pingyi2+=15;
                processing.strokeWeight(1);
                processing.stroke(255,100);
                processing.line(window.innerWidth/2-pingyi2,0+pingyi2,window.innerWidth/2-80-pingyi2,80+pingyi2);
                if(pingyi2>=window.innerHeight*10)
                    pingyi2=0;
            }
            if(processing.frameCount>=200){
                pingyi3+=10;
            processing.strokeWeight(1);
            processing.stroke(255,100);
            processing.line(window.innerWidth-pingyi3+100,0+pingyi3,window.innerWidth-30-pingyi3+100,30+pingyi3);
            if(pingyi3>=window.innerHeight*5)
                pingyi3=0;
            }

        // processing.directionalLight(51, 102, 126,processing.mouseX , processing.mouseY, 0);
            // alert(Processing.pmouseX-dsyd_x[0]);
        // dsyd_x[0]+=0.1;,processing.mouseY

    }
    processing.mouseMoved=function(){


        // if(processing.mouseX)

        // processing.point(processing.mouseX,processing.mouseY);
        }
    function hengzou_left(k){
            // alert();
        dsyd_x[k]-=0.5;
        dsyd_y[k]+=processing.sin( (processing.frameCount/4)/ 4 );
    }
    function hengzou_right(k){
            // alert();
        dsyd_x[k]-=0.5;
        dsyd_y[k]-=processing.sin( (processing.frameCount/4)/ 4 );
    }
    function shuzou_top(k){
        dsyd_x[k]+=processing.sin( (processing.frameCount/4)/ 4 );
        dsyd_y[k]+=0.5;
    }
    function shuzou_bottom(k){
        dsyd_x[k]-=processing.sin( (processing.frameCount/4)/ 4 );
        dsyd_y[k]+=0.5;
    }
    function shangban(k){
        dsyd_x[k]+=0.5;
        dsyd_y[k]-=0.5;
    }
    function xiaban(k){
        dsyd_x[k]+=0.5;
        dsyd_y[k]-=0.5;
    }
}



var canvas = document.getElementById("canvas1");
var p = new Processing(canvas,sketchProc);