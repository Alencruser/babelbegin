let table=[]
const name='Père Noël !'
document.getElementById('start').addEventListener('click',()=>{
	if(document.getElementById('in').value==''){
		table.push(name)
		document.getElementById('history').innerHTML=`*** "Bonjour ${name} !"***`
	}else{
		let spec=document.getElementById('in').value;
		table.push(spec);
		document.getElementById('phrase').innerHTML=`*** "Bonjour ${spec} !"***`
	}
})
document.getElementById('see').addEventListener('click',()=>{
	document.getElementById('history').innerHTML=table.join('<br>')
})
document.getElementById('searched').addEventListener('click',()=>{
	document.getElementById('history').innerHTML=table.filter(e=>e.toUpperCase().startsWith(document.getElementById('search').value.toUpperCase()))
})