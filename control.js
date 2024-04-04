function arr(Arr) {
    const firstFour = Arr.slice(0, 4).map(item => item * item);
    const lastTwo = Arr.slice(-2).map(item => item + 10);
    const changedArr = firstFour.concat(lastTwo);
    console.log(changedArr);
   }
   arr([4,15,6,35,7,9,10]);


    
    let numbers = (arrNum) => {
        while(numbers.length<5){
    console.log('next');
    arrNum.pop();
    if(arrNum.length===5){
        console.log('equal to ');
        break;
    }
        }
    }
    numbers([1,2,3,4,5,6,7,8,9]);
    
    function processFruits(fruits){
        for(let i = 0; i<fruits.length; i++){
            if(i=== 1){
                continue;
            }
            console.log(fruits[i]);
        }
    }
    let fruits = ['Apple','Plum','Passion','Grapes','Pawpaw'];
    processFruits(fruits);
    
    function arrayElements(array){
        for(var i =0;i<array.length; i++){
            console.log(array[i]);
        }
    }
    var stringsArray = ["Hope","Jane","Trecy","Christine"]
    arrayElements(stringsArray)

    function reverseString(str){
        let reversed = ""
        let i = str.length -1; 
        while(i>=0){
            reversed +=str[i];
            i--; 
        }
        return reversed;
    }
    const input = "Hello Nancy";
    const result = reverseString(input);
    console.log(result)

