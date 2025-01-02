"use client";

import { LeafType } from "@/src/types";

export const Leaf = ({ x, y }: LeafType) => {
    
    return (
        <g transform={`translate(${x} ${y})`}>
            <path fill="#9BD069"
                d="M100.074 113.517a3.777 3.777 0 0 1 3.427-4.512c7.816-.572 25.143-.575 37.43 8.759 4.699 3.567 6.857 7.83 7.739 11.715 2.524 11.126-5.354 21.502-16.752 22.055-3.977.194-8.664-.74-13.362-4.31-12.29-9.332-16.936-26.024-18.482-33.707z" />
            <path fill="#7DBE3B"
                d="M148.67 129.478c-.882-3.884-3.04-8.146-7.738-11.715-12.288-9.333-29.615-9.33-37.432-8.758a3.777 3.777 0 0 0-3.426 4.512c.101.504.216 1.047.346 1.624 8.473-.404 24.154.239 35.523 8.873 4.697 3.569 6.856 7.831 7.737 11.716.965 4.252.41 8.395-1.28 11.921 5.192-4.115 7.9-10.987 6.27-18.173z" />
            <path fill="#9BD069"
                d="M199.936 123.079a3.11 3.11 0 0 0-2.805-3.729c-6.436-.5-20.705-.566-30.86 7.074-3.883 2.92-5.676 6.424-6.416 9.62-2.12 9.153 4.329 17.727 13.714 18.226 3.275.174 7.138-.579 11.02-3.5 10.155-7.64 14.045-21.37 15.347-27.691z" />
            <path fill="#7DBE3B"
                d="M197.13 119.35a63.724 63.724 0 0 0-3.088-.163c-1.54 6.748-5.554 19.25-15.068 26.408-3.882 2.921-7.745 3.674-11.02 3.5a15.16 15.16 0 0 1-6.242-1.687c2.453 3.89 6.714 6.588 11.857 6.862 3.275.174 7.138-.579 11.02-3.5 10.155-7.64 14.045-21.37 15.347-27.691a3.11 3.11 0 0 0-2.805-3.73z" />
            <g stroke="#7DBE3B" fill="none">
                <path d="M120.412 121.801s34.636 21.686 31.608 55.852" strokeWidth="2" />
                <path d="M183.46 133.214s-32.874 10.61-31.252 45.591" strokeWidth="2" />
            </g>
            <g>
                <path fill="#C6865C"
                    d="M186.585 195.867a4.182 4.182 0 0 0-.048-.054c-2.69-3.042-6.375-4.275-9.873-3.7a17.033 17.033 0 0 0-2.218-3.187c-2.394-2.706-5.39-4.316-8.5-4.834-3.357-4.447-8.348-7.27-13.926-7.27-5.577 0-10.57 2.823-13.926 7.27-3.11.518-6.106 2.128-8.5 4.834a17.023 17.023 0 0 0-2.219 3.186c-3.497-.574-7.181.66-9.873 3.7l-.047.054a3.819 3.819 0 0 0-.932 2.637h70.994c.023-.923-.26-1.869-.931-2.637z" />
                <path fill="#B16E3D"
                    d="M186.585 195.867a4.239 4.239 0 0 0-.048-.054c-2.691-3.042-6.376-4.275-9.873-3.7a17.019 17.019 0 0 0-2.218-3.187c-2.394-2.705-5.39-4.315-8.5-4.834-3.357-4.447-8.348-7.27-13.926-7.27-1.31 0-2.586.155-3.818.45 3.68.884 6.95 3.019 9.447 5.99a3.274 3.274 0 0 0 1.726 1.051c2.725.68 5.317 2.217 7.437 4.613a16.621 16.621 0 0 1 1.277 1.64 3.209 3.209 0 0 0 2.64 1.409c2.959.008 5.916 1.286 8.174 3.837l.047.054c.673.768.956 1.715.933 2.637h7.634a3.818 3.818 0 0 0-.931-2.637z" />
            </g>
            <g>
                <path fill="#804F2B"
                    d="M194.632 200.007h-87.09a1.503 1.503 0 0 1 0-3.007h87.09a1.504 1.504 0 0 1 1.303 2.256 1.505 1.505 0 0 1-1.303.751z" />
            </g>
        </g>
    );
};