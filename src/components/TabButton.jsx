
// Every custom components receives props --- even if not explicitly mention, there is the children prop
// export default function TabButton(props) {
//     return (
//         <li><button>{props.children}</button></li>
//     )
// }

// altermative way to the same thing as aboive
export default function TabButton({children}) {

    function handleClick() {
        console.log('Hello World')
    }

    return (
        <li><button onClick={handleClick}>{children}</button></li>
    )
}