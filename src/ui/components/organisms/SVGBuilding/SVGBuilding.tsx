"use client";

import { Building, DoorBuilding, DownBuilding, ActiveBlocks, BuildingBlocks, MainBlock } from "./AssetsBuilding";

export const SVGBuilding = () => {

    return (
        <svg width="100%" viewBox="0 0 960 540" className="flex-grow h-full max-h-full overflow-visible">
            <g transform="translate(0, -270)">
                <g clipPath="url(#buildingClip)">
                    <BuildingBlocks />
                    <DoorBuilding />
                    <DownBuilding />
                    <ActiveBlocks />
                    <MainBlock />
                </g>
                <Building />
                <g fill="#6a2841" transform="translate(1000, 65)">
                    <g transform="matrix(0.583624, 0, 0, 0.583624, -639.186594, 22.608269)">
                        <path d="M 479.341 119.755 L 479.603 120.628 C 469.616 125.128 459.631 129.631 449.646 134.133 L 449.267 133.488 L 464.221 113.216 C 464.075 115.096 464.081 116.496 463.835 117.852 C 463.462 119.919 464.318 120.475 466.241 120.312 C 470.081 119.991 473.932 119.779 477.779 119.554 C 478.294 119.524 478.82 119.683 479.341 119.754 M 482.316 127.204 C 481.392 128.458 480.609 129.854 479.512 130.931 C 477.556 132.851 475.434 134.607 473.335 136.377 C 471.858 137.623 471.735 138.621 473.46 139.817 C 475.564 141.274 477.53 142.93 479.116 144.997 C 469.751 143.78 460.386 142.563 450.12 141.227 C 461.136 136.232 471.528 131.517 481.92 126.804 L 482.316 127.204 M 474.472 156.567 C 469.297 157.693 464.086 159.18 458.849 159.369 C 451.53 159.634 447.293 154.412 442.883 148.366 C 456.605 148.316 469.313 148.986 481.509 153.336 L 481.577 154.186 C 479.212 154.996 476.899 156.039 474.472 156.566 M 437.052 136.251 C 436.674 133.714 436.289 131.178 435.923 128.639 C 434.64 119.731 439.318 113.929 446.203 109.482 C 450.899 106.448 455.834 103.784 460.663 100.955 L 461.303 101.422 C 456.733 115.202 447.558 125.915 437.051 136.251 M 407.256 141.631 C 405.097 136.898 404.624 132.08 406.993 127.379 C 407.727 125.923 409.464 124.669 411.03 124.012 C 413.181 123.11 414.731 124.356 415.362 126.558 C 416.737 131.353 412.338 139.692 407.256 141.632 M 375.044 141.744 C 369.431 136.923 365.834 129.723 366.024 121.567 C 366.106 117.43 367.058 113.356 368.82 109.611 C 368.935 109.518 369.043 109.415 369.158 109.325 C 370.398 108.355 372.06 107.251 373.692 107.857 C 377.112 109.127 378.512 114.199 379.243 117.334 C 381.178 125.63 379.224 134.434 375.044 141.744 M 290.999 302.184 C 286.165 302.523 281.612 302.691 277.342 302.691 C 260.03 302.691 246.71 302.523 237.382 302.185 L 280.757 237.905 C 284.131 232.952 292.947 221.01 307.207 202.077 C 301.804 223.124 296.402 256.493 290.999 302.185 M 105.694 256.098 C 106.896 253.208 110.599 250.306 113.464 252.86 C 116.28 255.37 116.431 260.096 115.678 263.512 C 114.768 267.641 112.504 271.335 109.941 274.646 C 109.248 275.538 108.535 276.413 107.804 277.273 C 107.47 275.661 107.122 274.051 106.791 272.439 C 105.762 267.434 103.615 261.097 105.694 256.098 M 474.457 113.351 C 470.722 113.488 470.658 113.361 470.798 109.536 C 471.058 102.439 470.454 95.416 468.642 87.813 C 467.522 88.541 466.782 88.979 466.089 89.48 C 464.382 90.714 462.772 92.1 460.989 93.209 C 454.362 97.326 447.573 101.189 441.054 105.466 C 434.367 109.855 429.756 115.876 429.555 124.195 C 429.451 128.48 429.999 132.85 430.836 137.065 C 431.492 140.374 430.841 142.598 428.102 144.562 C 424.237 147.331 420.155 149.188 415.312 148.589 C 414.328 148.468 413.422 147.728 412.48 147.274 C 412.897 146.499 413.232 145.664 413.747 144.963 C 414.997 143.256 416.357 141.632 417.623 139.937 C 420.11 136.607 421.486 132.866 421.658 128.699 C 421.884 123.283 419.076 119.136 414.192 117.979 C 409.942 116.974 406.36 118.498 403.499 121.579 C 400.156 125.179 399.28 129.765 399.595 134.416 C 399.853 138.203 400.911 141.935 401.648 145.868 C 400.491 146.298 399.155 146.96 397.743 147.297 C 391.955 148.692 385.861 148.011 380.524 145.371 C 380.941 144.663 381.34 143.943 381.718 143.213 C 386.626 133.663 388.272 121.871 384.368 111.673 C 382.488 106.763 378.819 101.336 373.105 101.167 C 373.099 101.121 373.099 101.075 373.09 101.03 C 372.88 101.07 372.672 101.112 372.464 101.155 L 372.448 101.154 L 372.232 101.201 C 371.934 101.263 371.638 101.33 371.342 101.4 L 371.265 101.419 C 370.997 101.483 370.73 101.553 370.465 101.627 C 370.443 101.633 370.419 101.639 370.398 101.646 C 370.126 101.722 369.858 101.804 369.591 101.892 L 369.542 101.908 C 369.263 102.001 368.987 102.101 368.712 102.208 L 368.704 102.212 C 367.861 102.544 367.036 102.948 366.239 103.468 C 365.627 104.25 364.966 104.991 364.26 105.688 C 363.906 106.291 363.574 106.905 363.19 107.488 C 362.99 107.79 362.786 108.073 362.581 108.354 L 362.497 108.6 L 362.468 108.667 C 362.406 108.853 362.358 109.023 362.316 109.172 C 361.973 110.394 361.571 111.599 361.113 112.782 C 361.064 112.914 361.007 113.048 360.953 113.182 C 360.887 113.599 360.818 113.997 360.765 114.311 C 360.755 114.376 360.745 114.439 360.725 114.501 C 360.7 114.58 360.665 114.653 360.638 114.73 C 360.628 114.865 360.613 115 360.598 115.136 C 360.564 115.41 360.515 115.681 360.451 115.949 C 360.333 116.622 360.233 117.298 360.151 117.976 C 358.804 129.699 363.392 139.914 371.749 146.65 C 363.187 157.854 349.927 164.875 336.491 169.134 C 335.541 169.58 334.517 169.889 333.446 170.084 C 333.338 170.136 333.226 170.174 333.116 170.223 C 332.842 170.343 332.566 170.458 332.286 170.559 C 332.047 170.644 331.806 170.715 331.562 170.785 C 331.439 170.821 331.316 170.857 331.192 170.889 C 330.866 170.973 330.536 171.042 330.204 171.097 L 330.2 171.097 C 329.83 171.157 329.456 171.199 329.081 171.222 L 329.025 171.235 C 328.688 171.255 328.351 171.277 328.012 171.265 C 320.377 172.841 311.954 173.545 304.295 173.839 C 301.888 174.077 299.273 174.317 296.402 174.559 C 281.095 175.686 270.404 176.981 264.327 178.443 C 252.509 181.143 242.66 185.055 234.784 190.175 C 226.905 195.297 220.857 201.655 216.637 209.251 C 212.415 216.848 210.307 224.698 210.307 232.801 C 210.307 238.541 211.459 242.846 213.767 245.716 C 216.072 248.586 219.14 250.021 222.968 250.021 C 225.668 250.021 227.974 249.066 229.889 247.151 C 231.801 245.238 232.759 243.044 232.759 240.567 C 232.759 238.654 231.97 235.616 230.395 231.451 C 228.931 227.737 228.2 224.867 228.2 222.841 C 228.2 216.653 230.56 210.575 235.28 204.609 C 240.001 198.646 247.081 194.142 256.525 191.104 C 263.38 188.854 280.69 186.49 308.453 184.014 C 288.096 206.973 261.499 243.664 228.659 294.082 C 199.644 338.649 177.714 367.912 162.869 381.865 C 155.879 388.424 149.351 392.459 143.286 393.988 C 142.6 394.252 141.884 394.488 141.122 394.683 C 138.374 395.382 135.242 395.523 132.064 395.187 C 131.696 395.15 131.33 395.105 130.964 395.052 C 130.621 395.006 130.279 394.954 129.938 394.896 C 129.438 394.808 128.94 394.709 128.445 394.598 C 128.315 394.568 128.181 394.547 128.051 394.517 C 127.891 394.495 127.736 394.457 127.577 394.432 C 126.997 394.338 126.427 394.211 125.862 394.058 C 125.612 393.988 125.359 393.928 125.112 393.85 C 124.925 393.79 124.744 393.716 124.56 393.65 C 124.27 393.546 123.978 393.444 123.693 393.325 C 123.533 393.259 123.375 393.181 123.216 393.109 C 122.88 392.957 122.543 392.808 122.216 392.637 C 121.76 392.502 121.307 392.352 120.86 392.189 C 120.734 392.142 120.61 392.092 120.485 392.043 C 120.09 391.895 119.7 391.732 119.317 391.555 L 119.28 391.552 C 110.38 387.788 102.43 381.677 96.392 374.018 C 84.707 359.192 82.087 339.298 86.917 321.341 C 89.387 312.138 93.71 303.311 99.708 295.883 C 101.073 294.192 102.525 292.571 104.002 290.973 C 104.628 293.908 105.242 296.846 105.878 299.779 C 109.168 314.93 112.605 330.049 116.188 345.133 C 117.162 349.237 123.488 347.5 122.511 343.39 C 117.919 324.038 113.569 304.629 109.461 285.168 C 112.707 281.686 115.831 278.104 118.321 274.01 C 120.751 270.013 122.417 265.51 122.577 260.8 C 122.735 256.119 121.327 250.876 117.591 247.786 C 113.217 244.169 107.493 244.844 103.338 248.433 C 99.002 252.178 97.95 258.133 98.552 263.578 C 99.216 269.588 100.742 275.544 101.976 281.456 C 102.104 282.069 102.238 282.681 102.367 283.294 C 98.567 287.348 94.721 291.361 91.527 295.957 C 86.027 303.854 82.057 312.919 79.917 322.296 C 75.687 340.835 78.587 361.016 90.077 376.469 C 95.628 383.942 102.778 390.246 110.89 394.759 C 110.848 394.816 110.8 394.868 110.76 394.924 C 112.593 395.727 114.384 396.664 116.193 397.633 C 119.71 399 123.227 400.395 126.926 401.223 C 134.614 402.948 142.462 403.687 150.124 401.525 C 156.812 399.638 163.835 396.459 169.59 392.348 C 171.185 390.878 172.796 389.502 174.273 388.221 C 174.729 387.824 175.193 387.451 175.657 387.093 C 175.921 386.716 176.202 386.346 176.517 385.992 C 177.173 385.25 177.959 384.622 178.779 384.038 C 191.412 369.41 207.904 346.608 228.304 315.522 C 255.942 314.846 276.334 314.566 289.481 314.677 C 287.566 331.447 285.767 343.265 284.078 350.129 C 281.716 359.809 278.788 369.036 275.3 377.815 C 285.091 376.351 292.351 375.619 297.077 375.619 C 299.889 375.619 306.587 376.181 317.167 377.308 C 323.355 377.984 328.647 378.32 333.034 378.32 C 336.074 378.32 339.619 378.15 343.67 377.815 L 345.36 368.192 C 340.181 369.204 335.4 369.711 331.01 369.711 C 324.368 369.711 316.884 368.643 308.558 366.503 L 316.168 296.613 L 329.358 199.038 C 330.3 192.384 331.651 184.986 333.388 176.885 C 342.935 174.324 352.128 170.648 360.532 165.278 C 366.83 161.255 372.687 156.254 377.234 150.276 C 378.349 150.877 379.494 151.421 380.664 151.906 C 388.6 155.192 396.445 154.676 404.269 151.481 C 405.021 151.174 406.08 150.997 406.777 151.288 C 410.147 152.695 413.44 154.284 417.069 155.95 C 416.86 156.234 416.277 157 415.719 157.783 C 413.209 161.306 410.545 164.733 408.269 168.401 C 407.117 170.255 405.989 170.598 404.024 170.101 C 396.252 168.136 389.201 171.547 385.941 178.908 C 383.401 184.645 384.305 190.014 388.204 194.886 C 392.34 200.053 397.826 201.526 404.018 200.056 C 410.104 198.614 413.745 194.388 415.316 188.443 C 416.403 184.325 415.549 180.48 413.296 176.843 C 412.666 175.823 412.048 174.017 412.519 173.213 C 417.669 164.438 424.041 156.601 431.45 149.615 C 432.876 148.272 434.204 148.327 435.46 149.845 C 436.162 150.694 436.818 151.589 437.584 152.375 C 440.657 155.529 443.514 158.962 446.919 161.708 C 452.897 166.527 460.001 166.888 467.112 165.117 C 474.862 163.187 482.466 160.671 490.167 158.527 C 492.862 157.777 495.655 157.38 498.629 156.776 C 498.225 155.859 498.104 155.172 497.706 154.742 C 493.173 149.832 488.691 144.872 483.996 140.122 C 481.736 137.836 481.617 137.731 483.683 135.352 C 487.599 130.846 491.419 126.257 495.209 121.645 C 496.757 119.762 498.123 117.73 499.866 115.367 C 490.942 113.601 482.734 113.047 474.457 113.351" />
                        <path d="M417.067 260.917c-4.895 6.73-3.297 16.663 3.48 21.641 6.964 5.115 16.581 3.586 21.741-3.457 5.675-6.928 2.749-17.499-3.38-21.77-6.983-4.869-16.781-3.372-21.841 3.586M379.502 228.316c6.669 5.032 16.787 3.433 21.648-3.22 5.283-7.232 3.83-16.736-3.351-21.92-7.201-5.197-16.456-3.746-21.652 3.395-5.053 6.556-3.808 16.34 3.355 21.745M453.959 247.135c4.74-6.5 4.302-16.069-3.951-21.984-6.533-4.682-16.174-3.183-21.072 3.512-5.168 7.064-3.833 16.729 3.015 21.831 6.94 5.171 16.838 3.732 22.008-3.359M441.193 164.797c-6.75-4.956-16.385-3.505-21.369 3.218-5.352 7.218-3.939 16.518 3.329 21.91 6.472 5.364 16.733 3.269 21.394-2.96 5.459-7.292 3.986-16.778-3.354-22.168" />
                        <path d="M421.601 252.21c5.258-6.875 4.018-16.134-2.886-21.54-6.77-5.302-16.542-4.202-21.68 2.44-5.477 7.079-4.245 16.64 2.836 22.009 7.057 5.35 16.365 4.105 21.73-2.91M464.964 216.054c5.222-6.349 4.935-16.98-2.493-22.263-6.562-5.22-16.246-4.32-21.294 1.977-5.79 7.224-4.852 17.084 2.145 22.558 6.498 5.084 16.513 3.964 21.642-2.272" />
                        <path d="M 408.168 202.926 C 403.232 209.983 404.855 219.398 411.873 224.412 C 419.145 229.607 428.183 228.088 433.488 220.86 C 438.938 213.439 436.691 204.197 430.184 199.312 C 423.141 194.025 413.117 195.85 408.168 202.926" />
                    </g>
                    <g transform="matrix(1, 0, 0, 1, -789.844677, -412.137549)">
                        <g transform="matrix(1, 0, 0, 1, 17.676146, 215.837283)">
                            <path d="M 295.271 467.007 C 296.739 464.754 298.386 463.627 300.214 463.627 C 300.962 463.627 302 463.766 303.33 464.042 C 306.015 464.622 307.843 464.912 308.813 464.912 C 309.753 464.912 310.515 464.637 311.097 464.082 C 311.679 463.53 311.97 462.839 311.97 462.01 C 311.97 461.097 311.54 460.309 310.684 459.646 C 309.827 458.982 308.554 458.65 306.869 458.65 C 303.882 458.65 300.702 459.624 297.329 461.574 C 293.956 463.524 291.218 466.184 289.117 469.558 C 287.015 472.932 285.149 478.074 283.517 484.987 L 273.605 484.987 L 272.858 487.932 L 282.771 487.932 L 274.351 521.776 C 273.107 526.78 271.863 529.926 270.619 531.211 C 269.375 532.497 267.383 533.14 264.646 533.14 C 262.876 533.14 261.024 533.016 259.088 532.767 C 257.955 532.627 257.098 532.56 256.517 532.56 C 255.356 532.56 254.464 532.815 253.842 533.326 C 253.219 533.838 252.909 534.523 252.909 535.38 C 252.909 536.375 253.358 537.21 254.256 537.889 C 255.156 538.567 256.475 538.905 258.216 538.905 C 263.416 538.905 268.234 536.831 272.671 532.684 C 277.11 528.536 280.337 522.44 282.356 514.393 L 288.85 487.932 L 299.984 487.932 L 300.647 484.987 L 289.657 484.987 L 291.741 476.153 C 292.626 472.31 293.803 469.261 295.271 467.007 M 351.329 499.129 C 350.213 499.21 349.094 499.252 347.974 499.255 C 343.721 499.255 340.448 499.213 338.156 499.13 L 348.812 483.338 C 349.642 482.12 351.808 479.187 355.31 474.535 C 353.983 479.705 352.656 487.904 351.33 499.13 M 355.642 514.933 L 357.513 497.762 L 360.753 473.788 C 361.113 471.245 361.709 468.273 362.54 464.871 C 361.35 465.921 360.103 466.627 358.803 466.986 C 357.973 467.235 355.923 467.498 352.656 467.775 C 348.896 468.051 346.269 468.369 344.776 468.729 C 341.873 469.392 339.453 470.354 337.517 471.611 C 335.582 472.869 334.097 474.431 333.059 476.298 C 332.022 478.164 331.504 480.093 331.504 482.084 C 331.504 483.494 331.787 484.552 332.354 485.257 C 332.921 485.962 333.674 486.315 334.614 486.315 C 335.278 486.315 335.845 486.079 336.315 485.609 C 336.785 485.139 337.02 484.599 337.02 483.991 C 337.02 483.521 336.826 482.776 336.44 481.751 C 336.08 480.839 335.9 480.134 335.9 479.637 C 335.9 478.116 336.48 476.623 337.64 475.157 C 338.8 473.692 340.54 472.586 342.86 471.839 C 344.544 471.286 348.796 470.706 355.617 470.097 C 350.617 475.737 344.081 484.752 336.013 497.14 C 328.885 508.089 323.496 515.278 319.85 518.706 C 317.61 520.808 315.563 521.859 313.711 521.859 C 313.157 521.859 312.052 521.665 310.392 521.278 C 309.729 521.14 309.204 521.07 308.816 521.07 C 308.153 521.07 307.6 521.306 307.158 521.776 C 306.716 522.245 306.494 522.84 306.494 523.56 C 306.494 524.499 306.875 525.266 307.635 525.86 C 308.395 526.455 309.55 526.753 311.098 526.753 C 314.058 526.753 317.174 525.377 320.451 522.626 C 323.727 519.874 328.885 513.135 335.926 502.406 C 342.716 502.24 347.726 502.172 350.956 502.199 C 350.486 506.319 350.044 509.223 349.629 510.909 C 349.068 513.223 348.348 515.496 347.472 517.711 C 349.878 517.351 351.662 517.171 352.822 517.171 C 353.514 517.171 355.158 517.31 357.758 517.587 C 359.278 517.753 360.578 517.836 361.656 517.836 C 362.403 517.836 363.274 517.794 364.269 517.711 L 364.684 515.347 C 363.412 515.596 362.237 515.721 361.159 515.721 C 359.527 515.721 357.689 515.458 355.642 514.933 M 388.897 473.378 L 382.312 475.903 L 379.988 484.987 L 373.262 484.987 L 372.515 487.932 L 379.234 487.932 L 375.012 504.439 C 373.961 508.531 373.436 511.572 373.436 513.564 C 373.436 515.25 373.733 516.467 374.328 517.213 C 374.922 517.96 375.731 518.333 376.754 518.333 C 377.999 518.333 379.643 517.821 381.69 516.799 C 383.736 515.776 387.787 512.982 393.842 508.421 L 392.266 506.513 C 390.178 508.219 387.959 509.758 385.63 511.116 C 383.86 512.14 382.546 512.651 381.69 512.651 C 381.136 512.651 380.7 512.485 380.383 512.153 C 380.065 511.821 379.907 511.282 379.907 510.536 C 379.907 508.905 380.48 506.004 381.627 501.831 L 385.247 487.932 L 393.842 487.932 L 394.505 484.987 L 385.917 484.987 L 388.897 473.378 Z M 427.438 511.449 C 425.613 513.024 424.368 513.812 423.705 513.812 C 423.4 513.812 423.172 513.702 423.021 513.48 C 422.869 513.26 422.791 512.927 422.791 512.485 C 422.791 511.351 422.951 510.066 423.271 508.628 C 423.589 507.19 424.651 503.512 426.454 497.595 C 427.784 493.309 428.63 490.351 428.991 488.719 C 429.211 487.78 429.325 486.84 429.325 485.899 C 429.325 484.763 429.02 483.879 428.411 483.243 C 427.801 482.608 426.958 482.291 425.877 482.291 C 424.494 482.291 422.667 482.995 420.397 484.403 C 416.521 486.777 412.936 489.689 409.641 493.14 L 414.268 472.67 C 415.126 468.862 415.957 466.445 416.758 465.417 C 417.562 464.389 418.6 463.877 419.875 463.877 C 420.788 463.877 422.435 464.052 424.815 464.402 C 425.869 464.549 426.725 464.622 427.391 464.622 C 428.554 464.622 429.475 464.335 430.153 463.76 C 430.831 463.185 431.17 462.52 431.17 461.762 C 431.17 460.865 430.825 460.122 430.133 459.533 C 429.442 458.944 428.501 458.649 427.313 458.649 C 424.465 458.649 421.583 459.441 418.666 461.023 C 415.749 462.606 413.384 464.723 411.574 467.375 C 409.762 470.027 408.303 473.809 407.198 478.723 L 401.101 505.323 C 400.381 508.388 399.359 512.339 398.031 517.173 L 404.211 517.173 L 407.485 502.686 C 408.205 499.566 409.163 497.213 410.355 495.626 C 412.242 493.143 414.404 491.102 416.844 489.503 C 418.592 488.344 420.047 487.765 421.212 487.765 C 422.155 487.765 422.626 488.208 422.626 489.093 C 422.626 489.674 422.156 491.678 421.216 495.106 C 419.086 502.076 417.794 506.616 417.338 508.731 C 416.882 510.846 416.654 512.458 416.654 513.563 C 416.654 515.195 416.951 516.398 417.544 517.173 C 418.14 517.945 418.921 518.333 419.889 518.333 C 421.078 518.333 422.585 517.766 424.409 516.633 C 427.091 514.973 429.705 512.734 432.249 509.914 L 431.169 508.379 C 429.918 509.393 428.674 510.416 427.438 511.449 M 454.521 510.826 C 452.613 513.702 450.498 515.139 448.175 515.139 C 446.515 515.139 445.189 514.38 444.194 512.859 C 442.838 510.784 442.162 507.951 442.162 504.355 C 442.162 498.439 443.26 493.801 445.458 490.44 C 447.657 487.081 449.931 485.401 452.282 485.401 C 453.967 485.401 455.372 486.287 456.491 488.055 C 457.611 489.826 458.17 492.785 458.17 496.931 C 458.17 502.462 456.954 507.094 454.52 510.826 M 455.807 482.291 C 449.585 482.291 444.386 485.347 440.211 491.457 C 436.894 496.379 435.235 501.743 435.235 507.55 C 435.235 510.895 436.14 513.536 437.952 515.472 C 439.762 517.406 442.147 518.375 445.106 518.375 C 449.916 518.375 454.479 515.935 458.792 511.055 C 463.106 506.175 465.262 500.665 465.262 494.526 C 465.262 490.683 464.365 487.682 462.567 485.526 C 460.769 483.369 458.516 482.291 455.807 482.291 M 493.114 483.722 C 491.773 482.768 489.872 482.291 487.412 482.291 C 484.038 482.291 481.259 483.306 479.075 485.336 C 476.89 487.366 475.799 489.734 475.799 492.441 C 475.799 495.396 477.236 498.475 480.112 501.678 C 482.185 503.97 483.519 505.614 484.114 506.608 C 484.709 507.602 485.006 508.596 485.006 509.59 C 485.006 510.612 484.689 511.64 484.055 512.676 C 483.433 513.702 482.509 514.513 481.41 514.996 C 480.28 515.506 478.972 515.762 477.484 515.762 C 476.189 515.762 475.17 515.445 474.426 514.808 C 473.654 514.172 473.268 513.398 473.268 512.486 C 473.268 512.236 473.277 511.933 473.297 511.573 C 473.333 511.131 473.351 510.772 473.351 510.493 C 473.351 509.803 473.075 509.202 472.521 508.691 C 471.968 508.179 471.304 507.923 470.531 507.923 C 469.646 507.923 468.899 508.242 468.291 508.877 C 467.681 509.513 467.379 510.315 467.379 511.283 C 467.379 513.246 468.179 514.898 469.785 516.239 C 471.387 517.579 473.835 518.249 477.125 518.249 C 481.051 518.249 484.26 517.154 486.748 514.957 C 489.236 512.762 490.481 510.201 490.481 507.273 C 490.481 504.347 488.946 501.253 485.877 497.993 C 483.637 495.619 482.241 493.901 481.687 492.837 C 481.135 491.774 480.857 490.676 480.857 489.543 C 480.857 488.246 481.294 487.162 482.165 486.292 C 483.035 485.422 484.038 484.988 485.172 484.988 C 486.499 484.988 487.84 485.886 489.195 487.683 C 489.914 488.623 490.467 489.211 490.854 489.446 C 491.241 489.681 491.697 489.798 492.222 489.798 C 493.024 489.798 493.709 489.522 494.276 488.968 C 494.843 488.416 495.126 487.766 495.126 487.02 C 495.126 485.775 494.455 484.676 493.114 483.722" />
                            <path d="M 142.139 470.022 C 142.139 467.727 141.779 466.04 141.061 464.962 C 140.341 463.883 139.456 463.344 138.407 463.344 C 137.632 463.344 136.961 463.621 136.395 464.174 C 135.827 464.727 135.544 465.376 135.544 466.124 C 135.544 466.676 135.751 467.478 136.166 468.529 C 136.802 470.189 137.12 471.709 137.12 473.091 C 137.12 475.607 136.22 478.401 134.42 481.469 C 132.04 485.534 127.417 491.091 120.55 498.142 L 113.74 505.113 L 105.766 513.619 C 105.266 509.635 105.018 505.237 105.018 500.423 C 105.018 494.147 105.585 489.177 106.721 485.513 C 107.856 481.849 110.293 477.28 114.031 471.805 C 112.511 471.971 111.019 472.11 109.555 472.22 C 104.113 472.58 99.969 473.243 97.124 474.21 C 92.704 475.704 89.224 478.013 86.682 481.137 C 84.141 484.262 82.87 487.51 82.87 490.884 C 82.87 492.681 83.282 494.188 84.106 495.405 C 84.764 496.317 85.533 496.773 86.411 496.773 C 87.015 496.773 87.508 496.58 87.893 496.193 C 88.277 495.804 88.469 495.293 88.469 494.654 C 88.469 493.962 88.104 492.951 87.373 491.621 C 86.803 490.568 86.52 489.571 86.52 488.628 C 86.52 486.579 87.3 484.543 88.86 482.521 C 90.419 480.499 92.877 478.711 96.232 477.161 C 99.585 475.609 102.878 474.833 106.109 474.833 C 103.394 478.435 101.504 481.808 100.438 484.953 C 99.371 488.097 98.838 491.54 98.838 495.281 C 98.838 496.579 98.993 499.273 99.298 503.362 L 100.808 523.42 C 107.528 515.88 114.192 508.767 120.8 502.083 C 127.11 495.695 131.774 490.566 134.79 486.695 C 137.807 482.825 139.786 479.637 140.728 477.135 C 141.668 474.632 142.138 472.261 142.138 470.022 L 142.139 470.022 Z M 155.493 469.877 C 154.939 469.311 154.234 469.026 153.378 469.026 C 152.271 469.026 151.318 469.462 150.516 470.333 C 149.714 471.203 149.313 472.262 149.313 473.506 C 149.313 474.446 149.59 475.206 150.143 475.786 C 150.695 476.368 151.388 476.658 152.217 476.658 C 153.267 476.658 154.214 476.195 155.057 475.268 C 155.901 474.343 156.323 473.272 156.323 472.055 C 156.323 471.17 156.046 470.444 155.493 469.877 Z M 145.207 518.133 C 144.985 518.133 144.778 518.003 144.585 517.739 C 144.392 517.477 144.295 517.152 144.295 516.764 C 144.295 514.746 145.756 508.829 148.679 499.014 C 150.472 493.014 151.369 489.612 151.369 488.81 C 151.369 488.146 151.133 487.621 150.663 487.234 C 150.194 486.847 149.518 486.654 148.634 486.654 C 147.031 486.654 145.092 487.296 142.814 488.581 C 140.535 489.867 138.015 492.031 135.254 495.072 L 137.078 496.483 C 139.511 494.105 141.08 492.695 141.785 492.253 C 142.49 491.811 143.119 491.589 143.673 491.589 C 144.171 491.589 144.419 491.865 144.419 492.419 C 144.419 492.916 144.322 493.483 144.129 494.119 C 139.981 507.557 137.907 516.004 137.907 519.46 C 137.907 520.538 138.19 521.382 138.758 521.99 C 139.324 522.598 140.092 522.903 141.06 522.903 C 142.165 522.903 143.59 522.405 145.332 521.409 C 147.074 520.414 149.838 518.133 153.627 514.567 L 152.01 512.99 C 148.36 516.42 146.092 518.133 145.207 518.133 Z M 187.472 516.059 C 185.757 517.609 184.499 518.382 183.698 518.382 C 183.393 518.382 183.158 518.242 182.993 517.957 C 182.826 517.674 182.743 517.248 182.743 516.682 C 182.743 514.83 183.625 511.082 185.389 505.442 C 187.262 499.414 188.419 495.502 188.859 493.705 C 189.108 492.625 189.232 491.659 189.232 490.801 C 189.232 489.501 188.928 488.506 188.321 487.815 C 187.714 487.123 186.871 486.778 185.795 486.778 C 184.332 486.778 182.469 487.484 180.205 488.895 C 175.954 491.608 172.421 494.527 169.605 497.655 L 171.475 489.308 C 171.614 488.672 171.683 488.229 171.683 487.981 C 171.683 487.649 171.516 487.359 171.185 487.111 C 170.853 486.861 170.395 486.736 169.815 486.736 C 168.321 486.736 166.522 487.292 164.418 488.404 C 162.315 489.515 159.493 491.766 155.951 495.156 L 157.361 496.608 C 158.854 494.962 160.457 493.569 162.171 492.425 C 163.001 491.84 163.637 491.547 164.079 491.547 C 164.632 491.547 164.909 491.921 164.909 492.668 C 164.909 492.946 164.839 493.402 164.701 494.038 L 161.011 509.822 C 160.102 513.82 159.092 517.795 157.983 521.742 L 164.162 521.742 L 167.522 507.246 C 168.269 503.979 169.195 501.598 170.301 500.102 C 172.043 497.777 174.213 495.755 176.813 494.038 C 178.555 492.876 179.979 492.294 181.083 492.294 C 182.108 492.294 182.619 492.724 182.619 493.58 C 182.619 494.161 182.149 496.193 181.209 499.676 C 178.139 509.466 176.606 515.589 176.606 518.05 C 176.606 519.765 176.896 521.002 177.476 521.762 C 178.056 522.523 178.872 522.903 179.923 522.903 C 181.057 522.903 182.495 522.353 184.237 521.253 C 186.974 519.546 189.615 517.29 192.159 514.484 L 191.121 512.991 C 189.865 513.965 188.647 514.989 187.471 516.059 L 187.472 516.059 Z M 212.44 498.889 C 210.2 501.184 206.854 503.326 202.403 505.317 C 202.939 502.126 203.844 499.009 205.099 496.027 C 205.983 493.952 207.076 492.405 208.376 491.381 C 209.342 490.608 210.338 490.221 211.362 490.221 C 212.357 490.221 213.166 490.573 213.788 491.278 C 214.41 491.983 214.721 492.93 214.721 494.118 C 214.721 495.695 213.961 497.285 212.44 498.888 L 212.44 498.889 Z M 214.679 486.778 C 209.066 486.778 204.242 490.11 200.205 496.773 C 196.61 502.635 194.813 508.525 194.813 514.443 C 194.813 517.373 195.332 519.503 196.368 520.829 C 197.405 522.157 198.905 522.82 200.868 522.82 C 205.707 522.82 211.513 519.6 218.288 513.157 L 216.918 511.331 C 213.408 513.958 210.74 515.701 208.915 516.557 C 207.559 517.194 206.315 517.511 205.181 517.511 C 203.993 517.511 203.087 517.124 202.465 516.351 C 201.843 515.575 201.532 514.207 201.532 512.243 C 201.532 510.889 201.656 509.465 201.905 507.973 C 207.158 505.594 210.587 503.949 212.191 503.036 C 215.398 501.156 217.625 499.346 218.869 497.603 C 220.113 495.861 220.735 494.091 220.735 492.294 C 220.735 490.579 220.215 489.232 219.179 488.25 C 218.143 487.27 216.642 486.778 214.679 486.778 Z M 255.657 519.709 C 253.998 519.709 252.671 518.949 251.677 517.429 C 250.32 515.355 249.643 512.522 249.643 508.926 C 249.643 503.01 250.743 498.371 252.94 495.011 C 255.138 491.651 257.413 489.971 259.763 489.971 C 261.449 489.971 262.853 490.857 263.973 492.626 C 265.093 494.396 265.653 497.355 265.653 501.502 C 265.653 507.032 264.435 511.664 262.003 515.397 C 260.094 518.273 257.979 519.71 255.657 519.71 L 255.657 519.709 Z M 266.274 515.625 C 270.588 510.745 272.745 505.235 272.745 499.097 C 272.745 495.254 271.846 492.253 270.049 490.097 C 268.251 487.939 265.999 486.861 263.289 486.861 C 257.067 486.861 251.869 489.917 247.693 496.027 C 244.376 500.949 242.717 506.314 242.717 512.12 C 242.717 515.466 243.622 518.106 245.433 520.042 C 247.244 521.977 249.629 522.945 252.588 522.945 C 257.399 522.945 261.961 520.505 266.274 515.625 Z" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};