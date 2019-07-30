var johna = Math.ceil(Math.random() * 100),
    mikea = Math.ceil(Math.random() * 100),
    marya = Math.ceil(Math.random() * 100)


if (johna>mikea && johna>marya){
    console.log("John's team won")
}else if (mikea>johna && mikea>marya){
    console.log("Mike's team won")
}else if (marya>johna && marya>mikea){
    console.log("Mary's team won")
}else{
    console.log("Tie")
}