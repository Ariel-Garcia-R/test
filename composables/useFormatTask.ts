// import  svgIcon  from '../assets/linkIcon.svg'
export const useFormatTask = (taskBody: string) => {
    var formattedTaskBody = taskBody
    var formattedByHashTag = taskBody
    var formattedByContact = taskBody
    var formattedByLink = taskBody
    var formattedByEmail = taskBody

    if (taskBody.includes("@")) {
        const emailIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.66675 2C1.57008 2 0.666748 2.90333 0.666748 4V12C0.666748 13.0967 1.57008 14 2.66675 14H13.3334C14.4301 14 15.3334 13.0967 15.3334 12V4C15.3334 2.90333 14.4301 2 13.3334 2H2.66675ZM2.66675 3.33333H13.3334C13.5961 3.33333 13.8154 3.48667 13.9247 3.706L8.00008 7.85333L2.07541 3.706C2.18408 3.48733 2.40408 3.33333 2.66675 3.33333ZM2.00008 5.28L7.61741 9.212C7.84741 9.37333 8.15342 9.37333 8.38275 9.212L14.0001 5.28V12C14.0001 12.37 13.7034 12.6667 13.3334 12.6667H2.66675C2.29675 12.6667 2.00008 12.37 2.00008 12V5.28Z" fill="#F58E0A"/>
        </svg>
        `
        formattedByEmail = formattedTaskBody.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, `<span style="display: inline-flex; height: 24px; align-items:center; background-color: #FFE6C7; color: #F58E0A; font-weight: 500; border-radius: 12px; padding: 1px 8px; font-size: 0.875rem">${emailIcon}&nbsp;Email</span>`);
        formattedTaskBody = formattedByEmail
    }

    if (taskBody.includes("#")) {
        formattedByHashTag = taskBody.replace(/(#\w+)/g, '<span style="display: inline-flex; height: 24px; align-items:center; background-color: #DBC7FF; color: #702EE6; font-weight: 500; border-radius: 12px; padding: 1px 8px; font-size: 0.875rem">$1</span>')
        formattedTaskBody = formattedByHashTag
    }
    if (taskBody.includes("@")) {
        formattedByContact = formattedTaskBody.replace(/(@\w+)/g, '<span style="display: inline-flex; height: 24px; align-items:center; background-color: #FFE6C7; color: #F58E0A; font-weight: 500; border-radius: 12px; padding: 1px 8px; font-size: 0.875rem">$1</span>')
        formattedTaskBody = formattedByContact

    }
    if (taskBody.includes("https://")) {
        const svgIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1314 0.658718C10.2368 0.696051 9.30809 1.06872 8.51675 1.83338C8.51542 1.83472 8.51342 1.83738 8.51142 1.84005L8.51075 1.84138L7.36342 2.98072C7.23609 3.10205 7.15742 3.27338 7.15742 3.46272C7.15742 3.83072 7.45609 4.12938 7.82409 4.12938C8.01209 4.12938 8.18209 4.05138 8.30342 3.92605L9.44275 2.79338L9.44675 2.79072C10.1114 2.15005 10.7808 1.95138 11.4248 1.99405C12.0701 2.03605 12.7028 2.34805 13.1814 2.82605C13.6601 3.30405 13.9714 3.93738 14.0134 4.58272C14.0554 5.22672 13.8568 5.89538 13.2168 6.56072C13.2154 6.56205 13.2154 6.56338 13.2141 6.56472L11.2221 8.55538V8.55605V8.55672C10.0654 9.71405 8.18142 9.57805 7.20142 8.26738C7.07875 8.10405 6.88542 8.00005 6.66742 8.00005C6.29942 8.00005 6.00075 8.29872 6.00075 8.66672C6.00075 8.81738 6.05075 8.95672 6.13542 9.06805L6.13409 9.06605C7.58609 11.0074 10.4528 11.2114 12.1668 9.49672L14.1668 7.49805C14.1688 7.49605 14.1714 7.49272 14.1734 7.49005L14.1741 7.48938C15.0481 6.58472 15.4108 5.50205 15.3448 4.49472C15.2788 3.48738 14.8114 2.56938 14.1248 1.88272C13.4381 1.19605 12.5201 0.728718 11.5128 0.662718C11.3868 0.654718 11.2601 0.653384 11.1328 0.658718H11.1314ZM6.53142 5.33872C5.55542 5.36938 4.58475 5.75272 3.83475 6.50272L1.83475 8.50138C1.83275 8.50338 1.83009 8.50672 1.82809 8.50938L1.82742 8.51005C0.953421 9.41472 0.590754 10.4974 0.656754 11.5047C0.722754 12.5121 1.19009 13.4301 1.87675 14.1167C2.56342 14.8034 3.48142 15.2707 4.48875 15.3367C5.49609 15.4027 6.57875 15.0401 7.48342 14.1661C7.48542 14.1641 7.48809 14.1607 7.49009 14.1581L7.49075 14.1574L8.63142 13.0181C8.75809 12.8967 8.83609 12.7261 8.83609 12.5374C8.83609 12.1694 8.53742 11.8707 8.16942 11.8707C7.98075 11.8707 7.81009 11.9494 7.68875 12.0754L6.55342 13.2094C5.88875 13.8501 5.21942 14.0487 4.57542 14.0061C3.93009 13.9641 3.29742 13.6521 2.81875 13.1741C2.34009 12.6961 2.02875 12.0627 1.98675 11.4174C1.94475 10.7734 2.14342 10.1047 2.78342 9.43938C2.78475 9.43805 2.78475 9.43672 2.78609 9.43538L4.77809 7.44472V7.44405V7.44338C5.93475 6.28605 7.81875 6.42205 8.79875 7.73272C8.92142 7.89538 9.11475 8.00005 9.33275 8.00005C9.70075 8.00005 9.99942 7.70138 9.99942 7.33338C9.99942 7.18272 9.94942 7.04338 9.86542 6.93205L9.86675 6.93405C9.14075 5.96338 8.06075 5.42672 6.94875 5.34672C6.80942 5.33672 6.67009 5.33472 6.53075 5.33872H6.53142Z" fill="#007FFF"/>
        </svg>
        `
        formattedByLink = formattedTaskBody.replace(/https:\/\/\S+/g, `<span style="display: inline-flex; height: 24px; align-items:center; background-color: #D6EBFF; color: #007FFF; font-weight: 500; border-radius: 12px; padding: 1px 8px; font-size: 0.875rem;">${svgIcon}&nbsp;Link</span>`);
        formattedTaskBody = formattedByLink
    }


    return formattedTaskBody
}
