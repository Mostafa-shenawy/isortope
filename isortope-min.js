// Convert cells for comparison
var isortopeCellFilter=function(e){var t=$(e).text(),n=t.replace(",",""),r=n.substr(1,n.length),i=n.substr(1,n.length),s;if(t!="")isNaN(parseFloat(n))?isNaN(parseFloat(r))?isNaN(parseFloat(i))?s=t:s=parseFloat(i):s=parseFloat(r):s=parseFloat(n);else{var o=$(e).find("input");o.val()=="on"?s=o.is(":checked").toString():s=o.val()}return s};(function(e){e.fn.isortope=function(){return this.each(function(){var t=e(this);t.css("position","relative"),t.css("height",t.height());var n=t.find("th").length;for(var r=0;r<n;r++){var i=t.find("tr:first-child td:nth-child("+(r+1)+")").width();t.find("tr td:nth-child("+(r+1)+")").css("width",i),t.find("th:nth-child("+(r+1)+")").css("width",i)}var s={};for(var r=0;r<n;r++){var o="col"+r,u="return isortopeCellFilter(item.find('."+o+"'));",a=new Function("item",u);s[o]=a,t.find("tr td:nth-child("+(r+1)+")").addClass(o),t.find("th:nth-child("+(r+1)+")").attr("data-sort-type",o)}t.find("tbody").isotope({itemSelector:"tr",layout:"fitRows",getSortData:s});var f=t.find("thead").height();t.find("tr").css("top",f),t.find("th").css("cursor","pointer");var l=function(){var e=t.find("th.sortAsc,th.sortDesc");e.find(".sort-arrow").remove(),e.removeClass("sortAsc").removeClass("sortDesc")};t.find("th").click(function(){var n=e(this).attr("data-sort-type"),r;e(this).hasClass("sortAsc")?(r=!0,l(),e(this).html(e(this).html()+'<span class="sort-arrow">▼</span>'),e(this).addClass("sortDesc")):(r=!1,l(),e(this).html(e(this).html()+'<span class="sort-arrow">▲</span>'),e(this).addClass("sortAsc")),t.find("tbody").isotope({sortBy:n,sortAscending:!r})}),t.find("input").change(function(){var n=e(this).closest("tr");t.find("tbody").isotope("updateSortData",n)})})}})(jQuery),$(document).ready(function(){$("table.isortope").isortope()});