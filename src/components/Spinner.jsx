import style from "./Spinner.module.css";
export default function Spinner() {
    return(<div className={`${style.spinner} flex flex-row gap-x-1 w-fit rotate-180 h-12 drop-shadow-md`}>
        <div className="w-4 dark:bg-white bg-purple-700  rounded-b h-2"></div>
        <div className="w-4 dark:bg-white bg-purple-700  rounded-b h-12 "></div>
        <div className="w-4 dark:bg-white bg-purple-700  rounded-b h-8"></div>
        <div className="w-4 dark:bg-white bg-purple-700  rounded-b h-3"></div>
    </div>);
}