

const Dat = ({publishedDate}:{publishedDate:string}) => {
    const date = new Date(publishedDate)
    const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <span>{Month[date.getMonth()].slice(0, 3) + " " + date.getDate() + " " + date.getFullYear()}</span>
    );
};

export default Dat;