function calculateDateDifference(dateString) {
    const date1 = new Date(dateString);

    const date2 = new Date();

    const differenceInMilliseconds = date2 - date1;

    const seconds = Math.floor(differenceInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    return {
        milliseconds: differenceInMilliseconds,
        seconds,
        minutes,
        hours,
        days,
    };
}

// Example usage:
const dateString = "2023-12-23T03:49:23.536Z";

export default calculateDateDifference;
