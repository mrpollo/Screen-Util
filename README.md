#### Screenutil.js
is a simple javascript _"object"_ or _"class"_ that can be used to get the center position of your screen, it was originally created to help in displaying modal windows and making sure they are always on the middle of the page.

```javascript
(function(d, c){
	d.style.left = c.x - ( d.style.width / 2 );
	d.style.top = c.y - ( d.style.height / 2 );
}( document.getElementById('test'),	screenutil.getScreenCenter() ));
```