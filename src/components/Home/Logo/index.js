import './index.scss'
import LogoS from "../../../assets/images/main-logo.png"

const Logo = () => {

    return (
        <div className="logo-container" >
            <img
                src={LogoS}
                alt="M"
                className="solid-logo"
            />

            <svg
                width="296.21008695652176"
                viewBox="5 -28.75 34.45 28.75"
                height="247.20000000000002"
                data-palette-color="#022c43"
            >
                <g
                    className="svg-container"
                >
                    <path
                        d="M5-28.75L5-28.75 10.7-28.75 21-19.05 21-11.5 11.3-20.65 11.3 0 5 0 5-28.75ZM39.45-28.75L39.45-28.75 33.8-28.75 23.45-19.05 23.45-11.5 33.15-20.65 33.15 0 39.45 0 39.45-28.75Z"

                        fill="#022c43"
                        class="wordmark-text-0"
                        data-fill-palette-color="primary"
                    >

                    </path>
                </g>
            </svg>

        </div>
    );
}

export default Logo;