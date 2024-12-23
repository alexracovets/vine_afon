import { Montserrat } from 'next/font/google';

export const montserrat = Montserrat({
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-montserrat',
    style: ['normal'],
    subsets: ['cyrillic'],
    display: 'swap',
})