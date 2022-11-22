/// <reference types="react" />
interface Props {
    month?: number;
    year?: number;
    clickHandler?: (events?: string[], date?: string) => void;
    events?: {
        date: Date;
        event: string[];
    }[];
    styles?: {
        calendar?: {
            border?: boolean;
            borderColor?: string;
        };
        header?: {
            background?: string;
            fontColor?: string;
        };
        dates?: {
            background?: string;
            border?: boolean;
            borderColor?: string;
            numberColor?: string;
            todayBadgeColor?: string;
            todayNumberColor?: string;
            outsideMonth?: {
                background?: string;
                fontColor?: string;
            };
        };
        events?: {
            background?: string;
            fontColor?: string;
        };
    };
}
declare const Calendar: ({ month, year, events, styles: propStyles, clickHandler }: Props) => JSX.Element;
export default Calendar;
