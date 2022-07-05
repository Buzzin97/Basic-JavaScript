    const age = parseInt( prompt("How old are you? ") );
    
    if(isNaN(age) || age < 0){
        console.log("양의 숫자를 입력해주세요! :)")
        // condition === true
    } else if(age < 18) {
        console.log("당신은 미성년자입니다.")
    } else if(age >= 18 && age <= 50){
        console.log("술을 마실 수 있습니다.")
    } else if(age > 50 && age <=80){
        console.log("운동을 하시오")
    } else if(age > 80){
        console.log("하고 싶은거 다하시오")
    }
 