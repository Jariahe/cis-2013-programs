
//this function provides easier access to DOM elements using their html element id
var $ = function (id) 
{
    return document.getElementById(id);
};

//this function performs all the circle, triangle, and circle calculations and prints the results
var do_it = function () 
{

//lines 12-18 declares and sets variables with respective DOM input. lines 19-25 declare variables needed for calculations
	var floatRectWidth = parseFloat($("rect_width").value);
	var floatRectHeight = parseFloat($("rect_height").value);	
	var floatTriSide1 = parseFloat($("tri_side1").value);
	var floatTriSide2 = parseFloat($("tri_side2").value);	
	var floatTriSide3 = parseFloat($("tri_side3").value);
	var floatRadius = parseFloat($("radius").value);
	
	alert ("The Rectangle area is " + rectArea(floatRectHeight, floatRectWidth) + " and the perimeter is " + 
        rectPerim(floatRectHeight, floatRectWidth) + "\n\n" + "The Triangle area is " + 
        triArea(floatTriSide1, floatTriSide2, floatTriSide3) + " and the perimeter is " + 
        triPerim(floatTriSide1, floatTriSide2, floatTriSide3) + "\n\n" +
		"The Circle area is " + circleArea(floatRadius) + " and the circumference is " + circleCircum(floatRadius));

};

var calcCircleArea = function()
{
    var floatRadius = parseFloat($("radius").value);

    alert ("The Circle Area is " + circleArea(floatRadius));
}

function circleArea (floatRadius)
{
    var floatArea = Math.PI * Math.pow(floatRadius,2);

    return floatArea.toFixed(2);
}

var calcCircleCircum = function()
{
	var floatRadius = parseFloat($("radius").value);

	alert ("The Circle circumference is " + circleCircum(floatRadius));	
};

/*
 * the circleCircum function accepts some input for radius and then calculates the circumference
 * using the 2 * pi * radius formula.  The circumference value is returned, but note that it has been
 * converted to a string with 2 decimal points [the toFixed() method in JavaScript takes a number and 
 * lops off everything after the desired decimal points, and then for some unexplicable reason converts
 * the resulting number into a string]
 */
function circleCircum(floatRadius_par)
{
	var floatCircum = parseFloat (2 * Math.PI * floatRadius_par);
	return floatCircum.toFixed(2);
}

var calcRectArea = function()
{
    var floatRectWidth = parseFloat($("rect_width").value);
    var floatRectHeight = parseFloat($("rect_height").value);

    alert("The area of the rectangle is: " + rectArea(floatRectWidth, floatRectHeight));
};


function rectArea(red, blue)
{
    var floatRectArea = red * blue;
    return floatRectArea.toFixed(2);
}

var calcRectPerim = function()
{
    var floatRectHeight = parseFloat($("rect_height").value);
    var floatRectWidth = parseFloat($("rect_width").value);

    alert("The Rectangle Perimeter is " + rectPerim(floatRectHeight, floatRectWidth));
}

function rectPerim(floatHeight, floatWidth)
{ 
    var floatPerim = 2 * floatHeight + 2 * floatWidth;
    return floatPerim.toFixed(2);
}

var calcTriArea = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    var floatTriSide3 = parseFloat($("tri_side3").value);

    alert("The Triangle Area is " + triArea(floatTriSide1, floatTriSide2, floatTriSide3));
}

function triArea (floatSide1, floatSide2, floatSide3)
{
    var floatS = (floatSide1 + floatSide2 + floatSide3)/2;
	var floatArea = Math.sqrt((floatS*(floatS-floatSide1)*(floatS-floatSide2)*(floatS-floatSide3)));

    return floatArea.toFixed(2);
	
}

var calcTriPerim = function()
{
    var floatTriSide1 = parseFloat($("tri_side1").value);
    var floatTriSide2 = parseFloat($("tri_side2").value);
    var floatTriSide3 = parseFloat($("tri_side3").value);

    alert("The Triangle Perimeter is " + triPerim(floatTriSide1, floatTriSide2, floatTriSide3));
}

function triPerim (floatSide1, floatSide2, floatSide3)
{
    var floatPerim = floatSide1 + floatSide2 + floatSide3;
    return floatPerim.toFixed(2);
}

window.onload = function () 
{
    //lines 51-56 clear the DOM values..
//    $("rect_width").value = "";
//    $("rect_height").value = "";
//    $("tri_side1").value = "";
//    $("tri_side2").value = "";
//    $("tri_side3").value = "";
//    $("radius").value = "";
    $("calc_rect_area").onclick = do_it;
    $("rect_width").focus(); // places the cursor in the first input box
    $("calc_all").onclick = do_it; // runs the do_it function when clicked
    $("calc_circle_circum").onclick = calcCircleCircum; // runs the calcCircleCircum function when clicked
    $("calc_rect_perim").onclick = calcRectPerim;
    $("calc_tri_area").onclick = calcTriArea;
    $("calc_tri_perim").onclick = calcTriPerim;
    $("calc_circle_area").onclick = calcCircleArea;
};
//  replace do it function with the alert statement on the slides