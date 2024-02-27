function flame(){

 
	var k=document.getElementById("name1").value;
	var s=document.getElementById("name2").value;
	var res=k.length+ s.length;
	const set1 = new Set(k);
    const set2 = new Set(s);
    var count=0;
  for (let char of set1) {
    if (set2.has(char)) {
      count=count+1;
    }}
  count= res-count*2;
  
  for(var i=1;i<=15;i++){ 
	  if(count>6){
		  count=count-6;
		  if(count<6){break;}
	  }
  
  }
 


if(count==1){document.getElementsByClassName("flame")[0].innerHTML="Your relationship ❤ leads to Friends"}
if(count==2){document.getElementsByClassName("flame")[0].innerHTML="Your relationship ❤ leads to love"}
if(count==3){document.getElementsByClassName("flame")[0].innerHTML="Your relationship ❤ leads to affection"}
if(count==4){document.getElementsByClassName("flame")[0].innerHTML="Your relationship ❤ leads to Marrige"}
if(count==5){document.getElementsByClassName("flame")[0].innerHTML="Your relationship ❤ leads to Enemy"}
if(count==6){document.getElementsByClassName("flame")[0].innerHTML="Your relationship ❤ leads to Sister"}


}



