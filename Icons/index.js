import * as React from "react"
import Svg, { Path, G, LinearGradient, Stop, Circle } from "react-native-svg"

function Inbox(props) {
    return (
        <Svg
            width={40}
            height={24}
            viewBox="0 0 40 24"
            preserveAspectRatio="xMinYMin meet"
            {...props}
        >
            <Path
                d="M0 0h24v24H0V0z"
                fill="none"
            />
            <Path
                d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"
            // fill="#fff"
            />
        </Svg>
    )
}
export { Inbox }