// const title=
// document
// .querySelector("section:last-of-type>h4");
//        title.style.color='brown';
//         title.className='cs1';
//         title.setAttribute('class','cs22');
//         title.setAttribute('name','prajwal');

//        const p= document.createElement("p");
//        const sec=
//        document
//        .getElementsByTagName('section')
//        [1];

//        sec.appendChild(p);
//        p.textContent="hiii";
//        sec.append("hello world");
//         // ( cannot use append child to append text )
//        sec.appendChild("new world");         //this lime will show error 
 
// function printHello()
// {
//         console.log("helloo");
// }
// function InputClicked(e)
// {
//         console.log("clicked");
//         console.log(e.target.value);

// }
// function Inputkeydown(e)
// {
//         console.log("keydown")
//         console.log(e.target.value);
// }
// function InputChanged(e)
// {
//         console.log("InputChanged");
//         console.log(e.target.value);

// }
function handleusername(e)
{
console.log("name",e.target.value);

}
function handleuserage(e)
{
console.log("age",e.target.value);
if(e.target.value>18)
        {
                console.log("adult")
        }
        else
        {
                console.log("minor")
        }

}
function handleSubmit(e)
{
        e.preventDefault();
        console.dir(e.target);
        const username =e.target[0].value;
}       const username =e.target[1].value;
