let selection = document.querySelectorAll("button");

for(let i=0;i<selection.length;i++)
{
    selection[i].addEventListener("click",function(){
        let value = this.textContent;
        console.log(value);
        switch(value)
        {
            case "1":
                let one = new Audio("one.mp3");
                one.play();
                break;
            case "2":
                let two = new Audio("two.mp3")
                two.play();
                break;
            case "3":
                let three = new Audio("three.mp3")
                three.play();
                break;
            case "4":
                let four =new Audio("four.mp3")
                four.play();
                break;
            case "5":
                let five = new Audio("five.mp3")
                five.play();
                breakl
            case "6":
                let six= new Audio("six.mp3")
                six.play();
            case "7":
                let seven = new Audio("seven.mp3")
                seven.play();
                break;
            case"8":
            let eight = new Audio("eight.mp3")
            eight.play();
            break;
            default:
                console.log("get out");

        }

    })
}