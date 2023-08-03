import "./index.scss"

// letterClass to get the type of animation
// strArr array of characters to apply the animation
// idx index to set starting point i.e the delay of animation
const AnimatedLetters = ({ letterClass, strArr, idx }) => {
    return (
        <span>
            {
                strArr.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimatedLetters