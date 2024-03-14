
// Every custom components receives props --- even if not explicitly mention, there is the children prop
// export default function TabButton(props) {
//     return (
//         <li><button>{props.children}</button></li>
//     )
// }

// altermative way to the same thing as aboive
export default function TabButton({children}) {
    return (
        <li><button>{children}</button></li>
    )
}