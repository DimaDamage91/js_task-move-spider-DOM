var t=document.querySelector(".spider"),e=document.querySelector(".wall");document.addEventListener("click",function(i){if(i.target===e){var r=e.getBoundingClientRect(),n=t.offsetWidth,d=t.offsetHeight,l=getComputedStyle(e),o=parseInt(l.borderLeftWidth)+parseInt(l.borderRightWidth),c=i.clientX-r.left,h=i.clientY-r.top,s=c-n/2,a=h-d/2;s<o?s=o:s>r.width-n-o&&(s=r.width-n-o),a<o?a=o:a>r.height-d-o&&(a=r.height-d-o),t.style.top=a+"px",t.style.left=s+"px",t.style.transform="translate(0, 0)"}});
//# sourceMappingURL=index.d65a6509.js.map
