import * as React from "react"
import Svg, { Path, G, LinearGradient, Stop, Circle } from "react-native-svg"

function Visa(props) {
    return (
        <Svg
            width={40}
            height={24}
            viewBox="0 0 40 24"
            preserveAspectRatio="xMinYMin meet"
            {...props}
        >
            <Path
                d="M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z"
                fill="#21569a"
            />
            <Path
                d="M19.596 7.885l-2.11 9.478H14.93l2.11-9.478h2.554zm10.743 6.12l1.343-3.56.773 3.56H30.34zm2.85 3.358h2.36l-2.063-9.478H31.31c-.492 0-.905.274-1.088.695l-3.832 8.783h2.682l.532-1.415h3.276l.31 1.415zm-6.667-3.094c.01-2.502-3.6-2.64-3.577-3.76.008-.338.345-.7 1.083-.793.365-.045 1.373-.08 2.517.425l.448-2.01a7.122 7.122 0 00-2.39-.42c-2.523 0-4.3 1.288-4.313 3.133-.016 1.364 1.268 2.125 2.234 2.58.996.464 1.33.762 1.325 1.177-.006.636-.793.918-1.526.928-1.285.02-2.03-.333-2.623-.6l-.462 2.08c.598.262 1.7.49 2.84.502 2.682 0 4.437-1.273 4.445-3.243zM15.948 7.884l-4.138 9.478h-2.7L7.076 9.8c-.123-.466-.23-.637-.606-.834-.615-.32-1.63-.62-2.52-.806l.06-.275h4.345c.554 0 1.052.354 1.178.966l1.076 5.486 2.655-6.45h2.683z"
                fill="#fff"
            />
        </Svg>
    )
}

function MasterCard(props) {
    return (
        <Svg
            width={40}
            height={24}
            viewBox="0 0 40 24"
            preserveAspectRatio="xMinYMin meet"
            {...props}
        >
            <Path
                d="M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073V1.927z"
                fill="#3e3939"
            />
            <Path d="M22.205 3.901h-6.517v11.688h6.517" fill="#ff5f00" />
            <Path
                d="M16.1 9.747a7.454 7.454 0 012.835-5.846 7.434 7.434 0 00-4.593-1.589c-4.119 0-7.45 3.324-7.45 7.434 0 4.107 3.331 7.432 7.45 7.432a7.417 7.417 0 004.593-1.59 7.413 7.413 0 01-2.836-5.843z"
                fill="#eb001b"
            />
            <Path
                d="M30.996 9.747c0 4.107-3.333 7.432-7.449 7.432a7.408 7.408 0 01-4.593-1.59 7.387 7.387 0 002.834-5.843A7.453 7.453 0 0018.954 3.9a7.426 7.426 0 014.593-1.589c4.116 0 7.449 3.346 7.449 7.434z"
                fill="#f79e1b"
            />
            <Path
                d="M7.167 22.481V20.43c0-.789-.482-1.303-1.31-1.303-.414 0-.864.135-1.174.583-.243-.378-.587-.583-1.104-.583-.346 0-.691.103-.967.48v-.41h-.726v3.284h.726v-1.813c0-.582.309-.856.794-.856.482 0 .725.309.725.857v1.812h.725v-1.813c0-.582.348-.856.795-.856.486 0 .726.309.726.857v1.812h.794zm10.742-3.284h-1.175v-.993h-.727v.993h-.655v.648h.655v1.506c0 .755.312 1.2 1.139 1.2.313 0 .658-.102.898-.242l-.205-.614c-.207.136-.45.172-.623.172-.344 0-.482-.207-.482-.548v-1.472h1.175v-.649zm6.144-.07a.972.972 0 00-.862.48v-.41h-.726v3.284h.726v-1.848c0-.547.243-.856.691-.856.136 0 .31.035.448.07l.208-.685c-.137-.035-.346-.035-.486-.035zm-9.288.342c-.345-.24-.828-.342-1.347-.342-.83 0-1.382.411-1.382 1.061 0 .548.417.856 1.139.958l.349.035c.379.068.584.17.584.342 0 .242-.276.411-.758.411-.486 0-.866-.17-1.106-.342l-.346.547c.38.272.896.41 1.415.41.967 0 1.518-.444 1.518-1.061 0-.58-.448-.889-1.139-.992l-.344-.034c-.311-.034-.553-.102-.553-.307 0-.241.243-.378.623-.378.412 0 .827.172 1.035.275l.311-.583zm19.268-.342a.968.968 0 00-.862.48v-.41h-.726v3.284h.726v-1.848c0-.547.243-.856.691-.856.136 0 .308.035.445.07l.208-.685c-.135-.035-.343-.035-.482-.035zm-9.254 1.711c0 .996.691 1.713 1.761 1.713.485 0 .829-.102 1.175-.378l-.346-.58c-.277.205-.553.308-.865.308-.585 0-.999-.411-.999-1.061 0-.614.414-1.027 1.002-1.06.309 0 .585.103.862.309l.346-.582c-.346-.274-.691-.377-1.175-.377-1.07 0-1.761.72-1.761 1.711zm6.699 0v-1.64h-.728v.41c-.24-.308-.585-.48-1.033-.48-.933 0-1.659.72-1.659 1.712 0 .995.726 1.712 1.658 1.712.481 0 .827-.17 1.032-.478v.41h.729V20.84zm-2.66 0c0-.579.378-1.059 1.001-1.059.587 0 1.002.445 1.002 1.061 0 .584-.415 1.062-1.002 1.062-.623-.033-1.001-.478-1.001-1.061zm-8.67-1.71c-.965 0-1.654.685-1.654 1.712 0 1.029.689 1.712 1.691 1.712.486 0 .969-.135 1.348-.444l-.345-.513a1.666 1.666 0 01-.966.342c-.45 0-.899-.205-1.003-.788h2.452v-.271c.034-1.063-.588-1.748-1.521-1.748zm0 .62c.452 0 .763.271.832.784h-1.727c.068-.445.38-.784.895-.784zm17.993 1.092v-2.942h-.729v1.712c-.239-.308-.584-.48-1.032-.48-.934 0-1.659.72-1.659 1.711 0 .996.725 1.713 1.658 1.713.482 0 .827-.171 1.031-.478v.41h.73v-1.645zm-2.66 0c0-.579.38-1.06 1.003-1.06.585 0 1.002.446 1.002 1.061 0 .585-.417 1.063-1.002 1.063-.623-.034-1.003-.478-1.003-1.061zm-24.244 0V19.2h-.722v.41c-.243-.308-.587-.48-1.037-.48-.933 0-1.658.72-1.658 1.711 0 .996.725 1.713 1.657 1.713.483 0 .827-.171 1.035-.478v.41h.724v-1.645zm-2.691 0c0-.579.38-1.06 1.002-1.06.586 0 1.002.446 1.002 1.061 0 .585-.416 1.063-1.002 1.063-.622-.034-1.002-.478-1.002-1.061z"
                fill="#fff"
            />
        </Svg>
    )
}


function Amex(props) {
    return (
        <Svg
            width={40}
            height={24}
            viewBox="0 0 40 24"
            preserveAspectRatio="xMinYMin meet"
            {...props}
        >
            <Path
                d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z"
                fill="#1477be"
            />
            <Path
                d="M6.26 12.32h2.313L7.415 9.66m19.938.317h-3.738v1.23h3.666v1.384h-3.675v1.385h3.821v1.005c.623-.77 1.33-1.466 2.025-2.235l.707-.77c-.934-1.004-1.87-2.08-2.804-3.075v1.077z"
                fill="#fff"
            />
            <Path
                d="M38.25 7h-5.605l-1.328 1.4L30.072 7H16.984l-1.017 2.416L14.877 7h-9.58L1.25 16.5h4.826l.623-1.556h1.4l.623 1.556H29.99l1.327-1.483 1.328 1.483h5.605l-4.36-4.667L38.25 7zm-17.685 8.1h-1.557V9.883L16.673 15.1h-1.33L13.01 9.883l-.084 5.217H9.73l-.623-1.556h-3.27L5.132 15.1H3.42l2.884-6.772h2.42l2.645 6.233V8.33h2.646l2.107 4.51 1.868-4.51h2.575v6.77zm14.727 0h-2.024l-2.024-2.26-2.023 2.26H22.06V8.328h7.47l1.795 2.177 2.024-2.177h2.025L32.26 11.75l3.032 3.35z"
                fill="#fff"
            />
        </Svg>
    )
}

function Discover(props) {
    return (
        <Svg
            width={40}
            height={24}
            viewBox="0 0 40 24"
            preserveAspectRatio="xMinYMin meet"
            {...props}
        >
            <Path
                d="M38.333 24H1.667C.75 24 0 23.28 0 22.4V1.6C0 .72.75 0 1.667 0h36.666C39.25 0 40 .72 40 1.6v20.8c0 .88-.75 1.6-1.667 1.6z"
                fill="#113152"
            />
            <Path
                d="M5.498 13.349c-.338.305-.776.438-1.47.438h-.29v-3.646h.29c.694 0 1.115.124 1.47.446.37.33.595.844.595 1.372 0 .53-.224 1.06-.595 1.39zM4.243 9.206H2.666v5.515h1.57c.833 0 1.435-.197 1.963-.637.63-.52 1-1.305 1-2.116 0-1.628-1.214-2.762-2.956-2.762zm3.453 5.515H8.77V9.207H7.696m3.697 2.116c-.645-.24-.834-.397-.834-.695 0-.347.338-.61.8-.61.322 0 .587.132.867.446l.562-.737a2.407 2.407 0 00-1.618-.612c-.975 0-1.718.678-1.718 1.58 0 .76.346 1.15 1.355 1.513.42.148.635.247.743.314a.66.66 0 01.322.57c0 .448-.354.78-.834.78-.51 0-.924-.258-1.17-.736l-.695.67c.495.726 1.09 1.05 1.907 1.05 1.116 0 1.9-.745 1.9-1.812 0-.876-.363-1.273-1.585-1.72zm1.923.645c0 1.62 1.27 2.877 2.907 2.877.462 0 .858-.09 1.347-.32v-1.267c-.43.43-.81.604-1.297.604-1.082 0-1.85-.785-1.85-1.9 0-1.06.792-1.895 1.8-1.895.512 0 .9.183 1.347.62V9.421c-.472-.24-.86-.34-1.322-.34-1.627 0-2.932 1.283-2.932 2.887zm12.772.943L24.62 9.206h-1.174l2.337 5.656h.578l2.38-5.655h-1.165m1.65 5.514h3.046v-.934h-1.973v-1.488h1.9v-.934h-1.9v-1.224h1.973v-.935h-3.046m5.147 2.539h-.314v-1.67h.33c.67 0 1.034.28 1.034.818 0 .554-.364.852-1.05.852zm2.155-.91c0-1.033-.71-1.628-1.95-1.628h-1.592v5.514h1.073v-2.215h.14l1.487 2.215h1.32l-1.733-2.323c.81-.165 1.255-.72 1.255-1.563z"
                fill="#fff"
            />
            <G transform="matrix(.08978 0 0 .08978 2.192 5.725)">
                <LinearGradient
                    id="prefix__a"
                    gradientUnits="userSpaceOnUse"
                    x1={224.392}
                    y1={44.173}
                    x2={201.33}
                    y2={80.281}
                    gradientTransform="matrix(1 0 0 -1 0 141.732)"
                >
                    <Stop offset={0} stopColor="#f89f21" />
                    <Stop offset={0.25} stopColor="#f79a23" />
                    <Stop offset={0.533} stopColor="#f78e22" />
                    <Stop offset={0.62} stopColor="#f68721" />
                    <Stop offset={0.723} stopColor="#f48220" />
                    <Stop offset={1} stopColor="#f27623" />
                </LinearGradient>
                <Circle fill="url(#prefix__a)" cx={207.343} cy={70.866} r={33.307} />
                <LinearGradient
                    id="prefix__b"
                    gradientUnits="userSpaceOnUse"
                    x1={220.749}
                    y1={44.664}
                    x2={187.044}
                    y2={110.543}
                    gradientTransform="matrix(1 0 0 -1 0 141.732)"
                >
                    <Stop offset={0} stopColor="#f68721" stopOpacity={0} />
                    <Stop offset={0.359} stopColor="#e27027" stopOpacity={0.27} />
                    <Stop offset={0.703} stopColor="#d4612c" stopOpacity={0.53} />
                    <Stop offset={0.982} stopColor="#d15d2d" stopOpacity={0.74} />
                </LinearGradient>
                <Circle
                    opacity={0.65}
                    fill="url(#prefix__b)"
                    cx={207.343}
                    cy={70.866}
                    r={33.307}
                />
            </G>
            <Path
                d="M19.885 24.03h18.769c.798 0 1.408-.61 1.408-1.408v-7.977s-2.253 6.475-20.177 9.385z"
                fill="#ff8126"
            />
        </Svg>
    )
}

function Maestro(props) {
    return (
        <Svg
            viewBox="0 0 40 24"
            width={40}
            height={24}
            preserveAspectRatio="xMinYMin meet"
            {...props}
        >
            <Path
                d="M0 1.927C0 .863.892 0 1.992 0h36.016C39.108 0 40 .863 40 1.927v20.146C40 23.137 39.108 24 38.008 24H1.992C.892 24 0 23.137 0 22.073z"
                fill="#3e3939"
            />
            <Path
                d="M23.746 18.222v.93h-.621v.609h.621v1.394c0 .712.276 1.135 1.065 1.135a1.564 1.564 0 00.833-.237l-.192-.571a1.231 1.231 0 01-.59.173c-.333 0-.443-.192-.443-.513v-1.388h1.087v-.603H24.42v-.93zm-12.944.844a1.186 1.186 0 00-.958.547 1.125 1.125 0 00-1.013-.545 1.013 1.013 0 00-.898.455v-.378h-.667v3.061h.673v-1.705a.715.715 0 01.75-.814c.443 0 .667.288.667.807v1.703h.674V20.5a.721.721 0 01.75-.814c.455 0 .673.288.673.807v1.703l.67.01v-1.924a1.138 1.138 0 00-1.202-1.215 1.186 1.186 0 00-.119-.002zm10.55.002c-.783 0-1.283.372-1.283.981 0 .5.372.808 1.058.904l.32.045c.366.051.54.147.54.32 0 .238-.244.372-.7.372a1.632 1.632 0 01-1.019-.32l-.32.52a2.209 2.209 0 001.323.396c.882 0 1.395-.461 1.395-1 0-.538-.404-.82-1.07-.916l-.321-.045c-.288-.039-.52-.077-.52-.301 0-.225.218-.36.584-.36a1.971 1.971 0 01.962.263l.298-.538a2.289 2.289 0 00-1.248-.32zm6.459 0l.013.013a.904.904 0 00-.808.449v-.372h-.66v3.061h.667v-1.714c0-.507.205-.79.64-.79a1.084 1.084 0 01.417.078l.206-.641a1.42 1.42 0 00-.475-.084zm2.301 0a1.725 1.725 0 00-.656.132 1.584 1.584 0 00-.52.34 1.564 1.564 0 00-.343.51 1.702 1.702 0 000 1.282 1.564 1.564 0 00.343.51 1.584 1.584 0 00.52.34 1.814 1.814 0 001.314 0 1.603 1.603 0 00.523-.34 1.548 1.548 0 00.345-.51 1.699 1.699 0 000-1.283 1.552 1.552 0 00-.345-.51 1.603 1.603 0 00-.533-.342 1.725 1.725 0 00-.64-.122zm-15.816.003a1.16 1.16 0 00-.058 0 1.603 1.603 0 000 3.206 1.16 1.16 0 00.962-.449v.372h.667l.006-1.523v-1.529H15.2v.372a1.16 1.16 0 00-.904-.45zm3.748.004a1.603 1.603 0 00.044 3.205 1.86 1.86 0 001.254-.43l-.32-.493a1.459 1.459 0 01-.892.321.85.85 0 01-.917-.75h2.273c.01-.077.01-.16.01-.25 0-.962-.596-1.603-1.452-1.603zm-.052.59a.789.789 0 01.039 0 .76.76 0 01.775.743h-1.59a.789.789 0 01.776-.744zm12.12.032a.994.994 0 01.385.09.917.917 0 01.321.201.93.93 0 01.202.32 1.112 1.112 0 010 .796.926.926 0 01-.202.32.917.917 0 01-.32.203 1.042 1.042 0 01-.76 0 .898.898 0 01-.305-.203.936.936 0 01-.202-.32 1.112 1.112 0 010-.795.94.94 0 01.202-.32.9.9 0 01.304-.202.994.994 0 01.382-.071zm-15.803.109a.926.926 0 11.016 1.853.917.917 0 01-.936-.982h.007a.926.926 0 01.913-.871zm18.112 1.952l-.016.003a.32.32 0 00-.106.02.32.32 0 00-.1.063.32.32 0 00-.067.097.301.301 0 000 .237.32.32 0 00.289.186.301.301 0 00.121-.026.32.32 0 00.1-.064.32.32 0 00.067-.096.298.298 0 000-.237.32.32 0 00-.067-.096.32.32 0 00-.1-.064.32.32 0 00-.121-.023zm0 .067a.23.23 0 01.092.02.237.237 0 01.074.384.24.24 0 01-.074.051.228.228 0 01-.092.02v-.013a.237.237 0 01-.17-.07.237.237 0 010-.321.234.234 0 01.077-.052.24.24 0 01.093-.019zm.019.093l-.135.004v.281h.061v-.106h.03l.086.106h.073l-.093-.106a.112.112 0 00.068-.028.077.077 0 00.022-.058.08.08 0 00-.029-.067.128.128 0 00-.083-.026zm-.07.055l.07.019a.067.067 0 01.038 0 .032.032 0 010 .03.032.032 0 010 .028.067.067 0 01-.038 0h-.07z"
                fill="#fff"
            />
            <Path fill="#7673c0" d="M16.657 3.355h6.685v12.013h-6.685z" />
            <Path
                d="M17.082 9.36a7.627 7.627 0 012.917-6.005 7.64 7.64 0 100 12.013 7.627 7.627 0 01-2.917-6.007z"
                fill="#eb001b"
            />
            <Path
                d="M31.63 14.095v-.246h.1v-.051h-.252v.05h.1v.247zm.49 0v-.297h-.076l-.089.212-.089-.212h-.076v.297h.055v-.223l.083.193h.057l.083-.193v.225zM32.36 9.36A7.64 7.64 0 0120 15.367a7.64 7.64 0 000-12.013 7.64 7.64 0 0112.36 6.005z"
                fill="#00a1df"
            />
        </Svg>
    )
}
export { Visa, MasterCard, Amex, Discover, Maestro }