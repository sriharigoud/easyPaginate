easyPaginagte – a jQuery pagination plugin with bootstrap support
easyPaginate – A jQuery pagination with bootstrap support.

A simple jQuery pagination with bootstrap support, gives a full support of bootstrap.

Download

Get the zip containing the plugin and bootstrap here .

 Demo

Watch the demo here

How to use:

step1 : include jquery library and then easyPaginate.js in your web page


1
2
<script type="text/javascript" src="path_to/jquery.js"></script>
<script type="text/javascript" src="path_to/jquery.easyPaginate.js"></script>
Use jquery 1.8 or older ones

step 2:

include bootstrap.css in the web page



<link type="text/css" rel="stylesheet" href="path_to/bootstrap.css"/>
-> You can write your styles based on the classes(btn, btn-primary) used in the pagination library.

Step 3: call the function on your pagination placeholder:



$(function() {
    $(selector).easyPaginate({
        items: 100,
        itemsOnPage: 10
    });
});
If necessary, you can mention pages directly instead of number of items and items on page,

Available methods and parameters

items	Integer	Default: 100	Total number of items that will be used to calculate the pages.
itemsOnPage	Integer	Default: 10	Number of items displayed on each page.
pages	Integer	Optional	If specified, items and itemsOnPage will not be used to calculate the number of pages.
sides	Integer	Default: 5	How many page numbers should be visible while navigating.
Minimum allowed: 3 (previous, current & next)
gePage(page)	Function	Optional	To get current Page number
onClickcallback(page)	Function	Optional	A callback function on page number click, you can use for anything like fetching data
onInit	Function	Optional	Function to call when the pagination is initialized.
For issues and support please contact me @ srihari.goud2010@gmail.com or follow me on Facebook

 
