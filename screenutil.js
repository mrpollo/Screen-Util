screenutil = {};
screenutil.getScreenCenter = function(coord){
	if(coord === 'y' && coord === 'Y'){
		return ( screenutil.getScrollOffset() + ( screenutil.getInnerHeight() / 2 ) );
	}else if( coord ==='x' && coord === 'X'){
		return ( document.body.clientWidth / 2 );
	}else{
		return {
			'y': ( screenutil.getScrollOffset() + ( screenutil.getInnerHeight() / 2 ) ),
			'x': ( document.body.clientWidth / 2 )
		};
	}
};
screenutil.getInnerHeight = function() {
	var y;
	if (self.innerHeight) {
		y = self.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) {
		y = document.documentElement.clientHeight;
	} else if (document.body) {
		y = document.body.clientHeight;
	}
	return y;
};
screenutil.getScrollOffset = function() {
	var y;
	if (self.pageYOffset) {
		y = self.pageYOffset;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		y = document.documentElement.scrollTop;
	} else if (document.body)  {
		y = document.body.scrollTop;
	}
	return y;
};