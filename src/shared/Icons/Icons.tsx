/* eslint-disable max-len */
import React from 'react';

import { IconHOC, iconsConfig } from './IconHOC';
import type { TColors } from './IconHOC';

export interface IIcons {
    color?: keyof TColors;
}
const Complete = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 25 25" fill="none">
        <path
            d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
            fill="#2FAB73"
            stroke={iconsConfig.colors[color || 'default']}
        />
    </svg>
);

const Reject = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd"
            clipRule="evenodd"
            d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 13.4142L8.70711 16.7071L7.29289 15.2929L10.5858 12L7.29289 8.70711L8.70711 7.29289L12 10.5858L15.2929 7.29289L16.7071 8.70711L13.4142 12L16.7071 15.2929L15.2929 16.7071L12 13.4142Z"
            fill={iconsConfig.colors[color || 'default']}
        />
    </svg>
);

const BagShop = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path d="M4.85795 9.84661C4.92534 8.97057 4.95903 8.53256 5.24658 8.26628C5.53413 8 5.97344 8 6.85206 8H17.1479C18.0266 8 18.4659 8 18.7534 8.26628C19.041 8.53256 19.0747 8.97057 19.142 9.84661L19.3864 13.0236C19.6495 16.4434 19.781 18.1534 18.924 19.3409C18.7336 19.6047 18.5117 19.8443 18.2632 20.0544C17.1449 21 15.43 21 12 21C8.57003 21 6.85505 21 5.73678 20.0544C5.48832 19.8443 5.26641 19.6047 5.07599 19.3409C4.21897 18.1534 4.35051 16.4434 4.61357 13.0236L4.85795 9.84661Z"
            fill="#2A4157"
            fillOpacity="0.24"
        />
        <path d="M8.5 8L8.5 6.5C8.5 4.567 10.067 3 12 3V3C13.933 3 15.5 4.567 15.5 6.5L15.5 8" stroke={iconsConfig.colors[color || 'default']} />
        <path d="M8 11.5C8 11.7761 8.22386 12 8.5 12C8.77614 12 9 11.7761 9 11.5H8ZM9 11.5V10H8V11.5H9Z" fill={iconsConfig.colors[color || 'default']} />
        <path d="M15 11.5C15 11.7761 15.2239 12 15.5 12C15.7761 12 16 11.7761 16 11.5H15ZM16 11.5V10H15V11.5H16Z" fill={iconsConfig.colors[color || 'default']} />
    </svg>
);

const Calendar = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 4.43245C7 4.27684 7 4.19903 6.9491 4.15423C6.89819 4.10944 6.82244 4.11915 6.67094 4.13857C5.54965 4.28229 4.76806 4.57508 4.17157 5.17157C3 6.34315 3 8.22876 3 12C3 15.7712 3 17.6569 4.17157 18.8284C5.34315 20 7.22876 20 11 20H13C16.7712 20 18.6569 20 19.8284 18.8284C21 17.6569 21 15.7712 21 12C21 8.22876 21 6.34315 19.8284 5.17157C19.2319 4.57508 18.4504 4.28229 17.3291 4.13857C17.1776 4.11915 17.1018 4.10944 17.0509 4.15424C17 4.19903 17 4.27684 17 4.43245L17 6.5C17 7.32843 16.3284 8 15.5 8C14.6716 8 14 7.32843 14 6.5L14 4.30005C14 4.15898 14 4.08844 13.9561 4.04451C13.9123 4.00059 13.8418 4.0005 13.7009 4.00031C13.4748 4 13.2412 4 13 4H11C10.7588 4 10.5252 4 10.2991 4.00031C10.1582 4.0005 10.0877 4.00059 10.0439 4.04452C10 4.08844 10 4.15898 10 4.30005L10 6.5C10 7.32843 9.32843 8 8.50001 8C7.67158 8 7 7.32843 7 6.5L7 4.43245Z"
            fill="#2A4157"
            fillOpacity="0.24"
        />
        <path d="M8.5 2.5L8.5 6.5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
        <path d="M15.5 2.5L15.5 6.5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
        <circle cx="7.5" cy="10.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="10.5" cy="10.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="13.5" cy="10.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="16.5" cy="10.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="7.5" cy="13.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="10.5" cy="13.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="13.5" cy="13.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="16.5" cy="13.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="7.5" cy="16.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="10.5" cy="16.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="13.5" cy="16.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
        <circle cx="16.5" cy="16.5" r="0.5" fill={iconsConfig.colors[color || 'default']} />
    </svg>
);

const Card = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V10Z"
            fill="#2A4157"
            fillOpacity="0.24"
        />
        <circle cx="6" cy="15" r="1" fill={iconsConfig.colors[color || 'default']} />
        <rect x="3" y="9" width="18" height="2" fill={iconsConfig.colors[color || 'default']} />
    </svg>
);

const Cash = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <path d="M3 10C3 8.11438 3 7.17157 3.58579 6.58579C4.17157 6 5.11438 6 7 6H17C18.8856 6 19.8284 6 20.4142 6.58579C21 7.17157 21 8.11438 21 10V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V10Z"
            fill="#2A4157"
            fillOpacity="0.24"
        />
        <circle cx="12" cy="12" r="2" fill={iconsConfig.colors[color || 'default']} />
        <rect x="5" y="8" width="3" height="1" rx="0.5" fill={iconsConfig.colors[color || 'default']} />
        <rect x="16" y="15" width="3" height="1" rx="0.5" fill={iconsConfig.colors[color || 'default']} />
    </svg>
);

const Clock = ({ color }: IIcons) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#2A4157" fillOpacity="0.24" />
        <path d="M5 2.80385C4.08789 3.33046 3.33046 4.08788 2.80385 5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
        <path d="M19 2.80385C19.9121 3.33046 20.6695 4.08788 21.1962 5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
        <path d="M12 6.5V11.75C12 11.8881 12.1119 12 12.25 12H16.5" stroke={iconsConfig.colors[color || 'default']} strokeLinecap="round" />
    </svg>
);

const CompleteIcon = () => IconHOC({}, Complete);
const RejectIcon = () => IconHOC({ colors: 'redColor' }, Reject);
const BagShopIcon = () => IconHOC({ colors: 'grayColor', size: 40 }, BagShop);
const CalendarIcon = () => IconHOC({ colors: 'grayColor', size: 40 }, Calendar);
const CardIcon = () => IconHOC({ colors: 'grayColor', size: 40 }, Card);
const CashIcon = () => IconHOC({ colors: 'grayColor', size: 40 }, Cash);
const ClockIcon = () => IconHOC({ colors: 'grayColor', size: 40 }, Clock);

export {
    CompleteIcon,
    RejectIcon,
    BagShopIcon,
    CalendarIcon,
    CardIcon,
    CashIcon,
    ClockIcon
};
