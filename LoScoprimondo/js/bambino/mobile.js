(function(b)
{b.support.touch="ontouchend" in document;
if(!b.support.touch)
{
	return;
	
	}
	
	var c=b.ui.mouse.prototype,e=c._mouseInit,a;
	
	
	function d(g,h)
	{
		if(g.originalEvent.touches.length > 1)
		{
			return;
			
			}
			g.preventDefault();
			
			var i=g.originalEvent.changedTouches[0],f=document.createEvent("MouseEvents");

f.initMouseEvent(h,true,true,window,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);

g.target.dispatchEvent(f);
}

c._touchStart=function(g)

{
	var f=this;
	
	if(a||!f._mouseCapture(g.originalEvent.changedTouches[0]))
	{
		return;
		
		}
		
		a=true;
		
		f._touchMoved=false;
		
		d(g,"mouseover");
		d(g,"mousemove");
		d(g,"mousedown");
		};
		
		c._touchMove=function(f)
		{
			if(!a)
			{
				return;
				}
				
				this._touchMoved=true;
				
				d(f,"mousemove");
				};
				
				c._touchEnd=function(f)
				{
					if(!a){return;
					}
					
					d(f,"mouseup");
					d(f,"mouseout");
					if(!this._touchMoved)
					{
						d(f,"click");
						}
						a=false;
						};
						c._mouseInit=function()
						{
							var f=this;
							f.element.bind("touchstart",b.proxy(f,"_touchStart")).bind("touchmove",b.proxy(f,"_touchMove")).bind("touchend",b.proxy(f,"_touchEnd"));
							e.call(f);
							};
							})(jQuery);   
							
							
							
(function() {
    
    /* == GLOBAL DECLERATIONS == */
    TouchMouseEvent = {
        DOWN: "touchmousedown",
        UP: "touchmouseup",
        MOVE: "touchmousemove"
    }
   
    /* == EVENT LISTENERS == */
    var onMouseEvent = function(event) {
        var type;
        
        switch (event.type) {
            case "mousedown": type = TouchMouseEvent.DOWN; break;
            case "mouseup":   type = TouchMouseEvent.UP;   break;
            case "mousemove": type = TouchMouseEvent.MOVE; break;
            default: 
                return;
        }
        
        var touchMouseEvent = normalizeEvent(type, event, event.pageX, event.pageY);      
        $(event.target).trigger(touchMouseEvent); 
    }
    
    var onTouchEvent = function(event) {
        var type;
        
        switch (event.type) {
            case "touchstart": type = TouchMouseEvent.DOWN; break;
            case "touchend":   type = TouchMouseEvent.UP;   break;
            case "touchmove":  type = TouchMouseEvent.MOVE; break;
            default: 
                return;
        }
        
        var touch = event.originalEvent.touches[0];
        var touchMouseEvent;
        
        if (type == TouchMouseEvent.UP) 
            touchMouseEvent = normalizeEvent(type, event, null, null);
        else 
            touchMouseEvent = normalizeEvent(type, event, touch.pageX, touch.pageY);
        
        $(event.target).trigger(touchMouseEvent); 
    }
    
    /* == NORMALIZE == */
    var normalizeEvent = function(type, original, x, y) {
        return $.Event(type, {
            pageX: x,
            pageY: y,
            originalEvent: original
        });
    }
    
    /* == LISTEN TO ORIGINAL EVENT == */
    var jQueryDocument = $(document);
   
    if ("ontouchstart" in window) {
        jQueryDocument.on("touchstart", onTouchEvent);
        jQueryDocument.on("touchmove", onTouchEvent);
        jQueryDocument.on("touchend", onTouchEvent); 
    } else {
        jQueryDocument.on("mousedown", onMouseEvent);
        jQueryDocument.on("mouseup", onMouseEvent);
        jQueryDocument.on("mousemove", onMouseEvent);
    }
    
})();         // JavaScript Document