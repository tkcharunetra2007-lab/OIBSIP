function tempConvert(){
            const temp=Number(document.querySelector('.js-box1').value);
            const unit=document.querySelector('.js-box2').value;
            const result=document.querySelector('.js-result');

            let convertedText="";

            if(unit==="Celsius"){
                let Fahrenheit=(temp*9/5)+32;
                let Kelvin=temp+273.15;
                convertedText=`${Fahrenheit.toFixed(2)}°F  /  ${Kelvin.toFixed(2)}K`;

            }else if(unit==="Fahrenheit"){
                let Celsius=(temp-32)*5/9;
                let Kelvin=((temp-32)*5/9)+273.15;
                convertedText=`${Celsius.toFixed(2)}°C  /  ${Kelvin.toFixed(2)}K`;

            }else{
                let Celsius=temp-273.15;
                let Fahrenheit=((temp-273.15)*9/5)+32;
                convertedText=`${Celsius.toFixed(2)}°C  /  ${Fahrenheit.toFixed(2)}°F`;
            }

            result.innerHTML="Converted Temperature : "+ convertedText;
}