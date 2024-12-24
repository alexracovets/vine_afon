"use client";

interface LogoProps {
    header?: boolean;
}

export const Logo = ({ header }: LogoProps) => {
    const color = "#6a2841";

    return (
        <>
            {
                header ?
                    <div className="w-[8rem] max-tablet:w-[6rem]">
                        <div className="border-[0.1rem] border-regalMain p-[.3rem] max-tablet:p-[.2rem]" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 725.4 541.8" className="border-[0.1rem] border-regalMain py-[0.3rem] px-[1rem] max-tablet:py-[.2rem]">
                                <g fill={color} transform="matrix(0.999974, 0, 0, 0.999974, 0.00925, -91.790644)">
                                    <path d="M 690.102 146.727 L 690.552 148.229 C 673.377 155.968 656.204 163.713 639.032 171.454 L 638.38 170.345 L 664.099 135.482 C 663.847 138.715 663.857 141.122 663.435 143.454 C 662.794 147.009 664.265 147.966 667.573 147.685 C 674.177 147.133 680.799 146.768 687.415 146.381 C 688.301 146.33 689.205 146.603 690.102 146.726 M 695.218 159.538 C 693.629 161.694 692.282 164.095 690.396 165.948 C 687.031 169.251 683.382 172.269 679.773 175.314 C 677.232 177.457 677.02 179.173 679.987 181.23 C 683.606 183.735 686.987 186.582 689.715 190.138 C 673.608 188.046 657.502 185.952 639.847 183.655 C 658.793 175.065 676.664 166.955 694.537 158.851 L 695.218 159.538 M 681.728 210.036 C 672.828 211.974 663.867 214.53 654.859 214.856 C 642.271 215.312 634.985 206.33 627.401 195.932 C 651.001 195.846 672.855 197 693.83 204.479 L 693.947 205.941 C 689.88 207.335 685.901 209.128 681.728 210.035 M 617.373 175.097 C 616.723 170.733 616.061 166.372 615.432 162.006 C 613.225 146.685 621.269 136.707 633.111 129.059 C 641.187 123.843 649.673 119.26 657.978 114.394 L 659.08 115.197 C 651.22 138.897 635.442 157.321 617.372 175.097 M 566.13 184.349 C 562.416 176.208 561.603 167.923 565.676 159.839 C 566.94 157.335 569.928 155.179 572.621 154.048 C 576.319 152.497 578.985 154.64 580.07 158.426 C 582.435 166.673 574.87 181.015 566.13 184.351 M 510.731 184.543 C 501.077 176.253 494.892 163.869 495.219 149.844 C 495.359 142.728 496.998 135.722 500.026 129.282 C 500.225 129.122 500.411 128.944 500.609 128.79 C 502.74 127.122 505.6 125.223 508.405 126.264 C 514.289 128.449 516.696 137.171 517.953 142.564 C 521.28 156.831 517.921 171.972 510.731 184.543 M 366.19 460.469 C 357.878 461.053 350.046 461.341 342.703 461.341 C 312.93 461.341 290.022 461.053 273.98 460.47 L 348.577 349.922 C 354.379 341.404 369.541 320.865 394.065 288.305 C 384.773 324.501 375.483 381.889 366.19 460.47 M 47.503 381.21 C 49.57 376.24 55.939 371.249 60.866 375.642 C 65.709 379.958 65.968 388.086 64.673 393.96 C 63.109 401.061 59.215 407.415 54.806 413.108 C 53.614 414.642 52.389 416.148 51.132 417.627 C 50.557 414.854 49.958 412.086 49.39 409.312 C 47.62 400.706 43.927 389.808 47.503 381.21 M 681.702 135.713 C 675.278 135.949 675.168 135.73 675.409 129.152 C 675.857 116.948 674.818 104.868 671.702 91.793 C 669.776 93.045 668.502 93.798 667.311 94.66 C 664.375 96.783 661.605 99.166 658.54 101.073 C 647.142 108.154 635.468 114.797 624.255 122.153 C 612.754 129.7 604.826 140.057 604.479 154.363 C 604.3 161.733 605.243 169.248 606.682 176.496 C 607.811 182.187 606.691 186.012 601.981 189.39 C 595.334 194.152 588.314 197.346 579.984 196.316 C 578.292 196.108 576.734 194.836 575.114 194.054 C 575.831 192.722 576.407 191.285 577.294 190.08 C 579.443 187.144 581.781 184.351 583.958 181.437 C 588.235 175.71 590.603 169.275 590.899 162.109 C 591.286 152.795 586.458 145.663 578.059 143.673 C 570.749 141.944 564.588 144.565 559.668 149.863 C 553.919 156.055 552.413 163.942 552.955 171.941 C 553.399 178.454 555.217 184.871 556.485 191.637 C 554.496 192.376 552.198 193.514 549.769 194.094 C 539.815 196.493 529.334 195.321 520.155 190.782 C 520.873 189.563 521.559 188.324 522.209 187.07 C 530.651 170.646 533.481 150.367 526.767 132.828 C 523.533 124.384 517.223 115.05 507.398 114.759 C 507.386 114.68 507.386 114.601 507.372 114.524 C 507.01 114.593 506.652 114.665 506.295 114.739 L 506.266 114.737 L 505.895 114.818 C 505.383 114.925 504.873 115.039 504.365 115.16 L 504.232 115.192 C 503.772 115.302 503.313 115.424 502.856 115.55 C 502.818 115.56 502.777 115.572 502.74 115.583 C 502.273 115.714 501.813 115.855 501.354 116.006 L 501.27 116.034 C 500.789 116.194 500.314 116.367 499.841 116.551 L 499.828 116.557 C 498.378 117.127 496.959 117.822 495.589 118.717 C 494.537 120.059 493.4 121.336 492.185 122.535 C 491.576 123.571 491.006 124.627 490.344 125.63 C 490.002 126.15 489.65 126.637 489.298 127.119 L 489.154 127.543 L 489.103 127.659 C 488.996 127.978 488.915 128.27 488.842 128.527 C 488.251 130.628 487.561 132.699 486.773 134.735 C 486.689 134.962 486.59 135.193 486.497 135.423 C 486.384 136.14 486.266 136.825 486.173 137.364 C 486.157 137.477 486.139 137.585 486.104 137.691 C 486.062 137.826 486.003 137.954 485.955 138.084 C 485.939 138.317 485.913 138.549 485.886 138.784 C 485.828 139.254 485.744 139.72 485.634 140.182 C 485.432 141.339 485.259 142.501 485.117 143.667 C 482.802 163.829 490.692 181.396 505.065 192.982 C 490.34 212.25 467.536 224.324 444.427 231.65 C 442.794 232.416 441.033 232.948 439.191 233.283 C 439.005 233.373 438.813 233.437 438.623 233.522 C 438.151 233.729 437.678 233.926 437.197 234.1 C 436.786 234.247 436.37 234.369 435.952 234.488 C 435.74 234.55 435.527 234.613 435.314 234.667 C 434.754 234.81 434.186 234.93 433.615 235.025 L 433.608 235.025 C 432.973 235.129 432.33 235.2 431.685 235.24 L 431.587 235.263 C 431.007 235.298 430.429 235.335 429.845 235.314 C 416.715 238.025 402.229 239.236 389.057 239.74 C 384.918 240.15 380.42 240.563 375.483 240.979 C 349.158 242.918 330.771 245.145 320.321 247.658 C 299.995 252.301 283.057 259.03 269.512 267.836 C 255.961 276.646 245.56 287.578 238.303 300.642 C 231.041 313.708 227.417 327.209 227.417 341.144 C 227.417 351.015 229.398 358.42 233.367 363.354 C 237.33 368.29 242.607 370.759 249.19 370.759 C 253.833 370.759 257.801 369.117 261.093 365.823 C 264.381 362.534 266.029 358.76 266.029 354.5 C 266.029 351.209 264.672 345.984 261.964 338.823 C 259.445 332.435 258.189 327.499 258.189 324.015 C 258.189 313.372 262.247 302.919 270.364 292.659 C 278.485 282.403 290.661 274.658 306.902 269.433 C 318.691 265.563 348.461 261.498 396.208 257.24 C 361.199 296.725 315.455 359.826 258.978 446.536 C 209.078 523.182 171.363 573.508 145.833 597.504 C 133.81 608.785 122.584 615.723 112.153 618.353 C 110.974 618.807 109.743 619.214 108.433 619.549 C 103.705 620.752 98.32 620.993 92.854 620.416 C 92.222 620.351 91.59 620.274 90.962 620.183 C 90.373 620.104 89.783 620.014 89.197 619.915 C 88.338 619.765 87.482 619.593 86.63 619.403 C 86.405 619.35 86.176 619.314 85.953 619.264 C 85.676 619.226 85.411 619.16 85.137 619.117 C 84.14 618.957 83.16 618.737 82.187 618.474 C 81.758 618.353 81.323 618.251 80.897 618.116 C 80.576 618.014 80.265 617.886 79.948 617.772 C 79.45 617.593 78.948 617.418 78.457 617.213 C 78.183 617.1 77.91 616.967 77.638 616.842 C 77.06 616.581 76.48 616.324 75.917 616.03 C 75.132 615.797 74.355 615.539 73.585 615.26 C 73.369 615.178 73.156 615.093 72.94 615.009 C 72.26 614.755 71.59 614.475 70.931 614.17 L 70.868 614.164 C 55.562 607.691 41.889 597.181 31.506 584.009 C 11.407 558.512 6.906 524.298 15.201 493.416 C 19.453 477.587 26.892 462.407 37.208 449.632 C 39.555 446.725 42.052 443.937 44.592 441.188 C 45.669 446.235 46.725 451.289 47.818 456.333 C 53.477 482.389 59.388 508.391 65.55 534.333 C 67.224 541.391 78.104 538.404 76.425 531.335 C 68.527 498.053 61.046 464.673 53.981 431.205 C 59.563 425.217 64.936 419.056 69.218 412.015 C 73.399 405.141 76.263 397.397 76.537 389.297 C 76.81 381.246 74.388 372.229 67.963 366.915 C 60.44 360.694 50.597 361.855 43.451 368.027 C 35.994 374.468 34.184 384.71 35.22 394.074 C 36.363 404.41 38.987 414.654 41.109 424.821 C 41.328 425.876 41.559 426.928 41.781 427.981 C 35.246 434.953 28.631 441.855 23.135 449.761 C 13.685 463.341 6.852 478.931 3.172 495.059 C -4.098 526.942 0.887 561.648 20.638 588.225 C 30.191 601.077 42.488 611.917 56.438 619.68 C 56.367 619.777 56.284 619.867 56.215 619.963 C 59.368 621.344 62.449 622.956 65.56 624.623 C 71.607 626.974 77.656 629.372 84.017 630.796 C 97.239 633.763 110.736 635.034 123.913 631.316 C 135.415 628.071 147.494 622.603 157.391 615.533 C 160.135 613.004 162.904 610.638 165.446 608.435 C 166.229 607.754 167.027 607.111 167.825 606.495 C 168.279 605.848 168.763 605.211 169.304 604.603 C 170.432 603.327 171.784 602.246 173.194 601.241 C 194.92 576.085 223.284 536.869 258.368 483.407 C 305.899 482.245 340.97 481.763 363.58 481.955 C 360.287 510.795 357.193 531.12 354.288 542.924 C 350.225 559.572 345.189 575.441 339.191 590.539 C 356.03 588.022 368.516 586.763 376.644 586.763 C 381.48 586.763 392.998 587.73 411.194 589.668 C 421.837 590.83 430.937 591.407 438.482 591.407 C 443.712 591.407 449.807 591.115 456.775 590.539 L 459.68 573.99 C 450.773 575.73 442.552 576.602 435.002 576.602 C 423.579 576.602 410.708 574.765 396.389 571.085 L 409.477 450.888 L 432.161 283.078 C 433.781 271.634 436.104 258.911 439.092 244.98 C 455.51 240.575 471.32 234.253 485.774 225.018 C 496.605 218.098 506.678 209.498 514.497 199.218 C 516.416 200.249 518.383 201.185 520.397 202.021 C 534.045 207.672 547.536 206.784 560.992 201.289 C 562.286 200.761 564.107 200.458 565.306 200.958 C 571.102 203.378 576.765 206.11 583.006 208.976 C 582.647 209.463 581.645 210.782 580.684 212.128 C 576.367 218.187 571.787 224.08 567.872 230.388 C 565.89 233.577 563.95 234.166 560.571 233.313 C 547.204 229.934 535.079 235.799 529.472 248.459 C 525.104 258.324 526.659 267.558 533.365 275.937 C 540.477 284.824 549.912 287.358 560.56 284.828 C 571.028 282.349 577.29 275.08 579.992 264.858 C 581.861 257.774 580.392 251.162 576.517 244.908 C 575.433 243.153 574.371 240.047 575.181 238.663 C 584.038 223.573 594.997 210.095 607.738 198.08 C 610.191 195.771 612.476 195.865 614.635 198.475 C 615.841 199.937 616.971 201.475 618.288 202.826 C 623.574 208.252 628.486 214.156 634.343 218.878 C 644.623 227.165 656.841 227.786 669.07 224.741 C 682.399 221.421 695.476 217.095 708.719 213.407 C 713.356 212.117 718.16 211.435 723.274 210.396 C 722.579 208.819 722.371 207.638 721.687 206.899 C 713.89 198.454 706.182 189.924 698.107 181.754 C 694.221 177.823 694.017 177.642 697.57 173.551 C 704.303 165.802 710.873 157.909 717.391 149.977 C 720.054 146.74 722.403 143.245 725.4 139.181 C 710.053 136.144 695.937 135.191 681.702 135.713"></path>
                                    <path d="M 583.123 394.297 C 574.704 405.873 577.453 422.955 589.107 431.517 C 601.085 440.313 617.625 437.684 626.498 425.571 C 636.257 413.656 631.226 395.475 620.686 388.13 C 608.676 379.756 591.825 382.331 583.123 394.297 M 518.518 338.231 C 529.987 346.885 547.388 344.134 555.749 332.693 C 564.835 320.255 562.335 303.91 549.986 294.995 C 537.602 286.057 521.685 288.553 512.749 300.833 C 504.059 312.107 506.201 328.935 518.518 338.231 M 646.571 370.596 C 654.722 359.418 653.969 342.96 639.774 332.786 C 628.541 324.734 611.959 327.314 603.535 338.828 C 594.648 350.976 596.943 367.598 608.72 376.372 C 620.656 385.266 637.68 382.791 646.571 370.596 M 624.615 228.991 C 613.006 220.468 596.435 222.963 587.864 234.524 C 578.659 246.939 581.09 262.933 593.589 272.206 C 604.721 281.431 622.367 277.827 630.382 267.115 C 639.771 254.574 637.238 238.26 624.615 228.991"></path>
                                    <path d="M 590.92 379.324 C 599.964 367.501 597.831 351.576 585.958 342.278 C 574.314 333.161 557.508 335.053 548.673 346.475 C 539.252 358.65 541.372 375.093 553.549 384.325 C 565.686 393.527 581.694 391.386 590.92 379.323 M 665.496 317.142 C 674.478 306.223 673.984 287.94 661.208 278.855 C 649.924 269.878 633.269 271.425 624.588 282.254 C 614.63 294.678 616.243 311.635 628.277 321.05 C 639.451 329.793 656.676 327.868 665.496 317.142"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    :
                    <div className="w-[9rem] min-w-[9rem] max-tablet:w-[6rem] max-tablet:min-w-[6rem]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 577.8 725.4">
                            <g fill={color}>
                                <path
                                    d="M567.159 26.07c-.026 148.73-.157 297.46-.023 446.19.049 55.326-23.187 97.67-69.263 127.9-33.238 21.809-70.61 33.953-107.785 46.61-12.62 4.297-25.242 8.59-37.764 13.158-35.63 13-41.301 17.163-64.02 46.656-20.248-38.063-59.574-44.195-94.603-57.741-32.771-12.673-66.486-23.58-97.766-39.288C38.62 580.774 9.642 533.69 10.012 468.039c.832-147.98.214-295.967.187-443.95v-14.01h556.96v15.99m10.402-4.803c-.002-6.944-.001-13.887-.001-21.283H.628C.415 3.048.133 5.226.132 7.403.112 165.026-.315 322.65.386 480.27c.202 45.654 18.819 84.019 54.069 113.795 24.718 20.878 53.302 34.81 83.326 45.884 31.613 11.66 63.613 22.265 95.275 33.796 21.2 7.722 38.777 20.026 48.272 41.63 1.59 3.618 4.342 6.727 6.537 10.043 1.069-.55 1.959-.714 2.326-1.242 1.895-2.732 4.069-5.375 5.399-8.38 9.877-22.312 28.269-34.551 50.113-42.77 9.355-3.52 18.764-6.9 28.12-10.414 34.31-12.885 69.543-23.776 102.708-39.131 66.224-30.661 101.524-82.464 101.283-157.185-.476-148.342-.212-296.686-.253-445.03" />
                                <path
                                    d="M464.584 586.833c-30.703 14.489-63.085 25.55-95.088 37.117-27.892 10.08-56.131 19.106-80.944 37.544-30.926-22.71-66.88-31.417-101.08-44.472-31.365-11.974-63-24.302-92.211-40.603-39.422-21.998-57.327-58.537-57.331-103.65-.015-140.912-.204-281.825-.204-422.738 0-16.096-2.034-13.155 12.96-13.155 159.086 0 318.17.207 477.257.238 3.245 0 6.489.398 11.206.705v14.676c-.006 137.944-.702 275.894.312 413.83.419 57.045-24.753 96.853-74.877 120.508M548.59 28.082H28.355c0 8.535-.002 15.884 0 23.234.083 143.475.005 286.95.372 430.424.08 30.895 11.473 57.894 32.696 80.438 19.715 20.942 44.68 33.744 70.538 45.355 52.016 23.358 119.637 33.179 156.734 68.38 13.636-12.783 35.366-23.186 53.773-31.523 12.427-5.63 25.739-9.324 38.708-13.73 36.818-12.51 74.01-24.11 106.99-45.627 40.803-26.62 61.063-64.166 61.03-112.968-.091-144.592.027-289.184.03-433.776 0-3.227-.392-6.454-.635-10.207" />
                                <path
                                    d="m479.271 116.964.262.873c-9.987 4.5-19.972 9.003-29.957 13.505l-.379-.645 14.954-20.272c-.146 1.88-.14 3.28-.386 4.636-.373 2.067.483 2.623 2.406 2.46 3.84-.321 7.691-.533 11.538-.758.515-.03 1.041.129 1.562.2m2.975 7.45c-.924 1.254-1.707 2.65-2.804 3.727-1.956 1.92-4.078 3.676-6.177 5.446-1.477 1.246-1.6 2.244.125 3.44 2.104 1.457 4.07 3.113 5.656 5.18-9.365-1.217-18.73-2.434-28.996-3.77 11.016-4.995 21.408-9.71 31.8-14.423l.396.4m-7.844 29.363c-5.175 1.126-10.386 2.613-15.623 2.802-7.319.265-11.556-4.957-15.966-11.003 13.722-.05 26.43.62 38.626 4.97l.068.85c-2.365.81-4.678 1.853-7.105 2.38m-37.42-20.315c-.378-2.537-.763-5.073-1.129-7.612-1.283-8.908 3.395-14.71 10.28-19.157 4.696-3.034 9.631-5.698 14.46-8.527l.64.467c-4.57 13.78-13.745 24.493-24.252 34.829m-29.795 5.38c-2.159-4.733-2.632-9.551-.263-14.252.734-1.456 2.471-2.71 4.037-3.367 2.151-.902 3.701.344 4.332 2.546 1.375 4.795-3.024 13.134-8.106 15.074m-32.212.112c-5.613-4.821-9.21-12.021-9.02-20.177a29.451 29.451 0 0 1 2.796-11.956c.115-.093.223-.196.338-.286 1.24-.97 2.902-2.074 4.534-1.468 3.42 1.27 4.82 6.342 5.551 9.477 1.935 8.296-.019 17.1-4.199 24.41m-84.045 160.44c-4.834.339-9.387.507-13.657.507-17.312 0-30.632-.168-39.96-.506l43.375-64.28c3.374-4.953 12.19-16.895 26.45-35.828-5.403 21.047-10.805 54.416-16.208 100.108m-185.305-46.087c1.202-2.89 4.905-5.792 7.77-3.238 2.816 2.51 2.967 7.236 2.214 10.652-.91 4.129-3.174 7.823-5.737 11.134a77.192 77.192 0 0 1-2.137 2.627c-.334-1.612-.682-3.222-1.013-4.834-1.029-5.005-3.176-11.342-1.097-16.341M474.387 110.56c-3.735.137-3.799.01-3.659-3.815.26-7.097-.344-14.12-2.156-21.723-1.12.728-1.86 1.166-2.553 1.667-1.707 1.234-3.317 2.62-5.1 3.729-6.627 4.117-13.416 7.98-19.935 12.257-6.687 4.389-11.298 10.41-11.499 18.729-.104 4.285.444 8.655 1.281 12.87.656 3.309.005 5.533-2.734 7.497-3.865 2.769-7.947 4.626-12.79 4.027-.984-.121-1.89-.861-2.832-1.315.417-.775.752-1.61 1.267-2.311 1.25-1.707 2.61-3.331 3.876-5.026 2.487-3.33 3.863-7.071 4.035-11.238.226-5.416-2.582-9.563-7.466-10.72-4.25-1.005-7.832.519-10.693 3.6-3.343 3.6-4.219 8.186-3.904 12.837.258 3.787 1.316 7.519 2.053 11.452-1.157.43-2.493 1.092-3.905 1.429a25.413 25.413 0 0 1-17.219-1.926 45.69 45.69 0 0 0 1.194-2.158c4.908-9.55 6.554-21.342 2.65-31.54-1.88-4.91-5.549-10.337-11.263-10.506-.006-.046-.006-.092-.015-.137-.21.04-.418.082-.626.125l-.016-.001-.216.047a31.48 31.48 0 0 0-.89.199l-.077.019c-.268.064-.535.134-.8.208-.022.006-.046.012-.067.019-.272.076-.54.158-.807.246l-.049.016c-.279.093-.555.193-.83.3l-.008.004c-.843.332-1.668.736-2.465 1.256a23.426 23.426 0 0 1-1.979 2.22c-.354.603-.686 1.217-1.07 1.8-.2.302-.404.585-.609.866l-.084.246-.029.067c-.062.186-.11.356-.152.505a39.977 39.977 0 0 1-1.203 3.61c-.049.132-.106.266-.16.4-.066.417-.135.815-.188 1.129-.01.065-.02.128-.04.19-.025.079-.06.152-.087.229-.01.135-.025.27-.04.406a7.713 7.713 0 0 1-.147.813 38.325 38.325 0 0 0-.3 2.027c-1.347 11.723 3.241 21.938 11.598 28.674-8.562 11.204-21.822 18.225-35.258 22.484-.95.446-1.974.755-3.045.95-.108.052-.22.09-.33.139-.274.12-.55.235-.83.336-.239.085-.48.156-.724.226-.123.036-.246.072-.37.104a11.62 11.62 0 0 1-.988.208h-.004c-.37.06-.744.102-1.119.125l-.056.013c-.337.02-.674.042-1.013.03-7.635 1.576-16.058 2.28-23.717 2.574-2.407.238-5.022.478-7.893.72-15.307 1.127-25.998 2.422-32.075 3.884-11.818 2.7-21.667 6.612-29.543 11.732-7.879 5.122-13.927 11.48-18.147 19.076-4.222 7.597-6.33 15.447-6.33 23.55 0 5.74 1.152 10.045 3.46 12.915 2.305 2.87 5.373 4.305 9.201 4.305 2.7 0 5.006-.955 6.921-2.87 1.912-1.913 2.87-4.107 2.87-6.584 0-1.913-.789-4.951-2.364-9.116-1.464-3.714-2.195-6.584-2.195-8.61 0-6.188 2.36-12.266 7.08-18.232 4.721-5.963 11.801-10.467 21.245-13.505 6.855-2.25 24.165-4.614 51.928-7.09-20.357 22.959-46.954 59.65-79.794 110.068-29.015 44.567-50.945 73.83-65.79 87.783-6.99 6.559-13.518 10.594-19.583 12.123-.686.264-1.402.5-2.164.695-2.748.699-5.88.84-9.058.504a27.278 27.278 0 0 1-1.1-.135 32.564 32.564 0 0 1-1.026-.156 33.39 33.39 0 0 1-1.493-.298c-.13-.03-.264-.051-.394-.081-.16-.022-.315-.06-.474-.085-.58-.094-1.15-.221-1.715-.374-.25-.07-.503-.13-.75-.208-.187-.06-.368-.134-.552-.2-.29-.104-.582-.206-.867-.325-.16-.066-.318-.144-.477-.216-.336-.152-.673-.301-1-.472a23.383 23.383 0 0 1-1.356-.448c-.126-.047-.25-.097-.375-.146a16.98 16.98 0 0 1-1.168-.488l-.037-.003c-8.9-3.764-16.85-9.875-22.888-17.534-11.686-14.826-14.303-34.72-9.48-52.677 2.472-9.203 6.798-18.03 12.796-25.458 1.365-1.691 2.817-3.312 4.294-4.91.626 2.935 1.24 5.873 1.876 8.806a2399.683 2399.683 0 0 0 10.31 45.354c.974 4.104 7.3 2.367 6.323-1.743a2393.121 2393.121 0 0 1-13.05-58.222c3.246-3.482 6.37-7.064 8.86-11.158 2.43-3.997 4.096-8.5 4.256-13.21.158-4.681-1.25-9.924-4.986-13.014-4.374-3.617-10.098-2.942-14.253.647-4.336 3.745-5.388 9.7-4.786 15.145.664 6.01 2.19 11.966 3.424 17.878.128.613.262 1.225.391 1.838-3.8 4.054-7.646 8.067-10.842 12.663-5.494 7.897-9.468 16.962-11.607 26.339-4.228 18.539-1.329 38.72 10.155 54.173 5.555 7.473 12.705 13.777 20.817 18.29-.042.057-.09.109-.13.165 1.833.803 3.624 1.74 5.433 2.709 3.517 1.367 7.034 2.762 10.733 3.59 7.688 1.725 15.536 2.464 23.198.302 6.688-1.887 13.711-5.066 19.466-9.177 1.595-1.47 3.206-2.846 4.683-4.127.456-.397.92-.77 1.384-1.128.264-.377.545-.747.86-1.101.656-.742 1.442-1.37 2.262-1.954 12.633-14.628 29.125-37.43 49.525-68.516 27.638-.676 48.03-.956 61.177-.845-1.915 16.77-3.714 28.588-5.403 35.452-2.362 9.68-5.29 18.907-8.778 27.686 9.791-1.464 17.051-2.196 21.777-2.196 2.812 0 9.51.562 20.09 1.689 6.188.676 11.48 1.012 15.867 1.012 3.04 0 6.585-.17 10.636-.505l1.69-9.623c-5.179 1.012-9.96 1.519-14.35 1.519-6.642 0-14.126-1.068-22.452-3.208l7.61-69.89 13.19-97.575c.942-6.654 2.293-14.052 4.03-22.153 9.547-2.561 18.74-6.237 27.144-11.607 6.298-4.023 12.155-9.024 16.702-15.002a37.76 37.76 0 0 0 3.43 1.63c7.936 3.286 15.781 2.77 23.605-.425.752-.307 1.811-.484 2.508-.193 3.37 1.407 6.663 2.996 10.292 4.662-.209.284-.792 1.05-1.35 1.833-2.51 3.523-5.174 6.95-7.45 10.618-1.152 1.854-2.28 2.197-4.245 1.7-7.772-1.965-14.823 1.446-18.083 8.807-2.54 5.737-1.636 11.106 2.263 15.978 4.136 5.167 9.622 6.64 15.814 5.17 6.086-1.442 9.727-5.668 11.298-11.613 1.087-4.118.233-7.963-2.02-11.6-.63-1.02-1.248-2.826-.777-3.63 5.15-8.775 11.522-16.612 18.931-23.598 1.426-1.343 2.754-1.288 4.01.23.702.849 1.358 1.744 2.124 2.53 3.073 3.154 5.93 6.587 9.335 9.333 5.978 4.819 13.082 5.18 20.193 3.409 7.75-1.93 15.354-4.446 23.055-6.59 2.695-.75 5.488-1.147 8.462-1.751-.404-.917-.525-1.604-.923-2.034-4.533-4.91-9.015-9.87-13.71-14.62-2.26-2.286-2.379-2.391-.313-4.77 3.916-4.506 7.736-9.095 11.526-13.707 1.548-1.883 2.914-3.915 4.657-6.278-8.924-1.766-17.132-2.32-25.409-2.016" />
                                <path
                                    d="M417.067 260.917c-4.895 6.73-3.297 16.663 3.48 21.641 6.964 5.115 16.581 3.586 21.741-3.457 5.675-6.928 2.749-17.499-3.38-21.77-6.983-4.869-16.781-3.372-21.841 3.586M379.502 228.316c6.669 5.032 16.787 3.433 21.648-3.22 5.283-7.232 3.83-16.736-3.351-21.92-7.201-5.197-16.456-3.746-21.652 3.395-5.053 6.556-3.808 16.34 3.355 21.745M453.959 247.135c4.74-6.5 4.302-16.069-3.951-21.984-6.533-4.682-16.174-3.183-21.072 3.512-5.168 7.064-3.833 16.729 3.015 21.831 6.94 5.171 16.838 3.732 22.008-3.359M441.193 164.797c-6.75-4.956-16.385-3.505-21.369 3.218-5.352 7.218-3.939 16.518 3.329 21.91 6.472 5.364 16.733 3.269 21.394-2.96 5.459-7.292 3.986-16.778-3.354-22.168" />
                                <path
                                    d="M421.601 252.21c5.258-6.875 4.018-16.134-2.886-21.54-6.77-5.302-16.542-4.202-21.68 2.44-5.477 7.079-4.245 16.64 2.836 22.009 7.057 5.35 16.365 4.105 21.73-2.91M464.964 216.054c5.222-6.349 4.935-16.98-2.493-22.263-6.562-5.22-16.246-4.32-21.294 1.977-5.79 7.224-4.852 17.084 2.145 22.558 6.498 5.084 16.513 3.964 21.642-2.272" />
                                <path
                                    d="M408.091 201.853c-4.936 7.057-3.313 16.472 3.705 21.486 7.272 5.195 16.31 3.676 21.615-3.552 5.45-7.421 3.203-16.663-3.304-21.548-7.043-5.287-17.067-3.462-22.016 3.614M141.369 467.313c0-2.295-.36-3.982-1.078-5.06-.72-1.079-1.605-1.618-2.654-1.618-.775 0-1.446.277-2.012.83-.568.553-.851 1.202-.851 1.95 0 .552.207 1.354.622 2.405.636 1.66.954 3.18.954 4.562 0 2.516-.9 5.31-2.7 8.378-2.38 4.065-7.003 9.622-13.87 16.673l-6.81 6.971-7.974 8.506c-.5-3.984-.748-8.382-.748-13.196 0-6.276.567-11.246 1.703-14.91 1.135-3.664 3.572-8.233 7.31-13.708-1.52.166-3.012.305-4.476.415-5.442.36-9.586 1.023-12.431 1.99-4.42 1.494-7.9 3.803-10.442 6.927-2.541 3.125-3.812 6.373-3.812 9.747 0 1.797.412 3.304 1.236 4.521.658.912 1.427 1.368 2.305 1.368.604 0 1.097-.193 1.482-.58.384-.389.576-.9.576-1.539 0-.692-.365-1.703-1.096-3.033-.57-1.053-.853-2.05-.853-2.993 0-2.049.78-4.085 2.34-6.107 1.559-2.022 4.017-3.81 7.372-5.36 3.353-1.552 6.646-2.328 9.877-2.328-2.715 3.602-4.605 6.975-5.671 10.12-1.067 3.144-1.6 6.587-1.6 10.328 0 1.298.155 3.992.46 8.081l1.51 20.058c6.72-7.54 13.384-14.653 19.992-21.337 6.31-6.388 10.974-11.517 13.99-15.388 3.017-3.87 4.996-7.058 5.938-9.56.94-2.503 1.41-4.874 1.41-7.113M154.723 467.168c-.554-.566-1.259-.851-2.115-.851-1.107 0-2.06.436-2.862 1.307-.802.87-1.203 1.929-1.203 3.173 0 .94.277 1.7.83 2.28.552.582 1.245.872 2.074.872 1.05 0 1.997-.463 2.84-1.39.844-.925 1.266-1.996 1.266-3.213 0-.885-.277-1.611-.83-2.178M144.437 515.424c-.222 0-.429-.13-.622-.394-.193-.262-.29-.587-.29-.975 0-2.018 1.461-7.935 4.384-17.75 1.793-6 2.69-9.402 2.69-10.204 0-.664-.236-1.189-.706-1.576-.469-.387-1.145-.58-2.029-.58-1.603 0-3.542.642-5.82 1.927-2.279 1.286-4.799 3.45-7.56 6.491l1.824 1.411c2.433-2.378 4.002-3.788 4.707-4.23.705-.442 1.334-.664 1.888-.664.498 0 .746.276.746.83 0 .497-.097 1.064-.29 1.7-4.148 13.438-6.222 21.885-6.222 25.341 0 1.078.283 1.922.851 2.53.566.608 1.334.913 2.302.913 1.105 0 2.53-.498 4.272-1.494 1.742-.995 4.506-3.276 8.295-6.842l-1.617-1.577c-3.65 3.43-5.918 5.143-6.803 5.143M186.702 513.35c-1.715 1.55-2.973 2.323-3.774 2.323-.305 0-.54-.14-.705-.425-.167-.283-.25-.709-.25-1.275 0-1.852.882-5.6 2.646-11.24 1.873-6.028 3.03-9.94 3.47-11.737.249-1.08.373-2.046.373-2.904 0-1.3-.304-2.295-.911-2.986-.607-.692-1.45-1.037-2.526-1.037-1.463 0-3.326.706-5.59 2.117-4.251 2.713-7.784 5.632-10.6 8.76l1.87-8.347c.139-.636.208-1.079.208-1.327 0-.332-.167-.622-.498-.87-.332-.25-.79-.375-1.37-.375-1.494 0-3.293.556-5.397 1.668-2.103 1.111-4.925 3.362-8.467 6.752l1.41 1.452c1.493-1.646 3.096-3.039 4.81-4.183.83-.585 1.466-.878 1.908-.878.553 0 .83.374.83 1.121 0 .278-.07.734-.208 1.37l-3.69 15.784a244.616 244.616 0 0 1-3.028 11.92h6.179l3.36-14.496c.747-3.267 1.673-5.648 2.779-7.144 1.742-2.325 3.912-4.347 6.512-6.064 1.742-1.162 3.166-1.744 4.27-1.744 1.025 0 1.536.43 1.536 1.286 0 .581-.47 2.613-1.41 6.096-3.07 9.79-4.603 15.913-4.603 18.374 0 1.715.29 2.952.87 3.712.58.761 1.396 1.141 2.447 1.141 1.134 0 2.572-.55 4.314-1.65 2.737-1.707 5.378-3.963 7.922-6.769l-1.038-1.493a60.3 60.3 0 0 0-3.65 3.068M211.67 496.18c-2.24 2.295-5.586 4.437-10.037 6.428a41.78 41.78 0 0 1 2.696-9.29c.884-2.075 1.977-3.622 3.277-4.646.966-.773 1.962-1.16 2.986-1.16.995 0 1.804.352 2.426 1.057.622.705.933 1.652.933 2.84 0 1.577-.76 3.167-2.281 4.77m2.239-12.11c-5.613 0-10.437 3.332-14.474 9.995-3.595 5.862-5.392 11.752-5.392 17.67 0 2.93.519 5.06 1.555 6.386 1.037 1.328 2.537 1.991 4.5 1.991 4.839 0 10.645-3.22 17.42-9.663l-1.37-1.826c-3.51 2.627-6.178 4.37-8.003 5.226-1.356.637-2.6.954-3.734.954-1.188 0-2.094-.387-2.716-1.16-.622-.776-.933-2.144-.933-4.108 0-1.354.124-2.778.373-4.27 5.253-2.379 8.682-4.024 10.286-4.937 3.207-1.88 5.434-3.69 6.678-5.433 1.244-1.742 1.866-3.512 1.866-5.309 0-1.715-.52-3.062-1.556-4.044-1.036-.98-2.537-1.472-4.5-1.472M254.887 517c-1.659 0-2.986-.76-3.98-2.28-1.357-2.074-2.034-4.907-2.034-8.503 0-5.916 1.1-10.555 3.297-13.915 2.198-3.36 4.473-5.04 6.823-5.04 1.686 0 3.09.886 4.21 2.655 1.12 1.77 1.68 4.729 1.68 8.876 0 5.53-1.218 10.162-3.65 13.895-1.909 2.876-4.024 4.313-6.346 4.313m10.617-4.085c4.314-4.88 6.471-10.39 6.471-16.528 0-3.843-.899-6.844-2.696-9-1.798-2.158-4.05-3.236-6.76-3.236-6.222 0-11.42 3.056-15.596 9.166-3.317 4.922-4.976 10.287-4.976 16.093 0 3.346.905 5.986 2.716 7.922 1.811 1.935 4.196 2.903 7.155 2.903 4.811 0 9.373-2.44 13.686-7.32" />
                                <path
                                    d="M298.992 468.868c1.468-2.253 3.115-3.38 4.943-3.38.748 0 1.786.139 3.116.415 2.685.58 4.513.87 5.483.87.94 0 1.702-.275 2.284-.83.582-.552.873-1.243.873-2.072 0-.913-.43-1.701-1.286-2.364-.857-.664-2.13-.996-3.815-.996-2.987 0-6.167.974-9.54 2.924-3.373 1.95-6.111 4.61-8.212 7.984-2.102 3.374-3.968 8.516-5.6 15.429h-9.912l-.747 2.945h9.913l-8.42 33.844c-1.244 5.004-2.488 8.15-3.732 9.435-1.244 1.286-3.236 1.929-5.973 1.929-1.77 0-3.622-.124-5.558-.373-1.133-.14-1.99-.207-2.571-.207-1.161 0-2.053.255-2.675.766-.623.512-.933 1.197-.933 2.054 0 .995.449 1.83 1.347 2.509.9.678 2.219 1.016 3.96 1.016 5.2 0 10.018-2.074 14.455-6.221 4.439-4.148 7.666-10.244 9.685-18.291l6.494-26.461h11.134l.663-2.945h-10.99l2.084-8.834c.885-3.843 2.062-6.892 3.53-9.146M355.05 500.99a48.28 48.28 0 0 1-3.355.126c-4.253 0-7.526-.042-9.818-.125l10.656-15.792c.83-1.218 2.996-4.151 6.498-8.803-1.327 5.17-2.654 13.369-3.98 24.595m4.312 15.803 1.871-17.171 3.24-23.974c.36-2.543.956-5.515 1.787-8.917-1.19 1.05-2.437 1.756-3.737 2.115-.83.249-2.88.512-6.147.789-3.76.276-6.387.594-7.88.954-2.903.663-5.323 1.625-7.259 2.882-1.935 1.258-3.42 2.82-4.458 4.687-1.037 1.866-1.555 3.795-1.555 5.786 0 1.41.283 2.468.85 3.173.567.705 1.32 1.058 2.26 1.058.664 0 1.231-.236 1.701-.706s.705-1.01.705-1.618c0-.47-.194-1.215-.58-2.24-.36-.912-.54-1.617-.54-2.114 0-1.521.58-3.014 1.74-4.48 1.16-1.465 2.9-2.571 5.22-3.318 1.684-.553 5.936-1.133 12.757-1.742-5 5.64-11.536 14.655-19.604 27.043-7.128 10.949-12.517 18.138-16.163 21.566-2.24 2.102-4.287 3.153-6.139 3.153-.554 0-1.659-.194-3.319-.581-.663-.138-1.188-.208-1.576-.208-.663 0-1.216.236-1.658.706-.442.469-.664 1.064-.664 1.784 0 .939.381 1.706 1.141 2.3.76.595 1.915.893 3.463.893 2.96 0 6.076-1.376 9.353-4.127 3.276-2.752 8.434-9.491 15.475-20.22 6.79-.166 11.8-.234 15.03-.207-.47 4.12-.912 7.024-1.327 8.71a51.457 51.457 0 0 1-2.157 6.802c2.406-.36 4.19-.54 5.35-.54.692 0 2.336.139 4.936.416 1.52.166 2.82.249 3.898.249.747 0 1.618-.042 2.613-.125l.415-2.364c-1.272.249-2.447.374-3.525.374-1.632 0-3.47-.263-5.517-.788M392.618 475.239l-6.585 2.525-2.324 9.084h-6.726l-.747 2.945h6.719l-4.222 16.507c-1.051 4.092-1.576 7.133-1.576 9.125 0 1.686.297 2.903.892 3.649.594.747 1.403 1.12 2.426 1.12 1.245 0 2.889-.512 4.936-1.534 2.046-1.023 6.097-3.817 12.152-8.378l-1.576-1.908a51.458 51.458 0 0 1-6.636 4.603c-1.77 1.024-3.084 1.535-3.94 1.535-.554 0-.99-.166-1.307-.498-.318-.332-.476-.871-.476-1.617 0-1.631.573-4.532 1.72-8.705l3.62-13.899h8.595l.663-2.945h-8.588zM431.159 513.31c-1.825 1.575-3.07 2.363-3.733 2.363-.305 0-.533-.11-.684-.332-.152-.22-.23-.553-.23-.995 0-1.134.16-2.419.48-3.857.318-1.438 1.38-5.116 3.183-11.033 1.33-4.286 2.176-7.244 2.537-8.876.22-.939.334-1.879.334-2.82 0-1.136-.305-2.02-.914-2.656-.61-.635-1.453-.952-2.534-.952-1.383 0-3.21.704-5.48 2.112-3.876 2.374-7.461 5.286-10.756 8.737l4.627-20.47c.858-3.808 1.689-6.225 2.49-7.253.804-1.028 1.842-1.54 3.117-1.54.913 0 2.56.175 4.94.525 1.054.147 1.91.22 2.576.22 1.163 0 2.084-.287 2.762-.862.678-.575 1.017-1.24 1.017-1.998 0-.897-.345-1.64-1.037-2.229-.691-.589-1.632-.884-2.82-.884-2.848 0-5.73.792-8.647 2.374-2.917 1.583-5.282 3.7-7.092 6.352-1.812 2.652-3.271 6.434-4.376 11.348l-6.097 26.6c-.72 3.065-1.742 7.016-3.07 11.85h6.18l3.274-14.487c.72-3.12 1.678-5.473 2.87-7.06 1.887-2.483 4.049-4.524 6.489-6.123 1.748-1.159 3.203-1.738 4.368-1.738.943 0 1.414.443 1.414 1.328 0 .581-.47 2.585-1.41 6.013-2.13 6.97-3.422 11.51-3.878 13.625-.456 2.115-.684 3.727-.684 4.832 0 1.632.297 2.835.89 3.61.596.772 1.377 1.16 2.345 1.16 1.189 0 2.696-.567 4.52-1.7 2.682-1.66 5.296-3.899 7.84-6.719l-1.08-1.535a319.534 319.534 0 0 0-3.731 3.07M458.242 512.687c-1.908 2.876-4.023 4.313-6.346 4.313-1.66 0-2.986-.759-3.981-2.28-1.356-2.075-2.032-4.908-2.032-8.504 0-5.916 1.098-10.554 3.296-13.915 2.199-3.359 4.473-5.039 6.824-5.039 1.685 0 3.09.886 4.209 2.654 1.12 1.771 1.679 4.73 1.679 8.876 0 5.531-1.216 10.163-3.65 13.895m1.287-28.535c-6.222 0-11.421 3.056-15.596 9.166-3.317 4.922-4.976 10.286-4.976 16.093 0 3.345.905 5.986 2.717 7.922 1.81 1.934 4.195 2.903 7.154 2.903 4.81 0 9.373-2.44 13.686-7.32 4.314-4.88 6.47-10.39 6.47-16.529 0-3.843-.897-6.844-2.695-9-1.798-2.157-4.051-3.235-6.76-3.235M496.835 485.583c-1.341-.954-3.242-1.431-5.702-1.431-3.374 0-6.153 1.015-8.337 3.045-2.185 2.03-3.276 4.398-3.276 7.105 0 2.955 1.437 6.034 4.313 9.237 2.073 2.292 3.407 3.936 4.002 4.93.595.994.892 1.988.892 2.982 0 1.022-.317 2.05-.951 3.086a5.847 5.847 0 0 1-2.645 2.32c-1.13.51-2.438.766-3.926.766-1.295 0-2.314-.317-3.058-.954-.772-.636-1.158-1.41-1.158-2.322 0-.25.009-.553.029-.913.036-.442.054-.801.054-1.08 0-.69-.276-1.291-.83-1.802-.553-.512-1.217-.768-1.99-.768-.885 0-1.632.319-2.24.954-.61.636-.912 1.438-.912 2.406 0 1.963.8 3.615 2.406 4.956 1.602 1.34 4.05 2.01 7.34 2.01 3.926 0 7.135-1.095 9.623-3.292 2.488-2.195 3.733-4.756 3.733-7.684 0-2.926-1.535-6.02-4.604-9.28-2.24-2.374-3.636-4.092-4.19-5.156-.552-1.063-.83-2.161-.83-3.294 0-1.297.437-2.381 1.308-3.251.87-.87 1.873-1.304 3.007-1.304 1.327 0 2.668.898 4.023 2.695.719.94 1.272 1.528 1.659 1.763.387.235.843.352 1.368.352.802 0 1.487-.276 2.054-.83.567-.552.85-1.202.85-1.948 0-1.245-.671-2.344-2.012-3.298" />
                            </g>
                        </svg>
                    </div>
            }
        </>
    );
};