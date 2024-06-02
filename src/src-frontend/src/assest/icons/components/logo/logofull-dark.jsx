import React from "react";
import './style.scss';

const LogoFullDark = (props) => {

    return (
        <svg
            width={420.49}
            height={100.981}
            className="logo-full"
            viewBox="120 0 100 100"
            {...props}
        >
            <g xmlns="http://www.w3.org/2000/svg" fill="#7adde3">
                <path d="M42.145 43.013c-2.825 2.684-7.084 2.431-9.765-.404-2.545-2.677-2.573-6.949.253-9.626 2.692-2.543 7.085-2.43 9.635.255 2.684 2.826 2.56 7.225-.123 9.775M66.532 68.72c-2.822 2.677-7.088 2.423-9.644-.259-2.672-2.829-2.558-6.942.265-9.632 2.682-2.544 6.948-2.569 9.625.253 2.55 2.69 2.437 7.087-.246 9.638M55.9 56.429c-3.36 3.19-8.442 2.88-11.461-.303-3.196-3.36-3.21-8.436.145-11.62 3.19-3.03 8.43-2.892 11.607.47 3.032 3.195 2.892 8.423-.291 11.453M30.68 54.689c-2.113 2.001-5.555 1.786-7.565-.334a5.23 5.23 0 0 1 .206-7.432c2.116-2.012 5.553-2.062 7.562.058 2.013 2.12 1.921 5.696-.202 7.708M51.976 77.142a5.227 5.227 0 0 1-7.423-.19c-2.015-2.119-2.06-5.569.063-7.574 2.114-2.018 5.696-1.911 7.703.203 2.01 2.12 1.777 5.556-.343 7.561M25.562 11.22c-.933-.981-.892-2.633.237-3.709.987-.937 2.638-.899 3.582.089 1.073 1.139 1.032 2.778.035 3.721-1.124 1.076-2.775 1.031-3.854-.101M7.313 28.326c-.937-.988-.889-2.627.098-3.57 1.135-1.077 2.778-1.032 3.72-.05 1.07 1.133 1.029 2.784-.104 3.86-.99.936-2.64.9-3.714-.24M1.07 19.687c-.765-.804-.727-2.145.073-2.91.924-.88 2.269-.85 3.032-.033.877.918.838 2.254-.085 3.127-.801.766-2.146.74-3.02-.184M17.606 3.562c-.769-.81-.73-2.145.076-2.918.918-.873 2.262-.834 3.028-.03.873.924.835 2.265-.086 3.138-.802.766-2.147.735-3.018-.19M5.159 6.897c-.94-.994-.893-2.646.088-3.588.988-.93 2.646-.886 3.592.108 1.06 1.12 1.016 2.777.028 3.714-.987.937-2.638.887-3.708-.234M34.039 21.053c-1.61-1.69-1.396-4.296.162-5.77 1.692-1.608 4.164-1.545 5.771.146 1.474 1.562 1.408 4.036-.278 5.638-1.56 1.486-4.178 1.55-5.655-.014M14.689 39.407c-1.605-1.69-1.538-4.171.152-5.773 1.556-1.466 4.17-1.543 5.778.153 1.47 1.557 1.272 4.17-.285 5.639-1.695 1.606-4.17 1.543-5.645-.02M12.594 17.567c-1.474-1.556-1.265-4.17.281-5.645 1.697-1.607 4.174-1.538 5.646.02 1.614 1.69 1.55 4.17-.15 5.777-1.552 1.474-4.166 1.544-5.777-.152M22.322 29.521c-2-2.113-1.776-5.544.339-7.563a5.235 5.235 0 0 1 7.435.203c2.013 2.113 2.063 5.557-.063 7.569-2.121 2.012-5.696 1.912-7.711-.209M88.416 75.105c.967.962 2.618.948 3.707-.158.963-.97.95-2.62-.019-3.577-1.114-1.094-2.753-1.088-3.715-.114-1.088 1.102-1.088 2.747.027 3.849M70.923 92.995c.976.955 2.62.949 3.584-.02 1.1-1.114 1.087-2.758.125-3.721-1.113-1.088-2.771-1.076-3.861.025-.961.97-.948 2.621.152 3.716M79.435 99.42c.792.777 2.133.77 2.918-.014.9-.9.886-2.246.095-3.026-.905-.892-2.246-.892-3.146.014-.772.79-.772 2.133.133 3.025M95.901 83.23c.791.772 2.14.772 2.918-.024.899-.9.887-2.247.101-3.026-.904-.899-2.252-.886-3.144.025-.78.785-.78 2.133.125 3.025M92.301 95.602c.981.95 2.632.944 3.593-.024.956-.962.95-2.627-.024-3.582-1.101-1.09-2.759-1.084-3.721-.115-.956.968-.936 2.627.152 3.721M78.759 66.428c1.65 1.645 4.265 1.488 5.77-.031 1.645-1.658 1.633-4.132-.025-5.771-1.53-1.513-4.004-1.5-5.644.159-1.507 1.524-1.633 4.144-.101 5.643M60 85.395c1.659 1.644 4.133 1.626 5.785-.033 1.5-1.53 1.62-4.132-.037-5.776-1.533-1.506-4.14-1.367-5.646.163-1.632 1.665-1.62 4.14-.101 5.646M81.802 87.94c1.519 1.511 4.14 1.354 5.64-.164 1.65-1.671 1.631-4.14.107-5.646-1.658-1.639-4.14-1.633-5.778.031-1.513 1.518-1.633 4.145.031 5.778M70.038 77.96c2.075 2.056 5.519 1.897 7.58-.179a5.238 5.238 0 0 0-.05-7.434c-2.076-2.058-5.518-2.178-7.57-.096-2.061 2.082-2.036 5.657.04 7.708M53.874 32.362c2.09-2.044 2-5.492-.038-7.574a5.234 5.234 0 0 0-7.435-.081c-2.091 2.037-2.269 5.473-.228 7.562 2.045 2.088 5.626 2.131 7.701.093M75.505 54.5a5.24 5.24 0 0 0 .102-7.431c-2.05-2.095-5.493-2.266-7.582-.228-2.087 2.038-2.125 5.621-.087 7.71 2.036 2.088 5.479 1.994 7.567-.05M56.989 42.14c-2.677-2.829-2.431-7.093.404-9.764 2.684-2.544 6.95-2.57 9.632.254 2.532 2.682 2.418 7.088-.265 9.624-2.822 2.683-7.215 2.563-9.771-.114M31.283 66.517c-2.674-2.822-2.421-7.088.262-9.626 2.823-2.682 6.951-2.575 9.626.248 2.547 2.683 2.572 6.954-.25 9.631-2.69 2.551-7.089 2.437-9.638-.253M88.782 25.553c.988-.936 2.646-.886 3.71.234.936.994.885 2.64-.09 3.576-1.133 1.084-2.784 1.038-3.72.045-1.078-1.128-1.026-2.78.1-3.855M71.671 7.314c.987-.936 2.646-.899 3.582.09 1.076 1.133 1.026 2.77.038 3.721-1.127 1.076-2.784 1.025-3.854-.102-.937-1-.893-2.639.234-3.709M80.315 1.062c.804-.765 2.152-.728 2.917.076.873.924.842 2.26.026 3.025-.911.88-2.254.836-3.133-.082-.765-.81-.727-2.146.19-3.019M96.44 17.592c.81-.76 2.152-.727 2.918.076.866.924.835 2.272.03 3.032-.924.872-2.265.836-3.138-.082-.76-.805-.733-2.153.19-3.026M93.111 5.151c.988-.943 2.639-.899 3.577.089.943.988.892 2.645-.096 3.582-1.126 1.063-2.784 1.026-3.72.038-.932-.982-.888-2.64.24-3.709M78.948 34.027c1.683-1.6 4.303-1.393 5.777.164 1.6 1.69 1.538 4.158-.158 5.771-1.552 1.475-4.026 1.406-5.64-.285-1.473-1.55-1.536-4.176.02-5.65M60.595 14.681c1.69-1.6 4.165-1.544 5.778.152 1.475 1.557 1.538 4.165-.159 5.778-1.555 1.475-4.163 1.272-5.637-.284-1.602-1.697-1.538-4.172.018-5.646M82.428 12.585c1.563-1.48 4.177-1.265 5.659.286 1.606 1.69 1.53 4.17-.02 5.646-1.703 1.606-4.177 1.55-5.778-.153-1.475-1.55-1.544-4.17.139-5.779M70.473 22.319c2.12-2 5.557-1.778 7.57.337a5.24 5.24 0 0 1-.204 7.43c-2.12 2.013-5.557 2.062-7.57-.058-2.004-2.121-1.91-5.696.204-7.71M24.894 88.401c-.962.975-.947 2.626.156 3.715.974.962 2.626.955 3.585-.02 1.098-1.107 1.086-2.758.117-3.715-1.108-1.089-2.753-1.089-3.858.02M7.003 70.921c-.949.97-.949 2.62.024 3.577 1.112 1.1 2.756 1.088 3.722.119 1.094-1.107 1.075-2.76-.023-3.86-.973-.962-2.624-.942-3.723.164M.58 79.427c-.778.798-.773 2.132.013 2.917.908.9 2.256.886 3.031.095.902-.899.889-2.245-.019-3.139-.788-.778-2.133-.77-3.025.127M16.777 95.9c-.778.791-.775 2.127.016 2.911.902.893 2.247.887 3.028.101.889-.91.889-2.252-.022-3.137-.787-.787-2.13-.787-3.022.125M4.403 92.305c-.952.969-.952 2.62.022 3.587.965.95 2.622.944 3.585-.03 1.079-1.102 1.075-2.76.114-3.722-.972-.949-2.627-.935-3.721.165M33.573 78.744c-1.642 1.657-1.49 4.272.032 5.777 1.667 1.645 4.14 1.633 5.778-.025 1.512-1.531 1.497-4.005-.164-5.645-1.52-1.513-4.143-1.633-5.646-.107M14.607 59.992c-1.642 1.665-1.623 4.14.032 5.778 1.53 1.506 4.138 1.627 5.777-.031 1.506-1.526 1.367-4.14-.159-5.646-1.66-1.638-4.144-1.626-5.65-.1M12.066 81.787c-1.515 1.525-1.357 4.144.163 5.651 1.66 1.64 4.135 1.627 5.645.109 1.648-1.678 1.636-4.146-.029-5.791-1.523-1.5-4.143-1.627-5.779.03M22.036 70.029c-2.05 2.082-1.892 5.526.184 7.575a5.223 5.223 0 0 0 7.43-.045c2.056-2.076 2.18-5.518.104-7.569-2.082-2.055-5.661-2.03-7.718.039" />
            </g>
            <path
                xmlns="http://www.w3.org/2000/svg"
                fill="#f9f8eb"
                d="M120 23h5v55h-5z"
            />
            <path
                fill="#f9f8eb"
                d="M165.883 33.843h-25.997v-8.216h25.997c.628 0 .942-.315.942-.943s-.314-.943-.942-.943H138v21.147c0 .63.314.943.943.943s.943-.314.943-.943V35.73h25.997c.628 0 .942-.314.942-.943s-.314-.943-.942-.943zm3.468-8.957V45.09c0 .606.303.909.91.909.628 0 .942-.303.942-.91V24.887c0-.629-.314-.943-.943-.943-.606 0-.909.314-.909.943zm32.058-1.145h-26.94c-.628 0-.942.314-.942.943s.314.943.943.943h12.526v19.261c0 .63.315.943.943.943s.943-.314.943-.943V25.627h12.527c.629 0 .943-.315.943-.943s-.314-.943-.943-.943zm30.139 4.546c-1.37-1.594-3.154-2.84-5.354-3.738s-4.546-1.347-7.038-1.347c-4.109 0-7.61 1.1-10.507 3.3-2.986 2.268-4.478 5.029-4.478 8.284s1.492 6.017 4.478 8.284c2.896 2.2 6.398 3.3 10.507 3.3 2.492 0 4.838-.449 7.038-1.347s3.984-2.144 5.354-3.738c.404-.494.382-.931-.067-1.313a.94.94 0 0 0-.64-.236.864.864 0 0 0-.674.303c-1.234 1.392-2.823 2.487-4.765 3.284s-4.024 1.195-6.246 1.195c-3.615 0-6.701-.954-9.26-2.862s-3.84-4.198-3.84-6.87 1.28-4.961 3.84-6.87 5.645-2.862 9.26-2.862c2.222 0 4.304.399 6.246 1.196s3.53 1.89 4.765 3.283c.18.202.404.303.674.303a.94.94 0 0 0 .64-.236c.449-.381.471-.82.067-1.313zm17.814-4.917c-4.086 0-7.588 1.112-10.507 3.334-2.985 2.268-4.478 5.029-4.478 8.284s1.493 6.017 4.478 8.284c2.896 2.2 6.398 3.3 10.507 3.3s7.6-1.1 10.473-3.3c2.985-2.29 4.478-5.051 4.478-8.284s-1.493-5.994-4.478-8.284c-2.919-2.222-6.41-3.334-10.473-3.334zm13.1 11.618c0 2.672-1.28 4.956-3.84 6.853s-5.646 2.845-9.26 2.845-6.701-.948-9.26-2.845-3.84-4.181-3.84-6.853c0-2.694 1.28-4.99 3.84-6.886s5.646-2.846 9.26-2.846 6.701.949 9.26 2.846 3.84 4.192 3.84 6.886zm31.519-11.045c-.629 0-.943.314-.943.943v18.319L266.098 23v22.09c0 .607.314.91.943.91s.943-.303.943-.91V26.739l26.94 20.205V24.886c0-.629-.315-.943-.943-.943zm31.048 0c-.63 0-.943.314-.943.943v18.319L297.146 23v22.09c0 .607.314.91.943.91s.943-.303.943-.91V26.739l26.94 20.205V24.886c0-.629-.315-.943-.943-.943zm31.216 11.786c.628 0 .943-.314.943-.943s-.315-.943-.943-.943h-25.997v-8.216h25.997c.628 0 .943-.315.943-.943s-.315-.943-.943-.943h-27.883v22.09h27.883c.628 0 .943-.314.943-.943s-.315-.942-.943-.942h-25.997v-8.217h25.997zm30.812-11.988h-26.94c-.628 0-.942.314-.942.943s.314.943.942.943h12.527v19.261c0 .63.315.943.943.943s.943-.314.943-.943V25.627h12.527c.629 0 .943-.315.943-.943s-.314-.943-.943-.943z"
            />
            <path
                fill="#76b39d"
                d="M138.21 77.897a.214.214 0 0 1-.21-.21v-9.67c0-.113.097-.21.21-.21h2.099c.113 0 .21.097.21.21v7.555h3.632c.113 0 .21.097.21.21v1.905c0 .113-.097.21-.21.21h-5.941zm17.284 0v-9.67c0-.404.08-.484.21-.484h7.07c.113 0 .21.08.21.193v1.825c0 .113-.097.21-.21.21h-4.778v1.678h3.019c.113 0 .21.097.21.21v1.808c0 .113-.097.21-.21.21h-3.02v1.728h4.763c.113 0 .21.097.21.21v1.808c0 .113-.097.21-.21.21h-7.055c-.129 0-.21-.097-.21.064zm21.238 0c-.113 0-.193-.097-.193-.21v-7.62h-2.212c-.113 0-.21-.08-.21-.193v-1.857c0-.113.097-.21.21-.21h6.926c.129 0 .21.097.21.21v1.857c0 .113-.081.193-.21.193h-2.212v7.62c0 .113-.097.21-.21.21h-2.099zm16.638-7.184c-.064 0-.113-.032-.161-.08a.191.191 0 0 1-.016-.162l.274-1.324c-.533-.032-.872-.581-.872-.985 0-.339.113-.613.323-.84.21-.209.485-.322.791-.322s.565.097.775.307.323.5.323.855c0 .146-.032.29-.08.436a2.666 2.666 0 0 1-.178.42l-.856 1.598c-.048.065-.097.097-.177.097h-.146zm16.88 7.281a6.28 6.28 0 0 1-2.292-.436 6.214 6.214 0 0 1-1.954-1.162.226.226 0 0 1-.048-.242l.565-1.922c.032-.064.08-.113.145-.113.065-.016.13 0 .178.049.856.807 1.824 1.534 3.035 1.598.323.016.678.032.985-.064.952-.307.549-1.276-.162-1.566-.242-.097-.58-.21-1.017-.34a9.656 9.656 0 0 1-1.582-.564c-.436-.194-.807-.5-1.13-.905-.307-.42-.468-.968-.468-1.63 0-.63.161-1.179.484-1.647s.775-.84 1.34-1.081 1.227-.372 1.97-.372a6.25 6.25 0 0 1 1.953.307c.63.194 1.195.468 1.695.791.081.065.113.162.065.258l-.533 1.809c-.016.064-.065.096-.13.113a.191.191 0 0 1-.16-.017c-.727-.452-1.453-1-2.31-1.114-.564-.08-1.42-.048-1.613.63-.243.872 1.033 1.098 1.614 1.275.646.194 1.178.388 1.598.582.436.21.823.532 1.13.936.323.42.485.985.485 1.663 0 .662-.178 1.227-.517 1.711-.323.484-.791.84-1.372 1.098a5.33 5.33 0 0 1-1.954.355zm31.468-.097c-.113 0-.194-.097-.194-.21v-7.62h-2.211c-.114 0-.21-.08-.21-.193v-1.857c0-.113.096-.21.21-.21h6.925c.13 0 .21.097.21.21v1.857c0 .113-.08.193-.21.193h-2.211v7.62c0 .113-.097.21-.21.21h-2.1zm16.073 0a.214.214 0 0 1-.21-.21v-9.67c0-.113.097-.21.21-.21h2.098c.113 0 .21.097.21.21v3.971h3.649v-3.97c0-.114.097-.21.21-.21h2.098c.113 0 .21.096.21.21v9.67c0 .112-.097.21-.21.21h-2.098a.214.214 0 0 1-.21-.21v-3.472h-3.649v3.471c0 .113-.097.21-.21.21h-2.098zm19.818 0a.203.203 0 0 1-.21-.21v-9.67c0-.113.08-.21.21-.21h3.94c1.226 0 2.195.307 2.873.937 1 .904 1.34 2.615.855 3.874a2.855 2.855 0 0 1-.871 1.179c-.226.177-.469.306-.71.435.693 1.098 1.743 3.326 1.743 3.326.016.032.048.08.048.13 0 .112-.097.21-.21.21h-2.389a.219.219 0 0 1-.178-.114l-1.404-3.083c-.5.032-.888.016-1.405.016v2.97c0 .113-.096.21-.21.21h-2.082zm2.292-5.424s2.035.226 2.745-.242c.274-.178.436-.614.436-.937a1.312 1.312 0 0 0-.485-.952c-.306-.259-1.065-.34-1.452-.34l-1.244.033v2.438zm16.945 5.424a.214.214 0 0 1-.21-.21v-9.67c0-.113.097-.21.21-.21h2.099c.113 0 .21.097.21.21v9.67c0 .113-.097.21-.21.21h-2.099zm16.88 0a.21.21 0 0 1-.194-.129l-3.228-9.686c-.033-.065-.017-.13.016-.194a.26.26 0 0 1 .177-.08h2.26c.081 0 .162.048.194.144l1.921 6.313 1.938-6.313a.203.203 0 0 1 .193-.145h2.164a.26.26 0 0 1 .177.08c.032.065.049.13.016.195l-3.277 9.686a.195.195 0 0 1-.194.13h-2.163zm16.783 0v-9.67c0-.404.081-.484.21-.484h7.071c.113 0 .21.08.21.193v1.825c0 .113-.097.21-.21.21h-4.778v1.678h3.018c.113 0 .21.097.21.21v1.808c0 .113-.097.21-.21.21h-3.018v1.728h4.762c.113 0 .21.097.21.21v1.808c0 .113-.097.21-.21.21h-7.055c-.129 0-.21-.097-.21.064z"
            />
        </svg>
    );
};
export default LogoFullDark;
