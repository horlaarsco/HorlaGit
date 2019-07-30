
alert("Compare Mark and John's BMI \nPress enter to continue")

var mh = {
    mark : {
        mass: prompt("Enter Mark's Mass"),
        height: prompt("Enter Mark's Height"),
    },
    john : {
        mass: prompt("Enter John's Mass"),
        height: prompt("Enter John's Height"),

    },
}


function mhh(m,h){
    hh = h*h
    return m/hh
}

MBMI = mhh(mh.mark.mass,mh.mark.height)
JBMI = mhh(mh.john.mass,mh.john.height)

console.log( "Mark's:\n   Mass = " + mh.mark.mass + "\n   Height = " + mh.mark.height + "\n   " + MBMI   )
console.log( "John's:\n   Mass = " + mh.john.mass + "\n   Height = " + mh.john.height + "\n   " + JBMI   )

if (MBMI>JBMI){
    console.log("Mark has a higher BMI than John")
}else if(MBMI==JBMI){
    console.log("John and Mark have same BMI")
}else{
    console.log("John has a higher BMI than Mark")
}


